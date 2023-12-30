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

const summary = `Hello, I'm Akhil, a finance professional with an MBA in Human Resource Management and a Bachelor's degree in Finance. 
With over four years of hands-on experience in accounting, I've cultivated a strong foundation in financial management, strategy formulation, and accounting practices.
Currently, my focus is on mastering key skills in data analysis and machine learning. Proficient in Python, Power BI,Excel, MySql, Tableau,Chat GPT, and MongoDB, I leverage these tools to extract valuable insights from complex datasets. This transition into the dynamic field of data analysis reflects my commitment to staying at the forefront of technology and utilizing it to enhance financial decision-making.`

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
				<h3 className="personalheadtext">Data Analyst</h3>
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