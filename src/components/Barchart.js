import React from 'react';

const data = [
    {
      name: 'kentcdodds',
      repos: 371
    },
    {
      name: 'sindresorhus',
      repos: 909
    },
    {
      name: 'developit',
      repos: 222
    },
    {
      name: 'getify',
      repos: 43
    },
    {
      name: 'btholt',
      repos: 56
    },
    {
      name: 'kyleshevlin',
      repos: 82
    }
  ]
//import classes from './Movie.module.css';
const Chart = ({ children, width, height }) => (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      {children}
    </svg>
  )
  
  const Bar = ({ x, y, width, height }) => (
    <rect x={x} y={y} width={width} height={height} fill={'#0ac'}/>
  )

const BarChart = () => {

        // Width of each bar
        const itemWidth = 20
      
        // Distance between each bar
        const itemMargin = 5
      
        const dataLength = data.length
      
        // Normalize data, we'll reduce all sizes to 25% of their original value
        const massagedData = data.map(datum =>
          Object.assign({}, datum, { repos: datum.repos * 0.25 })
        )
      
        const mostRepos = massagedData.reduce((acc, cur) => {
          const { repos } = cur
          return repos > acc ? repos : acc
        }, 0)
      
        const chartHeight = mostRepos
      
        return (
          <Chart width={dataLength * (itemWidth + itemMargin)} height={chartHeight}>
            {massagedData.map((datum, index) => (
                //const itemheight = datum.repos;
                <Bar
                    key={datum.name}
                    x={index * (itemWidth + itemMargin)}
                    y={0}
                    width={itemWidth}
                    height={datum.repos}
                />
                ))}
          </Chart>
        )
      };

export default BarChart;