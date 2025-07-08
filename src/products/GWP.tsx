import GWP01 from "/GWP/WPC_GWP1501_1.jpg";
import GWP02 from "/GWP/WPC_GWP1502_1.jpg";
import GWP03 from "/GWP/WPC_GWP1503_1.jpg";
import GWP04 from "/GWP/WPC_GWP1504_1.jpg";
import GWP06 from "/GWP/WPC_GWP1506_1.jpg";
import GWP07 from "/GWP/WPC_GWP1507_1.jpg";
import GWP08 from "/GWP/WPC_GWP1508_1.jpg";
import GWP10 from "/GWP/WPC_GWP1510_1.jpg";
import GWP13 from "/GWP/WPC_GWP1513_1.jpg";
import GWP01_Size from "/GWP-Size/WPC_GWP1501_2.jpg";
import GWP02_Size from "/GWP-Size/WPC_GWP1502_2.jpg";
import GWP03_Size from "/GWP-Size/WPC_GWP1503_2.jpg";
import GWP04_Size from "/GWP-Size/WPC_GWP1504_2.jpg";
import GWP06_Size from "/GWP-Size/WPC_GWP1506_2.jpg";
import GWP07_Size from "/GWP-Size/WPC_GWP1507_2.jpg";
import GWP08_Size from "/GWP-Size/WPC_GWP1508_2.jpg";
import GWP10_Size from "/GWP-Size/WPC_GWP1510_2.jpg";
import GWP13_Size from "/GWP-Size/WPC_GWP1513_2.jpg";
import { useContext, useState } from "react";
import { ShowProductsContext } from "../assets/Navigator";
import { FaExpand } from "react-icons/fa";
import Logo from "/Logo OSS.png";

function GWP() {
  const [zoomProducts, setZoomProducts] = useState<number | null>(null);
  const setShowProducts = useContext(ShowProductsContext);

  const ProductsArray = [
    GWP01,
    GWP02,
    GWP03,
    GWP04,
    GWP06,
    GWP07,
    GWP08,
    GWP10,
    GWP13,
  ];

  const ProductsSizeArray = [
    GWP01_Size,
    GWP02_Size,
    GWP03_Size,
    GWP04_Size,
    GWP06_Size,
    GWP07_Size,
    GWP08_Size,
    GWP10_Size,
    GWP13_Size,
  ];

  const ProductsLabel = [
    "GWP01",
    "GWP02",
    "GWP03",
    "GWP04",
    "GWP06",
    "GWP07",
    "GWP08",
    "GWP10",
    "GWP13",
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
            <img key={idx} src={src} alt={ProductsLabel[idx]} className="pointer-events-none" />
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
        GWP
      </div>
      {zoomProducts !== null && (
        <div className="fixed inset-0 flex size-full items-center justify-center backdrop-blur-xs backdrop-brightness-50">
          <div
            className="absolute top-10 right-10 flex size-10 rotate-45 cursor-pointer items-center justify-center rounded-full transition duration-100 ease-in-out hover:bg-neutral-400/10"
            onClick={() => setZoomProducts(null)}
          >
            <div className="absolute h-6 w-0.75 bg-neutral-300 rounded-full"></div>
            <div className="absolute h-0.75 w-6 bg-neutral-300 rounded-full"></div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-15 sm:flex-row sm:gap-10 sm:px-[calc(3rem+14vw)]">
            <div className="aspect-square w-full max-w-60 rounded-lg border-6 border-white shadow-xl sm:w-auto sm:max-w-100">
              <img
                src={ProductsArray[zoomProducts]}
                alt={ProductsLabel[zoomProducts]}
              />
            </div>
            <div className="aspect-square w-full max-w-60 rounded-lg border-6 border-white shadow-xl sm:w-auto sm:max-w-100">
              <img
                src={ProductsSizeArray[zoomProducts]}
                alt={ProductsLabel[zoomProducts]}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GWP;
