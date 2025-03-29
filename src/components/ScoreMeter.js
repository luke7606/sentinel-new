import React from "react";

const ScoreMeter = ({ score }) => {
  let color = "green";
  if (score < 50) color = "red";
  else if (score < 75) color = "yellow";

  return (
    <div className="score-visual">
      <h3>Score: {score}%</h3>
      <div className={`score-bar ${color}`} style={{ width: score + "%" }}></div>
    </div>
  );
};

export default ScoreMeter;