import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './CarouselNew.css';
import { useSelector } from "react-redux";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide, totalItems } } = rest;
  const isLeftDisabled = currentSlide === 0
  const isRightDisabled = currentSlide+2 >= totalItems;
  console.log({ rest, isLeftDisabled, isRightDisabled })
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

function CustomRightArrow({ onClick }) {
  function handleClick() {
    // do whatever you want on the right button click
    console.log('Right button clicked, go to next slide');
    // ... and don't forget to call onClick to slide
    onClick();
  }

  return (
    <>
    {/* <KeyboardArrowRightIcon />
    <button
      onClick={handleClick}
      aria-label="Go to next slide"
      className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
    />
    <NavigateNextIcon  onClick={handleClick} /> */}
    <button onClick={handleClick}>sdf</button>
    </>
  );
}

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

function CarouselContainer({label, labelId, src, playTimeLine, index}) {
  const clips = useSelector((state) => state.clips);

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
      { clips.length ? clips.filter(c => c.labelId == labelId).map((item, i) => <Item key={i} i={i} item={item} src={src} playTimeLine={playTimeLine} /> ) : ( <div className="clip-placeholder" >No clips available</div> ) }
    </Carousel>
  </div>
}

function Item({ i, item, src, playTimeLine })
{  
  return (
    <div className="video-clip-container" id={`video-${i}`} >
      <video  controls={false} height='100%' width='100%' onClick={() => playTimeLine(item.timestamp)} >
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