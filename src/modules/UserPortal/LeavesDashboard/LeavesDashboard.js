import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import {  Table } from 'react-bootstrap';
import {  FaTrash } from 'react-icons/fa';
import '../../../shared/CSS/FormStyles.css';
import styles from './LeavesDashboard.module.css';
import LeavesForm from './LeavesForm/LeavesForm';

class LeavesDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series1: [69],
      series2: [33],
      series3: [52],

      options1: {
        chart: {
          height: 150,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "50%",
            },
          },
        },
        fill: {
          background: "red",
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["", "", "", ""],

            stops: [0, 100],
          },
        },
        padding: {
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
        colors: ["red"],
        labels: ["Task"],
      },

      options2: {
        chart: {
          height: 250,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "50%",
            },
          },
        },
        fill: {
          background: "yellow",
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["", "", "", ""],

            stops: [0, 100],
          },
        },
        padding: {
          top: "50px",
          right: "50px",
          bottom: "50px",
          left: "50px",
        },

        colors: ["brown"],
        labels: ["Performance"],
      },
      options3: {
        chart: {
          height: 150,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "50%",
            },
          },
        },
        fill: {
          background: "green",
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["", "", "", ""],

            stops: [0, 100],
          },
        },
        padding: {
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },

        colors: ["#3EA055"],
        labels: ["Leaves"],
      },
    };
  }

  render() {
    return (
      <div className="jumbotron jumbo-form">
        <h5 className="page-heading">Leaves</h5>
        <hr className="hr-line" />
        <div className="text-center center" >

          <div className={styles.circle} id="chart">
       
            
              <div className={styles.card}>
                <div className="card-body">
                  <div className="col-sm">
                    <ReactApexChart
                      className={styles.apex_chart}
                      options={this.state.options1}
                      series={this.state.series1}
                      type="radialBar"
                      height={250}
                    />
                  </div>
                  <div className={styles.leavesdashboard}>
                    <h4>Sick Leaves</h4>
                    <h6>Total 10</h6>
                    <h6>Used 4</h6>
                    <h6>InHand 6</h6>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <div className="card-body">
                  <div className="col-sm">
                    <ReactApexChart
                      className={styles.apex_chart}
                      options={this.state.options2}
                      series={this.state.series2}
                      type="radialBar"
                      height={250}
                    />
                  </div>
                  <div className={styles.leavesdashboard}>
                    <h4>Sick Leaves</h4>
                    <h6>Total 10</h6>
                    <h6>Used 4</h6>
                    <h6>InHand 6</h6>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <div className="card-body">
                  <div className="col-sm">
                    <ReactApexChart
                      className={styles.apex_chart}
                      options={this.state.options3}
                      series={this.state.series3}
                      type="radialBar"
                      height={250}
                    />
                  </div>

                  <div className={styles.leavesdashboard}>
                    <h4>Sick Leaves</h4>
                    <h6>Total 10</h6>
                    <h6>Used 4</h6>
                    <h6>InHand 6</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
       

        <hr className="hr-line" />
        <LeavesForm />
        <hr className="hr-line" />

        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Leaves Type</th>
                <th>Leaves Period</th>
                <th>Reason</th>
                <th>Applied On</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sick</td>
                <td>17/21 Sat</td>
                <td>Feaver</td>
                <td>15/21 Thu</td>
                <td>Approved</td>
                <td>
                  <FaTrash className="svgdelete" />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default LeavesDashboard;
