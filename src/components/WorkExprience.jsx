import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

const WorkExprience = () => {
  return (
    <section className="pt-20" id="work">
        <motion.h2 
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 1}}
        className="text-center text-4xl font-semibold tracking-tighter">
            İş deneyimi
        </motion.h2>
        <div className="space-y-8 p-10">
            {EXPERIENCES.map((experience, index ) => {
                return(
                    <motion.div
                    initial={{opacity:0, x:-20}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration: 1, delay: 0.5}}
                     key={index} className="rounded-xl border border-stone-50/30 bg-white/10 p-4">
                        <h3 className="text-2xl font-semibold">{experience.title}</h3>
                        <p className="text-xl">{experience.company}</p>
                        <p className="text-sm text-sone-300">{experience.duration}</p>
                        <p className="mt-2 text-base">{experience.description}</p>
                    </motion.div>
                )
            })}
        </div>
    </section>
  )
}

export default WorkExprience