import Header from "./components/header/Header";
import Services from "./components/services/Services";
import About from "./components/about/About";
const Main = () => {
	return (
		<div className="main">
			<Header />
			<Services />
			<About />
		</div>
	);
};

export default Main;
