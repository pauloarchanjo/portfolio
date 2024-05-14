"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a developer with a background in 'Computer Technician' and currently pursuing a degree in{" "}
        <span className="font-medium">Systems Analysis and Development</span>. Along my journey, I've delved into various domains, refining my expertise in{" "}
        <span className="font-medium">web development, automation, computer vision, and computer maintenance</span>.{" "}
        Beyond coding, I harbor a strong passion for <span className="font-medium">UI and UX Design</span>, leveraging tools like Figma, Photoshop, and Illustrator to apply this knowledge.
        I firmly believe that blending solid technical skills with a keen aesthetic sense is pivotal in crafting impactful digital experiences. My primary toolkit comprises{" "}
        <span className="font-medium">Python, C#, and JavaScript</span>. Additionally, I'm proficient in React and Node.
      </p>


      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing my guitar,
        watching movies, and playing with my cats. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">philosophy and arts</span>.
      </p>
    </motion.section>
  );
}
