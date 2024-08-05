import React, { useRef } from "react";
import Github from "./assets/github.svg";
import LinkedIn from "./assets/linkedin.svg";

function App() {
  const contactRef = useRef(null);
  return (
    <div>
      <div className="h-screen  w-full bg-cover items-center p-32 pt-12 bg-black-50 bg-blend-overlay bg-[url('./assets/profile.webp')] bg-center lg:bg-top text-white">
        <nav className="flex justify-between font-medium">
          <p className="text-base">Rohit S</p>
          <ul className="flex text-text-gray text-base gap-16">
            <li className="cursor-pointer hover:text-blue">
              <a href="https://rohit1101.hashnode.dev">Blog</a>
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
Hi I'm Rohit, a results-driven DevOps Engineer and Fullstack Web Developer with a robust skill set in both domains. As a cloud native fan, I excel in deploying and managing cloud applications, configuring Linux environments, and implementing version control best practices with Git. My passion for automation drives me to leverage Python, Ansible, Terraform, Jenkins CI/CD, Docker, and YAML to enhance development workflows and ensure efficient, reliable infrastructure management.
          </p>
<p className=" text-text-gray py-12">I am currently into Kubernetes, Google Cloud Platform (GCP) and Terraform for scaling large-scale applications and automating the infrastructure at scale.Committed to continuous learning, I stay ahead of industry trends and am always eager to adopt new technologies. Let's connect to discuss how my DevOps skills and Fullstack Web development expertise can contribute to your projects or team. I am open to collaboration and ready to bring innovative solutions to your development needs. Additionally, I have a track record of contributing to open-source projects, such as enhancing Focalboard Mattermost with new features.</p>

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
