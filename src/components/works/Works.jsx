import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Virtual Assistant with GUI",
      desc:
        "Created a Virtual Assistant using Python, which is able to perform some of the tasks which can be automated like messaging, alarm clock, etc. ",
      link: "https://github.com/Infinitymaths/Jarvis-2.0",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Sentiment Analysis",
      desc:
        "Created a sentiment analysis which is able to find the sentiment bu reading the sentence. In this project I have used Django as the Backend. Tech used:- Natural Language Processing, Django",
      link: "https://github.com/Infinitymaths/Django-and-ML/tree/main/ohh-that-its-hurting-main",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Volume controlling using Hands",
      desc:
        "In this we can control the volume of the device using the fingers.",
      link:"https://github.com/Infinitymaths/Opencv-projects/tree/main/Computer-Vision-Volume-Controlling-using-Hands-main",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
    {
      id:"4",
      icon:"./assets/mobile.png",
      title:"OMR Evaluator",
      desc:"Created an OMR evaluator which is used to check the papers. skills used:- opencv, image processing",
      link: "https://github.com/Infinitymaths/Opencv-projects/tree/main/CV%20Project%208%20-%20OMR%20Evaluator",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
    {
      id:"5",
      icon:"./assets/writing.png",
      title:"Data analysis on Citi bank data",
      desc:"Analyzed the data and then founded some KPI's using Tableau. Skills used:- Tableau, Stats",
      link:"https://github.com/Infinitymaths/one-neuron-projects/tree/main/Tableau%20Projects/Citi%20bike%20data",
      img:"https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
    {
      id:"6",
      icon:"./assets/globe.png",
      title:"MNIST Dataset",
      desc:"Implemented a Deep Learning models on MNIST Dataset.",
      link:"https://github.com/Infinitymaths/Machine-Learning-and-Deep-Learning/tree/main/MNIST-DATASET-main",
      img:"https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
    {
      id:"7",
      icon:"./assets/mobile.png",
      title:"CIFAR-10 Classification",
      desc:"Desgined deep Learning model on CIFAR-10 Dataset. skills:- tenserflow,keras, Deep learning, EDA",
      link:"https://github.com/Infinitymaths/Machine-Learning-and-Deep-Learning/tree/main/Cifar-10-Classification-main",
      img:"https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },

  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      {/* <h1>Projects</h1> */}
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            
            <div className="item">
              <div className="left">
                <div className="leftContainer">               
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <br></br>
                  <p>{d.desc}</p> 
                  
                  <a  href={d.link}><button class="btn"><span> Github Link </span></button></a>                 
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
