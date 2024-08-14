import "./skills.scss"
import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", image:"/html.png",},
      { name: "CSS", image: "/css.png",},
      { name: "JavaScript",image:"/javascript.png",},
      { name: "React Js", image: "/react.png",},
      { name: "Redux", image: "/redux.png",},
      { name: "Next Js", image: "/nextjs.png"}, 
      { name: "Bootstrap", image:"/bootstrap.png",},
      { name: "Tailwind", image: "/tailwind.png",},
      { name: "TypeScript", image:"/typescript.png",},
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node Js", image: "nodejs.png"},
      { name: "Express Js", image: "expressjs.png"},
      { name: "Graph Ql", image: "graphql.png"},
      { name: "MySQL", image: "/mysql.png"},
      { name: "Postgresql", image: "postgresql.png"},
      { name: "MongoDB", image:"/mongodb.png"},
      { name: "Firebase", image: "/firebase.png"},
      { name: "Rest API", image: "/restapi.png"},
      { name: "Postman", image: "postman.png"},
      { name: "Socket.io", image: "/socket.png"},
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Python", image: "python.png"},
      { name: "Pandas", image: "pandas.png"},
      { name: "Numpy", image: "numpy.png"},
      { name: "Jupyter", image: "jy.png"},
      { name: "Scikit Learn", image: "scikit.png"},
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Git", image: "git.png"},
      { name: "Github", image: "github.png"},
      { name: "Docker", image: "docker.png"},
      { name: "Vercel", image: "vercel.png"},
      { name: "Linux", image: "linux.png"},
      
      
    
    ],
  },
];


const Skills = () =>{
  return (
    <motion.div className="Container"  id="skills">
      <motion.div className="Wrapper">
        <motion.div className="SkillsContainer">
          {skills.map((skill) => (
            <motion.div whileHover={{scale:1.1}}  className="Skill">
              <motion.h4 className="SkillTitle">{skill.title}</motion.h4>
              <motion.ul  className="SkillList">
                {skill.skills.map((item) => (
                  <motion.li whileHover={{scale:1.1, background:"#141e30"}}  className="SkillItem" >
                    <motion.img whileHover={{scale:1.2}}  className="SkillImage"  src={item.image}/>
                    {item.name}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}

        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Skills;
