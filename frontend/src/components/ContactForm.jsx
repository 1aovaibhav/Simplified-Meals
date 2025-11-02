import {useState} from 'react'
import { sendMail } from '../api/user.js';

function ContactForm() {

const [disable, setDisable] = useState(false);
const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");



  const handleSubmit = async () => {
    
       setDisable(true);
      console.log("button pressed")


      const nameRegex = /^[A-Za-z\s]{2,50}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
  

    if (!nameRegex.test(name)) {
      alert("Please enter a valid name (letters and spaces only).");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    
    if (subject.trim().length < 1) {
      alert("Please enter a valid subject");
      return;
    }
    if (message.trim().length < 1) {
      alert("Please enter a valid message");
      return;
    }

    await sendMail(name,email, subject, message);
     setName("");
     setEmail("");
     setMessage("");
     setSubject("");
      setDisable(false);
  };


  return (
    <div className='w-full bg-[#1e1e1e] pt-15 pb-30 flex justify-center items-center relative' id='contactus'>

        <div className='w-[80%] mx-auto bg-[#1e1e1e] h-auto flex flex-col'>

          <div>
              <h2 className='text-4xl text-red-600 font-bold font-sans pb-1'>Contact Us</h2>
              <h3 className='text-2xl text-neutral-500 font-medium font-sans'>Questions, thoughts, or want to register your Mess?</h3>
          </div>


       

            <form className='w-[60%] mx-auto pt-20 flex flex-col gap-4'>
             
             <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={name}
      
            onChange={e => setName(e.target.value)}
            required
            className="w-full bg-[#fff] p-2 font-serif rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
              <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={email}
 
             onChange={e => setEmail(e.target.value)}
            required
            className="w-full bg-[#fff] p-2 font-serif rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
              <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            value={subject}
 
             onChange={e => setSubject(e.target.value)}
            required
            className="w-full bg-[#fff] p-2 font-serif rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
              
              <textarea 
              name="message"
               value={message}
               onChange={e => setMessage(e.target.value)}
               required
              className='w-full bg-[#fff] p-2 font-serif rounded-md' rows={5} placeholder='Enter your message'></textarea>


              <button 
                      className="relative h-[40px] w-[120px] text-[1rem] bg-red-600 text-white border-[3px] border-red-600 
                      shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer z-[1] rounded-xl 
                      transition-all duration-200
                      before:content-[''] before:absolute before:inset-0 before:bg-white before:-z-10
                      before:scale-x-0 before:-translate-x-[50px] before:origin-left before:rounded-full 
                      before:transition-all before:duration-600
                      hover:text-black hover:before:scale-x-[2] hover:before:-translate-x-[50px] disabled:cursor-not-allowed" onClick={handleSubmit} disabled={disable}>
                          Send Message
                </button>
            </form>

      



        </div>




        <div className="flex justify-center items-center m-0 gap-2 absolute bottom-[-2.7rem] right-0 opacity-[0.9] select-none">
                        <div className='flex justify-center items-center'>

                        <span className="text-[5.2rem] text-neutral-800 [text-shadow:5px_5px_5px_#0000003d]" style={{fontFamily: 'Jokerman'}}>S</span>
                        <p className=" text-4xl text-neutral-800  font-bold  [text-shadow:5px_5px_5px_#0000003d]" style={{fontFamily: 'cursive'}}>implified </p>
                        </div>
                        <div className='flex justify-center items-center'>

                        <span className="text-[5.2rem] text-neutral-800  [text-shadow:5px_5px_5px_#0000003d]" style={{fontFamily: 'Jokerman'}}>M</span>
                        <p className=" text-4xl text-neutral-800 font-bold  [text-shadow:5px_5px_5px_#0000003d]" style={{fontFamily: 'cursive'}}>eals </p>
                        </div>
                       
        </div>

    </div>
  )
}

export default ContactForm