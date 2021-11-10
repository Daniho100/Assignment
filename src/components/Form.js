import React, { useState } from 'react'
import Card from './Card'
import classes from './Form.module.css'


const Form = () => {

    
    
            const [submitting, setSubmitting] = useState(false);
            
            const [data, setData] = useState({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
            })

       const [submittedData, setSubmittedData ] = useState(null);


      const onChangeHandler =(event)=> {
          const {value, name} = event.target
          
          setData({
             ...data,
             [name]: value
          })

        }

        // console.log(data)

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true)
          
        setTimeout(() => {
         setSubmittedData(data)
            setSubmitting(false);
        }, 3000)
    }
    return (

        
      <div className="container" className={classes.header}>
          <div className="row">
              <div className="px-4 py-5 my-5 text-center">
                  <h1 className="display-5 fw-bold" className={classes.title}>Event Registration</h1>
                  <div className="col-lg-6 mx-auto">
                      <p className="lead mb-4">
                          Quickly design and customize responsive mobile-first sites with
                          Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables
                          and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript
                          plugins.
                      </p>

                      {submitting &&
                      <p className="lead mb-4">
                          <span className="spinner-border" role="status">
                              <span className="visually-hidden">Loading...</span>
                          </span>
                          <span className="mx-1">Submitting form...</span>
                      </p>
                      }

                  </div>
              </div>
        </div>
       
        

          <div className="col-lg-6" className={classes.form}>
              
                  <form onSubmit={handleSubmit} className="row g-3 shadow-sm p-3 mb-5 bg-body rounded">
                      <div className="col-md-6">
                          <label htmlFor='firstname' className="form-label">Firstname</label>
                          <input type="text" className="form-control" id="firstname" placeholder='First name' name="firstName" value={data.firstName} onChange={onChangeHandler}/>
                      </div>
                      <div className="col-md-6">
                          <label htmlFor='lastname'className="form-label" >Lastname</label>
                          <input type="text" className="form-control" id="lastname" placeholder='Last name' name="lastName" value={data.lastName} onChange={onChangeHandler}/>
                      </div>
                      <div className="col-md-6">
                          <label htmlFor='email' className="form-label">Email</label>
                          <input type="email" className="form-control" id="email" placeholder='Email' name="email" value={data.email} onChange={onChangeHandler}/>
                      </div>
                      <div className="col-md-6">
                          <label htmlFor='phone' className="form-label">Phone</label>
                          <input type="tel" className="form-control" id="inputAddress" placeholder='Phone' name="phone" value={data.phone} onChange={onChangeHandler}/>
                      </div>

                      <div className="col-12">
                          <button type="submit" className="btn btn-primary" >Submit</button>
                      </div>
                  </form>
                  </div>
                
                  
             {submittedData !== null && <Card data={submittedData}/> }
             
             
             </div>
         
    )
}

export default Form