
import React from 'react';

const BarChart = ({ questionnaire }) => {
  const { item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17 } = questionnaire;

  const totalScore = Object.values(questionnaire).reduce((acc, val) => acc + val, 0);
  const internalisingScore = [item1, item2, item3, item4, item5].reduce((acc, val) => acc + val, 0);
  const attentionScore = [item6, item7, item8, item9, item10].reduce((acc, val) => acc + val, 0);
  const externalisingScore = [item11, item12, item13, item14, item15, item16, item17].reduce((acc, val) => acc + val, 0);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-white">Bar Chart</h2>
      <div className="flex items-end">
        <div className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
          Total: {totalScore}
        </div>
        <div className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">
          Internalising: {internalisingScore}
        </div>
        <div className="bg-red-500 text-white px-4 py-2 rounded-md mr-2">
          Attention: {attentionScore}
        </div>
        <div className="bg-yellow-500 text-white px-4 py-2 rounded-md">
          Externalising: {externalisingScore}
        </div>
      </div>
    </div>
  );
}

export default BarChart;
