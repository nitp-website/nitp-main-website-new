import Slider from "./components/Home/Slider";
import Gallery from "./components/Home/Gallery"
import Popbuttons from "./components/Home/Popbuttons";
import Details from "./components/Home/Details";
import Aboutus from "./components/Home/aboutNitPatna";
import Movingbar from "./components/Home/Movingbar";
import Research from "./components/Home/Research";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CompanyCarousel from "./components/Home/CompanyCarousel";






export const metadata = {
  title: "NIT PATNA | National Institute of Technology Patna",
  description: "Official website of National Institute of Technology Patna",
  verification: {
    google: "5gbX6CeIgXNqZ2CuUrXtlfpdcPg-v8n4l_mx3CXfnwU",
  },
};
export default function Home() {
  return (
    <>
    <Slider/>
    <Movingbar/>
    <Popbuttons/>
    <Details/>
    <Aboutus/>
    <section className="py-12 md:py-20 bg-red-950/5 dark:bg-red-950/10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Recent Placements</h2>
            <p className="text-muted-foreground">
              Our students have been placed in some of the most prestigious companies across the globe.
            </p>
          </div>
          <CompanyCarousel />
        </div>
      </section>
    <Research/>
    <Gallery/>
    
    </>
    
  );
}
