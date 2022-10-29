import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link, animateScroll } from "react-scroll";

const NavegationBar = () => {
	return (
		<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand
				className="logo"
				onClick={() => animateScroll.scrollToTop()}>
				React - Bootstrap{" "}
			</Navbar.Brand>{" "}
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					<Link to="home" smooth={true} duration={1000}>
						<Nav.Link> Home </Nav.Link>{" "}
					</Link>{" "}
					<Link to="services" smooth={true} duration={1000}>
						<Nav.Link> Services </Nav.Link>{" "}
					</Link>{" "}
					<NavDropdown title="About" id="collasible-nav-dropdown">
						<Link to="team" smooth={true} duration={1000}>
							<NavDropdown.Item> Team </NavDropdown.Item>{" "}
						</Link>{" "}
						<Link to="pricing" smooth={true} duration={1000}>
							<NavDropdown.Item> Pricing </NavDropdown.Item>{" "}
						</Link>{" "}
					</NavDropdown>{" "}
					{/* <Link to="contact" smooth={true} duration={1000}>
						<Nav.Link> Contact </Nav.Link>{" "}
					</Link>{" "} */}
				</Nav>{" "}
			</Navbar.Collapse>{" "}
		</Navbar>
	);
};

export default NavegationBar;
