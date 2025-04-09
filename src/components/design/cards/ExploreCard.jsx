'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../../../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    // Call fadeIn to return the correct object for variants
    variants={fadeIn('right', 'spring', index * 0.03, 0.95)}
    initial="hidden"
    animate="show"
    className={`relative ${
      active === id ? 'lg:flex-[4.5] flex-[14]' : 'lg:flex-[0.03] flex-[2]'
    } flex items-center justify-center min-w-[150px] h-[700px] transition-[flex] duration-[0.4s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[20px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] px-5">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <p className="font-normal text-[16px] leading-[18px] text-white uppercase">
          Show More
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[22px] text-[18px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
