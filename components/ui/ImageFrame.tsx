import Image from "next/image";

interface ImageFrameProps {
  src: string;
  alt: string;
  aspect?: string;
  rounded?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
}

export default function ImageFrame({
  src,
  alt,
  aspect = "aspect-video",
  rounded = "rounded-section",
  priority,
  sizes = "100vw",
  className = "",
  imageClassName = "",
}: ImageFrameProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${aspect} ${rounded} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${imageClassName}`}
      />
    </div>
  );
}
