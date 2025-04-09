'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { astroHero, astro2 } from '../../assets';



const flyIn = (delay = 0) => ({
  hidden: {
    opacity: 0,
    x: -300,
    y: -300,
    rotate: 45,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 30,
      delay,
      duration: 1.5,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    x: 300,
    y: 300,
    rotate: -45,
    transition: {
      type: 'spring',
      duration: 1,
      ease: 'easeInOut',
    },
  },
});

const TypingText = ({ text }) => {
  const words = text.split(' ');

  return (
    <p className="font-extrabold text-[55px] sm:text-[60px] lg:text-[105px] sm:text-left text-center text-secondary-white px-2 leading-tight">
      {words.map((word, index) => {
        const isLongWord = word.length > 4;

        return (
          <span key={index} className={isLongWord ? 'block' : ''}>
            {Array.from(word).map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      delay: (index + charIndex) * 0.06,
                    },
                  },
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
            {index !== words.length - 1 && <span>&nbsp;</span>}
            {isLongWord && <br />}
          </span>
        );
      })}
    </p>
  );
};

const AnimatedSection = ({ reverse, text, imageSrc }) => {
  useEffect(() => {
    gsap.registerPlugin();
    const images = document.querySelectorAll('.astro-img');
    images.forEach((image) => {
      gsap.to(image, {
        y: 100,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'power1.inOut',
      });
    });
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen py-14 px-8 sm:px-4">
      {/* Spotlight Effect */}
     

      <motion.div
        className={`relative z-10 flex flex-col lg:flex-row ${
          reverse ? 'lg:flex-row-reverse' : ''
        } items-center justify-between w-full max-w-6xl`}
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        viewport={{ once: false, amount: 0.25 }}
      >
        {/* Text Section (50%) */}
        <motion.div className="w-full lg:w-1/2 px-12">
          <TypingText text={text} />
        </motion.div>

        {/* Image Section (50%) */}
        <motion.div
          className="w-full lg:w-1/2 p-4 flex justify-center"
          variants={flyIn(0.5)}
          initial="hidden"
          animate="show"
          exit="exit"
        >
            
          <motion.img
            src={imageSrc}
            className="astro-img w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] object-cover z-10"
            alt="astro"
          />
          <div
  className="absolute rounded-full w-[700px] h-[600px] z-0"
  style={{
    background: 'radial-gradient(circle, rgba(255,168,168,0.3) 0%, rgba(0, 0, 255, 0.3) 80%)',
    opacity: 0.6,
    filter: 'blur(3rem)',
  }}
></div>


      
        </motion.div>
      </motion.div>
    </section>
  );
};

const First = () => {
  const sentences = [
    'In a competitive world',
    'Winning requires strategy',
    'Precision & Innovation',
  ];

  const images = [astroHero, astro2];

  return (
    <>
      {sentences.map((text, index) => (
        <AnimatedSection
          key={index}
          text={text}
          reverse={index % 2 !== 0}
          imageSrc={images[index % images.length]}
        />
      ))}
    </>
  );
};

export default First;
