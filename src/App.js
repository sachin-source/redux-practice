import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { actions } from './store';
// import VideoPlayer from './components/VideoSearch/VideoPlayer';
// import ClipSelector from './components/VideoSearch/ClipSelector';
// import { SERVER_URL } from './services';
// import Grid from '@mui/material/Grid';
import LibrarySearch  from './components/LibrarySearch/LibrarySearch'
import SideBar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import VideoSearch from './components/VideoSearch/VideoSearch';

// const SERVER_URL = "http://localhost:3006/"// "https://ixiaz4tu69.execute-api.ap-south-1.amazonaws.com/dev/" //  "http://localhost:3006/";

const routes = [
  { name : 'Projects', path : '/projects', icon : ''},
  { name : 'Library Search', path : '/library-search', icon : ''},
  { name : 'Video Search', path : '/video-search', icon : ''},
  { name : 'Exported Clips', path : '/exported-clips', icon : ''},
];

function App() {
  const dispatch = useDispatch()
  return (
    // <div className='page-container'>
    //   <Grid  container rowSpacing={2} >
    //     <Grid item md={7} sm={12} xs={12} >
    //   <VideoPlayer SERVER_URL={SERVER_URL} />
    //     </Grid>
    //     <Grid item md={5} sm={12} xs={12} >
    //   <ClipSelector />
    //     </Grid>
    //   </Grid>
    // </div>
    <>
    <SideBar routes={routes} />
    <Routes>
          <Route path="/video-search" element={<VideoSearch />} />
          {/* <Route path="/" element={<SelectionPage />} />
          <Route path="/SignupPage" element={<SignupPage />} />
          <Route path="/Login" element={<Login setIsAuthenticated={setIsAuthenticated} setUserType={setUserType} setUserId={setUserId} />} />
          <Route path="*" element={<Login setIsAuthenticated={setIsAuthenticated} setUserType={setUserType} setUserId={setUserId} />} /> */}
        </Routes>
    </>

  );
}

{/* <VideoPlayer SERVER_URL={SERVER_URL} /> */}
export default App;
