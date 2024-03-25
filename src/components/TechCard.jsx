import React from "react";
import { Card, CardBody } from "@nextui-org/react";

const TechCard = ({ image, name }) => {
  return (
    <div className="font-mono p-3">
      <Card shadow="none" className="bg-black">
        <CardBody className="h-[120px] md:h-[130px] w-[120px] md:w-[130px] flex justify-center items-center rounded-md border-black">
          <div className="flex flex-col justify-center items-center text-center border-black">
            <img
              src={image}
              alt="technology logo"
              className="w-[40px] md:w-[65px] h-[40px] md:h-[65px]"
            />
            <p className="text-neutral-200 mt-2">{name}</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TechCard;