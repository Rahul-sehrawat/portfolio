import "./skills.scss"
import { motion } from "framer-motion";

const skills = [
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Excel", image:"/excel.png",},
      { name: "SQL", image: "/sql.png",},
      { name: "postgresql",image:"/postgresql.png",},
      { name: "PowerBi", image: "/powerbi.png",},
      { name: "Tableau", image: "/tableau.png",},
      { name: "Google Sheets", image: "/googlesheets.png",},
    ],
  },
  {
    title: "Data Analysis & statistics",
    skills: [
      { name: "Data Cleaning", image: "datacleaning.png"},
      { name: "Data wrangling", image: "dataw.png"},
      { name: "Exploratory Data Analysis", image: "eda.png"},
      { name: "Statistics", image: "stat1.png"},
      { name: "Dashboard Design", image: "dashboard.png"},
      { name: "Reports Creation", image: "reports.png"},
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", image: "python.png"},
      { name: "Pandas", image: "pandas.png"},
      { name: "Numpy", image: "numpy.png"},
      { name: "Jupyter", image: "jy.png"},
      { name: "Scikit Learn", image: "scikit.png"},
    ],
  },
  {
    title: "Other Tools",
    skills: [
      { name: "Git", image: "git.png"},
      { name: "Github", image: "github.png"},
      { name: "VS Code", image: "vscode.png"},
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
