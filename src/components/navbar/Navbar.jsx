import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss" ;
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span whileHover={{scale:1.4}} > <a href="Homepage">Rahul.dev</a></motion.span>
                <div className="social">
                    <motion.a whileHover={{scale:1.4}} href="https://github.com/Rahul-sehrawat" ><img src="/github.png" alt="github link"/> </motion.a>
                    <motion.a whileHover={{scale:1.4}} href="https://www.linkedin.com/in/rahul9sehrawat/" ><img src="/LinkedIn.png" alt="LinkedIn link"/> </motion.a>
                </div>
            </div>
        </div>
    )
}

export default Navbar