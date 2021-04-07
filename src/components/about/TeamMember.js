import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const TeamMember = ({ employee }) => {
	return (
		<div className="member-div" style={{ backgroundColor: "#333" }}>
			<div className="img-div">
				<img src={employee.image} alt="Member foto" />
			</div>{" "}
			<div className="member-description">
				<h3>{employee.name}</h3> <p>{employee.position}</p>{" "}
			</div>{" "}
			<div className="social-div">
				<a href={employee.linkFace} target="blank">
					<FiFacebook
						className="social-media"
						style={{
							width: "30px",
							height: "30px",

							color: "#ffffff",
							fontSize: "1rem",
							borderRadius: "8px",
						}}
					/>{" "}
				</a>{" "}
				<a href={employee.LinkTwitter} target="blank">
					<FiTwitter
						className="social-media"
						style={{
							width: "30px",
							height: "30px",
							color: "#ffffff",
							fontSize: "1rem",
							borderRadius: "8px",
						}}
					/>{" "}
				</a>{" "}
				<a href={employee.linkInsta} target="blank">
					<FiInstagram
						className="social-media"
						style={{
							width: "30px",
							height: "30px",
							color: "#ffffff",
							fontSize: "1rem",
							borderRadius: "8px",
						}}
					/>{" "}
				</a>{" "}
			</div>{" "}
		</div>
	);
};

export default TeamMember;
