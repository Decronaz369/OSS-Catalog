import WPXH01 from "/WPXH/WPXH01.jpg";
import WPXH02 from "/WPXH/WPXH02.jpg";
import WPXH03 from "/WPXH/WPXH03.jpg";
import WPXH04 from "/WPXH/WPXH04.jpg";
import WPXH05 from "/WPXH/WPXH05.jpg";
import WPXH06 from "/WPXH/WPXH06.jpg";
import WPXH07 from "/WPXH/WPXH07.jpg";
import WPXH08 from "/WPXH/WPXH08.jpg";
import WPXH09 from "/WPXH/WPXH09.jpg";
import WPXH10 from "/WPXH/WPXH10.jpg";
import WPXH11 from "/WPXH/WPXH11.jpg";
import WPXH12 from "/WPXH/WPXH12.jpg";
import WPXH13 from "/WPXH/WPXH13.jpg";
import WPXH14 from "/WPXH/WPXH14.jpg";
import WPXH15 from "/WPXH/WPXH15.jpg";
import WPXH01_Size from "/WPXH-Size/WPC_WPXH01_2.jpg";
import WPXH02_Size from "/WPXH-Size/WPC_WPXH02_2.jpg";
import WPXH03_Size from "/WPXH-Size/WPC_WPXH03_2.jpg";
import WPXH04_Size from "/WPXH-Size/WPC_WPXH04_2.jpg";
import WPXH05_Size from "/WPXH-Size/WPC_WPXH05_2.jpg";
import WPXH06_Size from "/WPXH-Size/WPC_WPXH06_2.jpg";
import WPXH07_Size from "/WPXH-Size/WPC_WPXH07_2.jpg";
import WPXH08_Size from "/WPXH-Size/WPC_WPXH08_2.jpg";
import WPXH09_Size from "/WPXH-Size/WPC_WPXH09_2.jpg";
import WPXH10_Size from "/WPXH-Size/WPC_WPXH10_2.jpg";
import WPXH11_Size from "/WPXH-Size/WPC_WPXH11_2.jpg";
import WPXH12_Size from "/WPXH-Size/WPC_WPXH12_2.jpg";
import WPXH13_Size from "/WPXH-Size/WPC_WPXH13_2.jpg";
import WPXH14_Size from "/WPXH-Size/WPC_WPXH14_2.jpg";
import WPXH15_Size from "/WPXH-Size/WPC_WPXH15_2.jpg";
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

function WPXH() {
  const [zoomProducts, setZoomProducts] = useState<number | null>(null);
  const setShowProducts = useContext(ShowProductsContext);

  const ProductsArray = [
    WPXH01,
    WPXH02,
    WPXH03,
    WPXH04,
    WPXH05,
    WPXH06,
    WPXH07,
    WPXH08,
    WPXH09,
    WPXH10,
    WPXH11,
    WPXH12,
    WPXH13,
    WPXH14,
    WPXH15,
  ];

  const ProductsSizeArray = [
    WPXH01_Size,
    WPXH02_Size,
    WPXH03_Size,
    WPXH04_Size,
    WPXH05_Size,
    WPXH06_Size,
    WPXH07_Size,
    WPXH08_Size,
    WPXH09_Size,
    WPXH10_Size,
    WPXH11_Size,
    WPXH12_Size,
    WPXH13_Size,
    WPXH14_Size,
    WPXH15_Size,
  ];

  const ProductsLabel = [
    "WPXH01",
    "WPXH02",
    "WPXH03",
    "WPXH04",
    "WPXH05",
    "WPXH06",
    "WPXH07",
    "WPXH08",
    "WPXH09",
    "WPXH10",
    "WPXH11",
    "WPXH12",
    "WPXH13",
    "WPXH14",
    "WPXH15",
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
        Wall Panel
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

export default WPXH;
