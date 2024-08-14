import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";


const items = [
  {
    id: 1,
    title: "DSA Arena",
    img: "/leetcode.png",
    img2: '/dsabot.png',
    link:"https://the-tale-of-dsa.vercel.app/",
    desc1: "📃 Developed a dsa problems solving website. ",
    des2:'📃 User can solve more than 10 problems on my web application.',
    des3:'📃 Integrated  Firestore database to store user data.',
    ts1:'React',
    ts2:'NextJs',
    ts3:'TypeScript', 
    ts4:'Firebase',
  },
  {
    id: 2,
    title: "Chess Club Application",
    img: "/chess1.png",
    img2: "/chess2.png",
    link:"https://chessclubapp.netlify.app/",
    desc1: "♟️ Developed an online chess application.",
    des2:'♟️ Engineered real-time multiplayer capabilities using WebSocket',
    des3:'♟️ Designed user Identity and Access Control mechanisms using JWT',
    ts1:'React',
    ts2:'NodeJs',
    ts3:'MongoDB',
    ts4:'Websockets', 
  },
  {
    id: 3,
    title: "2D Fighting Game",
    link :"https://onepiece-mygame.netlify.app/",
    img: "/fightgame.png",
    img2:"/game2.png",
    desc1: "🎮 Developed an engaging 1v1 2D fighting game.",
    des2:'🎮 Facilitated head-to-head matches through a two-player mode.',
    des3:'🎮 Programmed game mechanics like health,collision detection.',
    ts1:'HTML',
    ts2:'CSS',
    ts3:'JavaScript', 
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
                  </div>
                  <div style={{position:'relative'}}>
                    <a className="website-link" href={item.link}>website</a>  
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
