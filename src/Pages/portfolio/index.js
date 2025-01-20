import React from "react";
import {useState} from "react";
import {BsInfoCircleFill} from "react-icons/bs";
import PageHeaderContent from '../../comp/headercontent';
import ImageOne from '../../images/image1.jpeg';
import ImageTwo from '../../images/image2.jfif';
import ImageThree from '../../images/image3.jpg';
import ImageFour from '../../images/image4.jpg';
import ImageFive from '../../images/image5.jpg';
import ImageSix from '../../images/image6.jpg';
import ImageSeven from '../../images/image7.jpg';
import ImageEight from '../../images/image8.PNG';
import ImageNine from '../../images/image9.PNG';
import ImageTen from '../../images/image10.png';
import Image11 from '../../images/image11.jpg';
import Image12 from '../../images/image12.jpg';
import Image13 from '../../images/image13.png';
import Image14 from '../../images/image14.jpg';
import Image15 from '../../images/image15.jpg';
import Image16 from '../../images/image16.jpg';
import Image17 from '../../images/image17.jpg';
import Image18 from '../../images/heart.jfif';
import Image19 from '../../images/medicalchatbot.jpg';
import Image20 from '../../images/awsdeploy.jfif';
import Image21 from '../../images/pdfchatbot.jpg';


import "./styles.scss";

const portfolioData = [
	
	
	{
		id :3,
		title:"Brain Cancer Classification",
		name : "AWS Deployment with Mlflow and DVC",
		image :Image20,
		link :'https://github.com/Akhilpm156/Brain-Cancer-Classification-using-MLflow-DVC'
	},
	{
		id :3,
		title:"Medical Chatbot",
		name : "RAG Based Medical Chatbot",
		image :Image19,
		link :'https://github.com/Akhilpm156/End-to-end-chatbot-Llama3'
	},
	{
		id :3,
		title:"PDF ChatBot",
		name : "RAG Based Project using LLM ",
		image :Image21,
		link :'https://github.com/Akhilpm156/pdf_chat_gemini_pro_llm'
	},
	{
		id :3,
		title:" Heart Diseases Classification",
		name : "End to End ML Project With Docker",
		image :Image18,
		link :'https://github.com/Akhilpm156/Machine_Learning_Project_With_docker'
	},
	{
		id :3,
		title:" Microsoft Stock Price Prediction",
		name : "Time Series - ARIMA & SARIMA",
		image :Image17,
		link :'https://www.kaggle.com/code/akhilpm1996/time-series-arima-and-sarimax-models'
	},
	{
		id :3,
		title:"Sentiment Analysis",
		name : "RNN - Sentiment Analysis",
		image :ImageTwo,
		link :'https://github.com/Akhilpm156/Python_Projects/tree/df5493134f4582ed9c3cdb174bd729ad38ec5e1d/NLP'
	},
	{
		id: 3,
		title:"Rice Classification",
		name : "VGG-16 - CNN",
		image : Image14,
		link :'https://www.kaggle.com/code/akhilpm1996/rice-classification-by-using-vggnet16'
	},
	{
		id: 3,
		title:"Named Entity Recognition",
		name : "NLP - NER",
		image : Image15,
		link :'https://www.kaggle.com/code/akhilpm1996/named-entity-recognition-simple-transformers'
	},
	{
		id: 3,
		title:"Text summarization",
		name : "NLP - Text summarization",
		image : Image16,
		link :'https://github.com/Akhilpm156/NLP-Project-Text-Summarizer'
	},
	{
		id: 3,
		title:"Customer Churn prediction",
		name : "ANN - Customer Churn prediction",
		image : ImageThree,
		link :'https://github.com/Akhilpm156/Python_Projects/tree/df5493134f4582ed9c3cdb174bd729ad38ec5e1d/Churn%20prediction%20Ann'
	},
	{
		id :3,
		title:"Object Dectection and Tracking",
		name : "YOLO V8 - Vehicles Count",
		image : ImageOne,
		link :'https://github.com/Akhilpm156/Python_Projects/tree/b45c3621251e834ab7784a7de07ea48b9948309c/Object%20Detection%20car%20count%20project'
	},
	{
		id: 3,
		title:"Tomato_Leaf_Disease_Classification",
		name : "Convolutional Neural Networks",
		image : ImageFour,
		link :'https://github.com/Akhilpm156/Tomato_Leaf_Disease_Classification'
	},
	{
		id: 3,
		title:"Customer Segmentation",
		name : "K-Means Clustering",
		image : ImageFive,
		link :'https://github.com/Akhilpm156/Python_Projects/tree/df5493134f4582ed9c3cdb174bd729ad38ec5e1d/K-means%20Customer%20Segmentation'
	},
	{
		id: 3,
		title:"Cosine Similarity",
		name : "Recommender System",
		image : ImageSix,
		link :'https://github.com/Akhilpm156/Python_Projects/tree/df5493134f4582ed9c3cdb174bd729ad38ec5e1d/Recommendation%20system'
	},
	{
		id: 3,
		title:"Linear Regression",
		name : "Home Price Prediction",
		image : ImageSeven,
		link :'https://github.com/Akhilpm156/Python_Projects/tree/df5493134f4582ed9c3cdb174bd729ad38ec5e1d/home%20price%20Predict'
	},
	{
		id: 2,
		title:"Supply Chain Analysis",
		name : "PowerBI and MySql",
		image : ImageEight,
		link :'https://github.com/Akhilpm156/Projects_PowerBI-Excel-Tableau/tree/ca4879b524773e339b1b6dc30fee169246ab7b34/Supply%20chain%20data%20analytics-FMCG'
	},
	{
		id: 2,
		title:"Revenue Insights",
		name : "PowerBI and Excel",
		image : ImageNine,
		link :'https://github.com/Akhilpm156/Projects_PowerBI-Excel-Tableau/tree/ca4879b524773e339b1b6dc30fee169246ab7b34/Revenue%20insights%20in%20hospitality%20domain'
	},
	{
		id: 2,
		title:"Sales Insights",
		name : "MySql & PowerBI",
		image : ImageTen,
		link :'https://github.com/Akhilpm156/Projects_PowerBI-Excel-Tableau/tree/ca4879b524773e339b1b6dc30fee169246ab7b34/Sales%20insights%20codebasic'
	},
	{
		id: 2,
		title:"Amazon Sales Analysis",
		name : "Python",
		image : Image11,
		link :'https://github.com/Akhilpm156/Python_Projects/tree/df5493134f4582ed9c3cdb174bd729ad38ec5e1d/Amazon%20Sales%20Analysis'
	},
	{
		id: 2,
		title:"Web Scraping",
		name : "Python & BeautifulSoup",
		image : Image12,
		link :'https://github.com/Akhilpm156/Python_Projects/tree/df5493134f4582ed9c3cdb174bd729ad38ec5e1d/web%20scraping%20project'
	},
	{
		id: 2,
		title:"HR Analytics",
		name : "Tableau",
		image : Image13,
		link :'https://github.com/Akhilpm156/Projects_PowerBI-Excel-Tableau/tree/ca4879b524773e339b1b6dc30fee169246ab7b34/HR%20ANALYTICS'
	},
	

]


