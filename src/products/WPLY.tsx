import WPLY01 from "/WPLY/WPLY01.jpg";
import WPLY02 from "/WPLY/WPLY02.jpg";
import WPLY03 from "/WPLY/WPLY03.jpg";
import WPLY04 from "/WPLY/WPLY04.jpg";
import WPLY05 from "/WPLY/WPLY05.jpg";
import WPLY06 from "/WPLY/WPLY06.jpg";
import WPLY07 from "/WPLY/WPLY07.jpg";
import WPLY08 from "/WPLY/WPLY08.jpg";
import WPLY09 from "/WPLY/WPLY09.jpg";
import WPLY10 from "/WPLY/WPLY10.jpg";
import WPLY11 from "/WPLY/WPLY11.jpg";
import WPLY12 from "/WPLY/WPLY12.jpg";
import WPLY13 from "/WPLY/WPLY13.jpg";
import WPLY14 from "/WPLY/WPLY14.jpg";
import WPLY15 from "/WPLY/WPLY15.jpg";
import WPLY16 from "/WPLY/WPLY16.jpg";
import WPLY17 from "/WPLY/WPLY17.jpg";
import WPLY18 from "/WPLY/WPLY18.jpg";
import WPLY19 from "/WPLY/WPLY19.jpg";
import WPLY20 from "/WPLY/WPLY20.jpg";
import WPLY21 from "/WPLY/WPLY21.jpg";
import WPLY22 from "/WPLY/WPLY22.jpg";
import WPLY23 from "/WPLY/WPLY23.jpg";
import WPLY24 from "/WPLY/WPLY24.jpg";
import WPLY25 from "/WPLY/WPLY25.jpg";
import WPLY01_Size from "/WPLY-Size/WPLY01.jpg";
import WPLY02_Size from "/WPLY-Size/WPLY02.jpg";
import WPLY03_Size from "/WPLY-Size/WPLY03.jpg";
import WPLY04_Size from "/WPLY-Size/WPLY04.jpg";
import WPLY05_Size from "/WPLY-Size/WPLY05.jpg";
import WPLY06_Size from "/WPLY-Size/WPLY06.jpg";
import WPLY07_Size from "/WPLY-Size/WPLY07.jpg";
import WPLY08_Size from "/WPLY-Size/WPLY08.jpg";
import WPLY09_Size from "/WPLY-Size/WPLY09.jpg";
import WPLY10_Size from "/WPLY-Size/WPLY10.jpg";
import WPLY11_Size from "/WPLY-Size/WPLY11.jpg";
import WPLY12_Size from "/WPLY-Size/WPLY12.jpg";
import WPLY13_Size from "/WPLY-Size/WPLY13.jpg";
import WPLY14_Size from "/WPLY-Size/WPLY14.jpg";
import WPLY15_Size from "/WPLY-Size/WPLY15.jpg";
import WPLY16_Size from "/WPLY-Size/WPLY16.jpg";
import WPLY17_Size from "/WPLY-Size/WPLY17.jpg";
import WPLY18_Size from "/WPLY-Size/WPLY18.jpg";
import WPLY19_Size from "/WPLY-Size/WPLY19.jpg";
import WPLY20_Size from "/WPLY-Size/WPLY20.jpg";
import WPLY21_Size from "/WPLY-Size/WPLY21.jpg";
import WPLY22_Size from "/WPLY-Size/WPLY22.jpg";
import WPLY23_Size from "/WPLY-Size/WPLY23.jpg";
import WPLY24_Size from "/WPLY-Size/WPLY24.jpg";
import WPLY25_Size from "/WPLY-Size/WPLY25.jpg";
import { useContext, useState } from "react";
import { ShowProductsContext } from "../assets/Navigator";
import { FaExpand } from "react-icons/fa";
import Logo from "/Logo OSS.png";

function WPLY() {
  const [zoomProducts, setZoomProducts] = useState<number | null>(null);
  const setShowProducts = useContext(ShowProductsContext);

  const ProductsArray = [
    WPLY01,
    WPLY02,
    WPLY03,
    WPLY04,
    WPLY05,
    WPLY06,
    WPLY07,
    WPLY08,
    WPLY09,
    WPLY10,
    WPLY11,
    WPLY12,
    WPLY13,
    WPLY14,
    WPLY15,
    WPLY16,
    WPLY17,
    WPLY18,
    WPLY19,
    WPLY20,
    WPLY21,
    WPLY22,
    WPLY23,
    WPLY24,
    WPLY25,
  ];

  const ProductsSizeArray = [
    WPLY01_Size,
    WPLY02_Size,
    WPLY03_Size,
    WPLY04_Size,
    WPLY05_Size,
    WPLY06_Size,
    WPLY07_Size,
    WPLY08_Size,
    WPLY09_Size,
    WPLY10_Size,
    WPLY11_Size,
    WPLY12_Size,
    WPLY13_Size,
    WPLY14_Size,
    WPLY15_Size,
    WPLY16_Size,
    WPLY17_Size,
    WPLY18_Size,
    WPLY19_Size,
    WPLY20_Size,
    WPLY21_Size,
    WPLY22_Size,
    WPLY23_Size,
    WPLY24_Size,
    WPLY25_Size,
  ];

  const ProductsLabel = [
    "WPLY01",
    "WPLY02",
    "WPLY03",
    "WPLY04",
    "WPLY05",
    "WPLY06",
    "WPLY07",
    "WPLY08",
    "WPLY09",
    "WPLY10",
    "WPLY11",
    "WPLY12",
    "WPLY13",
    "WPLY14",
    "WPLY15",
    "WPLY16",
    "WPLY17",
    "WPLY18",
    "WPLY19",
    "WPLY20",
    "WPLY21",
    "WPLY22",
    "WPLY23",
    "WPLY24",
    "WPLY25",
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
        WPLY
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

export default WPLY;
