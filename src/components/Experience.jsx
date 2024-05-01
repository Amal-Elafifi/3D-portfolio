import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import {motion} from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../style";
import SectionWrapper from "../hoc/SectionWrapper";
import { experiences } from "../constants";


function ExperienceCard ({experience}){
  return(
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle= {{background: "#1d1836", color: "#fff"}}
        contentArrowStyle={{borderRight: "7px solid #232631" }}
        iconStyle={{background: experience.iconBg}}
        date= {experience.date}
        icon ={
          <div className="w-full flex justify-center items-center h-full">
            <img src={experience.icon} alt={experience.company_name}
                className="w-[60%] h-[60%] object-contain"
            />
          </div>
        }
    >
        <div>
          <h3 className="font-bold text-white text-[24px]">{experience.title}</h3>
          <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{experience.company_name}</p>
          <ul className="list-disc ml-5 mt-5 space-y-2">
            {experience.points.map((point, index) =>(
              <li key={`experience-point-${index}`}
                className="text-white-100 tracking-wider text-[14px] pl-1"
              >
                  {point}
              </li>
            ))}
          </ul>
        </div>
    </VerticalTimelineElement>
  )
}

const Experience = ()=>{
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>what i have done so far</p>
        <h2 className={styles.sectionHeadText}> work experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience}/>
            ))}
          </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work");
