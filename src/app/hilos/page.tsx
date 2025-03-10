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
    <div className="min-h-screen flex flex-col justify-start items-center">
      <h2 className="w-screen flex justify-center bg-white font-medium text-2xl py-3 drop-shadow-md">
        Hilos
      </h2>
      <div className="w-full max-w-7xl p-6 lg:p-16 flex flex-col lg:flex-row lg:gap-8">
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
