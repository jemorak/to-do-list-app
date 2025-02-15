import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function MotionImage(){
    return(
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 2 }}>
            <Image
                src="/Blossom_Powerpuff_Girl.png"
                alt="picture of blossom"
                width={100}
                height={100}
            />
        </motion.div>
    )
}

export default MotionImage;