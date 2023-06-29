import React from 'react'
import './SignupStyles.css'

const Signup = () => {
    return (
        <div className='contact'>
            <div className="container">
                <div className="form-container">
                <form>
                        <h1><span>SignUp</span></h1>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder='Enter your email'/>
                        </div>
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder='Enter your name'/>
                        </div>
                       
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
