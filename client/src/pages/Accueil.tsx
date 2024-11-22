import Carousel from "../components/Carousel/Carousel";
import "../components/Carousel/Carousel.css";
import "./Accueil.css";

import { useEffect, useState } from "react";

import type { CarouselDataI, MusicData } from "../types/musicSection";

function Accueil() {
  const [dataMusic, setDataMusic] = useState<MusicData[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/music-data")
      .then((res) => res.json())
      .then((data) => setDataMusic(data));
  }, []);

  const artistsCarouselData: Partial<CarouselDataI>[] = [];

  for (const genre of dataMusic) {
    for (const artist of genre.artistes) {
      const carouselData: Partial<CarouselDataI> = {};

      carouselData.image = artist.imgSrc;
      carouselData.description = artist.description;
      carouselData.name = artist.name;
      carouselData.id = artist.id;

      artistsCarouselData.push(carouselData);
    }
  }

  const albumsCarouselData: Partial<CarouselDataI>[] = [];

  for (const data of dataMusic) {
    for (const art of data.artistes) {
      for (const alb of art.albums) {
        const carouselData: Partial<CarouselDataI> = {};

        carouselData.image = alb.albumImg;
        carouselData.description = alb.description;
        carouselData.name = alb.albumName;
        carouselData.id = alb.id;

        albumsCarouselData.push(carouselData);
      }
    }
  }

  for (let n = 0; n < dataMusic.length; n++) {
    console.table(dataMusic[0].artistes[3].albums);
  }

  return (
    <>
      <Carousel artists={artistsCarouselData} />
      <Carousel artists={albumsCarouselData} />
    </>
  );
}

export default Accueil;
