import SPC_ALMOND from "/SPC/SPC ALMOND.jpg";
import SPC_ASPEN_BRANCH from "/SPC/SPC ASPEN BRANCH.jpg";
import SPC_CAMELIA from "/SPC/SPC CAMELIA.jpg";
import SPC_CARAMEL_BRONZE from "/SPC/SPC CARAMEL BRONZE.jpg";
import SPC_EVENING_FOG from "/SPC/SPC EVENING FOG.jpg";
import SPC_MAGNOLIA from "/SPC/SPC MAGNOLIA.jpg";
import SPC_ORCHID from "/SPC/SPC ORCHID.jpg";
import SPC_STONE_SILVER from "/SPC/SPC STONE SILVER.jpg";
import SPC_WALNUT_BRONZE from "/SPC/SPC WALNUT BRONZE.jpg";
import SPC_ALMOND_Size from "/SPC-Size/SPC_FLOOR_ALMOND_1.jpg";
import SPC_ASPEN_BRANCH_Size from "/SPC-Size/SPC_FLOOR_ASPENBRANCH_1.jpg";
import SPC_CAMELIA_Size from "/SPC-Size/SPC_FLOOR_CAMELIA_1.jpg";
import SPC_CARAMEL_BRONZE_Size from "/SPC-Size/SPC_FLOOR_CARAMELBRONZE_1.jpg";
import SPC_EVENING_FOG_Size from "/SPC-Size/SPC_FLOOR_EVENINGFOG_1.jpg";
import SPC_MAGNOLIA_Size from "/SPC-Size/SPC_FLOOR_MAGNOLIA_1.jpg";
import SPC_ORCHID_Size from "/SPC-Size/SPC_FLOOR_ORCHID_1.jpg";
import SPC_STONE_SILVER_Size from "/SPC-Size/SPC_FLOOR_STONESILVER_1.jpg";
import SPC_WALNUT_BRONZE_Size from "/SPC-Size/SPC_FLOOR_WALNUTBRONZE_1.jpg";
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

function SPC() {
  const [zoomProducts, setZoomProducts] = useState<number | null>(null);
  const setShowProducts = useContext(ShowProductsContext);

  const ProductsArray = [
    SPC_ALMOND,
    SPC_ASPEN_BRANCH,
    SPC_CAMELIA,
    SPC_CARAMEL_BRONZE,
    SPC_EVENING_FOG,
    SPC_MAGNOLIA,
    SPC_ORCHID,
    SPC_STONE_SILVER,
    SPC_WALNUT_BRONZE,
  ];

  const ProductsSizeArray = [
    SPC_ALMOND_Size,
    SPC_ASPEN_BRANCH_Size,
    SPC_CAMELIA_Size,
    SPC_CARAMEL_BRONZE_Size,
    SPC_EVENING_FOG_Size,
    SPC_MAGNOLIA_Size,
    SPC_ORCHID_Size,
    SPC_STONE_SILVER_Size,
    SPC_WALNUT_BRONZE_Size,
  ];

  const ProductsLabel = [
    "SPC ALMOND",
    "SPC ASPEN BRANCH",
    "SPC CAMELIA",
    "SPC CARAMEL BRONZE",
    "SPC EVENING FOG",
    "SPC MAGNOLIA",
    "SPC ORCHID",
    "SPC STONE SILVER",
    "SPC WALNUT BRONZE",
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
        SPC
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

export default SPC;
