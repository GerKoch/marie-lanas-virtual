import Hero from "@/components/hero/Hero";
import NewProducts from "@/components/newProducts/NewProducts";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <NewProducts />
    </main>
  );
}
