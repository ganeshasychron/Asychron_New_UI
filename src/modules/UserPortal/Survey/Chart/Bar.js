
import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import '../survey.css';

class Bar1 extends Component {
  constructor(props) {
    super(props);
    this.state = {

      series: [{
        data: [44, 15, 57, 50, 21]
      }],
      options: {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function (chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },

        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [
            'Feb', 'Mar', 'Apr', 'May', 'Jun'
          ],
          labels: {
            style: {

              fontSize: '12px'
            }
          }
        }
      },

    };
  }
  render() {
    return (
      <div id="chartt">
        <ReactApexChart className='apex_chart1' options={this.state.options} series={this.state.series} type="bar" height={350} />
      </div>
    );
  }
}
export default Bar1;
