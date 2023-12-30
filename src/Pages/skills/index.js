import React from "react";
import {BsInfoCircleFill} from "react-icons/bs";
import PageHeaderContent from '../../comp/headercontent';

import {
  FaDatabase,
  FaChartBar,
  FaCode,
  FaBrain,
  FaPython,
  FaMicrosoft,
  FaTable,
  FaHtml5,
  FaCss3Alt,
  FaDatabase as FaMysql, // Using the database icon for MySQL
} from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


import "./styles.scss";




const Skills=()=>{


	return(
		<section id="skills" className="skills">

		<PageHeaderContent
		headerText = 'My Skills'
		icon={<BsInfoCircleFill size={40}/> }
		/>
		
        <VerticalTimeline>
          <VerticalTimelineElement
            icon={<FaDatabase />}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Data Analysis</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<FaChartBar />}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Data Visualization</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<FaBrain />}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning & Deep Learning</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<FaPython />}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Python</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<FaMicrosoft />}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Microsoft Excel</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<FaTable />}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Power BI</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<FaTable />}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Tableau</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<FaCode />}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">React.js</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<FaHtml5 />}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">HTML</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<FaCss3Alt />}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">CSS</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<FaMysql />}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">MySQL</h3>
          </VerticalTimelineElement>
        </VerticalTimeline> 

		</section>
	)
}

export default Skills;