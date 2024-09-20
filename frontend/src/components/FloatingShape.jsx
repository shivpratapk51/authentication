import { motion } from "framer-motion"

const floatingShape = ({ color, size, top, left, delay }) => {
  return (
    <motion.div
      className={`absolute ${size} ${color} rounded-full opacity-20 blur-xl`}
      style={{ top: `${top}`, left: `${left}` }} 
      animate={{
        y: ["0%", "100%", "0%"],
        x: ["0%", "100%", "0%"],
        rotate: [0, 360, 0],
      }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        delay
      }}
      aria-hidden="true"
    />
  )
}

export default floatingShape
