import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Professionalism from "../../components/Professionalism";
import Services from "../../components/Services";
import Testimonial from "../../components/Testimonial";

const Home = () => {
  return (
    <div>
      <div className="bg-[#fff8f5] h-[750px]">
        <Navbar />
        <Banner />
      </div>
      <Services />
      <div className="bg-[#fff8f5]">
        <Professionalism />
      </div>
      <Testimonial />
      <div className="bg-[#fff8f5]">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
