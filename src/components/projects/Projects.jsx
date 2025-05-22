import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";


const items = [
  {
    id: 1,
    title: "ChessBoard Map for A.I",
    img: "/overall.jpg",
    img2: '/chess2.png',
    link:"https://rahul9dev.netlify.app/",
    desc1: "📃 Utilized Python libraries to analyze a large dataset of chess games.",
    des2:'📃 Created an algorithm to parse and extract square-level move data.',
    des3:'📃 Implemented piece-wise filtering for individual heatmaps.',
    ts1:'MS Excel',
    ts2:'Python',
    ts3:'Pandas', 
    ts4:'Matplotlib',
  },
  {
    id: 2,
    title: "HR Analysis Dashboard",
    img: "/hrd.png",
    img2: "/xdata.png",
    link:"https://rahul9dev.netlify.app/",
    desc1: "Interactive Power BI dashboard to analyze employee attrition trends.",
    des2:'Implement slicers,dynamic visualizations to enable category filtering.',
    des3:'Cleaned and transformed raw data using Power Query.',
    ts1:'PowerBi',
    ts2:'Excel',
    ts3:'Visualization',
    ts4:'Analysis', 
  },
  {
    id: 3,
    title: "SQL Data Warehouse",
    link :"https://rahul9dev.netlify.app/",
    img: "/dwh1.png",
    img2:"/dwh2.png",
    desc1: "Designed data architecture using Medallion model with Bronze,Silver, and Gold.",
    des2:'Built robust ETL pipelines to extract, transform, and load data from CSV sources.',
    des3:'Modeled fact and dimension tables using star schema  to support efficient analysis.',
    ts1:'SQL',
    ts2:'ETL',
    ts3:'D-Modeling', 
    techstack:'HTML, CSS, JavaScript',
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
           <div className="boss-container">
            <div className="lights">
              <div className="red"></div>
              <div className="yellow"></div>
              <div className="green"></div>
            </div>
            <div className="main-content" >
              <div className="content-description">
              <div className="project-heading">
                    <div style={{display:"flex", padding:'6px', justifyContent:"space-between"}}>
                      <div style={{display:'flex', gap:"4px"}}>
                        <img src="/profile-pic.png" width='20px' alt="profilepic" />
                        <p>Project</p>
                      </div>                
                      <FaChevronDown />
                    </div>
                      <h1>{item.title}</h1>
                  </div>
                  <div >
                      <h4 className="project-details" >{item.desc1}</h4>
                      <h4 className="project-details">{item.des2}</h4>
                      <h4 className="project-details">{item.des3}</h4>  
                  </div>
                  <div style={{display:'flex'}}>
                    <div className="techstack-div">{item.ts1}</div>
                    <div className="techstack-div">{item.ts2}</div>
                    <div className="techstack-div">{item.ts3}</div>
                    {item.ts4 && (<div className="techstack-div">{item.ts4}</div>)}
                    {item.ts5 && (<div className="techstack-div">{item.ts5}</div>)}
                  </div>
                  <div style={{position:'relative'}}>
                    <Link className="website-link" to={`/project/${item.id}`}>
                        Read More...
                    </Link>

                  </div>
                  
                  
              </div>
            </div>
            <div className="imageContainer" ref={ref}>
            <img className="img1" src={item.img} alt="projectImage" />
            
            <img className="img2" src={item.img2} alt="projectImage2" />
          </div>
          </div>

          

        </div>
      </div> 
    </section>
    
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
  });

  return (
    <div className="project" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
