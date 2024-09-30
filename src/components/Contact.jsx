const Contact = () => {
  return (
    <div>
      <section className="py-20 dark:bg-gray-800 dark:text-gray-100">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="max-w-xl text-4xl font-bold lg:text-5xl">
              Let us handle your project, professionally.
            </h2>
          </div>
          <form className="px-60 space-y-10">
            <div className="flex gap-4">
              <fieldset className="w-full space-y-1 text-gray-100">
                <label htmlFor="Search" className="hidden">
                  Full Name
                </label>
                <div className="">
                  <input
                    name="fname"
                    placeholder="Full Name"
                    className="md:w-full py-4 pl-10 font-bold text-sm rounded-md sm:w-auto bg-white text-black focus:border-violet-400 focus:border-none"
                  />
                </div>
              </fieldset>
              <fieldset className="w-full space-y-1 text-gray-100">
                <label htmlFor="Search" className="hidden">
                  Last Name
                </label>
                <div className="">
                  <input
                    name="lname"
                    placeholder="Last Name"
                    className="md:w-full py-4 pl-10 font-bold text-sm rounded-md sm:w-auto bg-white text-black focus:border-violet-400 focus:border-none"
                  />
                </div>
              </fieldset>
            </div>
            <div className="flex gap-4">
              <fieldset className="w-full space-y-1 text-gray-100">
                <label htmlFor="Search" className="hidden">
                  Email Address
                </label>
                <div className="">
                  <input
                    name="email"
                    placeholder="Email Address"
                    className="md:w-full py-4 pl-10 font-bold text-sm rounded-md sm:w-auto bg-white text-black focus:border-violet-400 focus:border-none"
                  />
                </div>
              </fieldset>
              <fieldset className="w-full space-y-1 text-gray-100">
                <label htmlFor="Search" className="hidden">
                  Phone Number
                </label>
                <div className="">
                  <input
                    name="phone"
                    placeholder="Phone Number"
                    className="md:w-full py-4 pl-10 font-bold text-sm rounded-md sm:w-auto bg-white text-black focus:border-violet-400 focus:border-none"
                  />
                </div>
              </fieldset>
            </div>
            <fieldset className="w-full space-y-1 text-gray-100">
              <label htmlFor="Search" className="hidden">
                Message
              </label>
              <div className="">
                <textarea
                  name="fname"
                  placeholder="Your Message"
                  className="md:w-full py-4 pl-10 h-40 font-bold text-sm rounded-md sm:w-auto bg-white text-black focus:border-violet-400 focus:border-none"
                />
              </div>
            </fieldset>
            <div className="text-center mt-5">
              <button
                type="button"
                className="inline-block px-5 py-3 font-semibold text-white text-center rounded bg-[#F63E7B]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
