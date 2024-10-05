import Image from "next/image";
import Script from "next/script";
import AboutMe from "./pages/aboutme";
import css from "styled-jsx/css";

export default function Home() {
  return (
   <>
    <style
  dangerouslySetInnerHTML={{
    __html:
      "\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: Arial;\n}\n\n.header {\n  text-align: center;\n  padding: 32px;\n}\n\n.button {\n  background-color: #5f3e4f; /* Green */\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n  -webkit-transition-duration: 0.4s; /* Safari */\n  transition-duration: 0.4s;\n}\n\nimg {\n  display: block;\n  margin-left: 0%;\n  margin-right: 5%;\n  top:0%\n  \n}\n.button1 {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\n}\n\n.button2:hover {\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);\n}\n/* Create two equal columns that floats next to each other */\n.column {\n  float: left;\n  width: 50%;\n  padding: 10px;\n}\n\n.column img {\n  margin-top: 12px;\n}\n\n    \n.accordion {\n  background-color: #5f3e4f;\n  color: white;\n  cursor: pointer;\n  padding: 18px;\n  width: 300px;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n  transition: 0.4s;\n}\n\n.active, .accordion:hover {\n  background-color: #5f3e4f; \n}\n\n.panel {\n  padding: 0 18px;\n  display: none;\n  background-color: white;\n  overflow: hidden;\n}\n\n\n/* Clear floats after the columns */\n\n"
  }}
/>
    <div className="row">
    <div className="column">
      <div className="content">
        <button>
          <a href="About Me/aboutMe.html" className="button">
            About Me
          </a>
        </button>
        <br />
        <h1>Motivated and Driven IT Professional </h1>
        <p>
          Recent graduate of an AI-driven Software Engineering bootcamp
          <br /> at Skills City. I am transitioning into the IT sector with a
          <br /> wealth of transferable skills in decision-making, <br />
          problem-solving, communication, and teamwork, cultivated
          <br /> through my previous career experiences.
          {/* Buttons */} {/* Buttons */}
        </p>
        <div className="left">
          {/* This div element has position: relative; */}
          <br />
          <br />
          <br />
          <button className="accordion">Click Here To See My Works</button>
          <div className="panel">
            <div className="button-container">
              <div className="center">
                <a href="https://dataentry-esg.vercel.app/" className="button">
                  ESG data collection
                </a>
                <a
                  href="https://github.com/NahidKakon/loginPage.git"
                  className="button"
                >
                  Sign In Page
                </a>
                <br />
                <a
                  href="https://test1-ten-wheat.vercel.app/"
                  className="button"
                >
                  Nature website
                </a>
                <a
                  href="https://calculator-ru88.vercel.app/"
                  className="button"
                >
                  Calculator
                </a>
                <br />
                <a href="https://story1.vercel.app/" className="button">
                  AI Image for kids story
                </a>
                <a
                  href="https://github.com/NahidKakon/animation_in_nextjs.git"
                  className="button"
                >
                  Animation in Next.js
                </a>
                <a
                  href="https://github.com/NahidKakon/accordion_in_react.git"
                  className="button"
                >
                  Accordion in React
                </a>
                <a href="Textile.html" className="button">
                  Textile Industry
                </a>{" "}
                --&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="column">
    <img src="image1.png" style={{ width: "100%" }} />
  </div>
  <table>
    <tbody>
      <tr></tr>
      <tr></tr>
    </tbody>
  </table>
  

  <>
  var acc = document.getElementsByClassName("accordion"); var i; for (i = 0; i
  &lt; acc.length; i++) {"{"}
  acc[i].addEventListener("click", function() {"{"}
  this.classList.toggle("active"); var panel = this.nextElementSibling; if
  (panel.style.display === "block") {"{"}
  panel.style.display = "none";
  {"}"} else {"{"}
  panel.style.display = "block";
  {"}"}
  {"}"});
  {"}"}
</>
</>
  );
}
