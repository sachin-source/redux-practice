import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { actions } from './store';
import VideoPlayer from './components/VideoSearch/VideoPlayer';
import ClipSelector from './components/VideoSearch/ClipSelector';
import { SERVER_URL } from './services';
import Grid from '@mui/material/Grid';
import LibrarySearch  from './components/LibrarySearch/LibrarySearch'
import AllVideo from './components/AllVideos/AllVideo';
import VideoPopUp from './components/CommonComponents/VideoPopUp/VideoPopup';

// const SERVER_URL = "http://localhost:3006/"// "https://ixiaz4tu69.execute-api.ap-south-1.amazonaws.com/dev/" //  "http://localhost:3006/";

function App() {
  const dispatch = useDispatch()
  return (
    <div className='page-container'>
      {/* <LibrarySearch />
      <Grid  container rowSpacing={2} >
        <Grid item md={7} sm={12} xs={12} >
      <VideoPlayer SERVER_URL={SERVER_URL} />
        </Grid>
        <Grid item md={5} sm={12} xs={12} >
      <ClipSelector />
      <VideoPlayer SERVER_URL={SERVER_URL} />
        </Grid>
      </Grid> */}

      <AllVideo/>
      {/* <VideoPopUp/> */}
    
    </div>
  );
}

export default App;
