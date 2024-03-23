import React, { useState, useEffect } from "react";
import { Tooltip } from "@nextui-org/react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  // a state to check if the scroll button should be visible
  const [isVisible, setIsVisible] = useState(false);

  // function to check if the user has scrolled down
  const toggleVisibility = () => {
    // if the user has scrolled down more than 500px, set the visible state to true
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // on mount, add an event listener to check if the user has scrolled
  // the addEventListener function takes two arguments, the event to listen for and the function to call when the event occurs
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="flex flex-col items-center bg-black p-4 md:p-8 lg:p-12">
      <span className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl mb-10 text-neutral-600">
        Projects
      </span>

      {/* Focalize */}
      <ProjectCard
        shortDescription="- Online Productivity Enhancement Browser Extension -"
        longDescription="'Focalize' is a web application and browser extension designed
          to enhance focus and productivity. It features an intelligent web content 
          classifier powered by machine learning, which dynamically restricts access to 
          distracting websites based on pre-defined categories. Unlike traditional blockers, 
          Focalize offers a more efficient approach by allowing users to block entire 
          categories of content. Additionally, it provides productivity-enhancing features 
          such as activity analysis and time management tools. Built with TypeScript, React, 
          and Tailwind CSS for the frontend, Python for machine learning, and Firebase 
          for data storage, Focalize delivers a seamless and effective solution 
          for navigating the digital landscape with focus and efficiency."
        images={[
          "/assets/focalize1.jpg",
          "/assets/focalize2.jpg",
          "/assets/focalize3.jpg",
        ]}
        tech={[
          "/assets/typescript.svg",
          "/assets/react.svg",
          "/assets/tailwindcss.svg",
          "/assets/python.svg",
          "/assets/firebase.svg",
        ]}
        title="Focalize"
        link="......./"
      />

      {/* BookStore */}
      <ProjectCard
        shortDescription="- Online Book Collection Management System -"
        longDescription="The Book Management System offers an intuitive platform for efficient
          book collection management. Users can seamlessly add, view, edit, and remove entries.
          Leveraging MongoDB Atlas for secure storage and scalability, Express.js handles backend 
          logic, ensuring smooth API interactions. React.js powers dynamic user interfaces, 
          while Node.js facilitates efficient server-side execution, optimizing 
          performance for an enhanced user experience."
        images={[
          "/assets/bookstore1.png",
          "/assets/bookstore4.png",
          "/assets/bookstore3.png",
        ]}
        tech={[
          "/assets/mongodb.svg",
          "/assets/express-js.png",
          "/assets/react.svg",
          "/assets/nodejs.svg",
          "/assets/tailwindcss.svg",
        ]}
        title="Book Management System"
        link="......./"
      />

      {/* E-commerce website */}
      <ProjectCard
        shortDescription="- Online Retail Store -"
        longDescription="The Online Retail Store project is a fully-fledged e-commerce platform 
        developed using HTML, CSS, PHP, and MySQL. This project primarily served as a way to 
        learn server-side languages and database operations. Users can browse through a 
        wide range of items, add them to their carts, and proceed to checkout seamlessly. 
        The platform utilizes HTML and CSS to create a visually appealing and intuitive 
        user interface, ensuring an enjoyable shopping experience for customers.
        Behind the scenes, PHP serves as the server-side language, handling dynamic 
        content generation and user authentication. MySQL, hosted on a local server provided 
        by XAMPP, serves as the database management system, storing essential information such 
        as product details and user profiles. The project demonstrates the effective integration 
        of front-end and back-end technologies to create a robust and functional e-commerce website."
        images={[
          "/assets/homteq1.png",
          "/assets/homteq2.png",
          "/assets/homteq3.png",
        ]}
        tech={[
          "/assets/html5.svg",
          "/assets/css3.svg",
          "/assets/php.svg",
          "/assets/mysql.svg",
        ]}
        title="hometeq"
        link="......./"
      />

      {/* E-commerce website */}
      <ProjectCard
        shortDescription="- Encrypts And Stores User Passwords -"
        longDescription="The Online Password Manager project is a secure solution developed with React, Node.js, Express, and MySQL.
         It enables users to store and retrieve passwords for various web services securely. Passwords are encrypted before 
         storage using Node.js's crypto module, ensuring confidentiality. At the moment the project utilizes XAMPP's local database 
         for data storage. With an intuitive React-based interface, users can efficiently manage their passwords. Overall, the project 
         showcases effective integration of frontend and backend technologies to provide a secure password management solution."
        images={["/assets/passManager1.png", "/assets/passManager2.png"]}
        tech={[
          "/assets/express-js.png",
          "/assets/react.svg",
          "/assets/nodejs.svg",
          "/assets/mysql.svg",
        ]}
        title="Password Manager"
        link="......./"
      />

      {/* E-commerce website */}
      <ProjectCard
        shortDescription="- Core OOP Principals -"
        longDescription="The Shopping Page project serves as a centralized platform for both managers 
        and customers, providing a Command Line Interface (CLI) for managers and a Graphical User 
        Interface (GUI) for customers that was made using JavaSwing. This project embodies core 
        Object-Oriented Programming (OOP) principles, including encapsulation, inheritance, polymorphism, 
        and abstraction, ensuring a modular, reusable, and flexible design. Additionally, it utilizes Java's 
        serialization mechanism for data persistence, enhancing the system's robustness. Overall, the Shopping Page 
        project offers a seamless and efficient solution for managing online shopping interactions while demonstrating 
        the power of OOP principles in software development."
        images={["/assets/oop1.png", "/assets/oop2.png"]}
        tech={["/assets/java.svg"]}
        title="Shopping Page"
        link="......./"
      />

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

export default Projects;
