import MWP04 from "/MWP/WPC_MWP04_1.jpg";
import MWP07 from "/MWP/WPC_MWP07_1.jpg";
import MWP08 from "/MWP/WPC_MWP08_1.jpg";
import MWP09 from "/MWP/WPC_MWP09_1.jpg";
import MWP13 from "/MWP/WPC_MWP13_1.jpg";
import MWP04_Size from "/MWP-Size/WPC_MWP04_2.jpg";
import MWP07_Size from "/MWP-Size/WPC_MWP07_2.jpg";
import MWP08_Size from "/MWP-Size/WPC_MWP08_2.jpg";
import MWP09_Size from "/MWP-Size/WPC_MWP09_2.png";
import MWP13_Size from "/MWP-Size/WPC_MWP13_2.jpg";
import { useState } from "react";
import { FaExpand } from "react-icons/fa";
import Logo from "/Logo OSS.png";

function MWP() {
  const [zoomProducts, setZoomProducts] = useState<number | null>(null);

  const ProductsArray = [MWP04, MWP07, MWP08, MWP09, MWP13];

  const ProductsSizeArray = [
    MWP04_Size,
    MWP07_Size,
    MWP08_Size,
    MWP09_Size,
    MWP13_Size,
  ];

  const ProductsLabel = ["MWP04", "MWP07", "MWP08", "MWP09", "MWP13"];

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
        <img src={Logo} alt="Logo" className="h-7" />
      </div>
      <div className="pointer-events-none absolute bottom-15 flex text-4xl font-extrabold text-neutral-600 mix-blend-difference">
        MWP
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
            <div className="aspect-square w-full max-w-60 rounded-lg border-6 border-white shadow-xl sm:w-auto sm:max-w-max">
              <img
                src={ProductsArray[zoomProducts]}
                alt={ProductsLabel[zoomProducts]}
              />
            </div>
            <div className="aspect-square w-full max-w-60 rounded-lg border-6 border-white shadow-xl sm:w-auto sm:max-w-max">
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

export default MWP;
