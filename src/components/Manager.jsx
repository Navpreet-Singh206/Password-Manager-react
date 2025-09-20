import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

const Manager = () => {
  const [passwords, setPasswords] = useState({ id: uuidv4(), site: "", firstName: "", lastName: "", password: "" });
  const [passBlock, setPassBlock] = useState([]);
  let inputRef = useRef();
  let imgRef = useRef();

  const copyText = (text) => {
    toast.success('Copied to Clipboard!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
    navigator.clipboard.writeText(text);
  }



  const deletor = (id) => {
    if(!confirm("Do you want to delete?"))return;
    
    let arr = passBlock.filter(i => {
      return i.id !== id;
    })
 
    setPassBlock(arr);
     toast.success('Info is deleted!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
  }
  const editor = (id) => {
    let edition = passBlock.filter(i => {
      return i.id === id;
    })
    setPasswords(edition[0]);
    let arr = passBlock.filter(i => {
      return i.id !== id;
    })
    setPassBlock(arr);


  }


  const eyehandle = () => {


    if (imgRef.current.src.includes("eye-cross.png")) {
      imgRef.current.src = "eye-open.png";
      inputRef.current.type = "text";

    } else if (imgRef.current.src.includes("eye-open.png")) {
      imgRef.current.src = "eye-cross.png";
      inputRef.current.type = "password";

    }



  }




  useEffect(() => {
   

      localStorage.setItem("storage", JSON.stringify(passBlock));

  }, [passBlock]);


  useEffect(() => {
    let a = localStorage.getItem("storage");
    if (a) {
      try {
        let pass = JSON.parse(a);
        if (Array.isArray(pass)) { // Verify it's an array
          setPassBlock(pass);
        }
      } catch (error) {
        console.error("Failed to parse localStorage data");
      }
    }

  }, [])




  const handleChange = (e) => {

    setPasswords({ ...passwords, [e.target.name]: e.target.value });

  }

  const handleSave = () => {
    //resolving issue of saving empty object
if(passwords.site === ""&&passwords.firstName === ""&&passwords.lastName === ""&&passwords.password === ""){
 toast.error('Fill the inputs!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
}

    if(passwords.site !== ""&&passwords.firstName !== ""&&passwords.lastName !== ""&&passwords.password !== ""){
    setPassBlock([...passBlock, passwords]);
    }
     toast.success('Credentials saved successfully!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
    setPasswords({ id: uuidv4(), site: "", firstName: "", lastName: "", password: "" });
    console.log(passBlock);
  }

  return (

    <div className=' w-full text-white font-mono min-h-screen pb-[15vh]'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
      <div className="innerbox mx-[5%] mt-7  p-6 ">


        <div className="inputs flex flex-col gap-3 ">
          <p className='text-lg pl-2'>Website Url :</p>
          <input name="site" value={passwords.site} onChange={handleChange} type="text" placeholder="Enter Website Url" className=' bg-white h-10 text-black pl-3 rounded-full focus:outline-none focus:border-blue-900 focus:border-3'></input>

          <div className="sideInput flex justify-between items-center  ">
            <div className="user flex flex-col gap-2">
              <p className='text-[16px] pl-2'>Username :</p>
              <div className='flex gap-3'>
                <input name="firstName" value={passwords.firstName} onChange={handleChange} type="text" placeholder="First Name" className='w-[200px] bg-white h-10 text-black pl-3 rounded-full focus:outline-none focus:border-blue-900 focus:border-3 '></input>
                <input name="lastName" value={passwords.lastName} onChange={handleChange} type="text" placeholder="Last Name" className=' bg-white h-10 text-black pl-3 rounded-full focus:outline-none focus:border-blue-900 focus:border-3'></input>
              </div>
            </div>
            <div className="passEnter flex flex-col gap-2 mr-12">
              <p className='text-[16px] pl-2'>Password :</p>

              <div className='relative ' >
                <input name="password" ref={inputRef} value={passwords.password} onChange={handleChange} type="password" placeholder="Password" className=' bg-white h-10 text-black pl-5 rounded-full focus:outline-none focus:border-blue-900 focus:border-3'></input>
                <span className='absolute top-3 right-2 text-black bottom-0 cursor-pointer' onClick={eyehandle}><img ref={imgRef} src="eye-cross.png" className='w-5 '></img></span>
              </div>



            </div>

          </div>
        </div>
        <div className="saving flex justify-center items-center mt-7">

          <div className=' bg-transparent border-2 border-blue-900  w-[6rem] h-11  hover:bg-slate-700 rounded-3xl cursor-pointer flex justify-center items-center gap-2'><img src="saveIcon.png" className='w-7'></img><button onClick={handleSave} className='cursor-pointer'>Save</button></div>

        </div>
        {passBlock.length>0?<>
        
        <p className='m-1'>Your Passwords :</p>
        <div className="contain overflow-hidden border-3  rounded-3xl border-blue-800 mt-3">

          <table className="table-auto w-full  " >
            <thead>
              <tr className='p-3' >
                <th className='text-center p-4 text-lg border-r-2 border-b-2 border-gray-700'>Website Name</th>
                <th className='text-center p-4 text-lg border-r-2 border-b-2 border-gray-700' >First Name</th>
                <th className='text-center p-4 text-lg border-r-2 border-b-2 border-gray-700' >Last Name</th>
                <th className='text-center p-4 text-lg border-b-2 border-r-2 border-gray-700'>Password</th>
                <th className='text-center p-4 text-lg border-b-2 border-gray-700'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {passBlock.map(i => {


                return (
                  
                  <tr key={uuidv4()}>
                    <td className=' p-2  text-[16px] border-r-2 border-b-2 border-gray-700'><span className='flex relative justify-between pl-3 items-center '><a href={i.site} target="_blank" className='hover:underline'>{i.site}</a><img src="copy.png" className='hover:bg-gray-600 hover:rounded-full  w-8 cursor-pointer absolute top-0 right-0' onClick={() => {

                      copyText(i.site);
                    }} ></img></span></td>
                    <td className='text-center p-2 text-[16px] border-r-2 border-b-2 border-gray-700'><span className='flex justify-between items-center '>{i.firstName}<img src="copy.png" onClick={() => {

                      copyText(i.site);
                    }} className='w-8 cursor-pointer hover:bg-gray-600 hover:rounded-full ' ></img></span></td>
                    <td className='text-center p-2 text-[16px] border-r-2 border-b-2 border-gray-700'><span className='flex justify-between items-center'>{i.lastName}<img src="copy.png" onClick={() => {

                      copyText(i.site);
                    }} className='w-8 cursor-pointer hover:bg-gray-600 hover:rounded-full ' ></img></span></td>
                    <td className='text-center p-2 text-[16px] border-r-2 border-b-2 border-gray-700'><span className='flex justify-between items-center'>{i.password}<img onClick={() => {

                      copyText(i.site);
                    }} src="copy.png" className='w-8 cursor-pointer hover:bg-gray-600 hover:rounded-full ' ></img></span></td>
                    <td className='text-center p-2  text-[16px] border-b-2 border-gray-700'><span className='flex justify-center items-center gap-4'><span className="delete cursor-pointer w-fit hover:bg-gray-400 hover:rounded-full  " onClick={() => {
                      deletor(i.id)
                    }}>



                      <lord-icon
                        src="https://cdn.lordicon.com/jzinekkv.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#4030e8,secondary:#2516c7"
                        style={{"width": "38px", "height": "25px","paddingTop":"3px" }}>
                      </lord-icon>
                    </span>
                      <span className="edit cursor-pointer  hover:bg-gray-400 hover:rounded-full " onClick={() => {
                        editor(i.id)
                      }}>
                        <lord-icon
                          src="https://cdn.lordicon.com/exymduqj.json"
                          trigger="hover"
                          stroke="bold"
                          colors="primary:#4030e8,secondary:#2516c7"
                          style={{ "width": "38px", "height": "25px","paddingTop":"3px" }}>
                        </lord-icon></span></span></td>
                  </tr>
                )
              })}

            </tbody>
          </table>

        </div></>
        :<p>No passwords to show</p>
        }
        

      </div>




    </div>

  )
}

export default Manager
