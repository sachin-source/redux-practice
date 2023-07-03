import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './CarouselNew.css';
import { useEffect } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    // slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    // slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    // slidesToSlide: 1 // optional, default to 1.
  }
};

function CarouselContainer({clips, src, playTimeLine}) {

  return  <Carousel
  swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive}
  ssr={true}
  infinite={false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  { clips.length ? clips.map( (item, i) => <Item key={i} i={i} item={item} src={src} playTimeLine={playTimeLine} /> ) : ( <div className="clip-placeholder" >No clips available</div> ) }
</Carousel>;
}

function Item({ i, item, src, playTimeLine })
{  
  return (
    <div className="video-clip-container" id={`video-${i}`} >
      <video  controls={false} height='100%' width='100%' onClick={() => playTimeLine(item.timestamp)} >
        <source src={src + `#t=${item.timestamp}` } type="video/mp4" />
      </video>
      <div className="video-clip-container-checkbox" > <input type="checkbox" style={{position : 'absolute'}} id="car" name="car" /> </div>
      {/* <p>Lorem {i} </p> */}
    </div>
  )
}

export default CarouselContainer;