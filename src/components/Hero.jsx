import { curve, heroBackground, astroHero } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        {/* Flex container for h1 and robot image */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 lg:mb-24">
          {/* Left side: h1 content */}
          <div className="text-center lg:text-left lg:max-w-[50%] mb-6 lg:mb-0 z-10">
            <h1 className="h1 mb-6">
              Not Sure Where & How &nbsp;To&nbsp;Start Your Marketing Plan? Lets{" "}
              <span className="inline-block relative">
              Illustrate{" "}
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>
            {/* <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 z-10 py-4 sm:mr-14">
            Our mission: empower businesses with impactful marketing that connects and resonates with their target audience.
            </p> */}
            {/* <Button href="/pricing" white>
              Get started
            </Button> */}
          </div>

          {/* Right side: Robot image */}
          <div className="relative w-full lg:max-w-[50%]">
            <div className="relative z-1 ">
              <div className="relative ">

                <div className="aspect-[50/50]  overflow-hidden md:aspect-[688/590] lg:aspect-[1024/890]">
                  <img
                    src={astroHero}
                    className="w-full scale-[1.1] translate-y-[8%] md:scale-[0.85] md:-translate-y-[12%] lg:-translate-y-[19%]"
                    width={1024}
                    height={490}
                    alt="astro"
                  />

                  <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                  <ScrollParallax isAbsolutelyPositioned>
                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                      {heroIcons.map((icon, index) => (
                        <li className="p-5" key={index}>
                          <img src={icon} width={24} height={25} alt={icon} />
                        </li>
                      ))}
                    </ul>
                  </ScrollParallax>

                  <ScrollParallax isAbsolutelyPositioned>
                    <Notification
                      className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                      title="Video created"
                    />
                  </ScrollParallax>
                </div>
              </div>

              <Gradient />
            </div>
            <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
              <img
                src={heroBackground}
                className="w-full"
                width={1440}
                height={1800}
                alt="hero"
              />
            </div>

            <BackgroundCircles />
          </div>
        </div>

      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
