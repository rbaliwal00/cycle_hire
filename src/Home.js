import React from 'react';
import { NavLink } from 'react-router-dom'
import './Home.css';
import nextbike from './nextbike.jpg';
import stand from './stand.jpg';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';
import Map from './Map';
import helmet from './helmet.svg';
import traffic from './traffic.svg';
import sober from './sober.svg';
import doors from './doors.svg';
import sidewalk from './sidewalk.svg';
import signals from './signals.svg';
import turns from './turns.svg';
import intersections  from './intersections.svg';
import pedistrians from './pedistrians.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Home = () => {
	return(
		<div>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

	<div class="row authentication">
		<div class="col-9"></div>
	    <div class="col-3">
	      <NavLink  to="http://localhost:3001/login"><button class="col-6 btn btn-outline-success btn-lg">Login</button></NavLink>
	      <NavLink to="http://localhost:3001/signup"><button class="col-6 btn btn-outline-success btn-lg">Sign Up</button>	</NavLink>
	    </div>
	</div>
	<div class="navigationbar">
		<Navbar expand="lg">
		  <Navbar.Brand href="#home"><h1 class="navbar-brand">avsr<hr class="d-block d-lg-none"></hr><h1 class="d-block d-lg-none">bikeshare</h1></h1></Navbar.Brand>
		  <h1 class="vl"></h1>
		  <Navbar.Brand href="#home"  class="nav-link navbar-brand1"><h1 class="navbar-brand1">bikeshare</h1></Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
		    <Nav className="mr-auto">
		      <Nav.Link href="#home"><h1 class="item">How it Works</h1></Nav.Link>
		      <Nav.Link href="#home"><h1 class="item">Pricing</h1></Nav.Link>
		      <Nav.Link href="#home"><h1 class="item">Find a Bike</h1></Nav.Link>
		      <Nav.Link href="#home"><h1 class="item">Exlpore</h1></Nav.Link>
		      <Nav.Link href="#home"><h1 class="item">Contact Us</h1></Nav.Link>
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
	</div>
	
	<div class="mainimg">
		<img src={nextbike} alt="nextbike" class="main-img center" />
	</div>
	<div class="quote col-lg-4 col-sm-10">
		<p>AVSR Bike Share offers 24/7 convenient 
		access to 50 bikes and 10 stations across 
		100 sq km of the city. Whether you are commuting 
		or exploring the city with friends and family,
		bike share is fun, flexible 
		and cost-effective way to navigate around. 
		</p>	
	</div>
	<div class="works center row justify-content-evenly">
		<div class="col-12"><h2>How It Works?</h2></div>
		<div class="col-lg-3 col-md-12 center"><h3>Register</h3>
			<div><h4>Create an Account</h4></div>
			<div>visit avsr.com</div>
		</div>
			<div class="col-lg-3 col-md-12 center"><h3>Ride</h3>
				<div><h4>Check out a bike</h4></div>
				<div>Press ENTER and choose</div>
				<div>1. Tap membership, enter PIN</div>
				<div>2. Enter Account #, enter PIN</div>
			</div>
			<div class="col-lg-3 col-md-12 center"><h3>Return</h3>
				<div><h4>Return to any Stand</h4></div>
				<div>Check Out</div>
			</div>
	</div>
	<div class="pricing center justify-content-evenly row"><h2>Pricing</h2>
		<div class="col-lg-2 col-md-12 center">
			<h3>24-Hour Pass</h3>
			<div>
				<p>
					Unlimited 30 minute rides
					Take as many rides as you want in 24 hours* with the first 30 minutes of each ride included. 
					Rides longer than 30 minutes incur overage fees.
					Overage fees:
					Each additional 30 minutes: + $6
					Ex. 90 minute ride = $12 in overages.
					*Starts upon completion of payment. All charges subject to tax.
				</p>
			</div>
		</div>
		<div class="col-lg-2 col-md-12 center">
			<h3>30-Day Pass</h3>
			<div>
				<p>
					Unlimited 30 minute rides
					Take as many rides as you want in 24 hours* with the first 30 minutes of each ride included. 
					Rides longer than 30 minutes incur overage fees.
					Overage fees:
					Each additional 30 minutes: + $6
					Ex. 90 minute ride = $12 in overages.
					*Starts upon completion of payment. All charges subject to tax.
				</p>
			</div>
		</div>
		<div class="col-lg-2 col-md-12 center">
			<h3>Annual Membership</h3>
			<div>
				<p>
					Unlimited 30 minute rides
					Take as many rides as you want in 24 hours* with the first 30 minutes of each ride included. 
					Rides longer than 30 minutes incur overage fees.
					Overage fees:
					Each additional 30 minutes: + $6
					Ex. 90 minute ride = $12 in overages.
					*Starts upon completion of payment. All charges subject to tax.
				</p>
			</div>
		</div>
	</div>
	<div class="bottom-img">
		<img src={stand} alt="nextbike" class="main-img center" />
	</div>
	<div class="findabike"><h2 class="center">Find A Bike</h2>
	<div id="map" class="map"><Map center={{ lat: 31.3534007, lng: 75.4586767 }} zoom={16} /></div>
		
	</div>
		<script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCImGXbOsjek6-nr7sP8iPb9IRHvaB7N8E&callback=initMap&libraries=&v=weekly"
      async
    ></script>

    <div class="container-fluid ride-safe">
    	<div class="container">
    		<section id="block-block-16" class="block block-block clearfix">
    			<h2 class="block-title">Ride Safe</h2>
    			<div id="bloc-ridesafe" class="row">
    				<div class="bloc-icontext col-sm-6 col-md-4">
                		<div class="circle-icon" id="wear-a-helmet">
                    		<img src={helmet} alt="Icon wear a helmet" title="Wear a Helmet" class="safe"/>
                		</div>
                		<h3 class="head">WEAR A HELMET</h3>
            		</div>
            		<div class="bloc-icontext col-sm-6 col-md-4">
                		<div class="circle-icon" id="wear-a-helmet">
                    		<img src={traffic} alt="Icon wear a helmet" title="Wear a Helmet" class="safe"/>
                		</div>
                		<h3 class="head">RIDE WITH TRAFFIC</h3>
            		</div>
            		<div class="bloc-icontext col-sm-6 col-md-4">
                		<div class="circle-icon" id="wear-a-helmet">
                    		<img src={sober} alt="Icon wear a helmet" title="Wear a Helmet" class="safe"/>
                		</div>
                		<h3 class="head">RIDE SOBER</h3>
            		</div>
            		<div class="bloc-icontext col-sm-6 col-md-4">
                		<div class="circle-icon" id="wear-a-helmet">
                    		<img src={doors} alt="Icon wear a helmet" title="Wear a Helmet" class="safe"/>
                		</div>
                		<h3 class="head">WATCH CAR DOORS</h3>
            		</div>
            		<div class="bloc-icontext col-sm-6 col-md-4">
                		<div class="circle-icon" id="wear-a-helmet">
                    		<img src={sidewalk} alt="Icon wear a helmet" title="Wear a Helmet" class="safe"/>
                		</div>
                		<h3 class="head">STAY OFF SIDEWALK</h3>
            		</div>
            		<div class="bloc-icontext col-sm-6 col-md-4">
                		<div class="circle-icon" id="wear-a-helmet">
                    		<img src={signals} alt="Icon wear a helmet" title="Wear a Helmet" class="safe"/>
                		</div>
                		<h3 class="head">OBEY SIGNS & SIGNALS</h3>
            		</div>
            		<div class="bloc-icontext col-sm-6 col-md-4">
                		<div class="circle-icon" id="wear-a-helmet">
                    		<img src={turns} alt="Icon wear a helmet" title="Wear a Helmet" class="safe"/>
                		</div>
                		<h3 class="head">SIGNAL TURNS</h3>
            		</div>
            		<div class="bloc-icontext col-sm-6 col-md-4">
                		<div class="circle-icon" id="wear-a-helmet">
                    		<img src={intersections} alt="Icon wear a helmet" title="Wear a Helmet" class="safe"/>
                		</div>
                		<h3 class="head">CAREFUL AT INTERSECTIONS</h3>
            		</div>
            		<div class="bloc-icontext col-sm-6 col-md-4">
                		<div class="circle-icon" id="wear-a-helmet">
                    		<img src={pedistrians} alt="Icon wear a helmet" title="Wear a Helmet" class="safe"/>
                		</div>
                		<h3 class="head">YIELD TO PEDISTRIANS</h3>
            		</div>
    			</div>
    		</section>
    	</div>
    </div>

	<div class="About justify-content-evenly center"><h2 class="center">About Us</h2>
		<div>Contact Us</div>
		<div>FAQ</div>
		<div>MEMBERS PERK</div>
		<div>EVENTS</div>
		<div>LOCAL BIKE SHOPS</div>
	</div>
	<div class="center">
		<img src={facebook} />
		<img src={instagram} />
		<img src={twitter} />
	</div>
		</div>
	)
};

export default Home;