import WP3LY01 from "/WP3LY/WP3LY01.jpg";
import WP3LY03 from "/WP3LY/WP3LY03.jpg";
import WP3LY02 from "/WP3LY/WP3LY02.jpg";
import WP3LY04 from "/WP3LY/WP3LY04.jpg";
import WP3LY05 from "/WP3LY/WP3LY05.jpg";
import WP3LY06 from "/WP3LY/WP3LY06.jpg";
import WP3LY07 from "/WP3LY/WP3LY07.jpg";
import WP3LY08 from "/WP3LY/WP3LY08.jpg";
import WP3LY09 from "/WP3LY/WP3LY09.jpg";
import WP3LY10 from "/WP3LY/WP3LY10.jpg";
import WP3LY11 from "/WP3LY/WP3LY11.jpg";
import WP3LY14 from "/WP3LY/WP3LY14.jpg";
import WP3LY15 from "/WP3LY/WP3LY15.jpg";
import WP3LY16 from "/WP3LY/WP3LY16.jpg";
import WP3LY17 from "/WP3LY/WP3LY17.jpg";
import { useContext, useState } from "react";
import { ShowProductsContext } from "../assets/Navigator";
import { FaExpand } from "react-icons/fa";
import Logo from "/Logo OSS.png";

function WP3LY() {
  const [zoomProducts, setZoomProducts] = useState<number | null>(null);
  const setShowProducts = useContext(ShowProductsContext);

  const ProductsArray = [
    WP3LY01,
    WP3LY03,
    WP3LY02,
    WP3LY04,
    WP3LY05,
    WP3LY06,
    WP3LY07,
    WP3LY08,
    WP3LY09,
    WP3LY10,
    WP3LY11,
    WP3LY14,
    WP3LY15,
    WP3LY16,
    WP3LY17,
  ];

  const ProductsLabel = [
    "WP3LY01",
    "WP3LY03",
    "WP3LY02",
    "WP3LY04",
    "WP3LY05",
    "WP3LY06",
    "WP3LY07",
    "WP3LY08",
    "WP3LY09",
    "WP3LY10",
    "WP3LY11",
    "WP3LY14",
    "WP3LY15",
    "WP3LY16",
    "WP3LY17",
  ];

  return (
    <>
      <div className="relative grid w-full grid-cols-[repeat(auto-fit,_37.5vw)] justify-center gap-[4vw] overflow-y-auto px-4 py-30 sm:grid-cols-[repeat(auto-fit,_12rem)] sm:gap-12 sm:px-20 md:grid-cols-[repeat(auto-fit,_14rem)] [&::-webkit-scrollbar]:hidden">
        {ProductsArray.map((src, idx) => (
          <div
            className="relative flex aspect-3/4 w-full cursor-pointer flex-col items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-2.5 text-neutral-600 shadow-md transition duration-100 ease-in-out hover:brightness-75 sm:p-3"
            onClick={() => setZoomProducts(idx)}
            key={idx}
          >
            <img
              key={idx}
              src={src}
              alt={ProductsLabel[idx]}
              className="pointer-events-none"
            />
            <div className="flex w-full flex-1 items-center justify-center px-5 text-center text-xs font-extrabold sm:text-lg">
              {ProductsLabel[idx]}
            </div>
            <div className="absolute right-2 bottom-2 text-xs text-neutral-400 sm:text-xl">
              <FaExpand />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-17.5 left-1/2 -translate-1/2">
        <img
          src={Logo}
          alt="Logo"
          className="h-7 cursor-pointer"
          onClick={() => setShowProducts && setShowProducts(true)}
        />
      </div>
      <div className="pointer-events-none absolute bottom-15 flex text-4xl font-extrabold text-neutral-600 mix-blend-difference">
        WP3LY
      </div>
      {zoomProducts !== null && (
        <div className="fixed inset-0 flex size-full items-center justify-center backdrop-blur-xs backdrop-brightness-50">
          <div
            className="absolute top-10 right-10 flex size-10 rotate-45 cursor-pointer items-center justify-center rounded-full transition duration-100 ease-in-out hover:bg-neutral-400/10"
            onClick={() => setZoomProducts(null)}
          >
            <div className="absolute h-6 w-0.75 rounded-full bg-neutral-300"></div>
            <div className="absolute h-0.75 w-6 rounded-full bg-neutral-300"></div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-15 sm:flex-row sm:gap-10 sm:px-[calc(3rem+14vw)]">
            <div className="aspect-square w-full max-w-60 rounded-lg border-6 border-white shadow-xl sm:w-auto sm:max-w-100">
              <img
                src={ProductsArray[zoomProducts]}
                alt={ProductsLabel[zoomProducts]}
              />
            </div>
            {/* <div className="aspect-square w-full max-w-60 rounded-lg border-6 border-white shadow-xl sm:w-auto sm:max-w-100">
              <div>{zoomProducts}</div>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}

export default WP3LY;
