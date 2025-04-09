'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from './design/cards';
import {
  samah,
  mohammad,
  motaz,
  lana,
  imad,
  nour,
  musab,
  waleedKhan,
  osama,
} from '../assets';
import useMediaQuery from '../hooks/useMediaQuery';

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

const peopleData = [
  { id: 1, image: samah, alt: 'Samah', name: 'Samah Faek', title: 'Project Manager', nickname: 'The Organizer', position: 'bottom-20 right-[90%]' },
  { id: 3, image: motaz, alt: 'Motaz', name: 'Moataz Najjar', title: 'UI/UX Designer', nickname: 'Pixel Perfectionist', position: 'top-2/3 left-[47%]' },
  { id: 4, image: lana, alt: 'Lana', name: 'Lana Alhennawi', title: 'Marketing Lead', nickname: 'The Voice', position: 'bottom-34 left-[28%]' },
  { id: 5, image: imad, alt: 'Imad', name: 'Imad Halwany', title: 'QA Engineer', nickname: 'Bug Hunter', position: 'top-[6%] right-[25%]' },
  { id: 7, image: musab, alt: 'Musab', name: 'Musab Hawari', title: 'DevOps', nickname: 'The Bridge', position: 'top-[60%] left-[14%]' },
  { id: 9, image: osama, alt: 'Osama', name: 'Osama Diab', title: 'Backend Developer', nickname: 'Data Whisperer', position: 'top-[60%] left-[80%]' },
];

const World = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const openModal = (person) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPerson(null);
  };

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.paddings} relative z-10`}
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/map.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />

      {/* Content */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.5 }}
        className={`${styles.innerWidth} relative z-10 mx-auto flex flex-col p-12`}
      >
        <TypingText title="| Our Team " textStyles="text-center" />
        <TitleText title="The Minds Behind The Magic" textStyles="text-center mt-5" />

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className={`relative mt-[68px] w-full ${
            isMobile ? 'grid grid-cols-2 gap-4 place-items-center' : 'h-[350px]'
          }`}
        >
          {peopleData.map((person) => (
            <div
              key={person.id}
              className={`${
                isMobile
                  ? 'w-[120px] h-[120px]'
                  : `absolute ${person.position} w-[180px] h-[180px]`
              } p-[4px] rounded-full bg-[#5D6680] cursor-pointer flex flex-col items-center`}
              onClick={() => openModal(person)}
            >
              <img
                src={person.image}
                alt={person.alt}
                className="w-full h-full object-cover rounded-full"
              />
              <p className="mt-2 text-white text-center text-xs md:text-sm font-semibold">
                {person.name}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && selectedPerson && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-20 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-xl shadow-xl p-6 max-w-[90vw] max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-2xl font-bold text-gray-700 hover:text-red-500"
              onClick={closeModal}
            >
              ×
            </button>
            <img
              src={selectedPerson.image}
              alt={selectedPerson.alt}
              className="w-full max-h-[400px] object-contain rounded-xl"
            />
            <div className="mt-4 text-center">
              <h2 className="text-xl font-bold text-gray-800">{selectedPerson.name}</h2>
              <p className="text-sm text-gray-600 mt-1">{selectedPerson.title}</p>
              <p className="text-sm italic text-gray-500 mt-1">"{selectedPerson.nickname}"</p>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default World;
