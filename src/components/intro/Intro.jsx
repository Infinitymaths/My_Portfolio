import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      backSpeed:40,
      strings: ["Data Analyst", "ML and DL Engineer", "Professor","freelancer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img  src="assets/man 2.png"   alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I am </h2>
          <h1>Sharath Dinesh</h1>
          <h3>
             <span ref={textRef}></span>
          </h3>
          <br></br>
          <a href="assets/resume.pdf"><button>Resume</button></a>
          <a href="#contact"><button>Hire me</button></a>
        </div>
        <a className='down' href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
