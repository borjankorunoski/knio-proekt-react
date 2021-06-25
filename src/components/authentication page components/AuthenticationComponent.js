import React from "react";
import './LoginStyle.css'
const AuthenticationComponent = () => {
  return(
    <div>
      <div id="left">
        <form>
          <h1>Најави се</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Електронска пошта</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Лозинка</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>

          <button type="submit" href="#" className="btn btn-dark" id="loginbutton">Испрати</button>
        </form>
      </div>
      <div id="right">
        <form>
          <h1>Регистрирај се</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputFullName" className="form-label">Име и презиме</label>
            <input type="text" name="fullname" required="required" pattern="^(\w\w+)\s(\w+)$" className="form-control"
                   id="exampleInputFullName"/>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">Електронска пошта</label>
            <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"/>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword" className="form-label">Лозинка</label>
            <input type="password" className="form-control" id="exampleInputPassword"/>
          </div>

          <button onClick="validation()" type="submit" className="btn btn-dark" id="signupbutton">Регистрираја</button>

        </form>
      </div>
    </div>
  );
}
export default AuthenticationComponent;