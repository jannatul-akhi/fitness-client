const MakeAdmin = () => {
  return (
    <div>
      <div className="max-w-7xl">
        <div className="bg-white rounded-3xl p-10 ml-8 mt-10">
          <div className="">
            <div className="flex gap-4 items-center">
              <fieldset className="w-1/2 space-y-1 text-black">
                <label htmlFor="Search" className="font-bold">
                  Email
                </label>
                <div className="">
                  <input
                    name="email"
                    placeholder="email@gmail.com"
                    className="md:w-full py-4 pl-5 font-bold text-sm rounded-md sm:w-auto bg-white text-black border border-black"
                  />
                </div>
              </fieldset>
              <fieldset className='space-y-6'>
                <label htmlFor="Search" className="hidden"></label>
                <button
                  type="button"
                  className="inline-block px-8 py-3 font-semibold text-white text-center rounded bg-[#F63E7B]"
                >
                  Submit
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
