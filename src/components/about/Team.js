import TeamDescription from "./TeamDescription";
import TeamMember from "./TeamMember";
import avatar from "../../img/avatar.jpg";
const Team = () => {
	const employees = [
		{
			name: "Joao Augusto",
			position: "Web Desinger",
			image: avatar,
			face: "facebook.com",
			insta: "instagram.com",
			twitter: "twitter.com",
		},
		{
			name: "Joao Augusto",
			position: "FrontEnd Developer",
			image: avatar,
			face: "facebook.com",
			insta: "instagram.com",
			twitter: "twitter.com",
		},
		{
			name: "Joao Augusto",
			position: "BackEnd Developer",
			image: avatar,
			face: "facebook.com",
			insta: "instagram.com",
			twitter: "twitter.com",
		},
	];

	return (
		<div id="team">
			<TeamDescription />
			<div className="about-team">
				{employees.map((employee) => {
					return <TeamMember employee={employee} />;
				})}
			</div>
		</div>
	);
};

export default Team;
