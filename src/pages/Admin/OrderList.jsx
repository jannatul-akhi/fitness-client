import { useState } from "react";

const OrderList = () => {
  const [selectedValue, setSelectedValue] = useState("pending");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  function getColorClass(value) {
    switch (value) {
      case "pending":
        return "text-[#FF4545]";
      case "done":
        return "text-[#009444]";
      case "ongoing":
        return "text-[#FFBD3E]";
      default:
        return "";
    }
  }

  return (
    <div className="ml-8 mt-10 max-w-screen-2xl">
      <div className="bg-white shadow-xl rounded-3xl p-5">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-400 uppercase bg-gray-100 dark:text-gray-400">
              <tr className="rounded-full">
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Service
                </th>
                <th scope="col" className="px-6 py-3">
                  Pay With
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17
                </th>
                <td className="px-6 py-6 text-gray-900 font-medium">Silver</td>
                <td className="px-6 py-6 text-gray-900 font-medium">Laptop</td>
                <td className="px-6 py-6 text-gray-900 font-medium">$2999</td>
                <td className="px-6 py-6">
                  <select
                    className={`block py-2 rounded-md shadow-sm focus:outline-none focus:border-none focus:border-transparent dark:bg-gray-900 dark:text-white ${getColorClass(selectedValue)}`}
                    value={selectedValue}
                    onChange={handleChange}
                  >
                    <option
                      className="text-[#FF4545] font-medium"
                      value="pending"
                    >
                      Pending
                    </option>
                    <option className="text-[#009444] font-medium" value="done">
                      Done
                    </option>
                    <option
                      className="text-[#FFBD3E] font-medium"
                      value="ongoing"
                    >
                      Ongoing
                    </option>
                  </select>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-6 text-gray-900 font-medium">White</td>
                <td className="px-6 py-6 text-gray-900 font-medium">
                  Laptop PC
                </td>
                <td className="px-6 py-6 text-gray-900 font-medium">$1999</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Magic Mouse 2
                </th>
                <td className="px-6 py-6 text-gray-900 font-medium">Black</td>
                <td className="px-6 py-6 text-gray-900 font-medium">
                  Accessories
                </td>
                <td className="px-6 py-6 text-gray-900 font-medium">$99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
