import React from "react";
import './styles.scss';
import Resume from'../../utils/Akhil.pdf';
import {Animate} from 'react-simple-animate';
import { FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa";

const Home=()=>{

	

	const handleDownloadResume =()=>{
	const link = document.createElement('a');
    
		link.href = Resume;

    
    link.download = 'resume.pdf';

    
    document.body.appendChild(link);

    
    link.click();

    
    document.body.removeChild(link);

	}

	return(
		<div>
		   <section id="home" className="home">
		   	<div className="home__text-wrapper">
		   		<h1>
		   			Hello, I'm Akhil
		   			<br/>
		   			Data Analyst
		   		</h1>
		   	<Animate
		   	play
		   	duration={1.5}
		   	delay={1}
		   	start={{
		   		transform : 'translateY(550px)'
		   	}}

		   	end={{
		   		transform : 'translatex(0px)'
		   	}}

		   	>
			   	<div className="home__contact-me">
			   		<button onClick={handleDownloadResume}>Download Resume</button>
			   	</div>

			   	<div className="social-icons">
              <a href="https://www.linkedin.com/in/akhil-p-m-614b53295" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} color="var(--yellow-theme-main-color)"/>
              </a>
              <a href="https://github.com/Akhilpm156" target="_blank" rel="noopener noreferrer">
                <FaGithub size={40} color="var(--yellow-theme-main-color)"/>
              </a>
              <a href="https://www.kaggle.com/akhilpm1996" target="_blank" rel="noopener noreferrer">
                <FaKaggle size={40} color="var(--yellow-theme-main-color)"/>
              </a>
            </div>

		   	</Animate>
		   	</div>
		   </section>
		</div>
	)
}

export default Home;