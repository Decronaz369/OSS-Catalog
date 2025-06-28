import WP3LY01 from "/WP3LY/WP3LY01.jpg";
import WP3LY03 from "/WP3LY/WP3LY03.jpg";
import WP3LY02 from "/WP3LY/WP3LY02.jpg";
import WP3LY04 from "/WP3LY/WP3LY04.jpg";
import WP3LY05 from "/WP3LY/WP3LY05.jpg";
import WP3LY06 from "/WP3LY/WP3LY06.jpg";
import WP3LY07 from "/WP3LY/WP3LY07.jpg";
import WP3LY08 from "/WP3LY/WP3LY08.jpg";
import WP3LY09 from "/WP3LY/WP3LY09.jpg";
import WP3LY10 from "/WP3LY/WP3LY10.jpg";
import WP3LY11 from "/WP3LY/WP3LY11.jpg";
import WP3LY14 from "/WP3LY/WP3LY14.jpg";
import WP3LY15 from "/WP3LY/WP3LY15.jpg";
import WP3LY16 from "/WP3LY/WP3LY16.jpg";
import WP3LY17 from "/WP3LY/WP3LY17.jpg";

function WP3LY() {
  return (
    <>
      <div className="relative flex w-full flex-wrap justify-center gap-12 overflow-y-auto px-20 py-30 [&::-webkit-scrollbar]:hidden">
        {[
          WP3LY01,
          WP3LY02,
          WP3LY03,
          WP3LY04,
          WP3LY05,
          WP3LY06,
          WP3LY07,
          WP3LY08,
          WP3LY09,
          WP3LY10,
          WP3LY11,
          WP3LY14,
          WP3LY15,
          WP3LY16,
          WP3LY17,
        ].map((src, idx) => (
          <div className="flex aspect-3/4 w-56 cursor-pointer flex-col items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-neutral-600 shadow-md transition duration-100 ease-in-out hover:brightness-75">
            <img key={idx} src={src} alt="" />
            <div className="flex w-full flex-1 items-center justify-center px-5 text-center font-extrabold">
              {
                [
                  "WP3LY01",
                  "WP3LY02",
                  "WP3LY03",
                  "WP3LY04",
                  "WP3LY05",
                  "WP3LY06",
                  "WP3LY07",
                  "WP3LY08",
                  "WP3LY09",
                  "WP3LY10",
                  "WP3LY11",
                  "WP3LY14",
                  "WP3LY15",
                  "WP3LY16",
                  "WP3LY17",
                ][idx]
              }
            </div>
          </div>
        ))}
      </div>
      <div className="absolute mt-13 flex text-3xl font-extrabold text-neutral-800">
        WP3LY
      </div>
    </>
  );
}

export default WP3LY;
