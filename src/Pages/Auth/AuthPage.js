import React from 'react'
import SignupForm from './AuthForm'

const AuthPage = () => {

  return (
    <section className="container h-100 py-4">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card">
            <div className="p-5">

              <SignupForm/>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthPage
