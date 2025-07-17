import { FaRegHandPointUp, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SampulWPLY from "/Sampul Produk/Sampul WPLY.jpg";
import SampulSPC from "/Sampul Produk/Sampul SPC.jpg";
import SampulFKUV from "/Sampul Produk/Sampul FKUV.png";
import SampulFKCB from "/Sampul Produk/Sampul FKCB.jpg";
import SampulWP3LY from "/Sampul Produk/Sampul WP3LY.jpg";
import SampulFKS from "/Sampul Produk/Sampul FKS.jpg";
import SampulWPSLY from "/Sampul Produk/Sampul WPSLY.jpg";
import SampulWPDXH from "/Sampul Produk/Sampul WPDXH.jpg";
import SampulWPLXH from "/Sampul Produk/Sampul WPLXH.jpg";
import SampulWPXH from "/Sampul Produk/Sampul WPXH.jpg";
import SampulLIST from "/Sampul Produk/Sampul LIST.jpg";
import SampulCBXH from "/Sampul Produk/Sampul CBXH.jpg";
import SampulCBXHNW from "/Sampul Produk/Sampul CBXHNW.jpg";
import SampulGWP from "/Sampul Produk/Sampul GWP.jpg";
import SampulMWP from "/Sampul Produk/Sampul MWP.jpg";
import SampulPSXH from "/Sampul Produk/Sampul PSXH.png";
import SampulWASTAFEL from "/Sampul Produk/Sampul WASTAFEL.png";
import { useEffect } from "react";

interface ProductsProps {
  showProducts: boolean;
  setShowProducts: (show: boolean) => void;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

function Products({
  showProducts,
  setShowProducts,
  currentIndex,
  setCurrentIndex,
}: ProductsProps) {
  const imageArray = [
    SampulWASTAFEL,
    SampulWPLY,
    SampulWPXH,
    SampulMWP,
    SampulPSXH,
    SampulWP3LY,
    SampulWPSLY,
    SampulWPLXH,
    SampulGWP,
    SampulFKS,
    SampulWPDXH,
    SampulLIST,
    SampulSPC,
    SampulFKUV,
    SampulFKCB,
    SampulCBXH,
    SampulCBXHNW,
  ];

  const imageLabels = [
    "Wastafel",
    "Wall Panel WPC - WPLY",
    "Wall Panel WPC - WPXH",
    "Wall Panel WPC - MWP",
    "Wall Panel WPC - PSXH",
    "Wall Panel WPC - WP3LY",
    "Wall Panel WPC - WPSLY",
    "Wall Panel WPC - WPLXH",
    "Wall Panel WPC - GWP",
    "Wall Panel WPC - FKS",
    "Wall Panel WPC (Oval) - WPDXH",
    "List WPC - CLMWP",
    "Lantai SPC",
    "Wall Panel UV - FKUV",
    "Wall Panel (Arang) - FKCB",
    "Wall Panel Mirror (Arang) - CBXH",
    "Wall Panel Texture (Arang) - CBXHNW",
  ];

  const translateX = currentIndex * 20;
  useEffect(() => {
    if (!showProducts) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => Math.min(prev + 1, imageArray.length - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showProducts, setCurrentIndex, imageArray.length]);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      handleRightClick();
    } else if (e.deltaY < 0) {
      handleLeftClick();
    }
  };

  const handleRightClick = () => {
    setCurrentIndex((prev: number) =>
      Math.min(prev + 1, imageArray.length - 1),
    );
  };

  const handleLeftClick = () => {
    setCurrentIndex((prev: number) => Math.max(prev - 1, 0));
  };

  return (
    <>
      <div
        className={`fixed inset-0 h-dvh w-screen items-center justify-center backdrop-blur-xs backdrop-brightness-60 ${showProducts ? "flex" : "hidden"}`}
        onWheel={handleWheel}
      >
        <div className="flex shrink scale-75 flex-col items-center justify-center select-none sm:scale-60 md:scale-55 lg:scale-100">
          <div className="mb-4 flex h-10 items-end text-center text-3xl font-extrabold tracking-wider text-neutral-50 text-shadow-lg/20">
            {imageLabels[currentIndex]}
          </div>
          <div
            className="flex aspect-square h-80 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${translateX}rem)` }}
          >
            {imageArray.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={imageLabels[idx]}
                onClick={() =>
                  idx === currentIndex ? setShowProducts(false) : null
                }
                className={`aspect-square rounded-xl shadow-lg transition-all duration-300 ease-in-out ${
                  idx === currentIndex
                    ? "cursor-pointer border-4 border-white p-2 hover:brightness-75"
                    : "scale-80 border-transparent brightness-50"
                }`}
              />
            ))}
          </div>
          <div
            className="mt-5 flex h-10 cursor-pointer items-center justify-center rounded-lg border-2 border-b-4 border-neutral-300 bg-gradient-to-r from-neutral-200 via-neutral-50 to-neutral-200 px-7 text-sm font-medium text-black shadow-lg shadow-neutral-700/50 transition duration-100 ease-in-out hover:scale-105 hover:brightness-95"
            onClick={() => setShowProducts(false)}
          >
            Pilih <FaRegHandPointUp className="mb-0.25 ml-1" />
          </div>
        </div>
        <div
          className="absolute left-0 flex h-80 w-[calc(50%-7.75rem)] items-center justify-end sm:w-[calc(50%-6rem)] md:w-[calc(50%-5.5rem)] lg:w-[calc(50%-11rem)]"
          onClick={handleLeftClick}
        >
          <div className="flex aspect-square size-10 scale-75 cursor-pointer items-center justify-center rounded-full border border-b-4 border-neutral-300 bg-white bg-gradient-to-r from-neutral-200 via-neutral-50 to-neutral-200 font-semibold text-gray-800 shadow-lg shadow-neutral-700/50 transition duration-100 ease-in-out hover:scale-105 hover:brightness-95 sm:scale-60 md:scale-55 lg:scale-100">
            <FaArrowLeft />
          </div>
        </div>
        <div
          className="absolute right-0 flex h-80 w-[calc(50%-7.75rem)] items-center justify-start sm:w-[calc(50%-6rem)] md:w-[calc(50%-5.5rem)] lg:w-[calc(50%-11rem)]"
          onClick={handleRightClick}
        >
          <div className="flex aspect-square size-10 scale-75 cursor-pointer items-center justify-center rounded-full border border-b-4 border-neutral-300 bg-white bg-gradient-to-r from-neutral-200 via-neutral-50 to-neutral-200 font-semibold text-gray-800 shadow-lg shadow-neutral-700/50 transition duration-100 ease-in-out hover:scale-105 hover:brightness-95 sm:scale-60 md:scale-55 lg:scale-100">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
