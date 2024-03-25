import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-black text-neutral-200 border-t-2 border-neutral-200">
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 space-x-0 sm:space-x-7">
        <a href="https://github.com/Heshan-w" target="blank">
          <img
            src="/assets/github.svg"
            alt="github logo"
            className="w-[30px] h-[30px] cursor-pointer"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/heshan-wanigasinghe-65a930263/"
          target="blank"
        >
          <img
            src="/assets/linkedin.svg"
            alt="linkedIn logo"
            className="w-[30px] h-[30px] cursor-pointer"
          />
        </a>

        <a href="mailto:htwanigasinghe@gmail.com" target="_blank">
          <img
            src="/assets/mail.svg"
            alt="email logo"
            className="w-[30px] h-[40px] cursor-pointer"
          />
        </a>
      </div>

      <p className="mt-4">Heshan Wanigasinghe</p>
      <p> &copy; 2024</p>
    </div>
  );
};

export default Footer;