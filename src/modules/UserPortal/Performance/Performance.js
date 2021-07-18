import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import styles from './performance.module.css';
import ReactApexChart from 'react-apexcharts';

class Performance extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series1: [69],
			series2: [33],
			series3: [52],
			series4: [80],

			options1: {
				chart: {
					height: 150,
					type: 'radialBar',
				},
				plotOptions: {
					radialBar: {
						hollow: {
							size: '55%'
						},
						dataLabels: {
							name: {
								offsetY: -10,
								show: true,
								color: "Black",
								fontSize: "14px"
							},
						},
					}
				},

				fill: {
					background: 'red',
					type: 'gradient',
					gradient: {
						shade: 'dark',
						type: 'vertical',
						gradientToColors: ['', '', '', ''],

						stops: [0, 100]
					}
				},
				padding: {
					top: '0px',
					right: '0px',
					bottom: '0px',
					left: '0px'
				},
				colors: ['red'],
				labels: ['Review']
			},

			options2: {
				chart: {
					height: 150,
					type: 'radialBar'
				},
				plotOptions: {
					radialBar: {
						hollow: {
							size: '55%'
						},
						dataLabels: {
							name: {
								offsetY: -10,
								show: true,
								color: "Black",
								fontSize: "15px"
							},
						},
					}
				},
				fill: {
					background: 'yellow',
					type: 'gradient',
					gradient: {
						shade: 'dark',
						type: 'vertical',
						gradientToColors: ['', '', '', ''],

						stops: [0, 100]
					}
				},
				padding: {
					top: '0px',
					right: '0px',
					bottom: '0px',
					left: '0px'
				},

				colors: ['#F2872C'],
				labels: ['Review']
			},
			options3: {
				chart: {
					height: 150,
					type: 'radialBar'

				},
				plotOptions: {
					radialBar: {
						hollow: {
							size: '55%'
						},
						dataLabels: {
							name: {
								offsetY: -10,
								show: true,
								color: "Black",
								fontSize: "15px"
							},
						},
					}
				},
				fill: {
					background: 'green',
					type: 'gradient',
					gradient: {
						shade: 'dark',
						type: 'vertical',
						gradientToColors: ['', '', '', ''],

						stops: [0, 100]
					}
				},
				padding: {
					top: '0px',
					right: '0px',
					bottom: '0px',
					left: '0px'
				},

				colors: ['#64E986'],
				labels: ['Review']
			},

			options4: {
				chart: {
					height: 150,
					type: 'radialBar',
				},
				plotOptions: {
					radialBar: {
						hollow: {
							size: '55%'
						},
						dataLabels: {
							name: {
								offsetY: -10,
								show: true,
								color: "Black",
								fontSize: "14px"
							},
						},
					}
				},

				fill: {
					background: 'orange',
					type: 'gradient',
					gradient: {
						shade: 'dark',
						type: 'vertical',
						gradientToColors: ['', '', '', ''],

						stops: [0, 100]
					}
				},
				padding: {
					top: '0px',
					right: '0px',
					bottom: '0px',
					left: '0px'
				},
				colors: ['orange'],
				labels: ['Review']
			},

		};
	}

	render() {
		return (
			<div className="jumbotron jumbo-form">
				<h5 className="page-heading">Performance</h5>
				<hr className="hr-line" />

				<div className="text-center">
					<div className={styles.CardArea} id="chart">
						<div className={styles.row}>

							<div className={styles.card}>
								<div className={styles['card-body']}>
									<div className="col-sm">
										<ReactApexChart
											className={styles.apex_chart}
											options={this.state.options1}
											series={this.state.series1}
											type="radialBar"
											height={250}
										/>
									</div>
									<h4>Manager Review</h4>
								</div>
							</div>

							<div className={styles.card}>
								<div className={styles['card-body']}>
									<div className="col-sm">
										<ReactApexChart
											className={styles.apex_chart}
											options={this.state.options2}
											series={this.state.series2}
											type="radialBar"
											height={250}
										/></div>
									<h4>Team Review</h4>
								</div>
							</div>

							<div className={styles.card}>
								<div className={styles['card-body']}>
									<div className="col-sm">
										<ReactApexChart
											className={styles.apex_chart}
											options={this.state.options3}
											series={this.state.series3}
											type="radialBar"
											height={250}
										/></div>
									<h4>HR Review</h4>
								</div>
							</div>

							<div className={styles.card}>
								<div className={styles['card-body']}>
									<div className="col-sm">
										<ReactApexChart
											className={styles.apex_chart}
											options={this.state.options4}
											series={this.state.series4}
											type="radialBar"
											height={250}
										/></div>
									<h4>Overall Performance</h4>
								</div>
							</div>
						</div>
					</div>
				</div>

				<hr className="hr-line" />
				<div className="text-center center" >
					<Row>

						<div className={styles.DataBox}>

						<div className={styles.card2}>
							<div className="card">
								<div className="card-body">
									<div className={styles.TextEffect}>
										<h5 className={styles.ReviewHead}>INDICATORS </h5>
										<label>Escallations: 5</label>
										<label>Dues: 2  </label>
										<label>Compliance: 4 </label>
										<label>Coding Standardes : 10</label>
									</div>
								</div>
							</div></div>
				
								<div className={styles.card2}>
									<div className="card">
										<div className="card-body">
											<div className={styles.TextEffect}>
												<h5 className={styles.ReviewHead}>GOALS </h5>
												<label  >Technical Goals: 40%</label>
												<label  >Managerial Goal : 20%  </label>
												<label  >Team Goals : 40%</label>
												<label  >Feedback Goal : 60%</label>
											</div>
										</div>
									</div>
								</div>
							</div>
			

					</Row>
				</div>
			</div>

		);
	}
}
export default Performance;

