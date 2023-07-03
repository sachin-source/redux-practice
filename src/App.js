import { useEffect, useState } from 'react';
import './App.css';
import CarouselContainer from './CarouselNew';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

function App() {

  const [allClips, setallClips] = useState([]);
  const [allLabels, setallLabels] = useState([]);
  const [clips, setclips] = useState([]);
  const [labels, setlabels] = useState([]);
  const [activeCategory, setactiveCategory] = useState('');
  const [activeLabels, setactiveLabels] = useState([]);
  const [activeClips, setactiveClips] = useState([]);
  const [isVideoPlaying, setisVideoPlaying] = useState(false)

  const [expanded, setExpanded] = useState('');
  const [activeLabelNames, setactiveLabelNames] = useState([])

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
    console.log(activeClips)
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
    getAllLabelsAndClips()
  }, [])

  const getAllLabelsAndClips = () => {
    fetch(`http://localhost:3000/label/`).then(response => response.json()).then(labelsArr => {
      setallLabels(labelsArr)

    });
    fetch(`http://localhost:3000/clip`).then(response => response.json()).then(labelledClips => {
      setallClips(labelledClips)
      setclips(labelledClips)
    });
  }

  const getLabels = (e) => {
    const category = e.target.innerHTML.toLowerCase().trim()
    const categoryIndex = filters.findIndex(c => c.trim().toLowerCase() == category);
    setExpanded('panel' + categoryIndex)

    const activeLabelsArr = allLabels.filter(l => l.category == category);
    setlabels(activeLabelsArr);
    getClips(activeLabelsArr);
    setactiveCategory(category);
    const activeLabelNamesArr = activeLabelsArr.map(l => l.label);
    setactiveClips(allClips.filter(c => activeLabelNamesArr.includes(c.label)).map(c => c.id));
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
      setactiveLabels(activeLabelsList)

      const labelNameIndex = activeLabelNamesList.findIndex(l => l == label)
      activeLabelNamesList.splice(labelNameIndex, 1)
      setactiveLabelNames(activeLabelNamesList)

    } else {
      activeLabelNamesList.push(label)
      activeLabelsList.push(allLabels.filter(l => l.label == label)[0])
      setactiveLabelNames(activeLabelNamesList)
      setactiveLabels(activeLabelsList)
    }
  }

  const filters = ['VPP', 'Object', 'Activity', 'Emotion', 'Celebrity', 'Scenes']

  return (
    <div className='page-container'>
      <div className='video-section-container'>
        <div className='filter-container'>
          <div className='filter'>
            <span >Category</span>
            <select>
              <option>category</option>
              <option>category1</option>
              <option>category2</option>
              <option>category3</option>
            </select>
          </div>
          <div className='filter'>
            <span >Product</span>
            <select>
              <option>product</option>
              <option>product1</option>
              <option>product2</option>
              <option>product3</option>
            </select>
          </div>
          <div className='filter'>
            <span >Episode</span>
            <select>
              <option>episode</option>
              <option>episode1</option>
              <option>episode2</option>
              <option>episode3</option>
            </select>
          </div>
          <div className='filter submit'>
            <span>Submit</span>
          </div>
        </div>
        <div className='video-container'>
          <video id='video' width="100%" >
            <source src="videoplayback.mp4" type="video/mp4" />
          </video>
          <button type="button" id="playVideo" onClick={playPouse}> {isVideoPlaying ? <PauseIcon /> : <PlayArrowIcon />} </button>
        </div>
        <div id='video-timeline-container' className='video-timeline-container'>
          <div className="inner" id='video-timeline' >
            {
              clips.map((c, i) => (
                <span key={i} style={getLineMarkerPoint(c.timestamp)} className={activeClips.includes(c.id) ? (activeLabelNames.includes(c.label) ? 'active' : 'in-active') : ''}></span>
              ))
            }
          </div>
        </div>
        <div className='video-filters-container'>
          {
            filters.map((category, i) => (
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
                labels.map((label, i) => <span key={i} onClick={onLabelChange} className={activeLabelNames.includes(label?.label?.trim().toLowerCase()) ? 'active' : ''} >{label.label}</span>)
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
                  <Accordion expanded={expanded === 'panel' + i} onChange={handleChange('panel' + i)}>
                    <AccordionSummary aria-controls={"panel" + i + "d-content"} id={"panel" + i + "d-header"}>
                      <Typography>{f}</Typography>
                    </AccordionSummary>

                    {
                      (expanded === 'panel' + i) ? (<AccordionDetails>

                        <div className='accordion-body'>
                          {
                            allLabels.filter(l => l.category == f.trim().toLowerCase()).length ? allLabels.filter(l => l.category == f.trim().toLowerCase()).map(l => (
                              <div className='carousel-container' >
                                <span className='carousel-head' >{l.label}</span>
                                <CarouselContainer clips={allClips.filter(c => c.label == l.label)} src={"videoplayback.mp4"} playTimeLine={playTimeLine} />
                              </div>
                            )) : (
                              <div className='clip-placeholder' >No labels and/or clips available</div>
                            )
                          }
                        </div>
                      </AccordionDetails>) : (<></>)
                    }
                    
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
