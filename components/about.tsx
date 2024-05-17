"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  const animationProps = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.175 },
  };

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      {...animationProps}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a developer with a background as a Computer Technician, currently pursuing a degree in <span className="font-medium">Systems Analysis and Development</span>.
        Throughout my journey, I've gained expertise in various domains, including <span className="font-medium">web development, automation, computer vision, and computer maintenance</span>.
        Beyond coding, I have a strong passion for <span className="font-medium">UI and UX design</span>, utilizing tools like <span className="font-medium">Figma, Photoshop, and Illustrator</span> to enhance my work.
        My primary toolkit includes <span className="font-medium">Python, C#, and JavaScript</span>, and I'm also proficient in <span className="font-medium">React and Node.js</span>.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing the guitar, watching movies, and spending time with my cats.
        I have a passion for continuous learning and am currently exploring philosophy and arts.
      </p>
    </motion.section>
  );
}
