'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { TypingText } from './cards';
import { astro2 } from "../../assets";
import Collaboration from '../Collaboration';

const About = () => (
  <section className="relative z-10 py-12 px-6 max-w-[1800px] mx-auto flex flex-col items-center">
    
    {/* Gradient positioned absolutely below the astro image */}
    <div className="absolute inset-0 gradient-02 z-0" />

    {/* Image and Text container */}
    <div className="relative z-10 w-full flex flex-col md:flex-row items-center">
      {/* Image Container */}
      <div className="aspect-[50/50] overflow-hidden md:aspect-[688/590] lg:aspect-[1024/890] w-full md:w-1/2 flex-shrink-0">
        <img
          src={astro2}
          className="w-full scale-[0.9] translate-y-[8%] md:scale-[0.75] md:-translate-y-[12%] lg:-translate-y-[19%]"
          width={1024}
          height={490}
          alt="astro2"
        />
      </div>

      {/* Text Container */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col items-center space-y-6 md:w-1/2 md:pl-6"
      >
        <TypingText title="| About Illustrate" textStyles="text-center" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-4 font-normal sm:text-[28px] text-[24px] text-center leading-relaxed "
        >
          <span className="font-bold text-white">Illustrate</span> began as a small in-house marketing team.
          <span className="font-bold text-white"> Over time, we evolved into a full-fledged marketing agency.</span> Since 2024, we’ve led branding, marketing, and social media management for
          <span className="font-bold text-white"> AlSayyah Group and its businesses.</span>
        </motion.p>

        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[24px] h-[36px] object-contain mt-6"
        />
      </motion.div>
    </div>

    {/* Collaboration component positioned below the image + about text */}
    <div className="relative z-10 w-full mt-12">
      <Collaboration />
    </div>
    
  </section>
);

export default About;
