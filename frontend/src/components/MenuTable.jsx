import React from 'react'
 const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];




function MenuTable({  breakfast, lunch, dinner }) {
  return (
    <div>
        <table className="table-auto border-collapse border border-gray-400 w-full text-sm text-black">
          <thead>
            <tr className="bg-blue-500 ">
              <th className="border border-gray-400 px-4 py-2">Day</th>
              <th className="border border-gray-400 px-4 py-2">Breakfast</th>
              <th className="border border-gray-400 px-4 py-2">Lunch</th>
              <th className="border border-gray-400 px-4 py-2">Dinner</th>
            </tr>
          </thead>
          <tbody>
            {days.map((day, i) => (
              <tr
                key={day}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="border border-gray-400 px-4 py-2 font-semibold">{day}</td>
                <td className="border border-gray-400 px-4 py-2">
                  {breakfast[i].join(", ")}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {lunch[i].join(", ")}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {dinner[i].join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default MenuTable