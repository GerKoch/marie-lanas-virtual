import CardAccessories from "@/components/CardProducts/CardProducts"

const hilosData = [
  {
    "title": "LHO Luna",
    "descripcion": "",
    "price": "",
    "image": "/images/hilos/Hilados-Luna.jpg",
  },
  {
    "title": "LHO Sole",
    "descripcion": "",
    "price": "",
    "image": "/images/hilos/Hilados-Sole.jpg",
  },
  {
    "title": "Mia hilo de algodon en madeja 8/6",
    "descripcion": "",
    "price": "",
    "image": "/images/hilos/Hilo-madeja-8-6.jpg",
  }
]


const Hilos = () => {
  return (
    <div>
      <h2 className="flex justify-center bg-pink-50 font-medium text-2xl lg:text-5xl p-4 drop-shadow-md">Hilos</h2>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4
          gap-16 p-10 lg:p-16 drop-shadow-md">
        {hilosData.map((accessorie, index) => (
          <CardAccessories
            key={index}
            img={accessorie.image}
            title={accessorie.title}
            description={accessorie.descripcion}
            price={accessorie.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Hilos

// <div>
//   <h2 className="flex justify-center bg-pink-50 font-medium text-2xl p-4 drop-shadow-md">Nuestros hilos</h2>
//   <h3>Madejas</h3>
//   <h3>Ovillos</h3>
//   <p>Soft 4/7 (cashmilon semi)</p>
//   <p>MIA 4/7 (semi grueso 5 o 6)</p>
//   <p>MIA 4/7 (fino aguja 3 o 4)</p>
//   <p>MIA 3/16 (super fino aguja 2 o 3)</p>
//   <p>Super Bebe Cisne</p>
// </div>