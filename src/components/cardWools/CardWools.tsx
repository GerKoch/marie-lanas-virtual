import Image from "next/image"

interface CardWoolsProps {
  image: string;
  title: string;
  description: string;
}

const CardWools = ({ image, title, description }: CardWoolsProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
      <div className="relative w-full h-48 mb-4">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default CardWools
