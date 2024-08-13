import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import {img} from '../../assets/img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './carousel.module.css'

function CarouselEffect() {
  return (
    <div>
        <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        >

            {
                img?.map((imageItemLink, emap)=>{
                    return <img src={imageItemLink} key={emap} />
                })
            }

        </Carousel>
        <div className={classes.hero_img}>
        </div>
    </div>
  )
}

export default CarouselEffect