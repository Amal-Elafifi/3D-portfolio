import { motion } from "framer-motion";
import {Tilt} from "react-tilt";
import { services } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({title, index, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div 
              options={{
                max: 45,
                scale: 1,
                speed: 450
              }}
              className="flex flex-col justify-evenly items-center min-h-[280px] bg-tertiary rounded-[20px] px-12 py-5"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain "/>
            <h3 className="font-bold text-white text-center text-[20px]">{title}</h3> 
          </div>
        </motion.div>
    </Tilt>
  )
}

const About = ()=>{
  return(
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>introduction</p>
        <h2 className={styles.sectionHeadText}>overview</h2>
      </motion.div>
      <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className="text-[17px] mt-4 text-secondary leading-[30px] max-w-3xl"
      >
        I'm skilled web developer with experience in javascript and expertise in react framework and node.js.
        I'm aquick learner and collaborate closely with clients to create efficient, scalable and user friendly solutions that solve real world problems
        let's work together to bring your ideas to life .
      </motion.p>
      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )};

export default SectionWrapper(About, "about") ;

