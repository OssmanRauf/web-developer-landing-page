import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import About from "./components/about/About";

function App() {
	return (
		<div className="app">
			<Header />
			<Services />
			<About />
		</div>
	);
}
export default App;
