'use client';

import { motion } from 'framer-motion';
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { fadeIn, staggerContainer } from '../utils/motion';
import { heroBackground , spaceBG1} from '../assets';

const Benefits = () => {
  return (
    <Section id="features">
      <motion.div 
      variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
      className="container relative z-2">
        <motion.div
          
          className="text-center mb-12"
        >
          <Heading
            className="md:max-w-md lg:max-w-2xl capitalize"
            title="How do we do it?"
          />
        </motion.div>

        {/* Grid layout with larger centered cards */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn}  // Apply fadeIn animation to grid container
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10 justify-center items-center"
        >
          {benefits.map((item) => (
            <motion.div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[28rem] lg:max-w-[32rem] xl:max-w-[36rem] mx-auto"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
              variants={fadeIn} // Apply fadeIn animation to individual cards
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </motion.div>
            
          ))}
        </motion.div>
      </motion.div>
           <div className="absolute -top-[29%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[45%] opacity-[0.19]">
              <img
                src={spaceBG1}
                className="w-full"
                width={1440}
                height={1800}
                alt="hero"
              />
            </div>
    </Section>
  );
};

export default Benefits;
