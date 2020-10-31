import React from 'react';
import { NavLink } from 'react-router-dom';

function Error() {
    return (
        <div className="container">
            <div className="alert alert-danger mt-2" style={{height:"100vh", color:"black"}}>
               <h1>Page Not available.....</h1>
               <h6>Check Your Url and try again</h6>
               <h6>ThankYou !!!!</h6>
            <button className="btn btn-primary">
                <NavLink style={{color:"white"}} to="/">Go Back</NavLink>
            </button>
            </div>
        </div>
    )
}

export default Error;
