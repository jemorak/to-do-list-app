import { motion } from "framer-motion";


function MotionTitle(){
    return(
        <motion.div
                initial="hidden"
                animate="visible"
                whileHover={{
                    position: "relative",
                    zIndex: 1,
                    scale: [1, 1.2, 1.1],
                    rotate: [0, 10, -10, 0],
                    transition: {
                        duration: 0.2,
                    },
                    }}
                variants={{
                hidden: {
                    scale: 0.8,
                    opacity: 0,
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                    delay: 0.2,
                    },
                },
                }}>
                <div className="p-5 m-5 border-2 box-border border-pink-500 text-center bg-pink-200 rounded-md w-60">
                    <h1 className="text-3xl font-bold underline">To do list</h1>
                </div>
            </motion.div>


    )
}

export default MotionTitle;