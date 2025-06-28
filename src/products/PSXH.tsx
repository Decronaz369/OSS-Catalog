import PSXH101 from "/PSXH/PSXH101.png";
import PSXH102 from "/PSXH/PSXH102.png";
import PSXH103 from "/PSXH/PSXH103.png";
import PSXH201 from "/PSXH/PSXH201.png";
import PSXH202 from "/PSXH/PSXH202.png";
import PSXH203 from "/PSXH/PSXH203.png";
import PSXH204 from "/PSXH/PSXH204.png";
import PSXH205 from "/PSXH/PSXH205.png";
import PSXH206 from "/PSXH/PSXH206.png";
import PSXH207 from "/PSXH/PSXH207.png";
import PSXH301 from "/PSXH/PSXH301.png";
import PSXH401 from "/PSXH/PSXH401.png";
import PSXH501 from "/PSXH/PSXH501.png";
import PSXH502 from "/PSXH/PSXH502.png";
import PSXH601 from "/PSXH/PSXH601.png";
import PSXH701 from "/PSXH/PSXH701.png";
import PSXH_1_Size from "/PSXH-Size/PSXH 1.png";
import PSXH_2_Size from "/PSXH-Size/PSXH 2.png";
import PSXH_3_Size from "/PSXH-Size/PSXH 3.png";
import PSXH_4_Size from "/PSXH-Size/PSXH 4.png";
import PSXH_5_Size from "/PSXH-Size/PSXH 5.png";
import PSXH_6_Size from "/PSXH-Size/PSXH 6.png";
import PSXH_7_Size from "/PSXH-Size/PSXH 7.png";
import { useState } from "react";
import { FaExpand } from "react-icons/fa";
import Logo from "/Logo OSS.png";

function PSXH() {
  const [zoomProducts, setZoomProducts] = useState<number | null>(null);

  const ProductsArray = [
    PSXH101,
    PSXH102,
    PSXH103,
    PSXH201,
    PSXH202,
    PSXH203,
    PSXH204,
    PSXH205,
    PSXH206,
    PSXH207,
    PSXH301,
    PSXH401,
    PSXH501,
    PSXH502,
    PSXH601,
    PSXH701,
  ];

  const ProductsSizeArray = [
    PSXH_1_Size,
    PSXH_1_Size,
    PSXH_1_Size,
    PSXH_2_Size,
    PSXH_2_Size,
    PSXH_2_Size,
    PSXH_2_Size,
    PSXH_2_Size,
    PSXH_2_Size,
    PSXH_2_Size,
    PSXH_3_Size,
    PSXH_4_Size,
    PSXH_5_Size,
    PSXH_5_Size,
    PSXH_6_Size,
    PSXH_7_Size,
  ];

  const ProductsLabel = [
    "PSXH101",
    "PSXH102",
    "PSXH103",
    "PSXH201",
    "PSXH202",
    "PSXH203",
    "PSXH204",
    "PSXH205",
    "PSXH206",
    "PSXH207",
    "PSXH301",
    "PSXH401",
    "PSXH501",
    "PSXH502",
    "PSXH601",
    "PSXH701",
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
        <img src={Logo} alt="Logo" className="h-7" />
      </div>
      <div className="pointer-events-none absolute bottom-15 flex text-4xl font-extrabold text-neutral-600 mix-blend-difference">
        PSXH
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

export default PSXH;
