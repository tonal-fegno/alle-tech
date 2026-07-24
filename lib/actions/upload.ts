"use server";

import { randomUUID } from "crypto";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { z } from "zod";
import { publicUrlForKey, s3 } from "@/lib/s3";

const UPLOAD_PREFIXES = [
  "logos",
  "about-stats",
  "solutions",
  "products",
  "industries",
  "testimonials",
  "team",
  "blogs",
  "case-studies",
] as const;

const presignInputSchema = z.object({
  prefix: z.enum(UPLOAD_PREFIXES),
  fileName: z.string().min(1),
  contentType: z.string().min(1),
});

export type PresignUploadInput = z.infer<typeof presignInputSchema>;

function sanitizeFileName(fileName: string) {
  return fileName.replace(/[^a-zA-Z0-9.\-_]/g, "-");
}

export async function getPresignedUploadUrl(input: PresignUploadInput) {
  const { prefix, fileName, contentType } = presignInputSchema.parse(input);

  const key = `content/${prefix}/${randomUUID()}-${sanitizeFileName(fileName)}`;

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET!,
    Key: key,
    ContentType: contentType,
  });

  const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 300 });

  return {
    uploadUrl,
    publicUrl: publicUrlForKey(key),
    key,
  };
}
