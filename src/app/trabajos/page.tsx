import CardAccessories from "@/components/CardProducts/CardProducts"
import CardWorks from "@/components/cards/CardWorks"


const trabajosData = [
  {
    "title": "Chaleco granix",
    "descripcion": "Lana LHO",
    "waist": "1, 2 y 3",
    "price": 145.000,
    "image": "/images/works/work1/chaleco-granix1.jpg"
  },
  {
    "title": "Cardigan pancito",
    "descripcion": "Lana cisne Semi gorda",
    "waist": "2 super ancho",
    "price": 212.000,
    "image": "/images/works/work2/cardigan-pancito1.jpg"
  },
  {
    "title": "Sueter combinado",
    "descripcion": "Lana 2/2",
    "waist": "1, 2, 3",
    "price": 189.000,
    "image": "/images/works/work3/sueter-combinado1.jpg"
  },
  {
    "title": "Chaleco trenza",
    "descripcion": "Lana fidelio LHO",
    "waist": "1, 2, 3",
    "price": 189.000,
    "image": "/images/works/work4/chaleco-trenza1.jpg"
  },
  {
    "title": "Bufanda granix",
    "descripcion": "Lana fidelio LHO",
    "waist": "",
    "price": 106.000,
    "image": "/images/works/work5/bufanda-granix1.jpg"
  },
  {
    "title": "Sueter 3/4",
    "descripcion": "Lana 2/2",
    "waist": "",
    "price": 189.000,
    "image": "/images/works/work6/sueter1.jpg"
  },
  {
    "title": "Gorro capucha",
    "descripcion": "Lana cashmilon",
    "waist": "",
    "price": 78.000,
    "image": "/images/works/work7/gorro-capucha1.jpg"
  }
]

const Trabajos = () => {
  return (
    <div>
      <div>
        <h2 className="flex justify-center bg-stone-50 font-medium text-2xl lg:text-5xl p-4 drop-shadow-md">Nuestros trabajos</h2>
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4
          gap-16 pt-16 pb-16 p-2 lg:p-16 drop-shadow-md">
          {trabajosData.map((accessorie, index) => (
            <CardWorks
              key={index}
              img={accessorie.image}
              title={accessorie.title}
              description={accessorie.descripcion}
              waist={accessorie.waist}
              price={accessorie.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Trabajos
