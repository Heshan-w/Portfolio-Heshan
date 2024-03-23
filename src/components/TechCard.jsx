import React from "react";
import { Card, CardBody } from "@nextui-org/react";

const TechCard = ({ image, name }) => {
  return (
    <div className="font-mono p-3">
      <Card shadow="none" className="bg-black">
        <CardBody className="h-[130px] md:h-[150px] w-[130px] md:w-[150px] flex justify-center items-center rounded-md border-black">
          <div className="flex flex-col justify-center items-center text-center border-black">
            <img
              src={image}
              alt="technology logo"
              className="w-[65px] md:w-[75px] h-[65px] md:h-[75px]"
            />
            <p className="text-neutral-200 mt-2">{name}</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TechCard;
