"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import { getPresignedUploadUrl, type PresignUploadInput } from "@/lib/actions/upload";
import { Button } from "@/components/dashboard/ui/button";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  value?: string;
  onChange: (url: string) => void;
  prefix: PresignUploadInput["prefix"];
  className?: string;
}

function uploadWithProgress(url: string, file: File, onProgress: (pct: number) => void) {
  return new Promise<void>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", url);
    xhr.setRequestHeader("Content-Type", file.type);
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        onProgress(Math.round((event.loaded / event.total) * 100));
      }
    };
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) resolve();
      else reject(new Error(`Upload failed with status ${xhr.status}`));
    };
    xhr.onerror = () => reject(new Error("Upload failed"));
    xhr.send(file);
  });
}

export function ImageUpload({ value, onChange, prefix, className }: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  async function handleFile(file: File) {
    setError(null);
    setProgress(0);
    try {
      const { uploadUrl, publicUrl } = await getPresignedUploadUrl({
        prefix,
        fileName: file.name,
        contentType: file.type,
      });
      await uploadWithProgress(uploadUrl, file, setProgress);
      onChange(publicUrl);
    } catch {
      setError("Upload failed. Please try again.");
    } finally {
      setProgress(null);
    }
  }

  return (
    <div className={cn("space-y-2", className)}>
      {value ? (
        <div className="relative h-40 w-full overflow-hidden rounded-md border border-input">
          <Image src={value} alt="" fill className="object-cover" sizes="320px" />
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute right-2 top-2 rounded-full bg-black/60 p-1 text-white hover:bg-black/80"
            aria-label="Remove image"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragOver(false);
            const file = e.dataTransfer.files?.[0];
            if (file) handleFile(file);
          }}
          onClick={() => inputRef.current?.click()}
          className={cn(
            "flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-input text-sm text-muted-foreground transition-colors",
            isDragOver && "border-dashPrimary bg-muted"
          )}
        >
          {progress !== null ? (
            <span>Uploading… {progress}%</span>
          ) : (
            <span>Drag & drop an image, or click to browse</span>
          )}
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = "";
        }}
      />
      {error && <p className="text-[0.8rem] font-medium text-destructive">{error}</p>}
      {value && (
        <Button type="button" variant="outline" size="sm" onClick={() => inputRef.current?.click()}>
          Replace image
        </Button>
      )}
    </div>
  );
}
