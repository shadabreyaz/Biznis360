import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import about1 from "../assets/about-us.jpg";
import about2 from "../assets/about-us2.webp";
import about3 from "../assets/about-us3.webp";
import about4 from "../assets/about-us4.webp";

const AboutUs = () => {
  const sections = [
    {
      title: "Who We Are",
      text: "Welcome to Promoters Marketing Agency, where passion meets purpose. We are true consumers turned solution providers for brands in retail, hospitality and entertainment. Our driving purpose is to help brands communicate their story while enabling customers to make informed decisions.With years of experience serving global and local brands, we have built extensive networks across distribution and retail industries. We take pride in going the extra mile to achieve results and continue to evolve with industry trends.",
      image: about1,
      button: "Discover More",
    },
    {
      title: "What We Believe",
      text: "We strongly believe in the value of people and their unique individuality. This is why we are committed to connecting the right people with the right opportunities.While we leverage technology to our advantage, we never lose sight of our intention: to create and exchange meaningful conversations. We view our customers as our biggest brand influencers and remain curious and hungry to do better.",
      image: about2,
      button: " Discover More",
    },
    {
      title: "How We Work",
      text: "As passionate storytellers, we use our people, technology, art, creativity and humour to captivate audiences and deliver positive experiences. We have a proven track record in conducting events and managing process and compliance aspects to ensure the highest quality of experience for consumers.Our holistic approach helps us understand and fulfil our clients' needs. We adapt quickly to industry changes, ensuring every brand we work with receives innovative and reliable support.",
      image: about3,
      button: "Discover More",
    },
    {
      title: "Our Promise",
      text: "We take pride in the strength of our team and our unwavering commitment to delivering results. With dedication, creativity and excellence, we strive to create lasting success stories that stand the test of time.Our promise is simple: to remain your trusted partner, continually improving, innovating and delivering experiences that truly make an impact.",
      image: about4,
      button: "Discover More",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">

        <div className="bg-gray-50 rounded-3xl shadow-xl p-5 sm:p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start">

            {/* IMAGE */}
            <div className="relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] w-full overflow-hidden rounded-2xl shadow-md -ml-2 sm:-ml-4 md:ml-0">
              <AnimatePresence mode="wait">
                <motion.img
                  key={sections[activeIndex].image}
                  src={sections[activeIndex].image}
                  alt={sections[activeIndex].title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* TEXT */}
            <div className="flex flex-col mt-4 md:mt-0">
              <h2 className="text-2xl sm:text-3xl font-extrabold">About</h2>
              <div className="w-full h-px bg-gray-200 my-2"></div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 mt-1 text-red-600">
                Biznis360
              </h3>

              {/* TABS */}
              <div className="mb-4">
                <div className="flex gap-5 sm:gap-6 overflow-x-auto hide-scrollbar font-medium text-sm sm:text-base">
                  {sections.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className="relative pb-2 flex-shrink-0 transition-colors duration-200"
                    >
                      {item.title}
                      {activeIndex === index && (
                        <motion.span
                          layoutId="underline"
                          className="absolute left-0 right-0 bottom-0 h-0.5 rounded-full bg-red-600"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* CONTENT */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={sections[activeIndex].title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="leading-relaxed text-sm sm:text-base md:text-lg mb-6"
                >
                  <p>{sections[activeIndex].text}</p>
                </motion.div>
              </AnimatePresence>

              {/* BUTTON */}
              <button className="inline-block w-fit px-6 py-3 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition">
                {sections[activeIndex].button}
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
