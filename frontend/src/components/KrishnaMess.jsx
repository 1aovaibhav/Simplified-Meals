import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import MenuTable from './MenuTable';

const mess2b = [
  ["4 roti", "dal tadka", "salad"],
  ["4 roti", "chana masala", "chaas"],
  ["4 roti", "palak paneer", "curd"],
  ["4 roti", "bhindi fry", "chai"],
  ["4 roti", "rajma", "lassi"],
  ["4 roti", "kadhi", "onion salad"],
  ["4 roti", "aloo gobi", "chaas"]
];

const mess2l = [
  ["5 roti", "rice", "aloo matar", "moong dal", "salad"],
  ["5 roti", "veg pulao", "chana masala", "masoor dal", "raita"],
  ["5 roti", "rice", "lauki ki sabji", "arhar dal", "papad"],
  ["5 roti", "jeera rice", "palak paneer", "chana dal", "onion salad"],
  ["5 roti", "rice", "tinda sabji", "dal fry", "curd"],
  ["5 roti", "pulao", "gatte ki sabji", "moong dal", "pickle"],
  ["5 roti", "rice", "karela fry", "toor dal", "salad"]
];
const mess2d = [
  ["4 roti", "rice", "aloo palak", "dal makhani", "salad"],
  ["4 roti", "pulao", "paneer butter masala", "moong dal", "raita"],
  ["4 roti", "rice", "tinda sabji", "masoor dal", "pickle"],
  ["4 roti", "jeera rice", "chole", "chana dal", "curd"],
  ["4 roti", "rice", "gobi matar", "dal fry", "papad"],
  ["4 roti", "lemon rice", "lauki kofta", "toor dal", "onion salad"],
  ["4 roti", "rice", "bhindi fry", "arhar dal", "salad"]
];

function KrishnaMess() {
  return (
     <div className='text-white pt-14 min-h-screen bg-[#161616] flex justify-center border-b-1 border-b-white'>
        <div className='w-[80%] py-12 '>
            <div className='text-center py-6'>

                <h1 className='font-heading text-4xl text-[#efbd41] font-bold w-[80%] mx-auto text-center leading-16'>Krishna Hospitality</h1>
                <p className='text-neutral-400'>Contact No. 98989XXXX</p>
                <div className='flex justify-center items-center gap-1'><CiLocationOn />  <p className='text-neutral-400'> H.N.40, Om Vihar Colony, Near Shankar Hotel, Ghaziabad</p></div>
            </div>


            <div>
                <MenuTable  breakfast={mess2b}
                            lunch={mess2l}
                            dinner={mess2d}
                />
            </div>
            
                
          

        </div>
    </div>
  )
}

export default KrishnaMess