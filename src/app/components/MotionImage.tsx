import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function MotionImage(){
    return(
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 2 }}>
            <Image className="p-2"
                src="/Blossom_Powerpuff_Girl.png"
                alt="picture of blossom"
                width={70}
                height={70}
            />
        </motion.div>
    )
}

export default MotionImage;