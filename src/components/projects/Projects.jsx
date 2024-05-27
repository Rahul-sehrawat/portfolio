import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "LeetCode Clone",
    img: "/leetcode.png",
    link:"https://the-tale-of-dsa.vercel.app/",
    desc: "Developed a LeetCode clone using React, Next.js, and TypeScript, with Firebase for database and authentication. Users can solve over 10 coding problems and have personalized profile pages to monitor their progress. This project highlights my skills in full-stack development, emphasizing secure authentication, real-time data management, and user-friendly interfaces. ",
  },
  {
    id: 2,
    title: "Chess A.I Engine",
    img: "/chess1.avif",
    desc: "Developed a Chess AI engine using Python and Pygame, offering both 1v1 and AI gameplay modes. The AI leverages the Minimax algorithm with alpha-beta pruning for efficient decision-making.This project demonstrates my expertise in AI algorithms, data analysis, and graphical visualization, showcasing a blend of strategic thinking and technical proficiency.",
  },
  {
    id: 3,
    title: "Fighting Game",
    link :"https://onepiece-mygame.netlify.app/",
    img: "/fightgame.png",
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
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href= {item.link} >Website</a></button>
          </motion.div>
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
