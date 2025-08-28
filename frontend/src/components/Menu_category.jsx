import React from 'react'
import breakfast_back from '/breakfast_card.jpg'
import Category_card from './Category_card'
import lunch from '/lunch.jpg'
import Dinner from '/dinner.jpg'
function Menu_category() {
  return (
    <div id='menu' className='w-full h-fit bg-[#1E1E1E] flex-col justify-center items-center py-30'>

      <h2 className='text-white font-stylish mx-auto text-center text-3xl tracking-widest pb-6'>On the Menu</h2>

        <div className='flex justify-around items-center  w-[80%] gap-10 mx-auto py-10'>

            <Category_card image={breakfast_back} time = "Breakfast"/>
            <Category_card image={lunch} time = "Lunch"/>
            <Category_card image={Dinner} time = "Dinner"/>

        </div>

    </div>
  )
}

export default Menu_category