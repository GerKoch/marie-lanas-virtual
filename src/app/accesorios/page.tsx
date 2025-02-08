import CarAccessories from "@/components/cardAccessories/CardAccessories"


const accessoriesData = [
  {
    "title": "Agujas circular",
    "descripcion": "---",
    "price": 15.99,
    "image": "/images/accessories/agujas-circular.jpg"

  },
  {
    "title": "Agujas crochet silver",
    "descripcion": "Num.: 2, 4, 5, 6, 7, 8, 9",
    "price": 10.00,
    "image": "/images/accessories/agujas-crochet-silver.jpg"
  },
  {
    "title": "Agujas crochet aluminio",
    "descripcion": "---",
    "price": 10.00,
    "image": "/images/accessories/agujas-crochet-aluminio.jpg"

  },
  {
    "title": "Agujas tinecinas",
    "descripcion": "Num.: 3.5, 4.5, 5.5, 6, 8",
    "price": 10.00,
    "image": "/images/accessories/agujas-tinecinas.jpg"
  }
]

const Accesorios = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">Nuestros trabajos</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          gap-10 xl:gap-x-20 xl:gap-y-10">
          {accessoriesData.map((accessorie, index) => (
            <CarAccessories
              key={index}
              img={accessorie.image}
              title={accessorie.title}
              description={accessorie.descripcion}
              price={accessorie.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accesorios

// <div className="bg-white h-screen p-10">
//   <h1 className="text-7xl">Accesorios</h1>
//   <p>Agujas circular</p>
//   <p>Agujas crochet</p>
//   <p>2 Agujas</p>
//   <p>Agujas tunecino</p>
//   <p>Marca puntos</p>
//   <p>Ganchos amigurumis</p>
//   <p>Cascabel sonajero</p>
//   <p>Mate plástico</p>
//   <p>Agujas crochet con luz</p>
//   <p>Bases de fibrofacil</p>
//   <p>Aros de alambre para mandalas</p>
// </div>


