import React, { Component } from "react";
import axios from 'axios';
import "./Search.css";

// import { Line } from '@reactchartjs/react-chart.js'
import { Line } from 'react-chartjs-2'
import { Doughnut } from 'react-chartjs-2'

class Search extends Component {
  constructor() {
    super();

    this.state = {
      keys: [],
      data: []
    };

    this.LineChart = this.LineChart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.DoughnutChart = this.DoughnutChart.bind(this);
  }

  componentDidMount() {
    this.handleChange();
  }

  handleChange(/*{ target }*/) {
    const that = this;
    const body = {
      "size": 0,
      "aggs": {
        "popular_colors": {
          "terms": {
            "field": "Region.keyword"
          }
        }
      }
    };
    axios({
      url: `http://localhost:3085/search`,
      method: 'POST',
      data: body,
      headers: { 'Content-Type': 'application/json' },
    }).then(function({ data }) {
      that.setState(() => {
        const _keys = data.data.map(value => value.key)
        const _data = data.data.map(value => value.doc_count)
        return {
          keys: _keys,
          data: _data
        };
      });
    });
  }

  DoughnutChart() {
    const data = {
      // labels: ['Red', 'Blue', 'Yellow'],
      labels: this.state.keys || [],
      datasets: [
        {
          label: '\n\n# of Countries',
          data: this.state.data || [],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(155, 159, 88, 1)',
          ],
          borderColor: [
            // 'rgba(255, 99, 132, 1)',
            // 'rgba(54, 162, 235, 1)',
            // 'rgba(255, 206, 86, 1)',
            // 'rgba(75, 192, 192, 1)',
            // 'rgba(153, 102, 255, 1)',
            // 'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    }

    return (
      <>
        <div className='header'>
          <h1 className='title'>Doughnut Chart</h1>
          <div className='links'>
            <a
              className='btn btn-gh'
              href='https://github.com/reactchartjs/react-chartjs-2/blob/react16/example/src/charts/Doughnut.js'
            >
              Github Source
            </a>
          </div>
        </div>
        <Doughnut data={data} />
      </>
    );
  }

  LineChart() {
    const data = {
      labels: this.state.keys || [],
      datasets: [
        {
          label: '\n\n# of Countries',
          data: this.state.data || [],
          fill: false,
          // backgroundColor: ['rgb(255, 99, 132)'],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderColor: 'rgba(255, 99, 132, 0.2)',
        },
      ],
    }

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    }

    return (
      <>
        <div className='header'>
          <h1 className='title'>Line Chart</h1>
          <div className='links'>
            <a
              className='btn btn-gh'
              href='https://github.com/reactchartjs/react-chartjs-2/blob/react16/example/src/charts/Line.js'
            >
              Github Source
            </a>
          </div>
        </div>
        <Line data={data} options={options} />
      </>
    );

  }

  render() {
    return (
      <>
        <div className="content">
          {this.LineChart()}
          {this.DoughnutChart()}
        </div>
      </>
    );
  }
}

export default Search;
