import ViewPage from "./Viewer";
import Products from "./Products";
import UK from "/Flag UK.png";
import Indo from "/Flag Indo.png";
import { useState } from "react";
import TikTok from "/TikTok Logo.png";
import IG from "/IG Logo.png";
import FB from "/FB.png";
import WA from "/WA.png";
import Shopee from "/Shopee.png";
import TokPed from "/TokPed.png";
import { FaHeadphones, FaMapMarkerAlt, FaSearch } from "react-icons/fa";

function HomePage() {
  const [showProducts, setShowProducts] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContacts, setShowContacts] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  return (
    <>
      <ViewPage currentIndex={currentIndex} />
      <Products
        showProducts={showProducts}
        setShowProducts={setShowProducts}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <div className="absolute top-2 left-2 size-1.5 bg-white sm:size-2">
        <div className="absolute right-0 bottom-0 size-11/12 rounded-tl bg-neutral-950"></div>
      </div>
      <div className="absolute bottom-2 left-2 size-1.5 bg-white sm:size-2">
        <div className="absolute top-0 right-0 size-11/12 rounded-bl bg-neutral-950"></div>
      </div>
      <div className="absolute top-2 right-2 size-1.5 bg-white sm:size-2">
        <div className="absolute bottom-0 left-0 size-11/12 rounded-tr bg-neutral-950"></div>
      </div>
      <div className="absolute right-2 bottom-2 size-1.5 bg-white sm:size-2">
        <div className="absolute top-0 left-0 size-11/12 rounded-br bg-neutral-950"></div>
      </div>
      <div className="absolute bottom-0 left-1/2 h-0 w-20 -translate-x-1/2 border-x-25 border-b-25 border-solid border-x-transparent border-b-neutral-950 sm:w-23"></div>

      <div
        className="absolute top-0 left-1/2 flex h-8 w-50 -translate-x-1/2 cursor-pointer items-center justify-center gap-1 bg-neutral-950 text-xs text-neutral-50 select-none [--p:_1.5rem] [clip-path:_polygon(var(--p)_100%,_calc(100%_-_var(--p))_100%,_100%_0,_0_0)] hover:bg-neutral-800 sm:h-9 sm:w-75"
        onClick={() => setShowProducts(true)}
      >
        CARI PRODUK <FaSearch />
      </div>
      <div
        className={`absolute right-full bottom-0 flex h-75 w-15 flex-col items-center justify-center gap-3 rounded-t-md bg-neutral-950 px-3.5 py-5 transition duration-300 ease-in-out sm:bottom-1/2 sm:translate-y-1/2 sm:rounded-none ${showLocation ? "translate-x-15" : null}`}
      >
        <div
          className="absolute -bottom-5 left-full flex h-12 w-20 -translate-y-1/2 cursor-pointer items-center justify-center bg-neutral-950 text-xl text-neutral-50 [--p:_1.5rem] [clip-path:_polygon(0_0,calc(100%_-_var(--p))_0,100%_100%,0_100%);_100%)] hover:bg-neutral-800 sm:top-1/2 sm:h-75 sm:w-9 sm:text-xs sm:[clip-path:_polygon(100%_var(--p),100%_calc(100%_-_var(--p)),0_100%,0_0)]"
          onClick={() => setShowLocation((prev) => !prev)}
        >
          <span className="flex items-center gap-1 text-nowrap select-none sm:rotate-270">
            <span className="hidden sm:flex">LOKASI</span>
            <FaMapMarkerAlt className="-translate-x-1.5 sm:-translate-x-0" />
          </span>
        </div>
        <span className="rounded border pt-2 pr-1 pb-3 pl-1 text-sm tracking-[-0.2rem] text-white select-none [text-orientation:_upright] [writing-mode:_vertical-lr]">
          Jakarta
        </span>
        <span className="rounded border pt-2 pr-1 pb-2.5 pl-1 text-sm tracking-[-0.2rem] text-white select-none [text-orientation:_upright] [writing-mode:_vertical-lr]">
          Pontianak
        </span>
      </div>
      <div
        className={`absolute bottom-0 left-full flex h-75 w-15 flex-col items-center justify-center gap-3 rounded-t-md bg-neutral-950 px-3.5 py-5 transition duration-300 ease-in-out sm:bottom-1/2 sm:translate-y-1/2 sm:rounded-none ${showContacts ? "-translate-x-15" : null}`}
      >
        <div
          className="absolute right-full -bottom-5 flex h-12 w-20 -translate-y-1/2 cursor-pointer items-center justify-center bg-neutral-950 text-xl text-neutral-50 [--p:_1.5rem] [clip-path:_polygon(var(--p)_0,100%_0,100%_100%,0_100%)] hover:bg-neutral-800 sm:top-1/2 sm:h-75 sm:w-9 sm:text-xs sm:[clip-path:_polygon(0_var(--p),0_calc(100%_-_var(--p)),100%_100%,100%_0)]"
          onClick={() => setShowContacts((prev) => !prev)}
        >
          <span className="flex items-center gap-1.5 text-nowrap select-none sm:rotate-90">
            <span className="hidden sm:flex">HUBUNGI KAMI</span>
            <FaHeadphones className="translate-x-1.5 sm:translate-x-0" />
          </span>
        </div>
        <a
          href="https://wa.me/+6285246169798"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={WA}
            alt="WhatsApp OSS"
            className="aspect-square cursor-pointer rounded-lg"
          />
        </a>
        <a
          href="https://www.tiktok.com/ @onesupplysolution"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={TikTok}
            alt="TikTok OSS"
            className="aspect-square cursor-pointer rounded-lg"
          />
        </a>
        <a
          href="https://www.instagram.com/one.supplysolutionjkt/?next=%2F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={IG}
            alt="Instagram OSS"
            className="aspect-square cursor-pointer rounded-lg"
          />
        </a>
        <a
          href="https://www.facebook.com/sobat.ones"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={FB}
            alt="FaceBook OSS"
            className="aspect-square cursor-pointer rounded-lg"
          />
        </a>
        <a
          href="https://shopee.co.id/onesupplysolutionjkt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Shopee}
            alt="Shopee OSS"
            className="aspect-square cursor-pointer rounded-lg"
          />
        </a>
        <a
          href="https://www.tokopedia.com/one-supply-solution-jkt"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-white p-1.5"
        >
          <img
            src={TokPed}
            alt="Tokopedia OSS"
            className="aspect-square cursor-pointer"
          />
        </a>
      </div>

      <div className="absolute bottom-0.5 left-1/2 size-11 -translate-x-1/2 cursor-pointer rounded-t-full border-8 bg-neutral-950 select-none sm:size-12">
        <img src={Indo} alt="" className="h-full rounded-full" />
        <img src={UK} alt="" className="hidden h-full rounded-full" />
      </div>
    </>
  );
}

export default HomePage;
