import React, { useState, useEffect } from "react";

// ✅ List of students
const studentNames = [
  "Amit Kumar","Rohit Sharma","Neha Singh","Priya Verma","Rahul Gupta",
  "Anjali Patel","Vikas Yadav","Pooja Kumari","Sandeep Roy","Kiran Das",
  "Arjun Mehta","Simran Kaur","Manish Pandey","Nisha Rani","Deepak Mishra",
  "Kajal Singh","Ravi Kumar","Sneha Paul","Abhishek Kumar","Ritu Sharma",
  "Mohit Verma","Sunita Devi","Aakash Singh","Nitu Kumari","Saurabh Jain",
  "Komal Gupta","Pankaj Yadav","Shreya Singh","Naveen Kumar","Preeti Mishra",
  "Aman Raj",
];

const students = studentNames.map((name, index) => ({
  roll: index + 1,
  name,
}));

const Atendencesheet = () => {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [attendance, setAttendance] = useState({});
  const [message, setMessage] = useState("");

  // ✅ Fetch attendance for the selected date
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/attendance/by-date?date=${date}&className=BCA`
        );

        if (!res.ok) throw new Error("Failed to fetch attendance");

        const data = await res.json();

        if (data.record?.attendance) {
          // Convert array to object for easy select handling
          setAttendance(Object.fromEntries(data.record.attendance));
        } else {
          setAttendance({});
        }
      } catch (err) {
        console.log(err);
        setAttendance({});
      }
    };

    fetchAttendance();
  }, [date]);

  // ✅ Handle dropdown change
  const handleChange = (roll, value) => {
    setAttendance((prev) => ({ ...prev, [roll]: value }));
  };

  // ✅ Save attendance
  const handleSubmit = async () => {
    try {
      const res = await fetch(`${API_URL}/api/attendance/mark`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date,
          className: "BCA",
          attendance,
        }),
      });

      if (!res.ok) throw new Error("Failed to save attendance");

      const data = await res.json();

      if (data.success) setMessage("✅ Attendance Saved Successfully!");
      else setMessage("❌ Error saving attendance");
    } catch (err) {
      console.log(err);
      setMessage("❌ Server Error");
    }
  };

  return (
    <div style={{ overflowX: "auto", padding: "20px" }}>
      <h2>Daily Attendance</h2>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ marginBottom: "10px" }}
      />

      <table border="1" cellPadding="8" style={{ marginTop: "10px", borderCollapse: "collapse" }}>
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

      <button onClick={handleSubmit} style={{ marginTop: "10px", padding: "5px 15px" }}>
        Submit Attendance
      </button>

      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </div>
  );
};

export default Atendencesheet;
