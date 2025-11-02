import React from 'react'
import breakfast_back from '/breakfast_card.jpg'
import Category_card from './Category_card'
import lunch from '/lunch.jpg'
import Dinner from '/dinner.jpg'
import { Link } from 'react-router-dom'
function Menu_category() {
return (
  <div
    id="menu"
    className="w-full h-fit bg-[#1E1E1E] flex flex-col justify-center items-center py-28"
  >
    <h2 className="text-white font-stylish text-center text-3xl tracking-widest pb-6">
      On the Menu
    </h2>

    <div
      className="flex flex-wrap justify-center sm:justify-around items-center w-[90%] sm:w-[80%] gap-8 sm:gap-10 mx-auto py-10"
    >
      <Link to="/v1/breakfast" className="w-[90%] sm:w-[30%]">
        <Category_card image={breakfast_back} time="Breakfast" />
      </Link>

      <Link to="/v1/lunch" className="w-[90%] sm:w-[30%]">
        <Category_card image={lunch} time="Lunch" />
      </Link>

      <Link to="/v1/dinner" className="w-[90%] sm:w-[30%]">
        <Category_card image={Dinner} time="Dinner" />
      </Link>
    </div>
  </div>
);

}

export default Menu_category