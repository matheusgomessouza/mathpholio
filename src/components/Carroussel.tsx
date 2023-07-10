import Image from "next/image";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();


export interface CarrousselProps {
  image: string
  name: string
  description: string
}

export async function Carroussel({image, name, description}: CarrousselProps) {

  return (
    <swiper-container slides-per-view="3" >
      <swiper-slide>
        <article>
          <picture>
            <Image src={``} alt={name} />
          </picture>
          <p>{description}</p>
        </article>
      </swiper-slide>
    </swiper-container>
  );
}
