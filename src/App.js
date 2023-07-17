import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { actions } from './store';
import VideoPlayer from './components/VideoPlayer';
import ClipSelector from './components/ClipSelector';
import { SERVER_URL } from './services';
import Grid from '@mui/material/Grid';

// const SERVER_URL = "http://localhost:3006/"// "https://ixiaz4tu69.execute-api.ap-south-1.amazonaws.com/dev/" //  "http://localhost:3006/";

function App() {
  const dispatch = useDispatch()
  const getInitialSelectionValues = () => {
    fetch(`${SERVER_URL}category`).then(response => response.json()).then(({ err, categories }) => {
      dispatch(actions.addCategories(categories))
      fetch(`${SERVER_URL}product`).then(response => response.json()).then(({ err, products }) => {
        dispatch(actions.addProducts(products))
        fetch(`${SERVER_URL}episode`).then(response => response.json()).then(({ err, episodes }) => {
          dispatch(actions.addEpisodes(episodes))
          fetch(`${SERVER_URL}video`).then(response => response.json()).then(({ err, videos }) => {
            dispatch(actions.addVideos(videos))
          });
        });
      });
    });
  }
  useEffect(getInitialSelectionValues, [])



  return (
    <div className='page-container'>
      <Grid  container rowSpacing={2} >
        <Grid item md={7} sm={12} xs={12} >
      <VideoPlayer SERVER_URL={SERVER_URL} />
        </Grid>
        <Grid item md={5} sm={12} xs={12} >
      <ClipSelector />
      {/* <VideoPlayer SERVER_URL={SERVER_URL} /> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
