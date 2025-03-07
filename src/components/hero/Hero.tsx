"use client"

import Slider from "react-slick"
import Slide from "../slides/Slide"

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  }

  const slideData = [
    {
      img: "/images/works/work1/chaleco-granix1.jpg",
      title: "Trending Item One",
      mainTitle: "Picture one",
      price: "$2000"
    },
    {
      img: "/images/works/work6/sueter3.jpg",
      title: "Trending Item Two",
      mainTitle: "Picture one",
      price: "$1500"
    },
    {
      img: "/images/works/work5/bufanda-granix3.jpg",
      title: "Trending Item Tree",
      mainTitle: "Picture one",
      price: "$3000"
    },
    {
      img: "/images/works/work3/sueter-combinado2.jpg",
      title: "Trending Item Four",
      mainTitle: "Picture one",
      price: "$2000"
    },
  ]

  return (
    <div>
      <div className="overflow-hidden m-0 p-0">
        <Slider {...settings}>
          {slideData.map((item, index) => (
            <div key={index} className="overflow-hidden m-0 p-0">
              <Slide
                key={index}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

