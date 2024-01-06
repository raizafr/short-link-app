"use client";

import { ThemeContextType, useDark } from "@/context/ThemeContext";
import Image from "next/image";
import { FaCopy, FaDownload } from "react-icons/fa";

export default function Home() {
  const { setIsDark, isDark } = useDark() as ThemeContextType;
  return (
    <main className={`min-h-screen pt-32 space-y-5 ${isDark ? "dark" : ""}`}>
      <div className="flex gap-3 text-indigo-950 dark:text-white flex-row justify-center items-center px-72">
        <input
          type="search"
          placeholder="Tempel url anda disini"
          className="bg-sky-200 dark:bg-indigo-950 focus:outline-none py-2 px-5 rounded-full w-full"
        />
        <button className="bg-sky-200 dark:bg-indigo-950 px-5 py-2 rounded-full font-semibold">
          GENERATE
        </button>
      </div>
      <svg
        width="186"
        height="743"
        viewBox="0 0 186 743"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fixed top-0 left-0 bottom-0 fill-sky-200 dark:fill-indigo-950 -z-10"
      >
        <path
          d="M-8.00005 -62.2171L13.3655 -35.4285C35.1311 -8.64099 77.2624 44.9375 83.0937 98.6049C88.525 152.273 56.6565 206.033 67.4878 259.688C77.9191 313.344 132.05 366.893 147.882 420.536C164.313 474.177 142.444 527.913 142.876 581.593C142.707 635.275 164.838 688.903 175.204 715.718L185.969 742.532L-6.02995 743.002L-6.09562 716.162C-6.16129 689.321 -6.29263 635.64 -6.42397 581.958C-6.55531 528.277 -6.68665 474.596 -6.81799 420.915C-6.94933 367.233 -7.08067 313.552 -7.21201 259.871C-7.34335 206.189 -7.47469 152.508 -7.60603 98.8268C-7.73737 45.1455 -7.86871 -8.53579 -7.93438 -35.3764L-8.00005 -62.2171Z"
          fill=""
        />
      </svg>
      <svg
        width="178"
        height="784"
        viewBox="0 0 178 784"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fixed right-0 top-0 bottom-0 fill-sky-200 dark:fill-indigo-950 -z-10"
      >
        <path
          d="M194.103 805.219L172.733 778.434C150.963 751.65 108.823 698.079 102.983 644.412C97.5423 590.745 129.402 536.98 118.562 483.327C108.121 429.672 53.9814 376.132 38.1411 322.492C21.7009 268.853 43.5606 215.114 43.1203 161.434C43.28 107.752 21.1398 54.1281 10.7697 27.3144L-0.000411896 0.501711L191.999 -1.52641e-05L192.069 26.8406C192.139 53.6812 192.28 107.362 192.42 161.044C192.56 214.725 192.7 268.406 192.841 322.088C192.981 375.769 193.121 429.45 193.261 483.131C193.402 536.813 193.542 590.494 193.682 644.175C193.823 697.856 193.963 751.538 194.033 778.378L194.103 805.219Z"
          fill=""
        />
      </svg>

      <p className="h1 text-center text-xl font-semibold px-52 text-indigo-950">
        LinkOn adalah layanan penyingkat url atau shortlink gratis dan
        menggenerate QR code tanpa daftar dan pungutan biaya
      </p>
      <div className="flex flex-col justify-center items-center gap-3">
        <Image src={"/image 1.png"} width={150} height={150} alt="qrcode" />
        <p className="text-sm text-blue-500">https://LinkOn/jh676jh</p>
        <div className="dark:text-white text-indigo-950 text-sm flex gap-2">
          <button className="bg-sky-200 dark:bg-indigo-950 w-fit px-3 py-1 rounded-full">
            <FaCopy />
          </button>
          <button className="bg-sky-200 dark:bg-indigo-950 w-fit px-3 py-1 rounded-full">
            <FaDownload />
          </button>
        </div>
      </div>
    </main>
  );
}
