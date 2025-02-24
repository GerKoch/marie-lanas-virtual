import CardProducts from "@/components/CardProducts/CardProducts"

const hilosData = [
  {
    "title": "LHO Luna",
    "descripcion": "04, 06, 08, 09, 18, 39, 131, 801, 817, 819, 822, 825, 832, 2016, 4032, 4242, 4821, 9075, 9128, 9130",
    "price": "",
    "image": "/images/hilos/Hilados-Luna.jpg",
  },
  {
    "title": "LHO Sole",
    "descripcion": "04, 08, 18, 25, 39, 131, 819, 832, 834, 2016, 4032, 4154, 4242",
    "price": "",
    "image": "/images/hilos/Hilados-Sole.jpg",
  },
  {
    "title": "Mia hilo de algodon en madeja 8/6",
    "descripcion": "01, 02, 51, 67, 105, 203, 302, 310, 401, 454, 501, 551, 554, 555, 601, 606, 651, 703, 704, 709",
    "price": "",
    "image": "/images/hilos/Hilo-madeja-8-6.jpg",
  }
]


const Hilos = () => {
  return (
    <div>
      <h2 className="flex justify-center bg-stone-50 font-medium text-2xl lg:text-5xl p-4 drop-shadow-md">Hilos</h2>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4
          gap-16 p-10 lg:p-16 drop-shadow-md">
        {hilosData.map((accessorie, index) => (
          <CardProducts
            key={index}
            img={accessorie.image}
            title={accessorie.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Hilos
