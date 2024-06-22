import React from "react";
import "./TeamDark.css";

const TeamDark = () => {
  return (
    <div className="team-dark">
      <div className="team-dark-title-container">
        <h1 className="team-dark-title">OUR TEAM</h1>
      </div>
      <div className="team-dark-content">
        <div className="team-dark-card-container">
          {/* TARUN PARTHIBAN - CEO */}
          <div className="team-dark-card c1-dark">
            <img
              src="assets/team-1.png"
              alt="tarun"
              className="team-dark-card-img"
            />
            <h1 className="team-dark-card-title">Tarun Parthiban - CEO</h1>
          </div>
          {/* KISHORE P - CTO */}
          <div className="team-dark-card c2-dark">
            <img
              src="assets/team-2.png"
              alt="kishore"
              className="team-dark-card-img"
            />
            <h1 className="team-dark-card-title">Kishore P - CTO</h1>
          </div>
          {/* LOGESH KAAVYAN - CSO */}
          <div className="team-dark-card c3-dark">
            <img
              src="assets/team-3.png"
              alt="logesh"
              className="team-dark-card-img"
            />
            <h1 className="team-dark-card-title">Logesh Kaavyan - CSO</h1>
          </div>
          {/* BENETA JOHNSON - COO */}
          <div className="team-dark-card c4-dark">
            <img
              src="assets/team-4.png"
              alt="beneta"
              className="team-dark-card-img"
            />
            <h1 className="team-dark-card-title">Beneta Johnson - COO</h1>
          </div>
          {/* SHIVA SANJAY - CMO */}
          <div className="team-dark-card c5-dark">
            <img
              src="assets/team-5.png"
              alt="sanjay"
              className="team-dark-card-img"
            />
            <h1 className="team-dark-card-title">Shiva Sanjay - CMO</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDark;
