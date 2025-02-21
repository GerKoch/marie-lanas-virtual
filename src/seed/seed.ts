
interface SeedProduct {
  title: string;
  description: string;
  image: string;
}


interface SeedData {
  products: SeedProduct[],
}


export const initialData: SeedData = {
  products: [
    {
      title: "Nube",
      description: "Soft 2/7",
      image: "/images/lanas/nube/IMG-20250219-WA0069.jpg",
    },
  ]
}