import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import jsonfile from '../data/seasondata';
import 'intersection-observer';

const FourthGraph = (props) => {
    const stateName = props.stateName;
    const chartRef = useRef(null);
    const chartContainerRef = useRef(null); 
  
    var jsonFilter = jsonfile.filter(obj => obj.State == stateName);

    var labels = jsonFilter.map(function (e) {
        return e.Season;
    });
    var data = jsonFilter.map(function (e) {
        return e.Production;
    });;

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'production',
                data: data,
                fill: false,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)', 
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',  
                ],
                hoverBackgroundColor:[
                    'rgba(255, 99, 132,0.2)',
                    'rgba(54, 162, 235,0.2)',
                    'rgba(255, 205, 86,0.2)',
                    'rgba(75, 192, 192,0.2)', 
                    'rgba(153, 102, 255,0.2)',
                    'rgba(255, 159, 64,0.2)',  
                ],
                borderWidth: 2,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            delay: 2000,
            easing: 'easeOutSine'
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
    };

    useEffect(() => {
        
        if (!chartRef.current) {
            const ctx = document.getElementById('season').getContext('2d');
            chartRef.current = new Chart(ctx, {
                type: 'doughnut',
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
            <canvas id="season" width="400" height="200"></canvas>
        </div>
    );
};

export default FourthGraph;
