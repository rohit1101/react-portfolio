import React, { useRef } from "react";
import Github from "./assets/github.svg";
import LinkedIn from "./assets/linkedin.svg";

function App() {
  const contactRef = useRef(null);
  console.log(contactRef);
  return (
    <div>
      <div className="h-screen  w-full bg-cover items-center p-32 pt-12 bg-black-50 bg-blend-overlay bg-[url('./assets/profile.webp')] bg-center lg:bg-top text-white">
        <nav className="flex justify-between font-medium">
          <p className="text-base">Rohit S</p>
          <ul className="flex text-text-gray text-base gap-16">
            <li className="cursor-pointer hover:text-blue">
              <a href="https://ecstatic--dev.hashnode.dev">Blog</a>
            </li>
            <li
              className="cursor-pointer hover:text-blue"
              onClick={() => contactRef.current.scrollIntoView()}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <main className="flex flex-col justify-center h-full max-w-2xl">
          <h1 className=" leading-tight text-3xl md:text-6xl font-semibold text-blue">
            Helping companies build better, scalable software.
          </h1>
          <p className=" text-text-gray py-12">
            Hey there, My name is Rohit and I'm a front-end developer with 2
            years full-time work experience. I have worked on JavsScript, React,
            Gatsby, tailwind CSS, Redux, Node, Strapi(headless CMS) and
            postgreSQL. In order to push myself past my comfort zone and work in
            a demanding atmosphere, I'm interested in acquiring hard skills over
            time, such as creating a web application or a web product. When
            things are difficult, I exhibit tenacity and character 💪🏼. Over all,
            I am inquisitive and enjoy digging deep into a problem to find out
            why, how, and what caused it. In the end, this is what motivates me
            every day. Please feel free to contact me if you believe we can
            create valueable web applications.
          </p>
        </main>
      </div>
      <footer
        ref={contactRef}
        className="bg-black text-white flex flex-col items-center py-8"
      >
        <div className="text-base font-normal py-4">Contact Me</div>
        <div className="flex gap-8 pb-4">
          <a
            href="https://github.com/rohit1101"
            className="hover:bg-blue-hover hover:rounded-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="cursor-pointer" src={Github} alt="github-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-s-5b1a13137/"
            className="hover:bg-blue-hover hover:rounded-full"
          >
            <img
              className="cursor-pointer"
              src={LinkedIn}
              alt="linkedin-icon"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
