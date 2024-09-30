const AddService = () => {
  return (
    <div className="max-w-7xl">
      <div className="bg-white rounded-3xl p-10 ml-8 mt-10">
        <div className="space-y-5">
          <div className="flex gap-4">
            <fieldset className="w-full space-y-1 text-black">
              <label htmlFor="Search" className="font-bold">
                Service Title
              </label>
              <div className="">
                <input
                  name="fname"
                  placeholder="Enter Title"
                  className="md:w-full py-4 pl-5 font-bold text-sm rounded-md sm:w-auto bg-white text-black border border-black"
                />
              </div>
            </fieldset>
            <fieldset className="w-full space-y-1 text-black">
              <label htmlFor="Search" className="font-bold">
                Image
              </label>
              <div className="">
                <input
                  name="lname"
                  type="file"
                  className="md:w-1/3 py-4 pl-10 font-bold text-sm rounded-md sm:w-auto bg-[#FFEAF3] text-[#F63E7B] border border-[#F63E7B]"
                />
              </div>
            </fieldset>
          </div>
          <fieldset className="w-full space-y-1 text-black">
            <label htmlFor="Search" className="font-bold">
              Description
            </label>
            <div className="w-1/2">
              <textarea
                name="fname"
                placeholder="Description"
                className="md:w-full py-4 pl-5 h-40 font-bold text-sm rounded-md sm:w-auto bg-white text-black border border-black"
              />
            </div>
          </fieldset>
        </div>
      </div>
      <div className='flex justify-end mt-5'>
        <button
          type="button"
          className="inline-block px-14 py-3 font-semibold text-white text-center rounded bg-[#F63E7B]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddService;
