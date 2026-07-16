import Image from "next/image";

interface TeamCardProps {
  imageUrl: string;
  name: string;
  role: string;
}

export default function TeamCard({ imageUrl, name, role }: TeamCardProps) {
  return (
    <div className="overflow-hidden rounded-card bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-square bg-bg-1">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="bg-white p-6">
        <h3 className="heading-6 mb-1">{name}</h3>
        <p className="text-body-16 text-body-gray">{role}</p>
      </div>
    </div>
  );
}
