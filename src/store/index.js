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
    initialState : { allLabels : [], allClips : [], labels : [], clips : [], activeLabels : [], activeClips : [], activeLabelNames : [] },
    reducers : {
        addAllLabels (state, action) {
            state.allLabels = [...state.allLabels, ...action.payload]
        },
        addAllClips (state, action) {
            state.allClips = [...state.allClips, ...action.payload]
        },
        addLabels (state, action) {
            state.labels = [...state.labels, ...action.payload]
        },
        addClips (state, action) {
            state.clips = [...state.clips, ...action.payload]
        },
        addActiveLabels (state, action) {
            state.activeLabels = [...state.activeLabels, ...action.payload]
        },
        addActiveClips (state, action) {
            state.activeClips = [...state.activeClips, ...action.payload]
        },
        addActiveLabelNames (state, action) {
            state.activeLabelNames = [...state.activeLabelNames, ...action.payload]
        }
    }
})

export const actions = assetsSlice.actions

const store = configureStore({
    reducer: assetsSlice.reducer
})

export default store;