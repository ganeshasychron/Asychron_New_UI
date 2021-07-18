import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Col, Row } from 'react-bootstrap';
import style from './UserProgress.module.css';

class ApexChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series1: [ 52 ],
			series2: [ 42 ],
			series3: [ 52 ],
			series4: [ 42 ],

			options1: {
				chart: {
					height: 150,
					type: 'radialBar'
				},
				plotOptions: {
					radialBar: {
						hollow: {
							size: '50%'
						},
						dataLabels: {
							name: {
								offsetY: 0,
								show: true,
								color: 'Black',
								fontSize: '15px'
							}
						}
					}
				},
				fill: {
					background: 'green',
					type: 'gradient',
					gradient: {
						shade: 'dark',
						type: 'vertical',
						gradientToColors: [ '', '', '', '' ],

						stops: [ 0, 100 ]
					}
				},
				padding: {
					top: '0px',
					right: '0px',
					bottom: '0px',
					left: '0px'
				},
				colors: [ '#ff1a1a' ],
				labels: [ 'Task' ]
			},

			options2: {
				chart: {
					height: 150,
					type: 'radialBar'
				},
				plotOptions: {
					radialBar: {
						hollow: {
							size: '50%'
						},
						dataLabels: {
							name: {
								offsetY: 0,
								show: true,
								color: 'Black',
								fontSize: '15px'
							}
						}
					}
				},
				fill: {
					background: 'green',
					type: 'gradient',
					gradient: {
						shade: 'dark',
						type: 'vertical',
						gradientToColors: [ '', '', '', '' ],

						stops: [ 0, 100 ]
					}
				},
				padding: {
					top: '0px',
					right: '0px',
					bottom: '0px',
					left: '0px'
				},

				colors: [ '#990000' ],
				labels: [ 'Performance' ]
			},
			options3: {
				chart: {
					height: 150,
					type: 'radialBar'
				},
				plotOptions: {
					radialBar: {
						hollow: {
							size: '50%'
						},
						dataLabels: {
							name: {
								offsetY: 0,
								show: true,
								color: 'Black',
								fontSize: '15px'
							}
						}
					}
				},
				fill: {
					background: 'green',
					type: 'gradient',
					gradient: {
						shade: 'dark',
						type: 'vertical',
						gradientToColors: [ '', '', '', '' ],

						stops: [ 0, 100 ]
					}
				},
				padding: {
					top: '0px',
					right: '0px',
					bottom: '0px',
					left: '0px'
				},

				colors: [ '#00e68a' ],
				labels: [ 'Leaves' ]
			},
			options4: {
				chart: {
					height: 150,
					type: 'radialBar'
				},
				plotOptions: {
					radialBar: {
						hollow: {
							size: '50%'
						},
						dataLabels: {
							name: {
								offsetY: 0,
								show: true,
								color: 'Black',
								fontSize: '15px'
							}
						}
					}
				},
				fill: {
					background: 'green',
					type: 'gradient',
					gradient: {
						shade: 'dark',
						type: 'vertical',
						gradientToColors: [ '', '', '', '' ],

						stops: [ 0, 100 ]
					}
				},
				padding: {
					top: '0px',
					right: '0px',
					bottom: '0px',
					left: '0px'
				},

				colors: [ '#FFC300' ],
				labels: [ 'Status' ]
			}
		};
	}
	render() {
		return (
			<div className={style.circle} id="chart">
				<Row>
					<Col className={style.circles}>
						<ReactApexChart
							options={this.state.options1}
							series={this.state.series1}
							type="radialBar"
							height={250}
						/>
					</Col>
					<Col className={style.circles}>
						<ReactApexChart
							options={this.state.options2}
							series={this.state.series2}
							type="radialBar"
							height={250}
						/>
					</Col>
				</Row>
				<Row>
					<Col className={style.circles}>
						<ReactApexChart
							options={this.state.options3}
							series={this.state.series3}
							type="radialBar"
							height={250}
						/>
					</Col>
					<Col className={style.circles}>
						<ReactApexChart
							options={this.state.options4}
							series={this.state.series4}
							type="radialBar"
							height={250}
						/>
					</Col>
				</Row>
			</div>
		);
	}
}
export default ApexChart;
