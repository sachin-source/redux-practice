import { useEffect, useState } from 'react';
import './App.css';
import CarouselContainer from './components/CarouselNew';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store';



function App() {

  // const [allClips, setallClips] = useState([]);
  // const [allLabels, setallLabels] = useState([]);
  // const [clips, setclips] = useState([]);
  // const [labels, setlabels] = useState([]);
  const [activeCategory, setactiveCategory] = useState('');
  // const [activeLabels, setactiveLabels] = useState([]);
  // const [activeClips, setactiveClips] = useState([]);
  const [isVideoPlaying, setisVideoPlaying] = useState(false)

  const [expanded, setExpanded] = useState('');
  // const [activeLabelNames, setactiveLabelNames] = useState([])
  const [activeCategoryFilter, setactiveCategoryFilter] = useState('');
  const [activeProductFilter, setactiveProductFilter] = useState('');
  const [activeEpisodeFilter, setactiveEpisodeFilter] = useState('');
  const [activeVideoFilter, setactiveVideoFilter] = useState({});

  const allLabels = useSelector((state) => state.allLabels);
  const allClips = useSelector((state) => state.allClips);
  const clips = useSelector((state) => state.clips);
  const labels = useSelector((state) => state.labels);
  const activeClips = useSelector((state) => state.activeClips);
  const activeLabels = useSelector((state) => state.activeLabels);
  const activeLabelNames = useSelector((state) => state.activeLabelNames);
  const activeLabelIds = useSelector((state) => state.activeLabelIds);
  const filter_categories = useSelector((state) => state.categories);
  const filter_products = useSelector((state) => state.products);
  const filter_episodes = useSelector((state) => state.episodes);
  const filter_videos = useSelector((state) => state.videos);
  const dispatch = useDispatch()

  useEffect(() => {
  }, [activeEpisodeFilter])
  
  const onFiltersSubmit = () => {
    
    const activeVideo = activeEpisodeFilter ? filter_videos.find(v => v.episodeId == activeEpisodeFilter) : {};
    setactiveVideoFilter(activeVideo)
    document.getElementById('video-source').setAttribute("src", "./" + activeVideo.src )
    // document.getElementById('video').setAttribute("key", "./" + activeVideo.src)
  
    activeVideo?._id && fetch(`http://localhost:3006/label/?videoId=${activeVideo?._id}`).then(response => response.json()).then(({ err, labels}) => {
      // setallLabels(labelsArr)
      dispatch(actions.addAllLabels(labels))
    });
    activeVideo?._id && fetch(`http://localhost:3006/clip/?videoId=${activeVideo?._id}`).then(response => response.json()).then(({err, clips}) => {
      // setallClips(clips)
      // setclips(clips)
      dispatch(actions.addAllClips(clips))
      dispatch(actions.addClips(clips))
    });
  }

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

  const handleChange = (panel) => (newExpanded) => {
    setExpanded(newExpanded ? (expanded == panel ? '' : panel) : false);
  };

  const playTimeLine = (timestamp) => {
    const video = document.getElementById('video');
    const [start, end] = timestamp.split(',');
    video.currentTime = start;
    video.play();
    setisVideoPlaying(true);
    const stopVideoAfter = (end - start) * 1000;
    setTimeout(() => {
      video.pause()
      setisVideoPlaying(false);
    }, stopVideoAfter)
  }

  useEffect(() => {
    // console.log(activeClips)
  }, [activeClips]);

  const playPouse = () => {
    const video = document.getElementById('video');
    video.paused ? video.play() : video.pause();
    setisVideoPlaying(!video.paused);
  }

  const getLineMarkerPoint = (timestamp) => {
    const time = timestamp.trim().split(',')[0];
    const videoDuration = document.getElementById('video').duration;
    const markerpoint = (Number.isInteger(time / videoDuration) ? (time / videoDuration) : (time / videoDuration).toFixed(2)) * 100;
    return { left: `${markerpoint}%`, width: `${3}px` }
  }

  useEffect(() => {
    const video = document.getElementById('video');
    // getAllLabels()
    video.addEventListener("timeupdate", (ee) => {
      let currentPercent = (video.currentTime / video.duration) * 100;
      const backgroundCSS = `linear-gradient(to right, #000 ${currentPercent}%, #ccc ${currentPercent}%)`
      document.querySelector('.inner').style.background = backgroundCSS;
    })
    const totalTimelineWidth = document.getElementById('video-timeline').getBoundingClientRect();
    document.getElementById('video-timeline-container').addEventListener('mousedown', (e) => {
      const percent = Math.min(Math.max(0, e.x - totalTimelineWidth.x), totalTimelineWidth.width) / totalTimelineWidth.width;
      video.currentTime = (video.duration * percent);
    })
    getInitialSelectionValues()
  }, [])

  const getInitialSelectionValues = () => {

    fetch(`http://localhost:3006/category`).then(response => response.json()).then(({err, categories}) => {
      dispatch(actions.addCategories(categories))
      fetch(`http://localhost:3006/product`).then(response => response.json()).then(({err, products}) => {
        dispatch(actions.addProducts(products))
        fetch(`http://localhost:3006/episode`).then(response => response.json()).then(({err, episodes}) => {
          dispatch(actions.addEpisodes(episodes))
          fetch(`http://localhost:3006/video`).then(response => response.json()).then(({err, videos}) => {
            dispatch(actions.addVideos(videos))
          });
        });
      });
    });
  }

  const onVideoSelect = () => {
    fetch(`http://localhost:3006/label/`).then(response => response.json()).then(labelsArr => {
      // setallLabels(labelsArr)
      dispatch(actions.addAllLabels(labelsArr))
      
    });
    fetch(`http://localhost:3006/clip`).then(response => response.json()).then(labelledClips => {
      // setallClips(labelledClips)
      // setclips(labelledClips)
      dispatch(actions.addAllClips(labelledClips))
      dispatch(actions.addClips(labelledClips))
    });
  }
  
  const getLabels = (e) => {
    const category = e.target.innerHTML.toLowerCase().trim()
    const categoryIndex = filters.findIndex(c => c.trim().toLowerCase() == category);
    expanded != ('panel' + categoryIndex) && setExpanded('panel' + categoryIndex)
    
    const activeLabelsArr = allLabels.filter(l => l.category == category);
    // setlabels(activeLabelsArr);
    // getClips(activeLabelsArr);
    dispatch(actions.addLabels(activeLabelsArr))
    // dispatch(actions.addLa(activeLabelsArr))
    setactiveCategory(category);
    const activeLabelIdArr = activeLabelsArr.map(l => l._id.toString())
    const activeClipsArr = allClips.filter(c => activeLabelIdArr.includes(c.labelId)).map(c => c._id.toString());
    // setactiveClips(activeClipsArr);
    dispatch(actions.addActiveClips(activeClipsArr))
  }

  const getClips = (activeLabelsArr) => {
    const currentActiveLabels = activeLabelsArr.map(l => l.label);
    // activeLabelsArr.length ? setclips(allClips.filter(c => currentActiveLabels.includes(c.label))) : setclips([]);
  }

  const onLabelChange = (e) => {
    const label = e.target.innerHTML.trim().toLowerCase();
    const activeLabelNamesList = activeLabels.length ? [...new Set(activeLabels.map(l => l.label))] : [];
    const activeLabelsList = [...activeLabels];

    if (activeLabelNamesList.includes(label)) {
      const labelIndex = activeLabelsList.findIndex(l => l.label == label)
      activeLabelsList.splice(labelIndex, 1)
      // setactiveLabels(activeLabelsList)
      dispatch(actions.addActiveLabels(activeLabelsList))

      const labelNameIndex = activeLabelNamesList.findIndex(l => l == label)
      activeLabelNamesList.splice(labelNameIndex, 1)
      // setactiveLabelNames(activeLabelNamesList)
      dispatch(actions.addActiveLabelNames(activeLabelNamesList))

    } else {
      activeLabelNamesList.push(label)
      activeLabelsList.push(allLabels.filter(l => l.label == label)[0])
      // setactiveLabelNames(activeLabelNamesList)
      
      dispatch(actions.addActiveLabelNames(activeLabelNamesList))
      // setactiveLabels(activeLabelsList)
      dispatch(actions.addActiveLabels(activeLabelsList))
    }
  }

  const filters = ['VPP', 'Object', 'Activity', 'Emotion', 'Celebrity', 'Scenes']

  return (
    <div className='page-container'>
      <div className='video-section-container'>
        <div className='filter-container'>
          <div className='filter'>
            <span >Category</span>
            <select value={'Select'} onChange={(e) => setactiveCategoryFilter(e.target.value)} >
              {/* <option value={'category'} >category</option>
              <option>category1</option>
              <option>category2</option>
              <option>category3</option> */}
                <option selected disabled>Select</option>
              {
                filter_categories.map((c) => (
                  <option value={c?._id} > {c.name} </option>
                ))
              }
            </select>
          </div>
          <div className='filter'>
            <span >Product</span>
            <select value={'Select'} onChange={(e) => setactiveProductFilter(e.target.value)} >
              {/* <option>product</option>
              <option>product1</option>
              <option>product2</option>
              <option>product3</option> */}
              <option selected disabled>Select</option>
              {
                filter_products?.filter(p => p.categoryId == activeCategoryFilter).map(p => (
                  <option value={p?._id} >{p.name}</option>
                ))
              }
            </select>
          </div>
          <div className='filter'>
            <span >Episode</span>
            <select value={'Select'} onChange={(e) => setactiveEpisodeFilter(e.target.value)} >
              {/* <option>episode</option>
              <option>episode1</option>
              <option>episode2</option>
              <option>episode3</option> */}
              <option selected disabled>Select</option>
              {
                filter_episodes?.filter(e => e.productId == activeProductFilter).map(e => (
                  <option value={e?._id} >{e.name}</option>
                ))
              }
            </select>
          </div>
          <div className='filter'>
            <span className='submit' onClick={onFiltersSubmit} >Submit</span>
          </div>
        </div>
        <div className='video-container'>
          <video id='video' key={activeVideoFilter?.src} width="100%" >
            <source id='video-source' src={activeVideoFilter?.src} type="video/mp4" />
          </video>
          {/* <video id='video' key={ './' + activeVideoFilter?.src } width="100%" >
            <source id='video-source' src={ './' + activeVideoFilter?.src } type="video/mp4" />
          </video> */}
          <button type="button" id="playVideo" onClick={playPouse}> {isVideoPlaying ? <PauseIcon /> : <PlayArrowIcon />} </button>
        </div>
        <div id='video-timeline-container' className='video-timeline-container'>
          <div className="inner" id='video-timeline' >
            {
              clips?.map((c, i) => (
                <span key={i} style={getLineMarkerPoint(c.timestamp)} className={activeClips.includes(c._id) ? (activeLabelNames.includes(labels.find(l => l._id.toString() == c.labelId)?.label) ? 'active' : 'in-active') : ''}></span>
              ))
            }
          </div>
        </div>
        <div className='video-filters-container'>
          {
            filters?.map((category, i) => (
              <span key={i} onClick={getLabels} className={activeCategory == category.trim().toLowerCase() ? 'active' : ''} > {category} </span>
            ))
          }
        </div>
        {
          labels.length ? (<div className='label-container'>
            <div className='label-heading'>
              <h3> {labels.length} Labels </h3>
            </div>
            <div className='labels-container' >
              {
                labels?.map((label, i) => <span key={i} onClick={onLabelChange} className={activeLabelNames.includes(label?.label?.trim().toLowerCase()) ? 'active' : ''} >{label.label}</span>)
              }
            </div>
          </div>) : (<></>)
        }
      </div>
      <div className='clip-section-container'>
        <div className='clip-section-headings'>
          <span className='active'>Insights Category</span>
          <span>+ To Ad Inventory</span>
        </div>
        <div className='filter-wise-section-container'>
          <div className='filter-wise-section' >
            <div>

              {
                filters.map((f, i) => (
                  <Accordion key={i} expanded={expanded === 'panel' + i} onChange={handleChange('panel' + i)}>
                    <AccordionSummary aria-controls={"panel" + i + "d-content"} id={"panel" + i + "d-header"}>
                      <Typography>{f}</Typography>
                    </AccordionSummary>
                    
                    <AccordionDetails>
                        <div className='accordion-body'>
                          {
                            allLabels?.filter(l => l.category == f.trim().toLowerCase()).length ? allLabels.filter(l => l.category == f.trim().toLowerCase()).map(l => (
                              <div className='carousel-container' >
                                <span className='carousel-head' >{l.label}</span>
                                <CarouselContainer clips={allClips.filter(c => c.labelId == l._id.toString())} label={l.label} labelId={l._id.toString()} src={"videoplayback.mp4"} playTimeLine={playTimeLine} />
                              </div>
                            )) : (
                              <div className='clip-placeholder' >No labels and/or clips available</div>
                            )
                            // allLabels.filter(l => l.category == f.trim().toLowerCase()).length ? allLabels.filter(l => l.category == f.trim().toLowerCase()).map(l => (
                            //   <div className='carousel-container' >
                            //     <span className='carousel-head' >{l.label}</span>
                            //     <CarouselContainer clips={allClips.filter(c => c.label == l.label)} src={"videoplayback.mp4"} playTimeLine={playTimeLine} />
                            //   </div>
                            // )) : (
                            //   <div className='clip-placeholder' >No labels and/or clips available</div>
                            // )
                          }
                        </div>
                      </AccordionDetails>
                    
                  </Accordion>
                ))
              }
            </div>

            {/* } */}
          </div>
          {/* <div className='filter-wise-section' >
            <span className='heading'>Emotion</span>
            <div className='filter-section-container'>
              <div className='filter-section'>
                <span className='filter-section-title'>asdfasdf</span>
                <div className='filter-section-list'>
                  <span className='filter-clip-placeholder'></span>
                </div>
              </div>
              <div className='filter-section'>
                <span className='filter-section-title'>solution</span>
                <div className='filter-section-list'>
                  <span className='filter-clip-placeholder'></span>
                </div>
              </div>
              <div className='filter-section'>
                <span className='filter-section-title'>mustache</span>
                <div className='filter-section-list'>
                  <span className='filter-clip-placeholder'></span>
                </div>
              </div>
            </div>
          </div>
          <div className='filter-wise-section' >
            <span className='heading'>Emotion</span>
            <div className='filter-section-container'>
              <div className='filter-section'>
                <span className='filter-section-title'>mustache</span>
                <div className='filter-section-list'>
                  <span className='filter-clip-placeholder'></span>
                </div>
              </div>
              <div className='filter-section'>
                <span className='filter-section-title'>mustache</span>
                <div className='filter-section-list'>
                  <span className='filter-clip-placeholder'></span>
                </div>
              </div>
              <div className='filter-section'>
                <span className='filter-section-title'>mustache</span>
                <div className='filter-section-list'>
                  <span className='filter-clip-placeholder'></span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
