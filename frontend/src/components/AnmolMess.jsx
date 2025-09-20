import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import MenuTable from './MenuTable';

const mess1b = [
  ["4 paratha", "aalo ki sabji", "chai"],
  ["4 paratha", "chole", "lassi"],
  ["4 paratha", "paneer butter masala", "chaas"],
  ["4 paratha", "mixed veg curry", "chai"],
  ["4 paratha", "rajma", "onion salad"],
  ["4 paratha", "baingan bharta", "curd"],
  ["4 paratha", "matar paneer", "chai"]
];
const mess1l = [
  ["5 roti", "rice", "baingan bharta", "arhar dal", "salad"],
  ["5 roti", "jeera rice", "chole", "moong dal", "papad"],
  ["5 roti", "rice", "aloo gobi", "masoor dal", "curd"],
  ["5 roti", "pulao", "matar paneer", "toor dal", "onion salad"],
  ["5 roti", "rice", "bhindi fry", "chana dal", "raita"],
  ["5 roti", "lemon rice", "kadhi pakora", "arhar dal", "pickle"],
  ["5 roti", "rice", "mixed veg curry", "dal fry", "salad"]
];
const mess1d = [
  ["4 roti", "rice", "aloo tamatar curry", "moong dal", "salad"],
  ["4 roti", "jeera rice", "methi matar malai", "dal fry", "raita"],
  ["4 roti", "rice", "lauki chana dal curry", "masoor dal", "pickle"],
  ["4 roti", "veg pulao", "shahi paneer", "toor dal", "onion salad"],
  ["4 roti", "rice", "bhindi do pyaza", "arhar dal", "curd"],
  ["4 roti", "lemon rice", "kadhi pakora", "chana dal", "papad"],
  ["4 roti", "rice", "mix veg curry", "dal tadka", "salad"]
];


function AnmolMess() {
  return (
     <div className='text-white pt-14 min-h-screen bg-[#161616] flex justify-center border-b-1 border-b-white'>
        <div className='w-[80%] py-12 '>
            <div className='text-center py-6'>

                <h1 className='font-heading text-4xl text-[#efbd41] font-bold w-[80%] mx-auto text-center leading-16'>Anmol Mess and PGs</h1>
                <p className='text-neutral-400'>Contact No. 98989XXXX</p>
                <div className='flex justify-center items-center gap-1'><CiLocationOn />  <p className='text-neutral-400'> H.N.40, Om Vihar Colony, Near Shankar Hotel, Ghaziabad</p></div>
            </div>


            <div>
                <MenuTable  breakfast={mess1b}
                            lunch={mess1l}
                            dinner={mess1d}
                />
            </div>
            
                
          

        </div>
    </div>
  )
}

export default AnmolMess