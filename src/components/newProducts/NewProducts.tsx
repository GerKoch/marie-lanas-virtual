import CardProduct from "../CardProduct/CardProduct"

const productsData = [
  {
    img: "/images/works/IMG5.jpg",
    title: "Work1",
    desc: "remera amarilla",
    rating: 1,
    price: "10,00",
  },
  {
    img: "/images/works/IMG21.jpg",
    title: "Work2",
    desc: "remera blanca",
    rating: 2,
    price: "20,00",
  },
  {
    img: "/images/works/IMG31.jpg",
    title: "Work3",
    desc: "chaleco beige",
    rating: 3,
    price: "30,00",
  },
  {
    img: "/images/works/IMG51.jpg",
    title: "Work4",
    desc: "piluzo rosa",
    rating: 5,
    price: "5,00",
  },
]

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">Nuestros trabajos</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <CardProduct
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default NewProducts