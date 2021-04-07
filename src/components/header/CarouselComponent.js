import { Carousel } from "react-bootstrap";
import image1 from "../../img/img1.jpg";
import image2 from "../../img/img2.jpg";
import image3 from "../../img/img3.jpg";
import { Link } from "react-scroll";
const CarouselComponent = () => {
	return (
		<Carousel className="carausel-div">
			<Carousel.Item style={{ maxHeight: "600px" }} interval={3000}>
				<img
					// style={{ maxWidth: "900px", backgroundColor: "#222" }}
					className="d-block w-100"
					src={image1}
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3> First slide label </h3>{" "}
					<p> Nulla vitae elit libero, a pharetra augue mollis interdum. </p>{" "}
					<button className="btn"> Contact us </button>{" "}
				</Carousel.Caption>{" "}
			</Carousel.Item>{" "}
			<Carousel.Item style={{ maxHeight: "600px" }} interval={3000}>
				<img
					// style={{ maxWidth: "900px" }}
					className="d-block w-100"
					src={image2}
					alt="Second slide"
				/>
				<Carousel.Caption>
					<h3> Second slide label </h3>{" "}
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>{" "}
					<button className="btn"> Contact us </button>{" "}
				</Carousel.Caption>{" "}
			</Carousel.Item>{" "}
			<Carousel.Item style={{ maxHeight: "600px" }} interval={3000}>
				<img
					// style={{ maxWidth: "900px" }}
					className="d-block w-100"
					src={image3}
					alt="Third slide"
				/>
				<Carousel.Caption>
					<h3> Third slide label </h3>{" "}
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.{" "}
					</p>{" "}
					<Link to="contact" className="btn">
						Contact us{" "}
					</Link>{" "}
				</Carousel.Caption>{" "}
			</Carousel.Item>{" "}
		</Carousel>
	);
};

export default CarouselComponent;
