import React, { useState } from 'react'

const Contact=()=>{
    const [data,setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        text:''
    });
    const InputEvent=(event)=>{
        const {value,name} = event.target;
        setData((preval)=>{
            return{
                ...preval,
                [name]:value,
            }
        })
    }
    const formSubmit=(e)=>{
      e.preventDefault();
      alert(`Welcome ${data.fullname}`);  
    }
    return(
        <>
         <div className="my-5">
             <h1 className="text-center">Contact Us</h1>
         </div>
         <div className="container contact_div">
             <div className="row">
                 <div className="col-md-6 col-10 mx-auto">
                     <form onSubmit={formSubmit}>
                         <div className="mb-3">
                             <label className="form-label">FullName</label>
                             <input type='text'
                             name="fullname"
                             value={data.fullname}
                             onChange={InputEvent} 
                             placeholder="Enter your name" className="form-control" />
                         </div>
                         <div className="mb-3">
                             <label className="form-label">Phone</label>
                             <input type='text'
                             name="phone"
                             value={data.phone}
                             onChange={InputEvent} 
                             placeholder="Mobile Number" className="form-control" />
                         </div>
                         <div className="mb-3">
                             <label className="form-label">Email</label>
                             <input type='text'
                             name="email"
                             value={data.email}
                             onChange={InputEvent} 
                             placeholder="example@gmail.com" className="form-control" />
                         </div>
                         <div className="mb-3">
                             <label className="form-label">Message</label>
                             <textarea rows="3" 
                             className="form-control"
                              placeholder="Your concerns...."
                              value={data.text}
                              name="text"
                              onChange={InputEvent}></textarea>
                         </div>
                         <div className="col-12">
                             <button className="btn btn-outline-success" type="submit">
                                 Submit form
                             </button>
                         </div>
                     </form>
                 </div>
             </div>
         </div>
        </>
    )
}
export default Contact;