import CardAccessories from "@/components/CardProducts/CardProducts"

const ofertasData = [
  {
    "title": "$3500 Hasta agotar stock",
    "descripcion": "",
    "price": "$3500",
    "image": "/images/ofertas/oferta3-cisne-onda.jpg",
  },
  {
    "title": "$3500 Hasta agotar stock",
    "descripcion": "",
    "price": "$3500",
    "image": "/images/ofertas/oferta2-cisne-onda.jpg",
  },
  {
    "title": "$3500 Hasta agotar stock",
    "descripcion": "",
    "price": "$3500",
    "image": "/images/ofertas/oferta1-cisne-misty.jpg",
  },
  {
    "title": "$3500 Hasta agotar stock",
    "descripcion": "",
    "price": "$3500",
    "image": "/images/ofertas/oferta4-cisne-misty.jpg",
  },
  {
    "title": "$3500 Hasta agotar stock",
    "descripcion": "",
    "price": "$3500",
    "image": "/images/ofertas/oferta5-cisne-flur.jpg",
  },
]


const Ofertas = () => {
  return (
    <div>
      <h2 className="flex justify-center bg-pink-50 font-medium text-2xl lg:text-5xl p-4 drop-shadow-md">Nuestras Ofertas</h2>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4
          gap-16 p-10 lg:p-16 drop-shadow-md">
        {ofertasData.map((accessorie, index) => (
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

export default Ofertas