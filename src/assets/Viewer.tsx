import LivingRoom from "/Living Room.jpg";
import WPLY from "../products/WPLY";
import SPC from "../products/SPC";
import FKCB from "../products/FKCB";
import FKS from "../products/FKS";
import WP3LY from "../products/WP3LY";
import WPDXH from "../products/WPDXH";
import WPLXH from "../products/WPLXH";
import WPSLY from "../products/WPSLY";
import WPXH from "../products/WPXH";
import LIST from "../products/LIST";
import CBXH from "../products/CBXH";
import CBXHNW from "../products/CBXHNW";
import GWP from "../products/GWP";
import MWP from "../products/MWP";
import PSXH from "../products/PSXH";
import WASTAFEL from "../products/WASTAFEL";

interface ViewPageProps {
  currentIndex: number;
}

function ViewPage({ currentIndex }: ViewPageProps) {
  const productsArray = [
    <WASTAFEL />,
    <WPLY />,
    <WPXH />,
    <MWP />,
    <PSXH />,
    <WP3LY />,
    <WPSLY />,
    <WPLXH />,
    <GWP />,
    <FKS />,
    <WPDXH />,
    <LIST />,
    <SPC />,
    <FKCB />,
    <CBXH />,
    <CBXHNW />,
  ];

  return (
    <>
      <div
        className="relative flex size-[calc(100%-1.5rem)] flex-col items-center overflow-hidden rounded-xl bg-cover bg-center sm:size-[calc(100%-2rem)]"
        style={{ backgroundImage: `url(${LivingRoom})` }}
      >
        <div className="absolute h-full w-full backdrop-blur-2xl"></div>
        {productsArray[currentIndex]}
      </div>
    </>
  );
}

export default ViewPage;
