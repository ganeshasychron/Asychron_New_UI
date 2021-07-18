
import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import './Chart.css';
import '../survey.css';

class Pie1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 15, 57, 50, 21],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },

    };
  }
  render() {
    return (
      <div id="chartt">
        <ReactApexChart className='apex_chart' options={this.state.options} series={this.state.series} type="pie" width={480} />
      </div>
    );
  }
}
export default Pie1;