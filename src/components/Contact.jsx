import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          Vault <span className="text-[#ce4e4d]">contacts.</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p className={`${styles.sectionSubText} mb-4 pl-20`}>
          <a href="https://t.me/nyawnasprute" target="_blank" className="transition-colors duration-300 hover:text-[#ce4e4d]">
            &gt; Paulina's PGP, telegram and proton.
          </a>
        </p>
        <p className={`${styles.sectionSubText} mb-4 pl-20`}>
          <a href="https://t.me/egirl420" target="_blank" className="transition-colors duration-300 hover:text-[#ce4e4d]">
            &gt; Kernel's telegram
          </a>
        </p>
        <p className={`${styles.sectionSubText} mb-4 pl-20`}>
          <a href="https://github.com/roadkernel" target="_blank" className="transition-colors duration-300 hover:text-[#ce4e4d]">
            &gt; Kernel's github
          </a>
        </p>
        <p className={`${styles.sectionSubText} mb-4 pl-20`}>
          <a href="mailto:roadkernel@proton.me" target="_blank" className="transition-colors duration-300 hover:text-[#ce4e4d]">
            &gt; roadkernel@proton.me
          </a>
        </p>
        <p className={`${styles.sectionSubText} mb-4 pl-20`}>
          <a href="https://doxbin.com/user/pearl" target="_blank" className="transition-colors duration-300 hover:text-[#ce4e4d]">
            &gt; Pearl's doxbin
          </a>
        </p>
        <p className={`${styles.sectionSubText} mb-4 pl-20`}>
          <a href="https://doxbin.com/user/bhc" target="_blank" className="transition-colors duration-300 hover:text-[#ce4e4d]">
            &gt; PizzaRestaurantEmployee's doxbin
          </a>
        </p>
      </motion.p>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
