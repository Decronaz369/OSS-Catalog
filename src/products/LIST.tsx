import CLMWP4 from "/LIST/LIST CLMWP4 1.jpg";
import CLMWP7 from "/LIST/LIST CLMWP7 1.jpg";
import CLMWP8 from "/LIST/LIST CLMWP8 1.jpg";
import CLMWP9 from "/LIST/LIST CLMWP9 1.jpg";
import CLMWP13 from "/LIST/LIST CLMWP13 1.jpg";
import CLMWP4_Size from "/LIST-Size/LIST CLMWP4 2.jpg";
import CLMWP7_Size from "/LIST-Size/LIST CLMWP7 2.jpg";
import CLMWP8_Size from "/LIST-Size/LIST CLMWP8 2.jpg";
import CLMWP9_Size from "/LIST-Size/LIST CLMWP9 2.jpg";
import CLMWP13_Size from "/LIST-Size/LIST CLMWP13 2.jpg";
import { useState } from "react";
import { FaExpand } from "react-icons/fa";
import Logo from "/Logo OSS.png";

function LIST() {
  const [zoomProducts, setZoomProducts] = useState<number | null>(null);

  const ProductsArray = [CLMWP4, CLMWP7, CLMWP8, CLMWP9, CLMWP13];

  const ProductsSizeArray = [
    CLMWP4_Size,
    CLMWP7_Size,
    CLMWP8_Size,
    CLMWP9_Size,
    CLMWP13_Size,
  ];

  const ProductsLabel = ["CLMWP4", "CLMWP7", "CLMWP8", "CLMWP9", "CLMWP13"];

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
        CLMWP
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

export default LIST;
