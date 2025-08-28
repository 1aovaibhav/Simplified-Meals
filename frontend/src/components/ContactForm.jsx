import React from 'react'

function ContactForm() {
  return (
    <div className='w-full bg-black py-30 flex justify-center items-center'>

        <div className='w-[80%] mx-auto bg-[#1e1e1e] h-auto flex flex-col'>

          <div>
              <h2 className='text-4xl text-red-600 font-bold font-sans pb-1'>Contact Us</h2>
              <h3 className='text-2xl text-neutral-500 font-medium font-sans'>Questions, thoughts, or just want to say hello?</h3>
          </div>


          <div className='w-[60%] mx-auto pt-20'>

            <form>
              <input type="text" name="name" className='w-full bg-[#fff]' placeholder='Enter your name'/>
            </form>

          </div>



        </div>


    </div>
  )
}

export default ContactForm