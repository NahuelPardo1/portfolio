import React from "react";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiDotnet } from "react-icons/si";
import { FaReact, FaAngular, FaVuejs, FaJava, FaDatabase } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 dark:text-white sm:text-2xl">
            Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="w-full">
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-center"
            >
              <div className="flex xl:grid xl:grid-cols-4 gap-10 justify-center my-5 w-full">
                <div className="flex items-center flex-col gap-10">
                  <SkillBox logo={<SiDotnet />} black={"black"} white={"white"} skill={"C# / .NET"} />
                  <SkillBox logo={<FaJava />} black={"black"} white={"white"} skill={"Java"} />
                </div>

                <div className="flex items-center flex-col gap-10">
                  <SkillBox logo={<IoLogoNodejs />} black={"white"} white={"black"} skill={"Node.js"} />
                  <SkillBox logo={<FaDatabase />} black={"white"} white={"black"} skill={"SQL / MySQL"} />
                </div>

                <div className="flex items-center flex-col gap-10">
                  <SkillBox logo={<FaReact />} black={"white"} white={"black"} skill={"React"} />
                  <SkillBox logo={<FaAngular />} black={"white"} white={"black"} skill={"Angular"} />
                </div>

                <div className="flex items-center flex-col gap-10">
                  <SkillBox logo={<FaVuejs />} black={"black"} white={"white"} skill={"Vue"} />
                  <SkillBox logo={<SiNextdotjs />} black={"black"} white={"white"} skill={"Next.js"} />
                </div>

                <div className="flex items-center flex-col gap-10">
                  <SkillBox logo={<IoLogoHtml5 />} black={"black"} white={"white"} skill={"HTML5"} />
                  <SkillBox logo={<IoLogoCss3 />} black={"black"} white={"white"} skill={"CSS3"} />
                </div>

                <div className="flex items-center flex-col gap-10">
                  <SkillBox logo={<SiJavascript />} black={"white"} white={"black"} skill={"JavaScript"} />
                  <SkillBox logo={<SiTailwindcss />} black={"black"} white={"white"} skill={"Tailwind CSS"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
