import React from "react";
import "./Section3faci.css";

const facilities = [
  {
    icon: "🏫",
    title: "Smart Classrooms",
    desc: "Well-ventilated and digitally equipped classrooms with smart boards to make learning interactive and engaging.",
  },
  {
    icon: "📚",
    title: "Well-Stocked Library",
    desc: "A rich collection of academic books, storybooks, newspapers, and digital resources to encourage reading habits.",
  },
  {
    icon: "🔬",
    title: "Science & Computer Labs",
    desc: "Fully equipped laboratories for Physics, Chemistry, Biology, and Computer to support practical learning.",
  },
  {
    icon: "🏀",
    title: "Sports & Playground",
    desc: "Large playground and sports facilities for cricket, football, badminton, and indoor games to promote fitness.",
  },
  {
    icon: "🎨",
    title: "Activity & Art Rooms",
    desc: "Dedicated spaces for music, dance, art, and craft to develop creativity and confidence.",
  },
  {
    icon: "🧘",
    title: "Yoga & Meditation Hall",
    desc: "Peaceful environment for yoga and meditation to support mental and physical well-being.",
  },
  {
    icon: "🚌",
    title: "Safe Transport Facility",
    desc: "GPS-enabled school buses with trained drivers and attendants ensuring safe transportation.",
  },
  {
    icon: "🩺",
    title: "Medical & First Aid Room",
    desc: "On-campus medical room with first-aid and regular health check-ups for student safety.",
  },
  {
    icon: "💧",
    title: "Clean Drinking Water & Sanitation",
    desc: "RO water facility and clean, hygienic washrooms for students and staff.",
  },
];

const Section3faci = () => {
  return (
    <div className="Section3faci">
      <h2>🏫 Our School Facilities</h2>

      <div className="faci-grid">
        {facilities.map((item, index) => (
          <div className="faci-card" key={index}>
            <span className="faci-icon">{item.icon}</span>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3faci;
