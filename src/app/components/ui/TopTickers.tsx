'use client';
import React,{ useMemo} from "react";
import { animate, easeIn, motion } from "framer-motion";

type AutoScrollerProps = {
    items: React.ReactNode[];
    speed?: number;
}

// Yeh variants object hai - yahan animation states define karte hain
const marqueeVariants = {
    animate:{
        x:[0, -100], // 0 se -1000px tak move karega
        transition:{
            x:{
                repeat: Infinity,       // Infinite loop
                repeatType:"loop" as const,
                duration: 20,          // 20 seconds mein complete hoga
                ease:"linear" as const,// Constant speed
            },
        },
    },
    pause:{
        x:0,
        transition: {duration: 0.3},
    },
};


export const TopTickers = ({items, speed=20 }:AutoScrollerProps) => {
return (
    <div className="bg-caffia overflow-hidden whitespace-nowrap">  {/* Parent container */}
    <motion.div
    className="flex flex-row whitespace-nowrap"
    variants={marqueeVariants}
    animate="animate"
    whileHover="pause" // Hover pe pause ho jayega
    >
        <div className="py-2">
            {items}
            {items} {/* Duplicate content for seamless loop */}
        </div>

    </motion.div>
    </div>
)
}