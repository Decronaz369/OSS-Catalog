import WPLXH05 from "/WPLXH/WPLXH05.jpg";
import WPLXH06 from "/WPLXH/WPLXH06.jpg";
import WPLXH07 from "/WPLXH/WPLXH07.jpg";
import WPLXH10 from "/WPLXH/WPLXH10.jpg";
import WPLXH13 from "/WPLXH/WPLXH13.jpg";
import WPLXH15 from "/WPLXH/WPLXH15.jpg";
import WPLXH16 from "/WPLXH/WPLXH16.jpg";
import WPLXH17 from "/WPLXH/WPLXH17.jpg";
import WPLXH18 from "/WPLXH/WPLXH18.jpg";
import WPLXH05_Size from "/WPLXH-Size/WPC_WPLXH05_2.jpg";
import WPLXH06_Size from "/WPLXH-Size/WPC_WPLXH06_2.jpg";
import WPLXH07_Size from "/WPLXH-Size/WPC_WPLXH07_2.jpg";
import WPLXH10_Size from "/WPLXH-Size/WPC_WPLXH10_2.jpg";
import WPLXH13_Size from "/WPLXH-Size/WPC_WPLXH13_2.jpg";
import WPLXH15_Size from "/WPLXH-Size/WPC_WPLXH15_2.jpg";
import WPLXH16_Size from "/WPLXH-Size/WPC_WPLXH16_2.jpg";
import WPLXH17_Size from "/WPLXH-Size/WPC_WPLXH17_2.jpg";
import WPLXH18_Size from "/WPLXH-Size/WPC_WPLXH18_2.jpg";
import { useContext, useState } from "react";
import { ShowProductsContext } from "../assets/Navigator";
import { FaExpand } from "react-icons/fa";
import Logo from "/Logo OSS.png";

function WPLXH() {
  const [zoomProducts, setZoomProducts] = useState<number | null>(null);
  const setShowProducts = useContext(ShowProductsContext);

  const ProductsArray = [
    WPLXH05,
    WPLXH06,
    WPLXH07,
    WPLXH10,
    WPLXH13,
    WPLXH15,
    WPLXH16,
    WPLXH17,
    WPLXH18,
  ];

  const ProductsSizeArray = [
    WPLXH05_Size,
    WPLXH06_Size,
    WPLXH07_Size,
    WPLXH10_Size,
    WPLXH13_Size,
    WPLXH15_Size,
    WPLXH16_Size,
    WPLXH17_Size,
    WPLXH18_Size,
  ];

  const ProductsLabel = [
    "WPLXH05",
    "WPLXH06",
    "WPLXH07",
    "WPLXH10",
    "WPLXH13",
    "WPLXH15",
    "WPLXH16",
    "WPLXH17",
    "WPLXH18",
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
        WPLXH
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

export default WPLXH;