const filterdata = [
	{
		filterId : 1,
		label : 'All'
	},
	{
		filterId : 2,
		label : 'Data Analysis'
	},
	{
		filterId : 3,
		label : 'Data Science',
	}
]

const Portfolio=()=>{

const [filteredValue,setFilteredValue] = useState(1);
const [hoverValue,setHoverValue] = useState(null);

function handleFilter(currentId){
	setFilteredValue(currentId)
};

function handleHover(index){
	setHoverValue(index)
}

const filtereditems = filteredValue === 1 ? portfolioData :
portfolioData.filter(item=>item.id === filteredValue)

	return(
		<section id="portfolio" className="portfolio">

		<PageHeaderContent
		headerText = 'My Portfolio'
		icon={<BsInfoCircleFill size={40}/> }
		/>

		<div className = "portfolio__content">
			
			<ul className="portfolio__content__filter">

				{
					filterdata.map(item=>(
						<li className={item.filterId === filteredValue ? 'active' : ''} onClick = {()=>handleFilter(item.filterId)}key={item.filterId}>

							{
								item.label
							}

						</li>
						))
				}

			</ul>
			<div className="portfolio__content__cards">

				{
					filtereditems.map((item,index)=>(
							<div className="portfolio__content__cards__items" key={`cardItem${item.name.trim()}` }
							onMouseEnter={()=>handleHover(index)}
							onMouseLeave={()=>handleHover(null)}
							>

								<div className="portfolio__content__cards__items__img-wrapper">

									<a href="#">
										<img alt="#" src={item.image}/>
									</a>

								</div>
									<div className="overlay">

									{
										index === hoverValue && (
											<div>
												<p>{item.title}</p>
												<button onClick={() => window.location.href = item.link}>Visit</button>
											</div>

											
										)
									}

									</div>

									<div className="name">
								        <p>{item.name}</p>
								      </div>
							</div>
						))
				}

			</div>
		</div>
		</section>
	)
}

export default Portfolio;