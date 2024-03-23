import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-black text-neutral-200 border-t-2 border-neutral-200">
      <div className="flex flex-col sm:flex-row justify-center items-center ">
        <a href="https://github.com/Heshan-w" target="blank">
          <img
            src="/assets/github.svg"
            alt="github logo"
            className="w-[30px] h-[30px] mx-2 sm:mx-7 my-1 sm:my-0 cursor-pointer"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/heshan-wanigasinghe-65a930263/"
          target="blank"
        >
          <img
            src="/assets/linkedin.svg"
            alt="linkedIn logo"
            className="w-[30px] h-[30px] mx-2 sm:mx-7 my-1 sm:my-0 cursor-pointer"
          />
        </a>

        <a href="mailto:htwanigasinghe@gmail.com" target="_blank">
          <img
            src="/assets/mail.svg"
            alt="email logo"
            className="w-[30px] h-[40px] mx-2 sm:mx-7 my-1 sm:my-0 cursor-pointer"
          />
        </a>
      </div>

      <p className="mt-4">Heshan Wanigasinghe</p>
      <p> &copy; 2024</p>
    </div>
  );
};

export default Footer;
