import { configureStore, createSlice } from "@reduxjs/toolkit";
const assetsSlice = createSlice({
    name : 'assets', 
    initialState : { categories : [], products : [], videos : [], allLabels : [], allClips : [], labels : [], clips : [], activeLabels : [], activeClips : [], activeLabelNames : [], activeLabelIds : [], isloadedClips:false, isVideoPlaying : 0, expanded : '', nextVideo : {}, prevVideo : {}, activeLabelVideos : [], currentVideo : {}, setActiveVideoFilter : {} },
    reducers : {
        addCategories (state, action) {
            state.categories = [...action.payload]
        },
        addProducts (state, action) {
            state.products = [...action.payload]
        },
        addEpisodes (state, action) {
            state.episodes = [...action.payload]
        },
        addVideos (state, action) {
            state.videos = [...action.payload]
        },
        addAllLabels (state, action) {
            // console.log('labels added', JSON.stringify(action.payload))
            state.allLabels = [...action.payload]
        },
        addAllClips (state, action) {
            // console.log('clips added', JSON.stringify(action.payload))
            state.allClips = [...action.payload]
        },
        addLabels (state, action) {
            state.labels = [...action.payload]
        },
        addClips (state, action) {
            state.clips = [...action.payload]
        },
        addActiveLabels (state, action) {
            state.activeLabels = [...action.payload]
        },
        addActiveClips (state, action) {
            state.activeClips = [ ...action.payload]
        },
        addActiveLabelNames (state, action) {
            state.activeLabelNames = [...action.payload]
        },
        addActiveLabelIds (state, action) {
            state.activeLabelIds = [...action.payload]
        },
        setExpanded(state, action) {
            state.expanded = action.payload
        },
        setisVideoPlaying(state, action) {
            state.isVideoPlaying = action.payload;
        },
        setNextVideo(state, action){
            state.nextVideo = action.payload;
        },
        setPrevVideo(state, action){
            state.prevVideo = action.payload;
        },
        setActiveLabelVideos(state, action){
            state.activeLabelVideos = action.payload
        },
        setCurrentVideo(state, action){
            state.currentVideo = action.payload
        },
        setActiveVideoFilter(state, action) {
            state.activeVideoFilter = action.payload;
        }
    }
})

export const actions = assetsSlice.actions

const store = configureStore({
    reducer: assetsSlice.reducer
})

export default store;