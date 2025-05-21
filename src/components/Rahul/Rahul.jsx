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
        src="sql.png" width='20px' alt="" />
        <img className="running-img running-css"
        src="excel.png" width='20px' alt="" />
        <img className="running-img running-js"
        src="machine.png" width='20px' alt="" />
        <img className="running-img running-github"
        src="github.png" width='20px' alt="" />
        <img className="running-img running-graphql"
        src="powerbi.png" width='20px' alt="" />
        <img className="running-img running-boot"
        src="numpy.png" width='20px' alt="" />
        <img className="running-img running-redux"
        src="pandas.png" width='20px' alt="" />
        <img className="running-img running-react"
        src="postgresql.png" width='20px' alt="" />
        <img className="running-img running-tailwind"
        src="jy.png" width='20px' alt="" />
        <img className="running-img2 running-socket"
        src="socket.png" width='20px' alt="" />
        <img className="running-img2 running-node"
        src="excel.png" width='20px' alt="" />
        <img className="running-img running-nextjs"
        src="powerbi.png" width='20px' alt="" />
        <img className="running-img running-git"
        src="git.png" width='20px' alt="" />
        
          <div className="main-container">

            <div className="firstchild" style={{paddingLeft:'10px'}}>
              <div style={{display:"flex", padding:'6px', justifyContent:"space-between"}}>
                <div style={{display:'flex', gap:"4px"}}>
                <img src="/excel.png" width='20px' alt="" />
                 <p>Excel</p>
                 </div>                
                <FaChevronDown />
              </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <p style={{ color: "#f54d05" }}>{`=SUM`}</p>
                    <p>{`(`}</p>
                    <p style={{ color: "#9CDCFE" }}>{`A1:A5`}</p>
                    <p>{`)`}</p>
                  </div>

                  <div style={{ display: "flex", gap: "2px" }}>
                    <p style={{ color: "#f1c80e" }}>{`=IF`}</p>
                    <p>{`(`}</p>
                    <p style={{ color: "#9CDCFE" }}>{`A1 > 10`}</p>
                    <p>{`, `}</p>
                    <p style={{ color: "#CE9178" }}>{`"High"`}</p>
                    <p>{`, `}</p>
                    <p style={{ color: "#CE9178" }}>{`"Low"`}</p>
                    <p>{`)`}</p>
                  </div>

                  <div style={{ display: "flex", gap: "2px" }}>
                    <p style={{ color: "#0bf917" }}>{`=VLOOKUP`}</p>
                    <p>{`(`}</p>
                    <p style={{ color: "#9CDCFE" }}>{`...`}</p>
                    <p>{`)`}</p>
                  </div>

                  <div style={{ display: "flex", gap: "2px" }}>
                    <p style={{ color: "#9CDCFE" }}>{`B1`}</p>
                    <p>{` = `}</p>
                    <p style={{ color: "#CE9178" }}>{`"Rahul"`}</p>
                  </div>
                </div>

            </div>

            <div className="secondchild" style={{paddingLeft:"10px"}}>
              <div style={{display:"flex", padding:'6px', justifyContent:"space-between"}}>
                <div style={{display:'flex', gap:"4px"}}>
                {/* <IoSettingsOutline /> */}
                <img src="/sql.png" width='20px' alt="" />
                 <p>SQL</p>
                </div>
                <FaChevronDown />
              </div>
      
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ display: "flex", gap: "2px" }}>
                  <p style={{ color: "#f95508" }}>{`CREATE TABLE`}</p>
                  <p style={{ color: "#DCDCAA" }}>{`person`}</p>
                  <p>{`(`}</p>
                  <p style={{ color: "#9CDCFE" }}>{`name TEXT`}</p>
                  <p>{`);`}</p>
                </div>
                <div style={{ display: "flex", gap: "2px" }}>
                  <p style={{ color: "#a009f8" }}>{`INSERT INTO`}</p>
                  <p style={{ color: "#DCDCAA" }}>{`person`}</p>
                  <p>{`VALUES(`}</p>
                  <p style={{ color: "#CE9178" }}>{`'Rahul'`}</p>
                  <p>{`);`}</p>
                </div>
                <div style={{ display: "flex", gap: "2px" }}>
                  <p style={{ color: "#f1c80e" }}>{`SELECT`}</p>
                  <p style={{ color: "#CE9178" }}>{`'Hello, '`}</p>
                  <p>{` || `}</p>
                  <p style={{ color: "#9CDCFE" }}>{`name`}</p>
                  <p style={{ color: "#f1c80e" }}>{`FROM`}</p>
                  <p style={{ color: "#DCDCAA" }}>{`person`}</p>
                  <p>{`;`}</p>
                </div>
              </div>

            </div>
          
          
            <div className="thirdchild" style={{paddingLeft:"10px"}}>
              <div style={{display:"flex", padding:'6px', justifyContent:"space-between"}}>
                <div style={{display:'flex', gap:"4px"}}>
                {/* <IoSettingsOutline /> */}
                <img src="/python.png" width='20px' alt="" />
                 <p>python</p>
                </div>
                <FaChevronDown />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <p style={{ color: "#f1c80e" }}>{`name`}</p>
                    <p>{` = `}</p>
                    <p style={{ color: "#CE9178" }}>{`"Rahul"`}</p>
                  </div>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <p style={{ color: "#04fc04" }}>{`age`}</p>
                    <p>{` = `}</p>
                    <p style={{ color: "#B5CEA8" }}>{`24`}</p>
                  </div>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <p style={{ color: "#f1c80e" }}>{`def`}</p>
                    <p style={{ color: "#DCDCAA" }}>{`greet`}</p>
                    <p>{`(`}</p>
                    <p style={{ color: "#9CDCFE" }}>{`name`}</p>
                    <p>{`):`}</p>
                  </div>
                  <div style={{ display: "flex", gap: "2px", paddingLeft: "20px" }}>
                    <p style={{ color: "#f18b0e" }}>{`return`}</p>
                    <p>{` `}</p>
                    <p style={{ color: "#CE9178" }}>{`"Hello, "`}</p>
                    <p>{` + `}</p>
                    <p style={{ color: "#9CDCFE" }}>{`name`}</p>
                  </div>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <p style={{ color: "#DCDCAA" }}>{`print`}</p>
                    <p>{`(`}</p>
                    <p style={{ color: "#DCDCAA" }}>{`greet`}</p>
                    <p>{`(`}</p>
                    <p style={{ color: "#9CDCFE" }}>{`name`}</p>
                    <p>{`)`}</p>
                    <p>{`)`}</p>
                  </div>
                </div>


            </div>
          </div>
          <div className="intro-div">
            <div className="block-fill"></div>
            <h1>Rahul Sehrawat</h1>
          </div>
          <div className="job-div">
          <h3>📑Data / Business Analyst</h3>
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