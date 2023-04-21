import React from "react";
import "./AdminAddEvent.css";

const AdminAddEvent = ({ BASEURL, notify }) => {
  const [eventName, setEventName] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [registrationLastDate, setRegistrationLastDate] =
    React.useState(undefined);
  const [startDate, setStartDate] = React.useState(undefined);
  const [endDate, setEndDate] = React.useState(undefined);
  const [img, setImg] = React.useState("");
  const [eligiblity, setEligiblity] = React.useState("");
  const [interOrIntra, setInterOrIntra] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      event_name: eventName,
      company_name: companyName,
      registration_last_date: registrationLastDate,
      start_date: startDate,
      end_date: endDate,
      img: img,
      eligiblity: eligiblity,
      inter_or_intra: interOrIntra,
    };

    console.log(payload);

    const token = localStorage.getItem("INFOTECT_TOKEN");

    fetch(BASEURL + "/create_event_by_admin/", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
          notify("Error while submitting form.");
        }
      );
  };
  return (
    <>
      <div className="wrapper" id="wrapper">
        <div id="subscribeBox">
          <h2>
            <span className="thin">ADD</span> EVENT/JOB
          </h2>
          <p>Please fill out the following information.</p>

          <div className="subscribeForm" name="Subscription Form">
            <label className="label">Event Name</label>
            <input
              id="fname"
              type="text"
              placeholder="Event Name*"
              name="Event Name"
              required=""
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
            <label className="label">Company Name</label>

            <input
              id="lname"
              type="text"
              placeholder="Company Name*"
              name="Company Name"
              required=""
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />

            <label className="label">Registration Last Date</label>

            <input
              id="lname"
              type="date"
              placeholder="Registration Last Date*"
              name="Registration Last Date"
              required=""
              value={registrationLastDate}
              onChange={(e) => setRegistrationLastDate(e.target.value)}
            />
            <label className="label">Event Start Date</label>

            <input
              id="lname"
              type="date"
              placeholder="Event Start Date*"
              name="Event Start Date"
              required=""
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <label className="label">Event End Date</label>

            <input
              id="lname"
              type="date"
              placeholder="Event End Date*"
              name="Event Last Date"
              required=""
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />

            <label className="label">Add Event Image URL</label>

            <input
              id="lname"
              type="text"
              placeholder="Add Event Image URL*"
              name="Add Event Image"
              required=""
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <label className="label">Eligibility Criteria (Optional)</label>

            <input
              id="lname"
              type="text"
              placeholder="Eligibility Criteria (Optional)*"
              name="Eligibility Criteria (Optional)"
              required=""
              value={eligiblity}
              onChange={(e) => setEligiblity(e.target.value)}
            />
            <label className="label">Event Type (Off-campus/On-campus)</label>

            <input
              id="lname"
              type="text"
              placeholder="Type (Off-campus/On-campus)*"
              name="Type (Off-campus/On-campus)"
              required=""
              value={interOrIntra}
              onChange={(e) => setInterOrIntra(e.target.value)}
            />
            <div className="btn-cont">
              <button onClick={handleSubmit} className="btn">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAddEvent;
