import { useEffect, useState } from 'react';
// import './App.css';
import CarouselContainer from './CarouselNew';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import PauseIcon from '@mui/icons-material/Pause';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../store';
// import VideoPlayer from './components/VideoPlayer';

const SERVER_URL = "http://localhost:3006/"// "https://ixiaz4tu69.execute-api.ap-south-1.amazonaws.com/dev/" //  "http://localhost:3006/";

function ClipSelector() {
//   const [activeCategory, setactiveCategory] = useState('');
  // const [isVideoPlaying, setisVideoPlaying] = useState(false);
//   const [expanded, setExpanded] = useState('');
  // const [activeCategoryFilter, setactiveCategoryFilter] = useState('');
  // const [activeProductFilter, setactiveProductFilter] = useState('');
  // const [activeEpisodeFilter, setactiveEpisodeFilter] = useState('');
//   const [activeVideoFilter, setactiveVideoFilter] = useState({});
  // const [isLoadedClips, setisLoadedClips] = useState(false);

  const allLabels = useSelector((state) => state.allLabels);
  const allClips = useSelector((state) => state.allClips);
  const expanded = useSelector((state) => state.expanded);
  const activeVideoFilter = useSelector((state) => state.activeVideoFilter);

  const dispatch = useDispatch()

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
    dispatch(actions.setExpanded(newExpanded ? (expanded == panel ? '' : panel) : false));
  };

  const playTimeLine = (timestamp) => {
    const video = document.getElementById('video');
    const [start, end] = timestamp?.split(',');
    video.currentTime = start;
    video.play();
    dispatch(actions.setisVideoPlaying(1))
    const stopVideoAfter = (end - start) * 1000;
    setTimeout(() => {
      video.pause()
      dispatch(actions.setisVideoPlaying(0))
    }, stopVideoAfter)
  }

  const filters = ['VPP', 'Object', 'Activity', 'Emotion', 'Celebrity', 'Scenes']

  return (
      <div className='clip-section-container'>
        <div className='clip-section-headings'>
          <span data-testid="insightsCategory" className='active'>Insights Category</span>
          <span>+ To Ad Inventory</span>
        </div>
        <div className='filter-wise-section-container'>
          <div className='filter-wise-section' >
            <div>

              {
                filters.map((f, i) => (
                  <Accordion data-testid={"accordian-" + i} key={i} expanded={expanded === 'panel' + i} onChange={handleChange('panel' + i)}>
                    <AccordionSummary aria-controls={"panel" + i + "d-content"} id={"panel" + i + "d-header"}>
                      <Typography data-testid={"accordian-title-" + i} >{f}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      <div className='accordion-body'>
                        {
                          allLabels?.filter(l => l.category == f.trim().toLowerCase()).length ? allLabels.filter(l => l.category == f.trim().toLowerCase()).map((l, j) => (
                            <div className='carousel-container' >
                              <span className='carousel-head' id={l._id} >{l.label}</span>
                              <CarouselContainer index={i + "-" + j} clips={allClips.filter(c => c.labelId == l._id.toString())} label={l.label} labelId={l._id.toString()} src={activeVideoFilter?.src} playTimeLine={playTimeLine} />
                            </div>
                          )) : (
                            <div data-testid={"accordian-body-" + i} className='clip-placeholder' >No labels and/or clips available</div>
                          )
                        }
                      </div>
                    </AccordionDetails>
                  </Accordion>
                ))
              }
            </div>
          </div>
        </div>
      </div>
  );
}

export default ClipSelector;
