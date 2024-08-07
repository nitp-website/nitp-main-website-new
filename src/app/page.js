import Image from "next/image";
import Slider from "./components/Home/Slider";
import Gallery from "./components/Home/Gallery"
import Popbuttons from "./components/Home/Popbuttons";
import Details from "./components/Home/Details";
import Aboutus from "./components/Home/Aboutus";
import Placement from "./components/Home/Placement";
import Movingbar from "./components/Home/Movingbar";
import Research from "./components/Home/Research";
import Vid from "./components/Home/Vid"

export const metadata = {
  title: "NIT PATNA | National Institute of Technology Patna",
  description: "Official website of National Institute of Technology Patna",
};
export default function Home() {
  return (
    <>
    <Slider/>
    <Movingbar/>
    <Popbuttons/>
    <Details/>
    <Aboutus/>
    <Placement/>
    <Research/>
    <Gallery/>
    
    </>
    
  );
}
