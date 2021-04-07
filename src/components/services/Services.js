import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Design from "./Design";
import Description from "./Description";
const Services = () => {
	return (
		<div id="services">
			<Description />
			<div className="services-list">
				<Design />
				<FrontEnd />
				<BackEnd />
			</div>
		</div>
	);
};

export default Services;
