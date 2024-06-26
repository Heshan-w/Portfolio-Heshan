import React, { useState } from "react";
import { Button, Divider, Tooltip } from "@nextui-org/react";

const ProjectCard = ({
  title,
  images,
  shortDescription,
  longDescription,
  tech,
  link,
}) => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center font-mono text-neutral-200">
      <div className="flex flex-col items-center justify-center m-10 border min-w-full md:min-w-[1200px] rounded-lg px-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl mt-8 mb-4">{title}</h1>
          <h1 className="text-center text-2xl mb-4">{shortDescription}</h1>
          <Divider className="bg-neutral-200" />

          <div className="flex flex-wrap items-center justify-center mt-1">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={title}
                className="w-full md:w-[350px] h-[350px] m-2 object-contain object-center"
              />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between my-2 min-w-full md:min-w-[1000px] px-6 flex-col md:flex-row">
            <div className="flex items-center justify-center flex-wrap">
              <div className="flex flex-col items-center">
                <p className="text-lg mx-2">Technologies</p>
                <p className="text-lg mx-2">used</p>
              </div>
              <p className="text-lg mx-2">:</p>
              {tech.map((t, index) => (
                <img
                  src={t}
                  alt="technology logo"
                  key={index}
                  className="w-[35px] h-[35px] mx-2 rounded-lg"
                />
              ))}
            </div>

            <Tooltip
              content="View On GitHub"
              placement="bottom"
              showArrow={true}
              className="bg-neutral-200 mt-4 md:mt-0"
            >
              <a href={link} target="_blank">
                <img
                  src="/assets/link.png"
                  alt="link"
                  className="w-[30px] h-[30px] "
                />
              </a>
            </Tooltip>
          </div>

          <Button
            onClick={() => setExpand(!expand)}
            className="text-lg my-4 max-lg:"
          >
            {expand ? "Close section" : "Learn More"}
          </Button>

          <div className="max-w-full md:max-w-[700px]">
            {expand && (
              <p className="text-lg text-center mb-4">{longDescription}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;