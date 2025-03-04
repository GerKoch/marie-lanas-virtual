import CardProducts from "@/components/CardProducts/CardProducts"


const accessoriesData = [
  {
    "title": "Aguja con luz",
    "descripcion": "Num. 2.5, 4.5, 5, 6",
    "price": "10.00",
    "image": "/images/accessories/agujas-con-luz.jpg"
  },
  {
    "title": "Agujas bordado chino",
    "descripcion": "Num.: ",
    "price": "10.00",
    "image": "/images/accessories/agujas-bordado-chino.jpg"
  },
  {
    "title": "Agujas circulares",
    "descripcion": "Num. 2.3, 3, 3.5, 4, 4.5, 5, 5.5, 6, 7, 8 ",
    "price": "10.00",
    "image": "/images/accessories/agujas-circulares-1.jpg"
  },
  {
    "title": "Agujas crochet aluminio",
    "descripcion": "Num. 2, 2.5, 3, 3.5, 5, 5.5, 6, 7, 8, 9, 10, 12",
    "price": "10.00",
    "image": "/images/accessories/agujas-crochet-aluminio2.jpg"
  },
  {
    "title": "Agujas crochet silver",
    "descripcion": "Num. 2, 4, 5, 6, 7, 8, 9 ",
    "price": "10.00",
    "image": "/images/accessories/agujas-crochet-aluminio1.jpg"
  },
  {
    "title": "Toma puntos",
    "descripcion": "Num.: ",
    "price": "10.00",
    "image": "/images/accessories/toma-puntos1.jpg"
  },
  {
    "title": "Aguja tinecinas",
    "descripcion": "Num. 3.5, 4.5, 5.5, 6, 8",
    "price": "10.00",
    "image": "/images/accessories/agujas-tinecinas1.jpg"
  },
  {
    "title": "Agujas crochet mango silicona",
    "descripcion": "Num. 2, 2.5, 3, 4, 4.5, 5, 5.5, 6, 7 ",
    "price": "10.00",
    "image": "/images/accessories/agujas-crochet-mango-silicona.jpg"
  },
  {
    "title": "Agujas crochet plástico",
    "descripcion": "Num. 14",
    "price": "10.00",
    "image": "/images/accessories/agujas-crochet-plastico.jpg"

  },
  {
    "title": "Agujas tricot (dos agujas)",
    "descripcion": "Num. 2.5, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 8, 9, 10, 12, 14 ",
    "price": "10.00",
    "image": "/images/accessories/agujas-tricot-(dos-agujas)1.jpg"
  },
  {
    "title": "Pasa cinta",
    "descripcion": "---",
    "price": "10.00",
    "image": "/images/accessories/pasa-cinta.jpg"
  },
  {
    "title": "Centímetro",
    "descripcion": "---",
    "price": "10.00",
    "image": "/images/accessories/centimetro-1.jpg"

  },
  {
    "title": "Ganchos amigurumis",
    "descripcion": "Num.: ",
    "price": "10.00",
    "image": "/images/accessories/ganchos-amigurumis1.jpg"
  },
  {
    "title": "Mate plástico con bombilla",
    "descripcion": "---",
    "price": "10.00",
    "image": "/images/accessories/mate-bombilla-plastico.jpg"

  },
  {
    "title": "Para sonajeros",
    "descripcion": "Num.: ",
    "price": "10.00",
    "image": "/images/accessories/para-sonajeros1.jpg"
  },

  {
    "title": "Porta chupete",
    "descripcion": "Num.: ",
    "price": "10.00",
    "image": "/images/accessories/porta-chupete1.jpg"
  },
  {
    "title": "Telar plástico cuadro",
    "descripcion": "---",
    "price": "10.00",
    "image": "/images/accessories/telar-plastico-cuadro.jpg"

  },
  {
    "title": "Agujas bordado ruso",
    "descripcion": "---",
    "price": "10.00",
    "image": "/images/accessories/agujas-bordado-ruso.jpg"

  }
]

const Accesorios = () => {
  return (
    <div>
      <h2 className="flex justify-start bg-white font-medium text-2xl lg:text-2xl px-10 py-3 lg:px-16 drop-shadow-md">Accesorios</h2>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4
          gap-16 p-10 lg:p-16 drop-shadow-md">
        {accessoriesData.map((accessorie, index) => (
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

export default Accesorios




