// import logo from "../assets/logo.png"
import {  SOCIAL_MEDIA_LINKS } from "../constants"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
        <div className="flex justify-center items-center gap-7 mb-5">
            {SOCIAL_MEDIA_LINKS.map((link,index) => {
                return(
                    <motion.a 
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration: 0.2, delay: index * 0.5}}
                    key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                    </motion.a>
                )
            })}
        </div>
        <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy; {new Date().getFullYear()} Kerem Babaoglu. Tüm hakları saklıdır.
        </p>

    </div>
  )
}

export default Footer