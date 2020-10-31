import React, { useState, useEffect } from "react";

const Login = (props) => {
  const [userName, setuserName] = useState("");
  const [passWord, setpassWord] = useState("");

  // alert msg 
  const [alertmsg, setalertmsg] = useState(false);
  const [msginfo, setmsginfo] = useState("");

  // passwordHint 
  const [passwordHint, setpasswordHint] = useState(false);

  const authenticate = (e) => {
    e.preventDefault();
    let defaultuser = "admin",
      defaultpass = "adminzz";
    if (userName !== "" && passWord !== "") {
      if (userName === defaultuser && passWord === defaultpass) {
        setalertmsg(false);
        props.login();
      } else {
        setalertmsg(true);
        setmsginfo("Wrong Password");
      }
    } else {
      setalertmsg(true);
      setmsginfo("username and password cannot be empty")
    }
  }

  useEffect(() => {
    if (localStorage.getItem("loginStatus")) {
      props.login();
    }
  }, [props.login]);

  const hintbtn = () => {
    setpasswordHint(true);
    setInterval(() => {
      setpasswordHint(false);
    }, 5000);
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => hintbtn()} style={{ cursor: "pointer" }}>password hint</button>
      </div>
      {
        passwordHint && <div className="alert alert-success" style={{ width: "fit-content", margin: "auto" }}>
          default username: admin <br />
    default password: adminzz
                    </div>
      }


      <form className="form-signin login_form" onSubmit={(e) => authenticate(e)}>
        <h2 className="loginform_heading">ToDO Gram</h2>
        <input type="text" id="inputEmail" className="form-control mt-3" placeholder="username" onChange={(e) => setuserName(e.target.value)} value={userName} required autofocus />
        <input type="password" id="inputPassword" className="form-control mt-3" placeholder="Password" onChange={(e) => setpassWord(e.target.value)} value={passWord} required />

        <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Sign in</button>
        {alertmsg && <div className="alert alert-danger mt-3">{msginfo}</div>}
        <p className="mt-3 mb-1 text-muted">&copy; 2020-2022</p>

      </form>
    </>
  );
}

export default Login;