import { useEffect, useState } from 'react';
import './App.css';
import CarouselContainer from './CarouselNew';


function App() {

  const [labels, setlabels] = useState([]);
  const [activeCategory, setactiveCategory] = useState('');
  const [activeLabels, setactiveLabels] = useState([]);
  const [activeClips, setactiveClips] = useState([]);
  const [clips, setclips] = useState([]);

  useEffect(() => {
    // console.log(activeClips)
  }, [activeClips]);

  // const addLineMarkers = () => {
  //   activeClips.map(c => `<span></span>`)
  // }

  const getLineMarkerPoint = (time, duration, i) => {
    const videoDuration = document.getElementById('video').duration;
    const markerpoint = (Number.isInteger(time/videoDuration) ? (time/videoDuration) : (time/videoDuration).toFixed(2))*100;
    const previousDurations = activeClips.slice(0, -1).map(a => a.duration).reduce((a,b) => (a + b), 0);
    const previousWidthSize = previousDurations ? Math.max(1, 100*previousDurations/videoDuration) : 0;
    const currentClipDuration = Math.max(1, 100*duration/videoDuration);
    console.log({ i, markerpoint, time })
    return { left : `${markerpoint}%`, width : `${1}px` }
  }

  useEffect(() => {
    const video = document.getElementById('video');
    // const clips = [ { time : 2.34, duration : 2 }, { time : 10, duration : 1 }, { time : 34, duration : 2 }, { time : 43, duration : 2.1}, { time : 12.34, duration : 2 }, { time : 45.1, duration : 1.3}, { time : 34.2, duration : 1} ];

    video.addEventListener("timeupdate", (ee) => {
      let currentPercent = (video.currentTime / video.duration) * 100;
      const backgroundCSS = `linear-gradient(to right, #ccc ${currentPercent}%, #000 ${currentPercent}%)`
      document.querySelector('.inner').style.background = backgroundCSS;
    })
    const totalTimelineWidth = document.getElementById('video-timeline').getBoundingClientRect();
    document.getElementById('video-timeline-container').addEventListener('mousedown', (e) => {
      const percent = Math.min(Math.max(0, e.x - totalTimelineWidth.x), totalTimelineWidth.width)/totalTimelineWidth.width;
      video.currentTime = (video.duration*percent);
    })
  }, [])

  const getLabels = (e) => {
    const category = e.target.innerHTML.toLowerCase().trim()
    setactiveCategory(category)
    fetch(`http://localhost:3000/labels/${category}`).then(response => response.json()).then(labels => setlabels(labels));
  }

  const getClips = (label) => {
    fetch(`http://localhost:3000/clips/${label}`).then(response => response.json()).then(labelledClips => {
      const currentClips = [...labelledClips, ...clips];
      // console.table(currentClips)
      setclips(currentClips);
    });
  }

  const onLabelChange = (e) => {
    const label = e.target.innerHTML.trim().toLowerCase();
    const currentActiveLabels = [...activeLabels];
    if (currentActiveLabels.includes(label)) {
      const index = currentActiveLabels.indexOf(label);
      currentActiveLabels.splice(index, 1);
      const currentClips = [...clips]
      setclips(currentClips.filter(c => c.label != label))
    } else { 
      currentActiveLabels.push(label);
      getClips(label);
    }
    setactiveLabels(currentActiveLabels);
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
          <video id='video' width="100%" controls controlsList="nofullscreen nodownload">
              <source src="videoplayback.mp4" type="video/mp4" />
          </video>
        </div>
        <div id='video-timeline-container' className='video-timeline-container'>
          <div className="inner" id='video-timeline' >
            {
              activeClips.map((c, i) => (
                <span key={i} style={getLineMarkerPoint(c.time, c.duration, i)} className='active'></span>
              ))
            }
          </div>
        </div>
        <div className='video-filters-container'>
          {
            filters.map((category, i) => (
              <span key={i} onClick={getLabels} className={activeCategory==category.trim().toLowerCase() ? 'active' : ''} > {category} </span>
            ))
          }
        </div>
        <div className='label-container'>
          <div className='label-heading'>
            <h3> {labels.length} labels </h3>
          </div>
          <div className='labels-container' >
          {
            labels.map((label, i) => <span key={i} onClick={onLabelChange} className={activeLabels.includes(label.label.trim().toLowerCase()) ? 'active' : ''} >{label.label}</span>)
          }
          </div>
        </div>
      </div>
      <div className='clip-section-container'>
        <div className='clip-section-headings'>
          <span className='active'>Insights Category</span>
          <span>+ To Ad Inventory</span>
        </div>
        <div className='filter-wise-section-container'>
          <div className='filter-wise-section' >
            <div className='filter-wise-section-heading' >
            <span className='heading'>{activeCategory}</span>
            <span className='collapse' >v</span>
            </div>
            <div className='filter-section-container' hidden={!activeLabels.length} >
              <div className='filter-section'>
                <span className='filter-section-title'>mustache</span>
                <div className='filter-section-list'>
                  <CarouselContainer clips={clips} setactiveClips={setactiveClips} activeClips={activeClips} />
                </div>
              </div>
              <div className='filter-section'>
                <span className='filter-section-title'>object</span>
                <div className='filter-section-list'>
                  <span className='filter-clip-placeholder'></span>
                </div>
              </div>
              <div className='filter-section'>
                <span className='filter-section-title'>english</span>
                <div className='filter-section-list'>
                  <span className='filter-clip-placeholder'></span>
                </div>
              </div>
            </div>
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
