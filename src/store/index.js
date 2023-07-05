// import { createStore } from 'redux'

import { configureStore, createSlice } from "@reduxjs/toolkit";

// const defaultState = { allLabels : [] };

// const reducerFunction = ( state = defaultState, action ) => {
//     return state
// };

// const store = createStore(reducerFunction);
// export default store

// const [allClips, setallClips] = useState([]);
// const [allLabels, setallLabels] = useState([]);
// const [clips, setclips] = useState([]);
// const [labels, setlabels] = useState([]);
// // const [activeCategory, setactiveCategory] = useState('');
// const [activeLabels, setactiveLabels] = useState([]);
// const [activeClips, setactiveClips] = useState([]);
// // const [isVideoPlaying, setisVideoPlaying] = useState(false)

// // const [expanded, setExpanded] = useState('');
// const [activeLabelNames, setactiveLabelNames] = useState([])

const assetsSlice = createSlice({
    name : 'assets', 
    initialState : { categories : [], products : [], videos : [], allLabels : [], allClips : [], labels : [], clips : [], activeLabels : [], activeClips : [], activeLabelNames : [], activeLabelIds : [] },
    reducers : {
        addCategories (state, action) {
            console.log(action.payload)
            state.categories = [...action.payload]
        },
        addProducts (state, action) {
            console.log(action.payload)
            state.products = [...action.payload]
        },
        addEpisodes (state, action) {
            console.log(action.payload)
            state.episodes = [...action.payload]
        },
        addVideos (state, action) {
            console.log(action.payload)
            state.videos = [...action.payload]
        },
        addAllLabels (state, action) {
            console.log('labels added', JSON.stringify(action.payload))
            state.allLabels = [...action.payload]
            // state.allLabels = [...state.allLabels, ...action.payload]
        },
        addAllClips (state, action) {
            console.log('clips added', JSON.stringify(action.payload))
            state.allClips = [...action.payload]
            // state.allClips = [...state.allClips, ...action.payload]
        },
        addLabels (state, action) {
            state.labels = [...action.payload]
            // state.labels = [...state.labels, ...action.payload]
        },
        addClips (state, action) {
            state.clips = [...action.payload]
            // state.clips = [...state.clips, ...action.payload]
        },
        addActiveLabels (state, action) {
            state.activeLabels = [...action.payload]
            // state.activeLabels = [...state.activeLabels, ...action.payload]
        },
        addActiveClips (state, action) {
            state.activeClips = [ ...action.payload]
            // state.activeClips = [...state.activeClips, ...action.payload]
        },
        addActiveLabelNames (state, action) {
            state.activeLabelNames = [...action.payload]
            // state.activeLabelNames = [...state.activeLabelNames, ...action.payload]
        },
        addActiveLabelIds (state, action) {
            state.activeLabelIds = [...action.payload]
        }
    }
})

export const actions = assetsSlice.actions

const store = configureStore({
    reducer: assetsSlice.reducer
})

export default store;