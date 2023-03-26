import React from "react";

function App() {
  return (
    <div>
      <div className="h-screen w-full bg-cover items-center p-32 bg-black-50 bg-blend-overlay bg-[url('./assets/profile.webp')] text-white">
        <nav className="flex justify-between">
          <p>Rohit S</p>
          <ul className="flex text-text-gray text-sm gap-16">
            <li className="cursor-pointer">Articles</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </nav>
        <main className="flex flex-col justify-center h-full max-w-2xl">
          <h1 className=" leading-tight text-6xl font-semibold">
            Helping companies build better, scalable software.
          </h1>
          <p className="text-text-gray py-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
            nesciunt. Architecto sed minima, illum cupiditate optio dolores
            aspernatur dicta magni autem expedita officia. Earum, minima tempora
            aliquid ratione repellat ipsam vero! Beatae tempore, facere
            voluptate expedita magni non unde quia ut asperiores deleniti, et
            numquam iusto autem, accusamus voluptas voluptatibus!
          </p>
        </main>
      </div>
      <div className="bg-black text-white">hello</div>
    </div>
  );
}

export default App;
