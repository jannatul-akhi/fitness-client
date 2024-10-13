const Review = () => {
  return (
    <div>
      <div className="ml-8 mt-10 max-w-2xl">
        <form className="space-y-3">
          <fieldset className="w-full space-y-1 text-gray-100">
            <label htmlFor="Search" className="hidden">
              Full Name
            </label>
            <div className="">
              <input
                name="fname"
                placeholder="Your name"
                className="md:w-full py-4 pl-10 font-bold text-sm rounded-md sm:w-auto bg-white text-black focus:border-violet-400 focus:border-none"
              />
            </div>
          </fieldset>
          <fieldset className="w-full space-y-1 text-gray-100">
            <label htmlFor="Search" className="hidden">
              Full Name
            </label>
            <div className="">
              <input
                name="fname"
                placeholder="Company's name, Designation"
                className="md:w-full py-4 pl-10 font-bold text-sm rounded-md sm:w-auto bg-white text-black focus:border-violet-400 focus:border-none"
              />
            </div>
          </fieldset>
          <fieldset className="w-full space-y-1 text-gray-100">
            <label htmlFor="Search" className="hidden">
              Message
            </label>
            <div className="">
              <textarea
                name="fname"
                placeholder="Description"
                className="md:w-full py-4 pl-10 h-40 font-bold text-sm rounded-md sm:w-auto bg-white text-black focus:border-violet-400 focus:border-none"
              />
            </div>
          </fieldset>
          <button
            type="button"
            className="inline-block px-8 py-3 font-semibold text-white text-center rounded bg-[#F63E7B]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;
