import React, { useState, useEffect } from 'react';
import { Card, Form } from 'react-bootstrap';
// import { Redirect } from 'react-router-dom';
import style from './loginPage.module.css';
const LoginPage = () => {
	const [ username, setUsername ] = useState();
	const [ password, setPassword ] = useState();

	useEffect(() => {
		fetch('https://asychrondev.herokuapp.com/api/users')
			.then((response) => response.json())
			.then((data) => console.log(data));
	}, []);

	const clickedbutton = (e) => {
		e.preventDefault();
		if (username === 'a' && password === 'a') {
			window.location.href = '/dashboard';
		} else {
			alert('wrong username and password!');
		}
	};
	return (
		<div className={style.container}>
			<div className="Container h-100 row col justify-content-center align-self-center">
				<Card className={style.Card}>
					<Card.Header className={style.loginHeading}>Asychron-HR</Card.Header>
					<Card.Body>
						<Form onSubmit={clickedbutton} className={style.form}>
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
										name="username"
										value={username}
										autoComplete="off"
										onChange={(e) => setUsername(e.target.value)}
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
										type="password"
										className={`${style.forms} form-control `}
										id="inlineFormpassword"
										placeholder="Password"
										name="password"
										value={password}
										autoComplete="off"
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
							</div>

							<div className="text-center mt-2 footer">
								<button type="submit" className={style.loginButton}>
									Login
								</button>
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
export default LoginPage;
