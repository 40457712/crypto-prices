import React from 'react';

//const data = [
//    {
//      name: 'kentcdodds',
//      repos: 371
//    },
//    {
//      name: 'sindresorhus',
//      repos: 909
//    },
//    {
//      name: 'developit',
//      repos: 222
//    },
//    {
//      name: 'getify',
//      repos: 43
//    },
//    {
//     name: 'btholt',
//      repos: 56
//   },
//    {
//      name: 'kyleshevlin',
//      repos: 82
//    }
//  ]

//import classes from './Movie.module.css';
const Chart = ({ children, width, height }) => (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      {children}
    </svg>
  )
  
  const Bar = ({ x, y, width, height }) => (
    <rect x={x} y={y} width={width} height={height} fill={'#0ac'}/>
  )

const BarChart = (props) => {
        console.log('Barchart starts...')
        console.log(props.data);
        // Width of each bar
        const itemWidth = 20
      
        // Distance between each bar
        const itemMargin = 5
      
        const dataLength = props.data.length
      
        // Normalize data, we'll reduce all sizes to 25% of their original value
        const massagedData = props.data.map(datum =>
        //  Object.assign({}, datum, { repos: datum.repos / 100000000 })
        // Object.assign({}, datum, { volume: datum.volume * 0.25 })
        Object.assign({}, datum, { volume: datum.volume / 100000000 })
        )
      
        const mostRepos = massagedData.reduce((acc, cur) => {
          const { repos } = cur
          return repos > acc ? repos : acc
        }, 0)
      
        const chartHeight = mostRepos
      
        return (
            <>
            <h1>Bar Chart</h1>
          <Chart width={dataLength * (itemWidth + itemMargin)} height={chartHeight}>
            {massagedData.map((datum, index) => (
                //const itemheight = datum.repos;
                <Bar
                    key={datum.time}
                    x={index * (itemWidth + itemMargin)}
                    y={0}
                    width={itemWidth}
                    height={datum.volume}
                />
                ))}
          </Chart>
                </>
        )
      };

export default BarChart;