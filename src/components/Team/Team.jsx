import React from "react";
import "./Team.css";

const Team = () => {
  return (
    <div className="team">
      <div className="team-title-container">
        <h1 className="team-title">OUR TEAM</h1>
      </div>
      <div className="team-content">
        <div className="team-card-container">
          {/* TARUN PARTHIBAN - CEO */}
          <div className="team-card c1">
            <img
              src="assets/team-1.png"
              alt="tarun"
              className="team-card-img"
            />
            <h1 className="team-card-title">Tarun Parthiban - CEO</h1>
          </div>
          {/* KISHORE P - CTO */}
          <div className="team-card c2">
            <img
              src="assets/team-2.png"
              alt="kishore"
              className="team-card-img"
            />
            <h1 className="team-card-title">Kishore P - CTO</h1>
          </div>
          {/* LOGESH KAAVYAN - CSO */}
          <div className="team-card c3">
            <img
              src="assets/team-3.png"
              alt="logesh"
              className="team-card-img"
            />
            <h1 className="team-card-title">Logesh Kaavyan - CSO</h1>
          </div>
          {/* BENETA JOHNSON - COO */}
          <div className="team-card c4">
            <img
              src="assets/team-4.png"
              alt="beneta"
              className="team-card-img"
            />
            <h1 className="team-card-title">Beneta Johnson - COO</h1>
          </div>
          {/* SHIVA SANJAY - CMO */}
          <div className="team-card c5">
            <img
              src="assets/team-5.png"
              alt="sanjay"
              className="team-card-img"
            />
            <h1 className="team-card-title">Shiva Sanjay - CMO</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
