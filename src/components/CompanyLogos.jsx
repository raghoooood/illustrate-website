'use client';

import { motion } from 'framer-motion';
import BallCanvas from "./canvas/BallCanvas";
import { companyLogos } from "../constants";
import { TitleText } from "./design/cards";
import { fadeIn, staggerContainer } from "../utils/motion";

const CompanyLogos = () => (
  <section className="relative z-10 py-20 px-6 bg-gradient-to-br from-n-8 to-n-7 text-white border-t border-white/10">
    <div className="max-w-7xl mx-auto p-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-10"
      >
        <TitleText
          title="Our Clients"
          textStyles="text-center text-white"
        />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-200"
        >
          We're proud to have partnered with some amazing companies, supporting them with branding, marketing, and strategy. Here's a glimpse at some of our collaborations.
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center"
      >
        {companyLogos.map((logo, index) => (
          <motion.div
            key={logo.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeIn("up", "tween", 0.2 * index, 0.75)}
            className="flex flex-col items-center space-y-6 transition-transform duration-300 ease-in-out"
          >
            {/* Increased canvas size */}
            <div className="w-full max-w-3xl h-[300px] sm:h-[250px] mx-auto" title={logo.name} aria-label={logo.name}>
              <BallCanvas icon={logo.icon} />
            </div>
            {/* Enlarged and bold logo name */}
            <div className="text-lg font-bold text-gray-100 text-center">{logo.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default CompanyLogos;
