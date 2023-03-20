import React, { useCallback, useState } from 'react'
import ContactCorouselData from './ContactCorouselData'
import ContactForm from './ContactForm'

const Contactus = () => {
  const [error, Seterror] = useState(null)


    const contactusHandler = useCallback(async (user) => {
      try {
      const response = await fetch('https://react-ecommerce-5db66-default-rtdb.firebaseio.com/user.json', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-type': 'application/json'
        }
      });
      const data = await response.json();
      console.log('Data Added =',data);
      }
      catch (error) {
        Seterror(error.message);
      }
    },[])
  return (
    <div>
      <ContactCorouselData/>
      <ContactForm contactus={contactusHandler}/>
      {error && (
          <h2 className="p-2 mt-2 mb-2 text-center">
            {error}
          </h2>
        )}
    </div>
  )
}

export default Contactus
