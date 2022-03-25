import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "K.J.Somaiya College of Engineering",
      title: "Data Analyst Intern",
      img:
        "https://cdn.imgbin.com/24/12/12/imgbin-computer-icons-chart-data-analysis-statistics-computer-4epEZTJE6EU8YSiAusC9B6U6T.jpg",
      desc:
        "Created python scripts which is able to clean the dataset from the excel sheets , then visualize it using  python libraries. Performing  contextual searches using pandas and REGEX.",
    },
    {
      id: 2,
      name: "V2V CLASSES",
      title: "Profesor",
      img:
        "https://cdn-icons-png.flaticon.com/512/43/43886.png",
      desc:
        "Task was to teach the students of BSC Mathematics and Programming Language. Also to help them in creating some projects",
      featured: true,
    },
    {
      id: 3,
      name: "K.J.Somaiya College of Engineering",
      title: "Machine Learning Intern",
      img:
        "https://cdn-icons-png.flaticon.com/512/2083/2083213.png",
      desc:
        "Created a Deep Learning model which is used to predict heart disease using the ECG image. Accuracy achieved was 94.4%. Then published a paper on this in a Journal",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <br></br>
      <h1>Experience</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              {/* <img className="right" src={d.icon} alt="" /> */}
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.title}</h3>
              <h4>{d.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
