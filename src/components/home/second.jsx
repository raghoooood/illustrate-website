'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { curve } from '../../assets';

const Second = () => (
  <section className='sm:py-26 py-24 px-16 sm:px-12 relative z-10'>
    <div className="z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=' w-[100%] mx-auto flex justify-center items-center flex-col'
    >
   <motion.p
  variants={fadeIn('up', 'tween', 0.5, 1)}
  className="mb-14 sm:mb-10 font-normal sm:text-[38px] text-[25px] text-center text-secondary-white leading-tight capitalize  "
>
  <span className="mt-10 text-white">That's why having an experienced marketing team that </span>
  <br />
  <span className="block mt-4"> knows how to grow your brand is essential.</span> 
  <br />
  <span className="text-white block">Your Business Deserves {" "}
  <span className="inline-block relative">
  NOTHING LESS!{" "}
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-0"
                  width={624}
                  height={30}
                  alt="Curve"
                />
              </span>
  </span> 
</motion.p>
</motion.div>
  </section>
);

export default Second;
