import "./Rahul.scss"
import { motion,} from "framer-motion";
import { FaChevronDown } from "react-icons/fa";


const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
        repeat: Infinity,
        repeatType:"mirror",
        duration: 20,
        },
    },
    };

const Rahul = () =>{

    return(
      <div className="hero">
      <div className="wrapper">   
        <img className="running-img2 running-html"
        src="html.png" width='20px' alt="" />
        <img className="running-img running-css"
        src="css.png" width='20px' alt="" />
        <img className="running-img running-js"
        src="javascript.png" width='20px' alt="" />
        <img className="running-img running-github"
        src="github.png" width='20px' alt="" />
        <img className="running-img running-graphql"
        src="graphql.png" width='20px' alt="" />
        <img className="running-img running-boot"
        src="bootstrap.png" width='20px' alt="" />
        <img className="running-img running-redux"
        src="redux.png" width='20px' alt="" />
        <img className="running-img running-react"
        src="react.png" width='20px' alt="" />
        <img className="running-img running-tailwind"
        src="tailwind.png" width='20px' alt="" />
        <img className="running-img2 running-socket"
        src="socket.png" width='20px' alt="" />
        <img className="running-img2 running-node"
        src="nodejs.png" width='20px' alt="" />
        <img className="running-img running-nextjs"
        src="nextjs.png" width='20px' alt="" />
        <img className="running-img running-git"
        src="git.png" width='20px' alt="" />
        
          <div className="main-container">

            <div className="firstchild" style={{paddingLeft:'10px'}}>
              <div style={{display:"flex", padding:'6px', justifyContent:"space-between"}}>
                <div style={{display:'flex', gap:"4px"}}>
                <img src="/html.png" width='20px' alt="" />
                 <p>index.html</p>
                 </div>                
                <FaChevronDown />
              </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <p style={{ color: "#FF79C6" }}>{`<div`}</p>
                    <p style={{ color: "#8BE9FD" }}>{` class`}</p>
                    <p>{`=`}</p>
                    <p style={{ color: "#50FA7B" }}>{`"container"`}</p>
                    <p style={{ color: "#FF79C6" }}>{`>`}</p>
                  </div>
                  <div style={{ display: "flex", gap: "2px", paddingLeft: "20px" }}>
                    <p style={{ color: "#FFB86C" }}>{`<h1`}</p>
                    <p style={{ color: "#8BE9FD" }}>{` class`}</p>
                    <p>{`=`}</p>
                    <p style={{ color: "#50FA7B" }}>{`"title"`}</p>
                    <p style={{ color: "#FFB86C" }}>{`>`}</p>
                    <p style={{ color: "#F8F8F2" }}>{`Hello World!`}</p>
                    <p style={{ color: "#FFB86C" }}>{`</h1>`}</p>
                  </div>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <p style={{ color: "#FF79C6" }}>{`</div>`}</p>
                  </div>
                </div>
            </div>

            <div className="secondchild" style={{paddingLeft:"10px"}}>
              <div style={{display:"flex", padding:'6px', justifyContent:"space-between"}}>
                <div style={{display:'flex', gap:"4px"}}>
                {/* <IoSettingsOutline /> */}
                <img src="/css.png" width='20px' alt="" />
                 <p>style.css</p>
                </div>
                <FaChevronDown />
              </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div style={{ display: "flex", gap: "2px", }}>
                    <p style={{ color: "#569CD6" }}>{`body`}</p>
                    <p>{` {`}</p>
                  </div>
                  <div style={{ display: "flex", gap: "2px", paddingLeft: "20px" }}>
                    <p style={{ color: "#50FA7B" }}>{`background-color:`}</p>
                    <p style={{ color: "#CE9178" }}>{`#f0f0f0;`}</p>
                  </div>
                  <div style={{ display: "flex", gap: "2px", paddingLeft: "20px" }}>
                    <p style={{ color: "#50FA7B" }}>{`margin:`}</p>
                    <p style={{ color: "#CE9178" }}>{`0;`}</p>
                  </div>
                  <div style={{ display: "flex", gap: "2px", paddingLeft: "20px" }}>
                    <p style={{ color: "#50FA7B" }}>{`font-family:`}</p>
                    <p style={{ color: "#CE9178" }}>{`'Arial', sans-serif;`}</p>
                  </div>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <p>{`}`}</p>
                  </div> 
              </div>
            </div>
          
          
            <div className="thirdchild" style={{paddingLeft:"10px"}}>
              <div style={{display:"flex", padding:'6px', justifyContent:"space-between"}}>
                <div style={{display:'flex', gap:"4px"}}>
                {/* <IoSettingsOutline /> */}
                <img src="/javascript.png" width='20px' alt="" />
                 <p>script.js</p>
                </div>
                <FaChevronDown />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <div style={{ display: "flex", gap: "2px" }}>
                      <p style={{ color: "#f1c80e" }}>{`const`}</p>
                      <p style={{ color: "#9CDCFE" }}>{`name`}</p>
                      <p>{` = `}</p>
                      <p style={{ color: "#CE9178" }}>{`"Rahul";`}</p>
                    </div>
                    <div style={{ display: "flex", gap: "2px" }}>
                      <p style={{ color: "#f1c80e" }}>{`let`}</p>
                      <p style={{ color: "#9CDCFE" }}>{`age`}</p>
                      <p>{` = `}</p>
                      <p style={{ color: "#B5CEA8" }}>{`24;`}</p>
                    </div>
                    <div style={{ display: "flex", gap: "2px" }}>
                      <p style={{ color: "#f1c80e" }}>{`function`}</p>
                      <p style={{ color: "#DCDCAA" }}>{`greet`}</p>
                      <p>{`(`}</p>
                      <p style={{ color: "#9CDCFE" }}>{`name`}</p>
                      <p>{`) {`}</p>
                    </div>
                    <div style={{ display: "flex", gap: "2px", paddingLeft: "20px" }}>
                      <p style={{ color: "#f1c80e" }}>{`return`}</p>
                      <p>{` `}</p>
                      <p style={{ color: "#CE9178" }}>{`"Hello, "`}</p>
                      <p>{` + `}</p>
                      <p style={{ color: "#9CDCFE" }}>{`name`}</p>
                      <p>{` + `}</p>
                      <p style={{ color: "#CE9178" }}>{`"!";`}</p>
                    </div>
                    <div style={{ display: "flex", gap: "2px" }}>
                      <p>{`}`}</p>
                    </div>
                    <div style={{ display: "flex", gap: "2px" }}>
                      <p style={{ color: "#f1c80e" }}>{`console.`}</p>
                      <p style={{ color: "#DCDCAA" }}>{`log`}</p>
                      <p>{`(`}</p>
                      <p style={{ color: "#DCDCAA" }}>{`greet`}</p>
                      <p>{`(`}</p>
                      <p style={{ color: "#9CDCFE" }}>{`name`}</p>
                      <p>{`));`}</p>
                    </div>
                  </div>

            </div>
          </div>
          <div className="intro-div">
            <div className="block-fill"></div>
            <h1>Rahul Sehrawat</h1>
          </div>
          <div className="job-div">
  <h3>
    Full Stack Developer <span className="emoji">👨🏻‍💻</span>
  </h3>
</div>


          <motion.div style={{alignItems:'center', textAlign:'center'}}  variants={textVariants} initial="initial" animate="animate" className="imageContainer">
                  <img src="/profile-pic.png" alt=""/>

          </motion.div>
          

      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
          <img src="stars.png" alt="" />
      </motion.div>   
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
          Developer
      </motion.div> 
  </div>

)

}

export default Rahul;