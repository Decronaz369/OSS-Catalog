import FKUV01 from "/FKUV/FKUV001.jpg";
import FKUV02 from "/FKUV/FKUV002.jpg";
import FKUV03 from "/FKUV/FKUV003.jpg";
import FKUV04 from "/FKUV/FKUV004.jpg";
import FKUV05 from "/FKUV/FKUV005.jpg";
import FKUV06 from "/FKUV/FKUV006.jpg";
import FKUV07 from "/FKUV/FKUV007.jpg";
import FKUV08 from "/FKUV/FKUV008.jpg";
import FKUV09 from "/FKUV/FKUV009.jpg";
import FKUV10 from "/FKUV/FKUV010.jpg";
import FKUV01_Size from "/FKUV-Size/FKUV001.jpg";
import FKUV02_Size from "/FKUV-Size/FKUV002.jpg";
import FKUV03_Size from "/FKUV-Size/FKUV003.jpg";
import FKUV04_Size from "/FKUV-Size/FKUV004.jpg";
import FKUV05_Size from "/FKUV-Size/FKUV005.jpg";
import FKUV06_Size from "/FKUV-Size/FKUV006.jpg";
import FKUV07_Size from "/FKUV-Size/FKUV007.jpg";
import FKUV08_Size from "/FKUV-Size/FKUV008.jpg";
import FKUV09_Size from "/FKUV-Size/FKUV009.jpg";
import FKUV10_Size from "/FKUV-Size/FKUV010.jpg";
import { useContext, useEffect, useRef, useState } from "react";
import { ShowProductsContext } from "../assets/Navigator";
import { FaExpand } from "react-icons/fa";
import Logo from "/Logo OSS.png";

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const LazyImage = ({ src, alt, className }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px",
        threshold: 0.01,
      },
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-gray-900"></div>
        </div>
      )}
      {inView && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};

function FKUV() {
  const [zoomProducts, setZoomProducts] = useState<number | null>(null);
  const setShowProducts = useContext(ShowProductsContext);

  const ProductsArray = [
    FKUV01,
    FKUV02,
    FKUV03,
    FKUV04,
    FKUV05,
    FKUV06,
    FKUV07,
    FKUV08,
    FKUV09,
    FKUV10,
  ];

  const ProductsSizeArray = [
    FKUV01_Size,
    FKUV02_Size,
    FKUV03_Size,
    FKUV04_Size,
    FKUV05_Size,
    FKUV06_Size,
    FKUV07_Size,
    FKUV08_Size,
    FKUV09_Size,
    FKUV10_Size,
  ];

  const ProductsLabel = [
    "FKUV01",
    "FKUV02",
    "FKUV03",
    "FKUV04",
    "FKUV05",
    "FKUV06",
    "FKUV07",
    "FKUV08",
    "FKUV09",
    "FKUV10",
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
            <LazyImage
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
        Papan Wall Panel UV
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
            <div className="aspect-square w-full max-w-60 shadow-xl sm:w-auto sm:max-w-100">
              <img
                src={ProductsArray[zoomProducts]}
                alt={ProductsLabel[zoomProducts]}
              />
            </div>
            <div className="aspect-square w-full max-w-60 shadow-xl sm:w-auto sm:max-w-100">
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

export default FKUV;
