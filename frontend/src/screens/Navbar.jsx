import React, { useEffect, useState } from 'react';
import '../css/Navbar.css';
import { Eye, EyeOff, Menu, XCircle } from 'lucide-react';
const Navbar = ({isMobile}) => {
    console.log(isMobile);
    const[isOpen,setIsOpen]=useState(false)
    const [isRegisterOpen,setResgisterOpen]=useState(false)
    const [isLoginOpen,setLoginOpen]=useState(false)
    const[eyeOpen,isEyeOpen]=useState(false);


    useEffect(()=>{
    setIsOpen(false)
    }
    ,[isMobile])

    
  return (
    <div className='main'>
    {isMobile?
        (
            <div id='navbar'>
                 {/*Hamburger screen*/}
                <h1 id='logo'>SwipTory</h1>
                <div onClick={()=>setIsOpen(!isOpen)} >
                <Menu  />
                 </div>

            </div>
        )
        :
        (
            <div id='navbar'>
                    <h1 id='logo'>SwipTory</h1>
                <div>
                    <button onClick={()=>{setResgisterOpen(!isRegisterOpen)}} id='login'>
                       Register Now
                    </button>
                    <button onClick={()=>{setLoginOpen(!isLoginOpen)}} id='signin'>
                        Sign In
                    </button>
                </div>       
            </div>
        
        )}
    {/*Mobile login & register */}
   {isOpen&&(
    <div id='nav-modal'>
        <div id='modal'>
         <button onClick={()=>{setLoginOpen(!isRegisterOpen)}} id='login'>
            Login
        </button>
        <button onClick={()=>{setResgisterOpen(!isRegisterOpen)}} id='login'>
            Register
        </button>
        </div>


    </div>
   )}

{/*Register Modal */}
   {isRegisterOpen&&(
    <div className='modal-background'>
    <div className='main-modal'>

      <div>
          <h1 className='heading'>Register to SwipTory</h1>
      </div>
      <div className='user-pass'>
          <div className='input-field'> 
          <label>Username</label>
          <input placeholder='Enter username' type="text" />
          </div>
          <div className='input-field'>
          <label>Password</label>
          <input placeholder='Enter password' type={eyeOpen?"text":"password"} />
          <div onClick={()=>isEyeOpen(!eyeOpen)} className='eye' >
          {eyeOpen?
          <Eye color="#000000" height={18}  />
          :
          <EyeOff color="#000000" height={18} />
            }
          </div>
          </div>
          
      </div> 
      <div>
        <button id='signin' style={{color:'black',cursor:'pointer'}} >
            Register
        </button>
      </div>
      <div
      onClick={()=>setResgisterOpen(false)}
      className='cross-btn'>
      <XCircle color="#FF0000" />
      </div >



    </div>
    </div>
   )}

{/*Login Modal */}
{isLoginOpen&&(
    <div className='modal-background'>
    <div className='main-modal'>

      <div>
          <h1 className='heading'>Login to SwipTory</h1>
      </div>
      <div className='user-pass'>
          <div className='input-field'> 
          <label>Username</label>
          <input placeholder='Enter username' type="text" />
          </div>
          <div className='input-field'>
          <label>Password</label>
          <input placeholder='Enter password' type={eyeOpen?"text":"password"} />
          <div onClick={()=>isEyeOpen(!eyeOpen)} className='eye' >
          {eyeOpen?
          <Eye color="#000000" height={18}  />
          :
          <EyeOff color="#000000" height={18} />
            }
          </div>
          </div>
          
      </div> 
      <div>
        <button id='signin' style={{color:'black',cursor:'pointer'}} >
            Login
        </button>
      </div>
      <div
      onClick={()=>setLoginOpen(false)}
      className='cross-btn'>
      <XCircle color="#FF0000" />
      </div >



    </div>
    </div>
   )}

    
   </div>
  )
}


export default Navbar