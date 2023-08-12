import React from 'react';
import { useState } from 'react';

const MainForm = () => {

const [name,setName] = useState('')
const [password,setPassword] = useState('')

    return (
        <div className='form_wrap'>

          <form className='form_wrap_inner'>
                <div className='name_form_piece'>
                     <label htmlFor="firstName" className='input_label'> Username:
                     </label>
                        <input className='input_name'
                            name="firstName"
                            id="firstName"
                            type="text"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            required
                        />
                        
                </div> 
                <div className='name_form_piece'>
                     <label htmlFor="firstName" className='input_label'> Password:
                     </label>
                        <input className='input_password'
                            name="password"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                        />
                        
                       
                </div>

                <div className='submit_login_container'>
                <button className='btn login' type='submit'>Login</button>
                <button className='btn register'>Register</button>
                </div>                 
            </form>

            
          
      
        </div>
    );
}

export default MainForm;
