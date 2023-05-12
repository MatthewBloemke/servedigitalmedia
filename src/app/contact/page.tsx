import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center">
      <div className=" w-full md:w-[80%] h-auto rounded-xl lg:p-4">
        <div className="p-4">
          <form>
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2 text-white">
                  Name
                </label>
                <input
                  type="text"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  name="name"
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2 text-white">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  name="number"
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2 text-white">Email</label>
              <input
                type="email"
                className="border-2 rounded-lg p-3 flex border-gray-300"
                name="email"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2 text-white">
                Subject
              </label>
              <input
                type="text"
                className="border-2 rounded-lg p-3 flex border-gray-300"
                name="subject"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2 text-white">
                Message
              </label>
              <textarea
                className="border-2 rounded-lg p-3 border-gray-300"
                rows={10}
                name="message"
              />
            </div>
            <button className="w-full p-4 text-white hover:shadow-whtie mt-4">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
