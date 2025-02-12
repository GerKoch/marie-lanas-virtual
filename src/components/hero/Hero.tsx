"use client"

import Slider from "react-slick"
import Slide from "../slides/Slide"

export default function () {

  let settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // pauseOnHover: false,
    // arrows: true,
  }

  const slideData = [
    {
      img: "/images/slide1.jpg",
      title: "Trending Item One",
      mainTitle: "Picture one",
      price: "$2000"
    },
    {
      img: "/images/slide2.jpg",
      title: "Trending Item Two",
      mainTitle: "Picture one",
      price: "$1500"
    },
    {
      img: "/images/slide3.jpg",
      title: "Trending Item Tree",
      mainTitle: "Picture one",
      price: "$3000"
    },
    {
      img: "/images/slide4.jpg",
      title: "Trending Item Four",
      mainTitle: "Picture one",
      price: "$2000"
    },
  ]

  return (
    <div>
      <div className="bg-pink-50 pt-0 lg:pt-0 m-0 ">
        <Slider {...settings}>
          {slideData.map((item, index) => (
            <Slide
              key={index}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

