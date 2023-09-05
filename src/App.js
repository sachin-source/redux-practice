import './App.css';
import LibrarySearch from './components/LibrarySearch/LibrarySearch'
import SideBar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import VideoSearch from './components/VideoSearch/VideoSearch';
import ExportedClips from './components/exportedClips/ExportedClips';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Projects from './components/Projects/Projects';
import ResetPassword from './components/ResetPassword/ResetPassword';


// const SERVER_URL = "http://localhost:3006/"// "https://ixiaz4tu69.execute-api.ap-south-1.amazonaws.com/dev/" //  "http://localhost:3006/";

const routes = [
  { name: 'Projects', path: '/projects', icon: '' },
  { name: 'Library Search', path: '/library-search', icon: '' },
  { name: 'Video Search', path: '/video-search', icon: '' },
  { name: 'Exported Clips', path: '/exported-clips', icon: '' },
];

function App() {
  return (
    <>
      {/* <SideBar routes={routes} /> */}
      <Routes>
        <Route path="/video-search" element={<VideoSearch />} />
        <Route path="/library-search" element={<LibrarySearch />} />
        <Route path="/exported-clips" element={<ExportedClips />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Projects" element={<Projects />} />
        {/* <Route path="/" element={<SelectionPage />} />
          <Route path="/SignupPage" element={<SignupPage />} />
          <Route path="*" element={<Login setIsAuthenticated={setIsAuthenticated} setUserType={setUserType} setUserId={setUserId} />} /> */}
      </Routes>
    </>
  );
}

export default App;
