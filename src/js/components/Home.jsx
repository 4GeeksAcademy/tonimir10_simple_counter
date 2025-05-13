import React, { useEffect } from "react";
import Box from "./Box.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";

//create your first component
const Home = () => {
 const [timer, setTimer] = useState(0);
 const [active, setActive] = useState(false);

	useEffect(() => {
		if(active){
			const interval = setInterval(() => {
			setTimer(num => num + 1);
		}, 1000);
		return () => clearInterval(interval);
		}
		
		
	},[timer,active])
	
	const resetTimer = () =>{
		setTimer(value=> value = 0);
	}

	return (
		<>
		<div className="text-center">
			<div className="counter">
				<Box number="⏱️"/>
			<Box number={Math.floor(timer/100000)%10}/>
			<Box number={Math.floor(timer/10000)%10}/>
			<Box number={Math.floor(timer/1000)%10}/>
			<Box number={Math.floor(timer/100)%10}/>
			<Box number={Math.floor(timer/10)%10}/>
			<Box number={Math.floor(timer%10)}/>
			</div>
            
			<div className="buttons-container">
				<button onClick={() => setActive(true)} className="mx-2 btn btn-success">Empezar</button>
				<button onClick={() => setActive(false)} className="mx-2 btn btn-danger">Parar</button>
				<button onClick={resetTimer} className="mx-2 btn btn-dark">Reset</button>
			</div>

		</div>

		</>
	);
};

export default Home;