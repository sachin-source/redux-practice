import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { actions } from './store';
import VideoPlayer from './components/VideoPlayer';
import ClipSelector from './components/ClipSelector';

const SERVER_URL = "http://localhost:3006/"// "https://ixiaz4tu69.execute-api.ap-south-1.amazonaws.com/dev/" //  "http://localhost:3006/";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    getInitialSelectionValues()
  }, [])

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

  return (
    <div className='page-container'>
      <VideoPlayer SERVER_URL={SERVER_URL} />
      <ClipSelector />
    </div>
  );
}

export default App;
