import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './CarouselNew.css';
import { useDispatch, useSelector } from "react-redux";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { actions } from "../../store";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide, totalItems } } = rest;
  const isLeftDisabled = currentSlide === 0
  const isRightDisabled = currentSlide+2 >= totalItems;
  return (
    <div className="carousel-button-group"  style={{display : 'flex', width : '100%', height : '100%', alignItems : 'center', justifyContent : !(isLeftDisabled || isRightDisabled) ? 'space-between' : ( isLeftDisabled ? 'right' : 'left' ) }} >
      { !isLeftDisabled ? <KeyboardArrowLeftIcon className="nav-buttons left-button" onClick={() => previous()} /> : <></> }
      {/* <button className={ 'left-button ' + (isLeftDisabled ? 'button-disabled' : '')} onClick={() => previous()}>&lt;</button> */}
      { !isRightDisabled ? <KeyboardArrowRightIcon className='nav-buttons right-button' onClick={() => next()} /> : <></>}
      {/* <button className={ 'right-button ' + (isRightDisabled ? 'button-disabled' : '')} onClick={() => next()} >&gt;</button> */}
      {/* <button onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </button> */}
    </div>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
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

function CarouselContainer({ labelId, src, playTimeLine, index}) {
  const clips = useSelector((state) => state.clips);
  const currentLabelledClips = clips.filter(c => c.labelId == labelId);
  
  const dispatch = useDispatch()
  
  const setActiveVideos = (i) => {
    // alert(src)
    playTimeLine(currentLabelledClips[i].timestamp);
    dispatch(actions.setActiveLabelVideos(currentLabelledClips));
    dispatch(actions.setNextVideo(currentLabelledClips[i+1] || null));
    dispatch(actions.setPrevVideo(currentLabelledClips[i-1] || null));
    dispatch(actions.setCurrentVideo(currentLabelledClips[i] || null));
  }

  return <div data-testid={"carousel-" + index} className="carousel-container" >
        <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true}
      infinite={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .1"
      transitionDuration={500}
      containerClass="carousel-body"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      // customRightArrow={<CustomRightArrow/>}
      customButtonGroup={<ButtonGroup />}
      // renderButtonGroupOutside={true}
      // partialVisible={true}
    >
      { currentLabelledClips?.length ? currentLabelledClips.map((item, i) => <Item key={i} i={i} setActiveVideos={setActiveVideos} item={item} src={src} /> ) : ( <div className="clip-placeholder" >No clips available</div> ) }
    </Carousel>
  </div>
}

function Item({ i, item, src, setActiveVideos })
{  
  
  const currentVideo = useSelector((state) => state.currentVideo);
  return (
    <div className="video-clip-container" id={`video-${i}`} >
      <video style={{ border : currentVideo?._id == item?._id ? '1px solid black' : 'none' }} controls={false} height='100%' width='100%' onClick={() => setActiveVideos(i)} >
        <source src={src + `#t=${item.timestamp}` } type="video/mp4" />
      </video>
      <div className="video-clip-container-checkbox" > <input type="checkbox" style={{position : 'absolute'}} id="car" name="car" /> </div>
    </div>
  )
}
// function CarouselContainer({clips, src, playTimeLine}) {

//   return  <Carousel
//   swipeable={true}
//   draggable={true}
//   showDots={false}
//   responsive={responsive}
//   ssr={true}
//   infinite={false}
//   autoPlaySpeed={1000}
//   keyBoardControl={true}
//   customTransition="all .5"
//   transitionDuration={500}
//   containerClass="carousel-container"
//   removeArrowOnDeviceType={["tablet", "mobile"]}
//   dotListClass="custom-dot-list-style"
//   itemClass="carousel-item-padding-40-px"
// >
//   { clips.length ? clips.map( (item, i) => <Item key={i} i={i} item={item} src={src} playTimeLine={playTimeLine} /> ) : ( <div className="clip-placeholder" >No clips available</div> ) }
// </Carousel>;
// }

// function Item({ i, item, src, playTimeLine })
// {  
//   return (
//     <div className="video-clip-container" id={`video-${i}`} >
//       <video  controls={false} height='100%' width='100%' onClick={() => playTimeLine(item.timestamp)} >
//         <source src={src + `#t=${item.timestamp}` } type="video/mp4" />
//       </video>
//       <div className="video-clip-container-checkbox" > <input type="checkbox" style={{position : 'absolute'}} id="car" name="car" /> </div>
//       {/* <p>Lorem {i} </p> */}
//     </div>
//   )
// }

export default CarouselContainer;