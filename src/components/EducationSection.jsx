import { EDUCATION } from "../constants"
import { motion } from "framer-motion"

const EducationSection = () => {
  return (
    <section className="py-8" id="education">
        <motion.h2
         initial={{opacity:0, y:-20}}
         whileInView={{opacity:1, y:0}}
         transition={{duration: 1}}
         className="mb-4 text-center text-3xl font-bold">Eğitim</motion.h2>
        {EDUCATION.map((education,index) => {
            return(
                <motion.div 
                initial={{opacity:0, x:-20}}
                whileInView={{opacity:1, x:0}}
                transition={{duration: 1, delay: index * 0.5}}
                key={index} className="mb-6 p-10">
                    <h3 className="text-xl font-semibold">{education.degree}</h3>
                    <p className="text-lg">{education.institution}</p>
                    <p className="text-sm text-stone-300">{education.duration}</p>
                    <p className="mt-2">{education.description}</p>
                </motion.div>
            )
        })}
    </section>
  )
}

export default EducationSection