import { useEffect, useState } from "react";
import "./LibrarySearch.css"
import FiltersItems from "./Filters.json"
import DummyVideos from "./DummyVideos.json"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// import TextField from '@mui/material/TextField';
import VideoPopUp from "../CommonComponents/VideoPopUp/VideoPopup";
// import dummy from "./dummy.mp4"
 

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
        
//       </FormControl>
//     </Box>
//   );
// }

function LibrarySearch(){

    const [dummyVideos, setDummyVideos] = useState([])
    const [filters, setFilters] = useState([])
    const [view,setView] = useState(3)
    const [searchString, setSearchString] = useState("")
    const [country, setCountry] = useState("")
    const [project, setProject] = useState("")
    const [filterValues, setFiltersValues] = useState({country:"",project:"",episode:"",keyword:""})
    const [videoPopUpState, setVideoPopUpState] = useState(false)
    const [movieName, setMovieName] = useState("")
    const [videoURL, setVideoURL] = useState("")



    const handleChange = (event) => {
        var key = event.target.name
        var val = event.target.value
        const updatedData = { ...filterValues };
        updatedData[key] = val;
        setFiltersValues(updatedData);
        console.log(filterValues)

        var arr = DummyVideos.filter((item)=>{
            console.log(item.country, updatedData.country)

            return item.country.toLowerCase()==val.toLowerCase();
            
        })
        setDummyVideos(arr)
        console.log(dummyVideos)
    };

    useEffect(()=>{
        setDummyVideos(DummyVideos)
        setFilters(FiltersItems)
    },[])

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#FFFF' : '#FFFF',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        padding:10,
        color: theme.palette.text.secondary,
      }));

      const searchStringFunc = (event) => {
        var key = event.target.name
        var val = event.target.value
        if(key=="title"){
            setSearchString(val)
        }else if(key=="country"){
            setCountry(val)
        }
        try{
            var arr = DummyVideos.filter((item)=>{
                return item[key].toLowerCase().includes(val);
            })
            if(searchString==""){
            setDummyVideos(DummyVideos)
            }else{
            setDummyVideos(arr)
            }
            console.log(dummyVideos)
        } catch {

        }
      }

      const selectFilterFunc = (event)=>{
        var key = event.target.name
        var val = event.target.value
        setCountry(val)
        setProject(val)
        if(key!="project"){
            var arr = DummyVideos.filter((item)=>{
                console.log(item.country,val)
                return item.country.toLowerCase()==val.toLowerCase();
            })
            setDummyVideos(arr)
            console.log(dummyVideos)
        }
      }
      const updateState = () => {
        setVideoPopUpState(false);
      }

      const videoPopUpFunc = (title,url)=>{
        setVideoPopUpState(true)
        setMovieName(title)
        setVideoURL(url)
      }

    return(
        <div className="main-allvideos container">
          <div className="search-input-div">
            <span>&#128269;</span>
            <input 
              type="search"
              className="search-input"
              name="title"
              value={searchString}
              onChange={searchStringFunc}
            />
          </div>
          <div className="filters-div">
            {filters.map((filter)=>(
                filter.type=="dropdown" ?
                  <Box className="filters-div">
                  <FormControl fullWidth sx={{ width: 200}}>
                    <InputLabel sx={{ fontSize: 13}} >{filter.filterName}</InputLabel>
                    <Select  sx={{ width: 200, height: 45}} 
                        id="demo-simple-select"
                        value={filterValues[filter.filterName]}
                        name={filter.filterName}
                        label={filter.filterName}
                        onChange={handleChange}
                        style={{fontSize: 13}}
                        >
                        {filter.options.map((option)=>(
                            <MenuItem sx={{fontSize: 13}} value={option}>{option}</MenuItem>
                        ))}
                        
                    </Select>
                   </FormControl>
                   </Box> :

                   <Box className="filters-div">
                   <FormControl fullWidth sx={{ width: 200}}>
                      <input style={{
                        height: "45px",border:"1px solid darkgray",
                        borderRadius: "5px",fontSize:"13px",padding:"20px"}}
                        placeholder={`Enter ${filter.filterName}`}
                        onChange={handleChange}></input>
                   </FormControl>
                   </Box>

                 
                ))}
          </div>
          <div className="view-div">
                <button onClick={()=>setView(3)}>Grid</button>
                <button onClick={()=>setView(12)}>TimeLine</button>
          </div>

          <div className="videos-div container1">
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4} margin={0.4}>
                {dummyVideos.map((data)=>(
                    <Grid item xs={view} onClick={()=>videoPopUpFunc(data.title,data.videoURL)}>
                        <Paper style={{textAlign: view==12?"left":"", backgroundColor:"black",padding:"10px"}}>
                            <iframe width={"250"} height={"150"} src={data.videoURL} />
                            <p style={{color: "white",textAlign:"left",padding: "10px"}}>{data.title.toUpperCase()}</p>
                        </Paper>
                    </Grid>
                ))}
                
            </Grid>
            </Box>
            
            {videoPopUpState && <VideoPopUp view={true} movieName={movieName} videoURL={videoURL} updateState={updateState} /> }
            
          </div>
          {!dummyVideos.length&& <h2>No Result Found...</h2>}
        </div>
    
)}

export default LibrarySearch;