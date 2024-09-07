import {motion} from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import SectionWrapper from "../hoc/SectionWrapper";
import { testimonials } from "../constants";


const FeedbackCard =({testimonial, name, designation, company, image, index})=> (
    <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)} className="w-full p-10 rounded-3xl bg-black-200 xs:w-[320px]">
      <p className="font-black text-white text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial} </p>
      </div>

      <div className="flex  gap-1 mt-7 items-center justify-between">
        <div className="flex flex-col flex-1">
          <p className="font-medium text-white text-[16px]"><span className="text-blue-400">@</span>{name}</p>  
          <p className="text-secondary text-[12px]">{designation}of {company}</p>
        </div>
      <img alt={`feedback-by-${name}`} src={image} className="object-cover w-10 h-10 rounded-full"/>
      </div>
    </motion.div>
)



const Feedbacks =()=>{
  return(
    < div className="bg-black-100 rounded-[20px] mt-12">
      <div className={`${styles.padding}bg-tertiary rounded-2xl min-h-[300px]`}>
        
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>what others say?</p>
          <h2 className={styles.sectionHeadText}>testimonials.</h2>
        </motion.div>
      </div>
        <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial}/>
          ))}
        </div>
    </div>
    
  )

}

export default SectionWrapper(Feedbacks, "");