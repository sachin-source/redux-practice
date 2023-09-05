import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

const Loader = () => {
    const showLoader = useSelector((state) => state.loader.showLoader);
    
    console.log(showLoader, 'ppppppppppppppppppp')
    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={showLoader}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default Loader

// import React, { useEffect, useState } from 'react';
// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
// import { useSelector } from 'react-redux';

// const Loader = () => {
//     const [showLoaderVisi, setShowLoaderVisi] = useState(false);
//     const showLoader = useSelector((state) => state.loader.showLoader);

//     console.log(showLoader, 'ooooooooooooooo')

//     useEffect(() => {
//         let timer;
//         if (showLoader) {
//             timer = setTimeout(() => {
//                 setShowLoaderVisi(true);
//             }, 5000); // Set the minimum time to 5 seconds (5000 milliseconds)
//         } else {
//             setShowLoaderVisi(false);
//         }

//         return () => {
//             clearTimeout(timer);
//         };
//     }, [showLoader]);

//     return (
//         <>
//             <Backdrop
//                 sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//                 open={showLoader}
//             >
//                 <CircularProgress color="inherit" />
//             </Backdrop>
//         </>
//     );
// };

// export default Loader;
