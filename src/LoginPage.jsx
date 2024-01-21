import React from 'react'
import Logo from './controllers/Logo'
const LoginPage = () => {
  return (
    <div className='login-page '

    >
      <div
        className='container py-5  '
        style={{ width: '400px' }}

      >

        <div className='d-flex justify-content-between align-items-center mx-5 my-4'>

        <Logo />
          <h2 className='d-flex gap-3 justify-content-center'>

           



            {/* <img height={60} src="/c-logo.png" alt="" /> */}
            <span>Coinmania</span>
          </h2>
        </div>

        <form >

          <div>
            <label>Emailiniz</label>
            <input className='form-control mt-2' type="text" />
            {/* {<span>Email formatınz yanlıs</span>} */}
          </div>

          <div>
            <label>Emailiniz</label>
            <input className='form-control mt-2' type="text" />
            {/* {<span>Email formatınz yanlıs</span>} */}
          </div>

          <div>
            <label>Emailiniz</label>
            <input className='form-control mt-2' type="text" />
            {/* {<span>Email formatınz yanlıs</span>} */}
          </div>

          <div>
            <label>Emailiniz</label>
            <input className='form-control mt-2' type="text" />
            {/* {<span>Email formatınz yanlıs</span>} */}
          </div>





        </form>


      </div>




    </div>
  )
}

export default LoginPage