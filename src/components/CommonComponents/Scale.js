// import React, { Component } from 'react';
// import CanvasJSReact from '@canvasjs/react-charts';

// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// class Scale extends Component {
//     render() {
//         const options = {
//             animationEnabled: true,
//             title: {
//                 text: ""
//             },
//             axisX: {
//                 valueFormatString: "MMM"
//             },
//             axisY: {
//                 title: "",
//                 prefix: "$"
//             },
//             data: [{
//                 yValueFormatString: "$#,###",
//                 xValueFormatString: "MMMM",
//                 type: "spline",
//                 dataPoints: [
//                     { x: new Date(2017, 0), y: 25060 },
//                     { x: new Date(2017, 1), y: 27980 },
//                     { x: new Date(2017, 2), y: 800 },
//                     { x: new Date(2017, 3), y: 32400 }
//                 ]
//             }]
//         };

//         return (
//             <div style={{height:}}>
//                 <CanvasJSChart options={options} />

//             </div>
//         );
//     }
// }

// export default Scale;

// import React from 'react';
// import { Line } from 'react-chartjs-2';

// const data = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//   datasets: [
//     {
//       label: 'UV',
//       data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
//       borderColor: '#8884d8',
//       fill: false,
//     },
//     {
//       label: 'PV',
//       data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
//       borderColor: '#82ca9d',
//       fill: false,
//     },
//     {
//       label: 'AMT',
//       data: [2400, 2210, 2290, 2000, 2181, 2500, 2100],
//       borderColor: '#ffc658',
//       fill: false,
//     },
//   ],
// };

// const options = {
//   responsive: true,
//   maintainAspectRatio: false,
//   scales: {
//     x: {
//       grid: {
//         display: false,
//       },
//     },
//     y: {
//       grid: {
//         display: false,
//       },
//     },
//   },
// };

// const Scale = () => {
//   return (
//     <div style={{ height: '70px', width: '100%' }}>
//       <Line data={data} options={options} />
//     </div>
//   );
// };

// export default Scale;
