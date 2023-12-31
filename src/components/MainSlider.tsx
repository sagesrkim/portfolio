"use client";

import Image from "next/image";
import { Key, useEffect, useRef, useState } from "react";
import SwiperCore, { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css"; // Swiper v6 이상의 경우

interface ImageType {
  id: number;
  title: string;
  imgUrl: string;
}

export default function MainSlider() {
  SwiperCore.use([Navigation, Scrollbar]);
  const swiperRef = useRef<SwiperCore>();
  // const [images, setImages] = useState<ImageType[]>([]);
  const breakpoints = {
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    1200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  };

  const images = require("../../public/data/image.json");

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch("/api/image.ts");
  //     console.log(res);
  //     const data = await res.json();
  //     setImages(data);
  //   }
  //   fetchData();
  //   console.log(images);
  // }, [images]);

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      pagination={{ clickable: true }}
      navigation
      breakpoints={breakpoints}
      className="w-80 h-64"
    >
      {images?.map((image: ImageType) => (
        <SwiperSlide key={image.id}>
          <Image
            src={image.imgUrl}
            alt={image.title}
            width={500}
            height={400}
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
