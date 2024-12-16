// 'use client';
// import { useEffect, useState } from 'react';
// import Joyride, { EVENTS, STATUS } from 'react-joyride';

// const CustomJoyRide = ({ start, setStartTour, onTourEnd }) => {
//   // const TourGuide = ({ start, setStartTour, onTourEnd }) => {
//   const [progress, setProgress] = useState(1);
//   const totalSteps = 4;

//   const generateSteps = (val) => [
//     {
//       content: (
//         <div className="p-3">
//           <p className="text-4xl">Dpanda Widget Tour</p>
//           <p className="mt-12 text-2xl font-bold">Widget tour guide</p>
//           <p className="mt-6 mb-8 text-md">
//             This is the next.js app explaining how to implement a tour guide
//           </p>
//           <div className="mt-4 border-b border-sessionbutton-foreground" />
//           {/* <div className="absolute bottom-[34px] left-[47%] text-sm text-neutral-400">
//             {val} of {totalSteps}
//           </div> */}
//         </div>
//       ),
//       locale: { skip: <strong aria-label="skip">Skip</strong> },
//       styles: {
//         options: {
//           width: 700,
//         },
//       },
//       placement: 'center',
//       target: 'body',
//     },
//     {
//       content: (
//         <div className="mb-4 flex flex-col gap-4 px-2 text-left">
//           <p className="mr-4 text-base font-bold">Browse Products</p>
//           <p className="mr-2 text-sm">
//             Browse product featured in this article.
//           </p>
//           {/* <div className="absolute bottom-[30px] left-[38%] text-sm text-neutral-400">
//             {val} of {totalSteps}
//           </div> */}
//         </div>
//       ),
//       styles: {
//         options: {
//           width: 380,
//         },
//       },
//       placement: 'bottom',
//       target: '#step-1',
//       title: '',
//       // disableBeacon: true,
//       disableOverlayClose: true,
//       hideCloseButton: true,
//       // hideFooter: true,
//       spotlightClicks: true,
//     },
//     {
//       content: (
//         <div className="mb-4 flex flex-col gap-4 px-2 text-left">
//           <p className="mr-4 text-base font-bold">Vercel Logo</p>
//           <p className="mr-2 text-sm">Next.js is built by Vercel</p>
//           {/* <div className="absolute bottom-[30px] left-[38%] text-sm text-neutral-400">
//             {val} of {totalSteps}
//           </div> */}
//         </div>
//       ),
//       styles: {
//         options: {
//           width: 380,
//         },
//       },
//       placement: 'bottom',
//       target: '#step-2',
//       title: '',
//     },
//     {
//       content: (
//         <div className="mb-4 flex flex-col gap-4 px-2 text-left">
//           <p className="mr-4 text-base font-bold">Next.js Links</p>
//           <p className="mr-2 text-sm">
//             Learn from docs, learn, start with templates and deploy your next.js
//             app
//           </p>
//           {/* <div className="absolute bottom-[30px] left-[8%] text-sm text-neutral-400">
//             {val} of {totalSteps}
//           </div> */}
//         </div>
//       ),
//       styles: {
//         options: {
//           width: 380,
//         },
//       },
//       placement: 'top',
//       target: '#step-3',
//       title: '',
//     },
//   ];

//   const [{ run, steps }, setState] = useState({
//     run: start,
//     stepIndex: 0,
//     steps: generateSteps(progress),
//   });

//   useEffect(() => {
//     setState((prevState) => ({
//       ...prevState,
//       steps: generateSteps(progress),
//     }));
//   }, [progress]);

//   useEffect(() => {
//     if (start) {
//       setState((prevState) => ({
//         ...prevState,
//         run: true,
//         stepIndex: 0,
//       }));
//     }
//   }, [start]);

//   const handleJoyrideCallback = (data) => {
//     const { status, type, index } = data;

//     const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];

//     if (finishedStatuses.includes(status)) {
//       setState({ steps, run: false, stepIndex: 0 });
//       setStartTour(false);
//       onTourEnd();
//     } else if ([EVENTS.STEP_BEFORE].includes(type)) {
//       setProgress(index + 1);
//     }
//   };

//   return (
//     <Joyride
//       continuous
//       callback={handleJoyrideCallback}
//       run={run}
//       steps={steps}
//       scrollToFirstStep
//       hideCloseButton={false}
//       disableCloseOnEsc
//       disableOverlayClose
//       spotlightPadding={10}
//       showProgress
//       showSkipButton
//       debug
//       styles={{
//         overlay: {
//           border: '6px solid lightblue',
//         },
//         spotlight: {
//           border: '2px solid lightblue',
//         },
//         buttonClose: {
//           marginTop: '5px',
//           marginRight: '5px',
//           width: '12px',
//         },
//         buttonNext: {
//           outline: '2px solid transparent',
//           outlineOffset: '2px',
//           backgroundColor: '#1c7bd4',
//           borderRadius: '5px',
//           color: '#FFFFFF',
//         },
//         buttonSkip: {
//           color: 'A3A3A3',
//         },
//         tooltipFooter: {
//           margin: '0px 16px 10px 10px',
//         },
//         buttonBack: {
//           outline: '2px solid transparent',
//           outlineOffset: '2px',
//         },
//         options: {
//           zIndex: 100,
//           arrowColor: '#1F1F1F',
//           backgroundColor: '#1F1F1F',
//           textColor: '#FFFFFF',
//           overlayColor: 'rgba(0, 0, 0, 0.9)',
//           primaryColor: '#1c7bd4',
//         },
//       }}
//       locale={{
//         back: (
//           <p className="font-bold focus:ring-transparent focus-visible:outline-none">
//             {`<-`}
//           </p>
//         ),
//       }}
//     />
//   );

//   // return (
//   //   <CustomJoyride
//   //     steps={tourSteps}
//   //     run={runTour}
//   //     continuous={true}
//   //     scrollToFirstStep={true} // Automatically scrolls to the first step
//   //     showSkipButton={true}
//   //     styles={{
//   //       options: {
//   //         zIndex: 10000,
//   //         backgroundColor: '#f0f0f0', // Customize background color
//   //         arrowColor: '#00aaff',
//   //         primaryColor: '#00aaff', // Primary color for buttons
//   //       },
//   //     }}
//   //   />
//   // );
// };

// export default CustomJoyRide;
