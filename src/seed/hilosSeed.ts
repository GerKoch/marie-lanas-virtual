export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const hilosData: Product[] = [
  {
    id: 1,
    title: "LHO Luna",
    description: "04, 06, 08, 09, 18, 39, 131, 801, 817, 819, 822, 825, 832, 2016, 4032, 4242, 4821, 9075, 9128, 9130",
    price: 0,
    image: "/images/hilos/Hilados-Luna.jpg",
  },
  {
    id: 2,
    title: "LHO Sole",
    description: "04, 08, 18, 25, 39, 131, 819, 832, 834, 2016, 4032, 4154, 4242",
    price: 0,
    image: "/images/hilos/Hilados-Sole.jpg",
  },
  {
    id: 3,
    title: "Mia algodon 8/6",
    description: "01, 02, 51, 67, 105, 203, 302, 310, 401, 454, 501, 551, 554, 555, 601, 606, 651, 703, 704, 709",
    price: 0,
    image: "/images/hilos/Hilo-madeja-8-6.jpg",
  }
]