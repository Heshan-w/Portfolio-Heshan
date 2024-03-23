import React, { useState, useEffect } from "react";
import "/src/animations.css";
import TechCard from "../components/TechCard";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Image,
  Button,
  Tooltip,
} from "@nextui-org/react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-black">
      <div className="flex flex-col md:flex-row justify-between m-3 w-full md:w-[1200px]">
        <div className="flex flex-col m-10 px-5 font-mono justify-center items-center animate-slideInFromLeft text-neutral-200">
          <div className="flex flex-col py-8 items-start">
            <h1 className="text-4xl md:text-7xl  font-extrabold">
              Hi there 👋
            </h1>
            <p className="text-lg md:text-5xl  my-5">
              I'm <span className="text-neutral-600">Heshan Wanigasinghe</span>
            </p>

            <p className="text-lg md:text-xl text-center">
              Computer Science Undergraduate
            </p>

            <Button className="mt-8">
              <a href="mailto:htwanigasinghe@gmail.com" className="text-lg">
                Get In Touch
              </a>
            </Button>
          </div>
        </div>

        <div className="flex m-10 p-5 animate-slideInFromRight">
          <Card className="py-4 bg-neutral-200">
            <CardBody className="overflow-visible py-2">
              <Image
                alt="image of me"
                className="object-cover rounded-xl"
                src="/assets/userImage.jpg"
                style={{ width: "100%", height: "auto", maxWidth: "400px" }}
              />
            </CardBody>
          </Card>
        </div>
      </div>

      {/* the other section to fill out the page */}
      <div className="flex justify-center items-center w-full md:w-[1200px]">
        <div className="flex flex-col justify-center items-center m-10 font-mono">
          <span className="text-4xl md:text-8xl mb-10 text-neutral-600">
            About Me
          </span>
          <span className="text-xl md:text-2xl text-neutral-200 text-center">
            Hi, I'm Heshan Wanigasinghe, a computer science student with a
            passion for coding, problem-solving and learning. I love turning
            ideas into practical solutions that address real-life challenges.
            From developing web applications to working with algorithms, I enjoy
            the process of writing clean, efficient code and trying out new
            technologies, check out below to see a list of technologies I have
            worked with.
          </span>
          <span className="text-4xl md:text-6xl mt-28 text-center text-neutral-600">
            Frameworks/Libraries, Languages & Tools
          </span>

          <div className="flex justify-center items-center w-full md:w-[900px] flex-col mt-10 rounded-xl shadow-md relative ">
            {/* The frontend information */}
            <Card className="max-w-[800px] bg-black border border-neutral-200 m-5">
              <CardHeader className="flex gap-3 justify-center">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-3xl text-neutral-200">Frontend</p>
                </div>
              </CardHeader>
              <Divider className="bg-neutral-200" />
              <CardBody>
                <div className="flex flex-wrap items-center justify-center">
                  <TechCard image="/assets/html5.svg" name="HTML" />

                  <TechCard image="/assets/css3.svg" name="CSS" />
                  <TechCard image="/assets/js.svg" name="JavaScript" />
                  <TechCard image="/assets/typescript.svg" name="Typescript" />
                  <TechCard image="/assets/react.svg" name="React" />
                  <TechCard image="/assets/tailwindcss.svg" name="Tailwind" />
                  <TechCard image="/assets/figma.svg" name="Figma" />
                </div>
              </CardBody>
            </Card>

            {/* The backend information */}
            <Card className="max-w-[800px] bg-black border border-neutral-200 m-5">
              <CardHeader className="flex gap-3 justify-center">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-3xl text-neutral-200">Backend</p>
                </div>
              </CardHeader>
              <Divider className="bg-neutral-200" />
              <CardBody>
                <div className="flex flex-wrap items-center justify-center">
                  <TechCard image="/assets/nodejs.svg" name="Node.js" />
                  <TechCard image="/assets/python.svg" name="Python" />
                  <TechCard image="/assets/php.svg" name="PHP" />
                  <TechCard image="/assets/java.svg" name="Java" />
                  <TechCard image="/assets/express-js.png" name="Express.js" />
                  <TechCard image="/assets/mysql.svg" name="MySQL" />
                  <TechCard image="/assets/mongodb.svg" name="MongoDB" />
                  <TechCard image="/assets/postman.svg" name="Postman" />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      {isVisible && (
        <Tooltip
          content="Scroll To Top"
          placement="top"
          showArrow={true}
          className="bg-neutral-200"
        >
          <div
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 cursor-pointer p-1 mr-1"
          >
            <img
              src="/assets/upArrow.png"
              alt="scroll to top"
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]"
            />
          </div>
        </Tooltip>
      )}
    </div>
  );
};

export default Home;
