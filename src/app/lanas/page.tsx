import CardProducts from "@/components/CardProducts/CardProducts"
import { initialData } from "@/seed/seed"

const hilosData = initialData.products;




const Lanas = () => {
  return (
    <div>
      <h2 className="flex justify-center bg-stone-50 font-medium text-2xl lg:text-5xl p-4 drop-shadow-md">Lanas</h2>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4
        gap-16 p-10 lg:p-16 drop-shadow-md">
        {hilosData.map((accessorie, index) => (
          <CardProducts
            key={index}
            img={accessorie.image}
            title={accessorie.title}
            description={accessorie.description}
            waist={""}
          />
        ))}
      </div>
    </div>
  )
}

export default Lanas

{/* <div>
<h2 className="flex justify-center bg-pink-50 font-medium text-2xl p-4 drop-shadow-md">Nuestros hilos</h2>
<p>Nachito</p>
<p>Nube</p>
<p>Super Bebe Cisne</p>
<p>LHO ovillos</p>
<p>Fino</p>
<p>Semi grueso</p>
<p>Algodón 8/6 (Mia 6 hebras semi)</p>
</div> */}