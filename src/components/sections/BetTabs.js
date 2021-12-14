import React from "react";

const BetTabs = () => {
  return (
    <section className="shadow">
      <ul tw="flex w-full bg-gray-800 justify-between shadow-lg h-10">
        <div
          class="tabs"
          tw="border-r-2 border-black border-solid flex flex-grow justify-center items-center hover:bg-purple-900 bg-purple-900"
          href="#"
        >
          Wager On Yourself
        </div>
        <div
          class="tabs"
          tw="border-r-2 border-black border-solid flex flex-grow justify-center items-center hover:bg-purple-900"
          href="#"
        >
          Classified
        </div>
        <div
          class="tabs"
          tw="border-r-2 border-black border-solid flex flex-grow justify-center items-center hover:bg-purple-900"
          href="#"
        >
          Classified
        </div>
        <div
          class="tabs"
          tw="border-r-2 border-black border-solid flex flex-grow justify-center items-center hover:bg-purple-900"
          href="#"
        >
          Classified
        </div>
        <div
          class="tabs"
          tw="flex flex-grow justify-center items-center hover:bg-purple-900"
          href="#"
        >
          Classified
        </div>
      </ul>
    </section>
  );
};
export default BetTabs;
