import professionalismImage from "../assets/images/professionalism-img.png";

const Professionalism = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-40 sm:flex sm:space-x-6 justify-center items-center gap-20">
        <div className="md:w-full mb-6 md:h-80 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src={`${professionalismImage}`}
            alt="image"
            className="w-full h-full rounded"
          />
        </div>
        <div className="flex flex-col space-y-8 md:w-full md:h-full sm:h-32 sm:w-32">
          <div className="w-2/3">
            <h2 className="text-4xl font-bold">
              Let us handle your screen{" "}
              <span className="text-[#F63E7B]">Professionally</span>.
            </h2>
          </div>
          <p>
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general ipsum.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Purus commodo ipsum
          </p>
          <div className="space-y-1 flex gap-10 items-center">
            <span className="flex flex-col space-y-6">
              <h3 className="text-[#F63E7B] text-3xl font-extrabold">500+</h3>
              <span className="font-medium">Happy Customer</span>
            </span>
            <span className="flex flex-col space-y-6">
              <h3 className="text-[#F63E7B] text-3xl font-extrabold">16+</h3>
              <span className="font-medium">Total Service</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professionalism;
