import React, {useEffect, useState} from "react";
import "./Colleges.css";

function Colleges({BASEURL}) {
  const [colleges, setColleges] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(BASEURL+"/colleges/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setColleges(result);
          console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const email = (e, email) =>{
    window.location.href = "mailto:"+email+"?subject = Need help regarding event";
    e.preventDefault();
  }

  return (
    <div className="colleges">
      <h1>Colleges</h1>

      <div className="colleges__grid">
        {colleges.map((college, i) => (
          <div key={i} className="colleges__grid__item">
            <img src={college.img} />
            {/* <p>{college.name}</p> */}
            <p>
              <span>{college.name}</span><br />
              <span>{college.address}</span><br />
              <span className="email" onClick={(e)=>email(e, college.email)}>{college.email}</span>
            </p>
          
          </div>
        ))}
      </div>
    </div>
  );
}

export default Colleges;
