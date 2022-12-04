import logo from "./gam1.WEBP";
import "./App.css";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [num, setNum] = useState(0);
  const [word, setWord] = useState("subhanallah");
  const [total, setTotal] = useState(0);
  const [mulai, setMulai] = useState("Start");
  const notify = () =>
    toast.success("keep going..", {
      position: "top-right",
    });
  const notify2 = () =>
    toast.success("you almost done", {
      position: "top-right",
    });
  const notify3 = () =>
    toast.success("do it more and get more pahala", {
      position: "top-right",
      theme: "dark",
    });
  const notify4 = () =>
    toast.info("dont forget to be kind everytime", {
      position: "top-left",
      theme: "red",
    });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p class="text-5xl">{word}</p>
        <p>{num}</p>
        <p>Total: {total}</p>
        <ToastContainer />
        <button
          onClick={() => {
            setTotal(total + 1);
            setNum(num + 1);
            setMulai("keep going...");
            if (num === 33) {
              setNum(1);
              if (word === "subhanallah") {
                setWord("lailahaillallah");
                // notify();
              } else if (word === "lailahaillallah") {
                setWord("allahu akbar");
                // notify2();
              } else if (word === "allahu akbar") {
                setWord("subhanallah");
                // notify3();
                // notify4();
              }
            }
            if (total === 33 - 1) {
              notify();
            } else if (total === 66 - 1) {
              notify2();
            } else if (total === 99 - 1) {
              notify3();
              notify4();
              // }
            }
          }}
          class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full space-y-20 mb-3 mt-3"
        >
          {mulai}
        </button>
        <button
          onClick={() => {
            setNum(0);
            setTotal(0);
            setMulai("Start");
            setWord("Subhanallah");
          }}
          class="mb-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full space-y-20"
        >
          Reset
        </button>
      </header>
      <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            FaoTech™
          </a>
          . Meridianas Teenager Mosque.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://www.islamicfinder.org/world/russia/551487/kazan-prayer-times/"
              target="_blank"
              class="mr-4 hover:underline md:mr-6 "
            >
              Prayers Time
            </a>
          </li>
          <li>
            <a
              href="https://www.halaltrip.com/find-mosques-near-me/"
              target="_blank"
              class="mr-4 hover:underline md:mr-6"
            >
              Mosque Near Me
            </a>
          </li>
          <li>
            <a
              href="https://99namesofallah.name/git/"
              target="_blank"
              class="mr-4 hover:underline md:mr-6"
            >
              asma ul husna
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
