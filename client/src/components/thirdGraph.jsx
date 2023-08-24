import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import jsonfile from '../data/cropdata';
import "chartjs-plugin-datalabels";
// import 'intersection-observer';
import { Bar} from "react-chartjs-2";

// const ThirdGraph = (props) => {
    
    // const chartRef = useRef(null);
    // const chartContainerRef = useRef(null);
//     var jsonFilter = jsonfile.filter(obj => obj.State == props.stateName);

//     var labels = jsonFilter.map(function (e) {
//         return e.Crop;
//     });
//     var data = jsonFilter.map(function (e) {
//         return e.Production;
//     });;

//     const chartData = {
//         labels: labels,
//         datasets: [
//             {
//                 label: "My First dataset",
//                 backgroundColor: "rgb(255,99,132)",
//                 borderColor: "rgba(255,99,132,1)",
//                 hoverBackgroundColor: "rgb(255,99,132,0.4)",
//                 data: data
//                 // label: 'production',
//                 // data: data,
//                 // fill: false,
//                 // borderColor: 'rgba(54, 162, 235, 1)',
//                 // borderWidth: 2,
//             },
//         ],
//     };

//     const chartOptions = {
//         plugins: {
//             datalabels: {
//                 display: true,
//                 color: "black",
//                 align: "end",
//                 anchor: "end",
//                 rotation: 270,
//                 clip : true,
//                 font: { size: "8" }
//             }
//         },

//         // responsive: true,

       
//         // maintainAspectRatio: false,
//         scales: {
//             yAxes: [
//               {
//                 ticks: {
//                   max: 400000000
//                 }
//               }
//             ]
//           },
//           animation: {
//             delay: 3000,
//             easing: "easeOutBack"
//           },
//     };


//     return (
//         <div style={{ height: '80%' }} >
//             <Bar data={chartData} options={chartOptions} width={"50%"} height={"30%"} />
            
//         </div>
//     );
// };
const ThirdGraph = (props) => {
    const stateName = props.stateName;
    const chartRef = useRef(null);
    const chartContainerRef = useRef(null);
    var jsonFilter = jsonfile.filter(obj => obj.State == stateName);

    var labels = jsonFilter.map(function (e) {
        return e.Crop;
    });
    var data = jsonFilter.map(function (e) {
        return e.Production;
    });;

    const chartData = {
        labels: labels,
        datasets: [
            {
                backgroundColor: "rgba(255,205,86,1)",
                borderColor: "rgba(255,205,86,1)",
                hoverBackgroundColor: "rgba(255,205,86,1,0.5)",
                data: data,
                label: "production",
                data: data,
                fill: false,
               
            },
        ],
    };

    const chartOptions = {
        plugins: {
            datalabels: {
                display: true,
                color: "black",
                align: "end",
                anchor: "end",
                rotation: 270,
                clip : true,
                font: { size: "3" }
            }
        },

        responsive: true,

        animation: {
            delay: 2000,
            easing: 'easeOutBack'
        },
        maintainAspectRatio: false,
        scales: {
            yAxes: [
              {
                ticks: {
                  max: 400000000
                }
              }
            ]
          },
    };

    useEffect(() => {

        if (!chartRef.current) {
            const ctx = document.getElementById('crop').getContext('2d');
            
            chartRef.current = new Chart(ctx, {
                type: 'bar',
                data: chartData,
                options: chartOptions,
            });
        } else {

            chartRef.current.data = chartData;
            chartRef.current.options = chartOptions;
            chartRef.current.update();
        }
    }, [chartData, chartOptions]);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {

                        chartRef.current.options.animation = {
                            ...chartOptions.animation,
                            from: 0,
                        };
                        chartRef.current.update();
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (chartContainerRef.current) {
            observer.observe(chartContainerRef.current);
        }

        return () => {

            observer.disconnect();
        };
    }, [chartOptions.animation]);

    return (
        <div style={{ height: '80%' }} ref={chartContainerRef}>
            <canvas id="crop" width="400" height="200"></canvas>
            
        </div>
    );
};

export default ThirdGraph;
