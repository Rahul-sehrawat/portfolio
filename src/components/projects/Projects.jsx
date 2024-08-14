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
    desc: "Developed a dsa problems solving website using React, Next.js, and TypeScript, with Firebase for database and authentication. Users can solve over 10 coding problems and have personalized profile pages to monitor their progress. This project highlights my skills in full-stack development, emphasizing secure authentication, real-time data management, and user-friendly interfaces. ",
  },
  {
    id: 2,
    title: "Chess Club Application",
    img: "/chess1.png",
    img2: "/chess2.png",
    link:"https://chessclubapp.netlify.app/",
    desc: "Developed an online chess application leveraging React for frontend and Node.js with Express for backend functionalities, MongoDB for database management.Engineered real-time multiplayer capabilities using WebSocket to facilitate seamless chess gameplay  between users.Integrated Chess.js library to validate and enforce legal chess moves, maintaining the integrity of gameplay logic."
  },
  {
    id: 3,
    title: "2D Fighting Game",
    link :"https://onepiece-mygame.netlify.app/",
    img: "/fightgame.png",
    img2:"/game2.png",
    desc: "Developed an engaging 1v1 fighting game using HTML and vanilla JavaScript. This project showcases my proficiency in front-end development. Players can experience smooth animations and intuitive controls, highlighting my ability to create dynamic and immersive user experiences. This game is a testament to my skills in coding and game design, demonstrating creativity and technical expertise.",
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
