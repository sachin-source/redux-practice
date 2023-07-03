import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './CarouselNew.css';
import { useEffect } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function CarouselContainer({clips, setactiveClips, activeClips}) {

  useEffect(() => {
    console.log("clips : ", clips)
  }, [clips])
  useEffect(() => {
    // console.log("activeClips : ", activeClips)
  }, [activeClips])

  const setClipDurations = (clip, e) => {
    // console.log({activeClipDurations})
    const activeClipDurations = [...activeClips];
    console.log(" e : ", e.target.checked, "clip : ", clip, "activeClipDurations : ", activeClipDurations)
    const clipIds = activeClipDurations.map(c => c?.id);
    if (e.target.checked) {
      if (!clipIds.includes(clip.id)) {
        activeClipDurations.push(clip);
        setactiveClips(activeClipDurations)
      }
    } else {
      const index = clipIds.findIndex(c => c == clip.id);
      activeClipDurations.splice(index, 1)
      setactiveClips(activeClipDurations)
     }
  }

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
{ clips.map( (item, i) => <Item setClipDurations={setClipDurations} key={i} item={item} i={i} /> ) }
</Carousel>;
}

function Item({ item : { src, time, duration, id }, i, setClipDurations })
{  
  return (
    <div className="video-clip-container" id={`video-${i}`} >
      <video  controls height='100%' width='100%'>
        <source src={src + `#t=${time},${time+duration}` } type="video/mp4" />
      </video>
      <div className="video-clip-container-checkbox" > <input type="checkbox" onChange={(e) => setClipDurations({src, time, duration, id}, e)} style={{position : 'absolute'}} id="car" name="car" /> </div>
    </div>
  )
}

export default CarouselContainer;