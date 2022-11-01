import React, { useState } from "react";


const Home = () => {
	const [color, setColor] = useState("red")
	return (
		<div className="app">
			<div className= "cable">
			</div>
			<div className="traffic-light">
				<div className={color == "red" ? 'red light glow' : 'red light'} onClick={()=> setColor("red")}></div>
				<div className={color == "yellow" ? 'yellow light glow' : 'yellow light'} onClick={()=> setColor("yellow")}></div>
				<div className={color == "green" ? 'green light glow' : 'green light'} onClick={()=> setColor("green")}></div>
			</div>
		</div>
	);
};

export default Home;
