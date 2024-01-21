import { inputs } from './../constant';
import InputFieldView from './InputFieldView';
import LogoView from './LogoView';

const LoginPageView = ({ formik }) => {
  return (
    <div className='login-page '>
      <div className='container d-grid gap-3 justify-content-center align-items -center'>
        <h2 className='d-flex gap-5 justify-content-center align-items -center'>


          
            <LogoView />
     

          {/* <img height={60} src="/c-logo.png" /> */}
          <span>Coinmania</span>
        </h2>


        <form

        onSubmit={formik.handleSubmit}

        >

          {inputs.map((data) => (
            <InputFieldView formik={formik} data={data} />
          ))}
          <button type='submit'>Kaydol</button>
        </form>




      </div>


    </div>
  )
}

export default LoginPageView;
