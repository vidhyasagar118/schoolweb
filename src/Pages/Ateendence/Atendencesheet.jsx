import React, { useState, useEffect } from "react";
import API from "../../api";// adjust path if needed
import "./Ateendence.css"
const studentNames = [
  "Amit Kumar","Rohit Sharma",
  
];

const students = studentNames.map((name, index) => ({
  roll: index + 1,
  name,
}));

const Atendencesheet = () => {
  const today = new Date().toISOString().split("T")[0];

  const [attendance, setAttendance] = useState({});
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [viewMode, setViewMode] = useState(false);
  const [history, setHistory] = useState([]);

  // ✅ Check today's attendance
  useEffect(() => {
    const checkTodayAttendance = async () => {
      try {
        const { data } = await API.get("/api/attendance/by-date", {
          params: { date: today, className: "BCA" },
        });

        if (data.record) {
          setIsSubmitted(true);
        }
      } catch (err) {
        console.log(err.response?.data || err.message);
      }
    };

    checkTodayAttendance();
  }, []);

  // ✅ Fetch all history
  const fetchHistory = async () => {
    try {
      const { data } = await API.get("/api/attendance/all", {
        params: { className: "BCA" },
      });

      setHistory(data.records || []);
      setViewMode(true);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  const handleChange = (roll, value) => {
    setAttendance((prev) => ({ ...prev, [roll]: value }));
  };

  const handleSubmit = async () => {
    try {
      const { data } = await API.post("/api/attendance/mark", {
        date: today,
        className: "BCA",
        attendance,
      });

      if (data.success) {
        setMessage("✅ Attendance Saved Successfully!");
        setIsSubmitted(true);
      } else {
        setMessage("❌ Error saving attendance");
      }
    } catch (err) {
      console.log(err.response?.data || err.message);
      setMessage("❌ Server Error");
    }
  };
if (viewMode) {
  return (
    <div className="attendance-container">
      <h2 className="attendance-title">📊 Attendance History</h2>

      <button className="btn btn-back" onClick={() => setViewMode(false)}>
        ⬅ Back
      </button>

      <div style={{ overflowX: "auto", marginTop: "15px" }}>
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Roll No</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {history.map((day, index) =>
              Object.entries(day.attendance).map(([roll, status]) => {
                const student = students.find((s) => s.roll == roll);

                return (
                  <tr key={index + roll}>
                    <td>{day.date}</td>
                    <td>{roll}</td>
                    <td>{student ? student.name : "Unknown"}</td>
                    <td>
                      <span
                        style={{
                          padding: "4px 10px",
                          borderRadius: "6px",
                          color: "white",
                          backgroundColor:
                            status === "P" ? "#2ecc71" : "#e74c3c",
                          fontWeight: "bold",
                        }}
                      >
                        {status === "P" ? "Present" : "Absent"}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
  
  
  return (
    <div style={{ overflowX: "auto", padding: "20px" }}>
      <h2>Today's Attendance</h2>

      <button onClick={fetchHistory} style={{ marginBottom: "10px" }}>
        📊 View All Attendance
      </button>

      {isSubmitted ? (
        <p>✅ Today's attendance already submitted</p>
      ) : (
        <>
          <table
            border="1"
            cellPadding="8"
            style={{ marginTop: "10px", borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th>Roll</th>
                <th>Name</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              {students.map((stu) => (
                <tr key={stu.roll}>
                  <td>{stu.roll}</td>
                  <td>{stu.name}</td>
                  <td>
                    <select
                      value={attendance[stu.roll] || ""}
                      onChange={(e) => handleChange(stu.roll, e.target.value)}
                    >
                      <option value="">-</option>
                      <option value="P">Present</option>
                      <option value="A">Absent</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={handleSubmit}
            style={{ marginTop: "10px", padding: "5px 15px" }}
          >
            Submit Attendance
          </button>
        </>
      )}

      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </div>
  );
};

export default Atendencesheet;