import { useState } from "react"
import "./sidebar.scss"
import Links from "./LInks/Links"
import ToggleButton from "./toggleButton/ToggleButton"
import { motion } from "framer-motion"

const variants = {
    open:{
        clipPath: "circle(900px at 50px 50px)",
        transition:{
            type:"spring",
            stiffness: 40,    
        },
    },
    closed: {
        clipPath: "circle(22px at 50px 46px)",
        transition:{
            delay:0.5,
            type:"spring",
            stiffness: 400,
            damping:20,
        },
    }
}

const sidebar = () =>{

    const [open,setOpen] = useState(false)


    return <motion.div className="sidebar" animate= {open ? "open":"closed"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <ToggleButton setOpen = {setOpen}/>
    </motion.div>
}

export default sidebar