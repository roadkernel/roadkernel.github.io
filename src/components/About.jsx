import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import card1 from "../assets/pfps/1.jpg";
import card2 from "../assets/pfps/2.jpg";
import card3 from "../assets/pfps/3.jpg";
import card4 from "../assets/pfps/4.jpg";
import { useState } from "react";


const ServiceCard = ({ index, title }) => {
  const cardImages = [card1, card2, card3, card4];
  const backgroundImage = cardImages[index - 0];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: isHovered ? "none" : "grayscale(100%)",
          transition: "filter 1s ease",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <h3
            className="text-[#FFFFFF] text-[25px] font-bold text-center"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
              WebkitTextStroke: "0px black",
            }}
          >
            <span>{title}</span>
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          What is <span className="text-[#ce4e4d]">Vault?</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Vault-4 is a next logical continuation of the chain of families founded
        after the disband of STK. The Vault is a family created for the purpose
        of collective defense of the ideas contained in our manifesto. There is
        a hierarchy within the family, a manifesto, a set of uniform rules,
        automated threat protection and warning systems, accounting for internal
        and external relationships. Over the years, we have developed a suitable
        system of internal management and foreign intelligence for us, as well
        as embarked on the rails of modernization and automation.
        <br />
        <br />
      </motion.p>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} mt-20`}>
          Current <span className="text-[#ce4e4d]">Members:</span>
        </h2>
      </motion.div>
      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        And I also want to thank the members who took a break:<br />
        WsArch <span className="italic text-sm text-[#ce4e4d]">*Sawes*</span>, PizzaRestaurantEmployee <span className="italic text-sm text-[#ce4e4d]">*pg*</span><br />
        We wish we will see you soon!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
