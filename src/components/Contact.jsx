import {motion} from "framer-motion";
import { styles } from "../style";
import { slideIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { useRef, useState } from "react";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";




const Contact = ()=>{
  const formRef = useRef();
  const[form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_v3a44om",
      "template_hg0oqnv", 
      {
        from_name: form.name,
        from_email: form.email,
        to_name: "Amal",
        to_email: "molyhamzakoko45@gmail.com",
        message: form.message
      },
      "JiuMdLICA-0CaPJsh"
    ).then(() => {
      setLoading(false);
      toast.success("thank you. I will contact you as soon as possible  ^_^");
      setForm({
        name: "",
        email: "",
        message: "",
      })
    },
     (error) => {
      setLoading(false);
      console.log(error);
      toast.error("something went wrong *_*")
    })

  }

  return (
    <div className="xl:flex-row xl:mt-12 flex flex-col-reverse gap-10 overflow-hidden">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
          <p className={styles.sectionSubText}>get in touch</p>
          <h2 className={styles.sectionHeadText}>contact.</h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 mt-10"
      >
        <label className="flex flex-col mb-4 gap-2">
          <span className="font-medium text-[14px]">Your Name</span>
          <input 
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="bg-tertiary py-4 px-6 rounded-lg border-none outlined-none placeholder:text-secondary text-white font-medium"
            placeholder="What is your name?"
          />
        </label>
        <label className="flex flex-col mb-4 gap-2">
          <span className="font-medium text-[14px]">Your Email</span>
          <input 
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="bg-tertiary py-4 px-6 rounded-lg border-none outline-none placeholder:text-secondary text-white font-medium"
            placeholder="What is your email?"
          />
        </label>
        <label className="flex flex-col mb-4 gap-2">
          <span className="font-medium text-[14px]">Your Message</span>
          <textarea
            name= "message"
            rows={7}
            value={form.message}
            onChange={handleChange}
            className="bg-tertiary py-4  px-6 rounded-lg border-none outline-none placeholder:text-secondary text-white font-medium"
            placeholder="What do you want to say?"
          />
        </label>
        <button 
          type="submit"
          className="bg-tertiary border-none outline-none rounded-lg shadow-medium shadow-primary font-bold text-white w-fit px-8 py-3"
        >
          {loading? "Sending ...": "Send"}</button>
      </form>
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact");