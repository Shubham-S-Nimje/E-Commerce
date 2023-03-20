import React, { useState } from 'react'

const ContactForm = (props) => {
    const [Contactname,SetContactname] = useState('')
    const [Contactemail,SetContactemail] = useState('')
    const [Contactnumber,SetContactnumber] = useState('')
    const [Contactmsg,SetContactmsg] = useState('')

    const ContactnameHandler = (event) =>{
        SetContactname(event.target.value)
    }

    const ContactemailHandler = (event) =>{
        SetContactemail(event.target.value)
    }

    const ContactnumberHandler = (event) =>{
        SetContactnumber(event.target.value)
    }
    
    const ContactmsgHandler = (event) =>{
        SetContactmsg(event.target.value)
    }

    const OnSubmitHandler = (event) =>{
        event.preventDefault();
        // console.log(Contactname)
        // console.log(Contactemail)
        // console.log(Contactnumber)
        // console.log(Contactmsg)

        const usercontactdata = {
            Contactname: Contactname,
            Contactemail: Contactemail,
            Contactnumber: Contactnumber,
            Contactmsg: Contactmsg
        }
        props.contactus(usercontactdata);

        SetContactname('')
        SetContactemail('')
        SetContactnumber('')
        SetContactmsg('')

    }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={OnSubmitHandler}>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="name">Name :</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter name"
                  value={Contactname}
                  onChange={ContactnameHandler}
                  required
                />
                <label htmlFor="email">Email Address :</label>
                <span className="input-group-addon"></span>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Enter email"
                  value={Contactemail}
                  onChange={ContactemailHandler}
                  required
                />
                <label htmlFor="number">Contact Number :</label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="Enter number"
                  value={Contactnumber}
                  onChange={ContactnumberHandler}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="name">Message</label>
                <textarea
                  className="form-control"
                  rows="9"
                  cols="25"
                  required
                  value={Contactmsg}
                  onChange={ContactmsgHandler}
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="col-md-12">
                <button
                  type="submit"
                  className="btn btn-warning"
                  id="btnContactUs"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-4 ">
          <form>
            <h3>Our office</h3>
            <address>
              <strong>Twitter, Inc.</strong>
              <br />
              795 Folsom Ave, Suite 600
              <br />
              San Francisco, CA 94107
              <br />
              <abbr title="Phone">P:</abbr>
              (123) 456-7890
            </address>
            <address>
              <strong>Full Name</strong>
              <br />
              <a href="mailto:#">first.last@example.com</a>
            </address>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm
