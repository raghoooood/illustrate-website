'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';

const CreatedBy = () => (
  <section className='sm:py-26 py-24 px-16 sm:px-12 relative z-10'>
    <div className="z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='lg:w-[80%] w-[50%] mx-auto flex justify-center items-center flex-col'
    >
   <motion.p
  variants={fadeIn('up', 'tween', 0.2, 1)}
  className="mb-18 sm:mb-20 font-extrabold sm:text-[78px] text-[55px] text-center text-secondary-white px-4"
>
  <span className="mt-10 text-white">CREATE.</span>
  <br />
  <span className="mt-24 block">THRIVE.</span> {/* Adds spacing between "UTILITY." and "COMMUNITY." */}
  <br />
  <span className="text-white mt-24 block">INSPIRE.</span> {/* Adds spacing between "COMMUNITY." and "ART." */}
</motion.p>
</motion.div>
  </section>
);

export default CreatedBy;
