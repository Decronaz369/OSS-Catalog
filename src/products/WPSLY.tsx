import WPSLY01 from "/WPSLY/WPSLY01.jpg";
import WPSLY02 from "/WPSLY/WPSLY02.jpg";
import WPSLY04 from "/WPSLY/WPSLY04.jpg";
import WPSLY05 from "/WPSLY/WPSLY05.jpg";
import WPSLY06 from "/WPSLY/WPSLY06.jpg";
import WPSLY07 from "/WPSLY/WPSLY07.jpg";
import WPSLY08 from "/WPSLY/WPSLY08.jpg";
import WPSLY09 from "/WPSLY/WPSLY09.jpg";
import WPSLY10 from "/WPSLY/WPSLY10.jpg";

function WPSLY() {
  return (
    <>
      <div className="relative flex w-full flex-wrap justify-center gap-12 overflow-y-auto px-20 py-30 [&::-webkit-scrollbar]:hidden">
        {[
          WPSLY01,
          WPSLY02,
          WPSLY04,
          WPSLY05,
          WPSLY06,
          WPSLY07,
          WPSLY08,
          WPSLY09,
          WPSLY10,
        ].map((src, idx) => (
          <div className="flex aspect-3/4 w-56 cursor-pointer flex-col items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-neutral-600 shadow-md transition duration-100 ease-in-out hover:brightness-75">
            <img key={idx} src={src} alt="" />
            <div className="flex w-full flex-1 items-center justify-center px-5 text-center font-extrabold">
              {
                [
                  "WPSLY01",
                  "WPSLY02",
                  "WPSLY04",
                  "WPSLY05",
                  "WPSLY06",
                  "WPSLY07",
                  "WPSLY08",
                  "WPSLY09",
                  "WPSLY10",
                ][idx]
              }
            </div>
          </div>
        ))}
      </div>
      <div className="absolute mt-13 flex text-3xl font-extrabold text-neutral-800">
        WPSLY
      </div>
    </>
  );
}

export default WPSLY;
