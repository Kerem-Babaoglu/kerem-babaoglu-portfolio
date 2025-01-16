import { HERO } from "../constants"
import carlImg from "../assets/kerem-foto.jpg"
import { motion } from "framer-motion"



const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center" >
        <motion.div
        initial={{opacity:0, x: -50}}
        animate={{opacity:1, x: 0}}
        transition={{duration: 1}}
         className="p-8 w-full md:w-1/2 mb-8">
            <h2 className="my-8 p-2  text-3xl font-bold md:text-5xl lg:text-[5.4rem]">
                {HERO.name}
            </h2>
            <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
                {HERO.greet}
            </p>
            <p className="mb-8 p-2 text-xl">
                {HERO.description}
            </p>
            <a
              href="../../public/kerem-babaoglu.pdf"
              target="_blank"
              rel="noopener noreferer"
              download
              className="bg-white tracking-wide font-bold rounded-full p-4 text-sm text-stone-800 
              hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 hover:text-white transition duration-300 ease-in-out"
            >
              {HERO.resume}
            </a>

        </motion.div>
        <motion.div 
          initial={{opacity:0, scale: 0.8}}
          animate={{opacity:1, scale: 1}}
          transition={{duration: 1}}
            className="w-full md:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img 
                  initial={{opacity:0,}}
                  animate={{opacity:1,}}
                  transition={{duration: 1}}
                src={carlImg} alt="Kerem Babaoglu" width={410} height={550} className="rounded-3xl"   />
            </div>
        </motion.div>
    </section>
  )
}

export default Hero