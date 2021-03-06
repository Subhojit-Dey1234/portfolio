import React from "react";

export default function Intro({intro}) {
	return (
		<div className="intro">
			<div className="intro-element">
				<h3 style={{fontWeight:"600"}}>Hi, I am</h3>
				<h2 style={{color:"yellow",fontSize:"40px",position:"relative",top:"-29px"}}>Subhojit Dey</h2>
				<h4 style={{position:"relative",top:"-29px", fontWeight:400}}>
					Web Developer, Graphics Designer, Web Designer and AR Enthusiast
				</h4>
                <button className="button" onClick={()=>{
					intro.current.scrollIntoView({
						behavior: "smooth", 
					})
				}}>My Projects</button>
			</div>
		</div>
        // </Tilt>
	);
}
