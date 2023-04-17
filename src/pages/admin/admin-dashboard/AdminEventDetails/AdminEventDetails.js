import React from "react";
import { useParams } from "react-router-dom";
import './AdminEventDetails.css';

const AdminEventDetails = ({ BASEURL }) => {
  const params = useParams();

  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    const token = localStorage.getItem("INFOTECT_TOKEN");

    fetch(
      BASEURL + "/all_students_details_by_event_id/?event_id=" + params.id,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
          Authorization: `Token ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
            console.log(result);
          setStudents(result)
        },
        (error) => {
          console.log(error);
          // notify("Invalid credentials.");
        }
      );

    console.log(params.id);
  }, []);

  return (
    <div className="admin-details">
      <h1>Data of registered students (Event ID: {params.id})</h1>

      <div className="chips">
        {students.length === 0 && <p className="white">No students registered for this event.</p>}
        {students.map((data, i) => (
            <div key={i} className="chip">
                <p>Student University Roll No.: {data.student.university_roll_no}</p>
                <p>Student Name: {data.student.first_name} {data.student.last_name}</p>
                <p>Student Email: {data.student.email}</p>
                <p>Student Graduation Year: {data.student.graduation_year}</p>
                <p>Student Mobile Number: {data.student.mobile}</p>
            </div>
        ))}
      </div>
    </div>
  )
};

export default AdminEventDetails;
