import React from 'react';
import "./Stylesheets/mystyle.css";

function percentToDecimal(decimal) {
    return decimal.toFixed(2) + "%";
}

function calcScore(total, goal) {
    return percentToDecimal(total / goal);
}

export default function CalculateScore({ Name, School, total, goal }) {
    return (
        <div className="formatstyle">
            <h1>Student Details:</h1>
            <div className="Name">Name: {Name}</div>
            <div className="School">School: {School}</div>
            <div className="Total">Total Marks: {total}</div>
            <div className="Score">Score: {calcScore(total, goal)}</div>
        </div>
    );
}
