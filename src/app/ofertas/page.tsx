import CardOffers from "@/components/cards/CardOffers"

const ofertasData = [
  {
    "title": "$3500 Hasta agotar stock",
    "descripcion": "",
    "price": 3500,
    "image": "/images/ofertas/oferta3-cisne-onda.jpg",
  },
  {
    "title": "$3500 Hasta agotar stock",
    "descripcion": "",
    "price": 3500,
    "image": "/images/ofertas/oferta2-cisne-onda.jpg",
  },
  {
    "title": "$3500 Hasta agotar stock",
    "descripcion": "",
    "price": 3500,
    "image": "/images/ofertas/oferta1-cisne-misty.jpg",
  },
  {
    "title": "$3500 Hasta agotar stock",
    "descripcion": "",
    "price": 3500,
    "image": "/images/ofertas/oferta4-cisne-misty.jpg",
  },
  {
    "title": "$3500 Hasta agotar stock",
    "descripcion": "",
    "price": 3500,
    "image": "/images/ofertas/oferta5-cisne-flur.jpg",
  },
]

const Ofertas = () => {
  return (
    <>
      <h2 className="flex justify-center bg-white font-medium text-2xl lg:text-2xl px-10 py-3 lg:px-16 drop-shadow-md">
        Nuestras Ofertas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 lg:p-16 lg:py-[69px]">
        {ofertasData.map((accessorie, index) => (
          <CardOffers
            key={index}
            img={accessorie.image}
            title={accessorie.title}
            description={accessorie.descripcion}
            price={accessorie.price}
            waist={""}
            id={0}
          />
        ))}
      </div>
    </>
  )
}

export default Ofertas