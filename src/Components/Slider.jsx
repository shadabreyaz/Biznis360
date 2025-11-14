import React from "react";
import { motion } from "framer-motion";

import hermes from "../assets/hermes.png";
import boss from "../assets/boss.png";
import juicy from "../assets/juicy.png";
import roberto from "../assets/roberto.png";
import thierry from "../assets/thierry.png";
import african from "../assets/african.png";

const logos = [hermes, boss, juicy, roberto, thierry, african];

const Slider = () => {
  return (
    <section className="py-20">
      <div className="bg-gray-50 max-w-6xl mx-auto rounded-3xl shadow-xl p-10">
        
        <h2 className="text-center text-lg tracking-[4px] uppercase mb-12">
          Clients & Projects
        </h2>

        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-16 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-20 grayscale hover:grayscale-0 transition duration-300"
              >
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
