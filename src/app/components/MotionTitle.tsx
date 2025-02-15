import { motion } from "framer-motion";


function MotionTitle(){
    return(
        <motion.div
                initial="hidden"
                animate="visible"
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
                <div className="p-10 m-10 border-2 box-border border-pink-500 text-center bg-pink-200 rounded-md">
                <h1 className="text-3xl font-bold underline">To do list app</h1>
                </div>
            </motion.div>


    )
}

export default MotionTitle;