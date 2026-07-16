import Image from "next/image";

interface AwardCardProps {
  imageUrl?: string;
  title: string;
  subtitle: string;
}

export default function AwardCard({
  imageUrl,
  title,
  subtitle,
}: AwardCardProps) {
  return (
    <div className="rounded-card bg-bg-1 px-8 py-10">
      {imageUrl && (
        <div className="mb-6">
          <Image
            src={imageUrl}
            alt={title}
            width={80}
            height={80}
            className="h-20 w-20 object-contain"
          />
        </div>
      )}
      <h3 className="heading-6 mb-2">{title}</h3>
      <p className="text-body-16 text-body-gray">{subtitle}</p>
    </div>
  );
}
