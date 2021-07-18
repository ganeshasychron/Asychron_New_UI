import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Col, Row } from 'react-bootstrap';

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
        <div className="text-center center">
          <div className={styles.circle} id="chart">
            <Row>
              <div className={styles.card}>
                <div className={styles.card_body}>
                  <Col>
                    <ReactApexChart
                      className={styles.apex_chart}
                      options={this.state.options1}
                      series={this.state.series1}
                      type="radialBar"
                      height={250}
                    />
                  </Col>
                  <div className={styles.leavesdashboard}>
                    <h4>Sick Leaves</h4>
                    <h6>Total 10</h6>
                    <h6>Used 4</h6>
                    <h6>InHand 6</h6>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.card_body}>
                  <Col>
                    <ReactApexChart
                      className={styles.apex_chart}
                      options={this.state.options2}
                      series={this.state.series2}
                      type="radialBar"
                      height={250}
                    />
                  </Col>
                  <div className={styles.leavesdashboard}>
                    <h4>Sick Leaves</h4>
                    <h6>Total 10</h6>
                    <h6>Used 4</h6>
                    <h6>InHand 6</h6>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.card_body}>
                  <Col>
                    <ReactApexChart
                      className={styles.apex_chart}
                      options={this.state.options3}
                      series={this.state.series3}
                      type="radialBar"
                      height={250}
                    />
                  </Col>

                  <div className={styles.leavesdashboard}>
                    <h4>Sick Leaves</h4>
                    <h6>Total 10</h6>
                    <h6>Used 4</h6>
                    <h6>InHand 6</h6>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </div>

        <hr className="hr-line" />
        <LeavesForm />
      </div>
    );
  }
}

export default LeavesDashboard;
 