import VideoPlayer from './VideoPlayer';
import ClipSelector from './ClipSelector';
import { SERVER_URL } from '../../services';
import Grid from '@mui/material/Grid';

const VideoSearch = () => {
    return (
        <div className='page-container'>
       <Grid  container rowSpacing={2} >
         <Grid item md={7} sm={12} xs={12} >
       <VideoPlayer SERVER_URL={SERVER_URL} />
         </Grid>
         <Grid item md={5} sm={12} xs={12} >
       <ClipSelector />
         </Grid>
       </Grid>
     </div>
    )
}

export default VideoSearch;