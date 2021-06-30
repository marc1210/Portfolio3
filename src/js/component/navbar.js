import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
export const Navbar = () => {
	return (
		<header role="banner">
			<img
				id="logo-main"
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png"
				width={200}
				alt="Logo Thing main logo"
			/>
			<div>
				<div className="text-center center-block">
					<p className="txt-railway">- JUAN HERNADEZ PHOTOGRAPHY -</p>
					<br />
					<a href="https://www.facebook.com/bootsnipp">
						<i id="social-fb" className="fa fa-facebook-square fa-3x social" />
					</a>
					<a href="https://twitter.com/bootsnipp">
						<i id="social-tw" className="fa fa-twitter-square fa-3x social" />
					</a>
					<a href="https://plus.google.com/+Bootsnipp-page">
						<i id="social-gp" className="fa fa-google-plus-square fa-3x social" />
					</a>
					<a href="mailto:bootsnipp@gmail.com">
						<i id="social-em" className="fa fa-envelope-square fa-3x social" />
					</a>
				</div>

				{/* Social Footer, Single Coloured */}
				{/* Include Font Awesome Stylesheet in Header */}
				<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
				{/* // */}
			</div>

			<div>
				<header>
					{/*- Navbar -*/}
					<nav className="navbar navbar-expand-lg">
						<div className="container">
							<a className="navbar-brand text-white" href="#">
								<i className="fas fa-camera-retro" />
								Juan H. Photography
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#nvbCollapse"
								aria-controls="nvbCollapse">
								<span className="navbar-toggler-icon" />
							</button>
							<div className="collapse navbar-collapse" id="nvbCollapse">
								<ul className="navbar-nav ml-auto">
									<li className="nav-item pl-1">
										<a className="nav-link" href="/">
											<i className="fa fa-home fa-fw mr-1" />
											Home
										</a>
									</li>
									<li className="nav-item active pl-1">
										<a className="nav-link" href="#">
											<i className="fa fa-th-list fa-fw mr-1" />
											Blog
										</a>
									</li>
									<li className="nav-item pl-1">
										<a className="nav-link" href="/gallery">
											<i className="fa fa-info-circle fa-fw mr-1" />
											Gallery
										</a>
									</li>
									{/* <li className="nav-item pl-1">
									<a className="nav-link" href="/contact">
										<i className="fa fa-phone fa-fw fa-rotate-180 mr-1" />
										Contact
									</a>
								</li> */}
									<li className="nav-item pl-1">
										<a className="nav-link" href="/demo">
											<i className="fa fa-user-plus fa-fw mr-1" />
											About me
										</a>
									</li>
									<li className="nav-item pl-1">
										<a className="nav-link" href="#">
											<i className="fa fa-sign-in fa-fw mr-1" />
											Other links
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					{/*# Navbar #*/}
				</header>
				{/*- Footer -*/}
			</div>
		</header>
	);
};
