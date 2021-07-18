import React from 'react';
import { Card, Form } from 'react-bootstrap';
import style from './loginPage.module.css';

const loginPage = () => {
	return (
		<div className={style.container}>
			<div className="Container h-100 row col justify-content-center align-self-center">
				<Card className={style.Card}>
					<Card.Header className={style.loginHeading}>Asychron-HR</Card.Header>
					<Card.Body>
						<Form className={style.form}>
							<div>
								<div className="input-group mt-3">
									<div className="input-group-prepend">
										<div className="input-group-text bg-white">
											<div className="fa fa-user icon" />
										</div>
									</div>
									<input
										type="text"
										className={`${style.forms} form-control `}
										id="inlineFormInputGroup"
										placeholder="Username"
									/>
								</div>
							</div>
							<div>
								<div className="input-group mt-4">
									<div className="input-group-prepend">
										<div className="input-group-text bg-white">
											<div className="fa fa-lock icon" />
										</div>
									</div>
									<input
										type="text"
										className={`${style.forms} form-control `}
										id="inlineFormInputGroup"
										placeholder="Password"
									/>
								</div>
							</div>

							<div className="text-center mt-2 footer">
								<button className={style.loginButton}>Login</button>
							</div>
							<hr className="hr-line" />
							<div className={style.query}>
								<div className={style.reset}>
									<a href="/">Reset</a>
									<div className={style.forgot}>
										<a href="/"> Forgot Password ?</a>
									</div>
								</div>
							</div>
						</Form>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};
export default loginPage;
