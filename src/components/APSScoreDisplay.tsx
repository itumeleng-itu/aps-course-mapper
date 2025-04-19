
import React from 'react';

interface APSScoreDisplayProps {
  score: number;
}

const APSScoreDisplay = ({ score }: APSScoreDisplayProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800">Your APS Score</h2>
      <div className="text-4xl font-bold text-blue-600">{score}</div>
      <p className="text-gray-500 text-sm mt-2">Note: Life Orientation is not included in the APS total</p>
      <div className="mt-4 bg-blue-50 rounded p-3 text-sm text-blue-800">
        <p className="font-medium">How APS is calculated:</p>
        <p>Each subject is awarded points based on percentage achieved: 80-100% (7 points), 70-79% (6 points), 60-69% (5 points), etc. The best six subjects (excluding Life Orientation) are used for the total APS.</p>
      </div>
    </div>
  );
};

export default APSScoreDisplay;
