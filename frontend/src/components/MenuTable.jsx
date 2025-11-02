import React from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function MenuTable({ breakfast, lunch, dinner }) {
  return (
    <div className="w-full overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full border-collapse border border-gray-600 text-sm text-black bg-white">
        <thead>
          <tr className="bg-[#efbd41] text-black text-center">
            <th className="border border-gray-600 px-4 py-3 font-semibold">Day</th>
            <th className="border border-gray-600 px-4 py-3 font-semibold">Breakfast</th>
            <th className="border border-gray-600 px-4 py-3 font-semibold">Lunch</th>
            <th className="border border-gray-600 px-4 py-3 font-semibold">Dinner</th>
          </tr>
        </thead>

        <tbody>
          {days.map((day, i) => (
            <tr
              key={day}
              className={`text-center ${
                i % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
              } hover:bg-gray-200 transition-colors duration-200`}
            >
              <td className="border border-gray-600 px-4 py-2 font-medium text-gray-800">
                {day}
              </td>
              <td className="border border-gray-600 px-4 py-2 text-gray-700">
                {breakfast?.[i]?.join(", ")||"NO items to display"}
              </td>
              <td className="border border-gray-600 px-4 py-2 text-gray-700">
                {lunch?.[i]?.join(", ")||"NO items to display"}
              </td>
              <td className="border border-gray-600 px-4 py-2 text-gray-700">
                {dinner?.[i]?.join(", ")||"NO items to display"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MenuTable;
