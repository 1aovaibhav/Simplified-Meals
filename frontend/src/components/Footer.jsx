import React from 'react'
import { Phone} from 'lucide-react'
import { FaWhatsapp , FaInstagram , FaFacebook ,FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <div className='w-full py-10 bg-[#161616] flex flex-col items-center justify-around'>

            <div className='flex flex-col justify-center items-center gap-3'>
                <h3 className='font-stylish text-white tracking-[0.2rem] text-lg'>Our Featured Partners - </h3>
                <div className='flex gap-10'>
                    <a href='' className='text-white font-extralight text-xs hover:text-[#fea116] transition-all duration-300'>Anmol Mess and PGs</a>
                    <a href='' className='text-white font-extralight text-xs hover:text-[#fea116] transition-all duration-300'>Krishna Hospitality</a>
                    <a href='' className='text-white text-xs font-extralight hover:text-[#fea116] transition-all duration-300'>Shree Shyam Mess</a>
                </div>
            </div>

      
                <a href="" className='py-10 flex justify-center items-center gap-3 text-white font-regular text-xs hover:text-[#fea116] transition-all duration-300'>
                    <h3 className='text-sm'>Call Us:</h3>
                    <div className='flex justify-center items-center-safe'>
                        <Phone className='h-3 w-3' /> +91 98765 4XXXX
                    </div> 
                </a>

                <div className='flex justify-center itens-center gap-6'>
                    <a href="" className='text-white hover:text-[#fea116] transition-all duration-300'><FaInstagram className='text-2xl' /></a>
                    <a href="" className='text-white hover:text-[#fea116] transition-all duration-300'><FaFacebook  className='text-2xl'/></a>
                    <a href="" className='text-white hover:text-[#fea116] transition-all duration-300'><FaWhatsapp className='text-2xl'/></a>
                    <a href="" className='text-white hover:text-[#fea116] transition-all duration-300'><FaXTwitter className='text-2xl'/></a>
                </div>
          



    </div>
  )
}

export default Footer