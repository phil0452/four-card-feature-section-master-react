import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styling.css'
import supervisor from './cards/images/icon-supervisor.png'
import Card from './cards/card.jsx'
import App from './App.jsx'

const supervisorCard = {
  id: "supervisor",
  style: "card",
  title: "Supervisor",
  text: "Monitors activity to identify project roadblocks",
  image: "./src/cards/images/icon-supervisor.png"
};

const builderCard = {
  id: "builder",
  style: "card",
  title: "Team Builder",
  text: "Scans our talent network to create the optimal team for your project",
  image: "./src/cards/images/icon-team-builder.png"
};

const karmaCard = {
  id: "karma",
  style: "card",
  title: "Karma",
  text: "Regularly evaluates our talent to ensure quality",
  image: "./src/cards/images/icon-karma.png"
};

const calculatorCard = {
  id: "calculator",
  style: "card",
  title: "Calculator",
  text: "Uses data from past projects to provide better delivery estimates",
  image: "./src/cards/images/icon-calculator.png"
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <div id="main-content">
    <div id="title-container">
      <div className="title">Reliable, efficient delivery</div>
      <div className="title bold">Powered by Technology</div>
      <p>
        Our Artificial Intelligence powered tools use millions of project data points 
        to ensure that your project is successful
      </p>
    </div>
    
    <div id="four-cards">
		<div className="column">
			<Card cardInfo={supervisorCard} />
		</div>
		<div className="column 2-card">
			<Card cardInfo={builderCard} />
			<Card cardInfo={karmaCard} />
		</div>     
      
		<div className="column">
			<Card cardInfo={calculatorCard} />
		</div>
    </div>
  </div>
  
  <footer>
    <p className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Philip Davide - phil0452@yahoo.com</a>.
    </p>
  </footer>
  </StrictMode>,
)
