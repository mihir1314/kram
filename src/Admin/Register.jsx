import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [values,setValues] = useState({
        name:'',
        email:'',
        password:'',
    })
    

    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      
      axios.post('http://localhost:8081/admin/register', values)
        .then(res => {
          if(res.data.Status === "Success!"){
            navigate('/admin/login');
          } else {
            console.log(res.data.Status);
            alert("Error occurred1");
          }
        })
        .catch(err => {
          console.error("Error occurred:", err);
          alert("Error occurred2"); // Display a generic error message
        });
    }
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100" style={{color: 'black'}} >
      <div className="bg-white p-3 rounded w-60">
        <h2>Sign-up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              name
            </label>
            <div className="col-sm-10">
              <input onChange={e => setValues({...values,name: e.target.value})} name='name'  type="text" className="form-control w-120" id="name" />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              Email
            </label>
            <div className="col-sm-10">
              <input onChange={e => setValues({...values,email: e.target.value})} name='email' type="email" className="form-control w-120" id="email" />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              Password
            </label>
            <div className="col-sm-10">
              <input
              onChange={e => setValues({...values,password: e.target.value})}
                type="password"
                className="form-control w-120"
                id="password"
                name='password'
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" style={{width: '100%'}} >
            Sign in
          </button>
          <p>you are agried to all terms and condition</p>
          <Link to={"/admin/login"} className="btn btn-default border w-100 bg-dark rounded-0 text-decoration-none">Login?</Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
