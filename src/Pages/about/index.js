import React from "react";
import {BsInfoCircleFill} from "react-icons/bs";
import PageHeaderContent from '../../comp/headercontent';
import {Animate} from 'react-simple-animate';
import './styles.scss';
import {DiAndroid} from 'react-icons/di';
import {FaDev, FaDatabase,FaPython,} from 'react-icons/fa';

const personalDetails = [
	{
		label:"Name",
		value:"Akhil P M",
	},
	{
		label:"Address",
		value:"Kerala,India",
	},
	{
		label:"Email",
		value:"akhilpm64@outlook.com",
	},
	{
		label:"Contact No",
		value:"+91 9539528226",
	},
	
];

const summary = `Hello! I'm Akhil, a passionate data scientist with a keen interest in unraveling insights from complex datasets. 
My journey in the world of data science is a blend of curiosity, problem-solving, and continuous learning.
I specialize in transforming raw data into meaningful narratives, utilizing advanced statistical analysis, machine learning, and data visualization techniques.
Proficient in programming languages such as Python and Java, I enjoy building predictive models, conducting exploratory data analysis, and creating interactive visualizations.
My goal is to make data-driven decisions more accessible and empower businesses to harness the power of their information.
Explore my portfolio to see a collection of projects that showcase my skills in action.`

const About=()=>{
	return(
		<section id="about" className="about">

		<PageHeaderContent
		headerText = 'About Me'
		icon={<BsInfoCircleFill size={40}/> }
		/>
		<div className="about__content">
			<div className="about__content__personal">
				<Animate
			   	play
			   	duration={1.5}
			   	delay={1}
			   	start={{
			   		transform : 'translateX(-900px)'
			   	}}

			   	end={{
			   		transform : 'translatex(0px)'
			   	}}

			   	>
				<h3 className="personalheadtext">Data Science</h3>
				<p>{summary}</p>
			</Animate>

		<Animate
		   	play
		   	duration={1.5}
		   	delay={1}
		   	start={{
		   		transform : 'translateX(500px)'
		   	}}

		   	end={{
		   		transform : 'translatex(0px)'
		   	}}

		   	>
		<h3 className="personalheadtext">Personal Information</h3>
		<ul>
			{
				personalDetails.map((item,i)=>(
					<li key={i}>
					<span className="title">{item.label}</span>
					<span className="value">{item.value}</span>
					</li>

					))
			}
		</ul>
		</Animate>
		</div>		
		<div className="about__content__service">

		<Animate
		   	play
		   	duration={1.5}
		   	delay={1}
		   	start={{
		   		transform : 'translateX(600px)'
		   	}}

		   	end={{
		   		transform : 'translatex(0px)'
		   	}}

		   	>

		<div className="about__content__service__inner">
		<div>
			<FaDev size={60} color="var(--yellow-theme-main-color)"/>
		</div>

		<div>
		<FaDatabase size={60} color="var(--yellow-theme-main-color)"/>
		</div>

		<div>
		<DiAndroid size={60} color="var(--yellow-theme-main-color)"/>
		</div>

		<div>
		<FaPython size={60} color="var(--yellow-theme-main-color)"/>
		</div>

		</div>
		</Animate>	
		</div>
		</div>
		</section>
	)
}

export default About;