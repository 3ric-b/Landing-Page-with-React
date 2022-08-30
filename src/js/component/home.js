import React from "react";
import { Navbar } from "./navbar";
import { Card } from "./card";
import { Jumbotron } from "./jumbotron";
import { Footer } from "./footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="container-fluid ">
				<div className="row">
					<div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
						<Card resource="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lectus gravida, mollis diam luctus, facilisis libero. Ut semper vulputate felis at ornare. Mauris in velit nulla. In sit amet." />
					</div>
					<div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
						<Card resource="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id urna non velit bibendum fringilla." />
					</div>
					<div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
						<Card resource="Lorem ipsum dolor sit amet, consectetur adipiscing elit nec." />
					</div>
					<div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
						<Card resource="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lectus gravida, mollis diam luctus, facilisis libero. Ut semper vulputate felis at ornare. Mauris in velit nulla. In sit amet." />
					</div>
				</div>
			</div>
			<footer className="bg-dark text-center text-white">
				<p className="p-3">Copyright Stefy</p>
			</footer>
		</div>
	);
};

export default Home;
