import bannerImage from '../assets/images/banner1.png';

const Banner = () => {
  return (
    <div className='mt-4'>
      <section className="dark:text-gray-100">
        <div className="md:mx-[300px] sm:mx-5 flex flex-row justify-center items-center">
          <div className="flex flex-col w-full">
            <h2 className="md:text-5xl font-bold mb-2">
              BEAUTY SALON
            </h2>
            <h2 className="md:text-5xl font-bold mb-5">
              FOR EVERY WOMEN
            </h2>
            <p className="mt-4 mb-8 text-[18px] lg:w-2/3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat 
            </p>
            <button className="self-start font-medium bg-[#F63E7B] flex items-center px-14 py-3 -mb-1 text-white text-xl rounded-lg ">
              Get an Appointment
            </button>
          </div>
          <div
            className="w-full lg:w-2/3 rounded-lg lg:mr-8"
            style={{
              height: "600px",
              backgroundImage: `url(${bannerImage})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
