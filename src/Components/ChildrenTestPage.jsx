import React, { useState, useEffect } from 'react';
import BarChart from './BarChart';

const ChildrenTestPage = () => {
  const questions = [
    "1. Feels sad, unhappy", "2. Feels hopeless", "3. Is down on self", "4. Worries a lot", "5. Seems to be having less fun",
    "6. Fidgety, unable to sit still", "7. Daydreams too much", "8. Distracted easily", "9. Has trouble concentrating",
    "10. Acts as if driven by a motor", "11. Fights with other children", "12. Does not listen to rules",
    "13. Does not understand other people’s feelings", "14. Teases others", "15. Blames others for his/her troubles",
    "16. Refuses to share", "17. Takes things that do not belong to him/her"
  ];

  const [questionnaire, setQuestionnaire] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [internalisingScore, setInternalisingScore] = useState(0);
  const [attentionScore, setAttentionScore] = useState(0);
  const [externalisingScore, setExternalisingScore] = useState(0);
  const [riskMessage, setRiskMessage] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = parseInt(value);
    setQuestionnaire(prevState => ({ ...prevState, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate total score and subscale scores
    let total = 0;
    let internalising = 0;
    let attention = 0;
    let externalising = 0;

    for (let i = 1; i <= questions.length; i++) {
      total += questionnaire[`item${i}`] || 0;
      if (i <= 5) {
        internalising += questionnaire[`item${i}`] || 0;
      } else if (i <= 10) {
        attention += questionnaire[`item${i}`] || 0;
      } else {
        externalising += questionnaire[`item${i}`] || 0;
      }
    }

    setTotalScore(total);
    setInternalisingScore(internalising);
    setAttentionScore(attention);
    setExternalisingScore(externalising);

    // Determine risk message
    let message = "";
    if (total > 15) {
      message = "Your child may have mental health concerns. Further evaluation is recommended.";
    } else {
      message = "Your child's total score is within normal range.";
    }

    if (attention > 7) {
      message += " Attention problems are noted.";
    }
    if (externalising > 7) {
      message += " Externalizing problems are noted.";
    }
    if (internalising > 5) {
      message += " Internalizing problems are noted.";
    }

    setRiskMessage(message);
    setShowResult(true);
  };

  useEffect(() => {
    if (showResult) {
      // Simulate typing effect for the result message
      const messageLength = riskMessage.length;
      const typingInterval = setInterval(() => {
        setTypingIndex(prevIndex => prevIndex + 1);
      }, 50);

      // Clear typing effect after the message is fully typed
      setTimeout(() => {
        clearInterval(typingInterval);
      }, 50 * messageLength);
    }
  }, [showResult, riskMessage]);

  return (
    <div className="container mx-auto px-4 py-8 text-black overflow-auto">
      <h1 className="text-4xl font-semibold text-center mb-8 text-cyan-400 font-mono">Children's Symptom Checklist (PSC-17)</h1>
      <form onSubmit={handleSubmit}>
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-white">Questionnaire</h2>
          <p className="mb-4 text-white text-2xl">For each question, please select "Never," "Sometimes," or "Often."</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {questions.map((question, index) => (
              <div key={index} className="flex flex-col rounded-lg p-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white">
                <label className="block mb-2 text-2xl text-white">{question}</label>
                <div className="flex justify-between">
                  <button 
                    type="button" 
                    name={`item${index + 1}`} 
                    value="2" 
                    onClick={handleChange} 
                    className={`w-1/4 py-1 px-2 border rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${questionnaire[`item${index + 1}`] === 2 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                  >
                    Often
                  </button>
                  <button 
                    type="button" 
                    name={`item${index + 1}`} 
                    value="1" 
                    onClick={handleChange} 
                    className={`w-1/3 py-1 border rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${questionnaire[`item${index + 1}`] === 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                  >
                    Sometimes
                  </button>
                  <button 
                    type="button" 
                    name={`item${index + 1}`} 
                    value="0" 
                    onClick={handleChange} 
                    className={`w-1/3 py-1 border rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${questionnaire[`item${index + 1}`] === 0 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                  >
                    Never
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 sm:w-auto">Calculate</button>
      </form>
      {showResult && (
        <div className="mt-8 p-4  rounded-lg text-black bg-gradient-to-r from-blue-200 to-cyan-200 flex flex-col items-center justify-center w-[50vw] mx-auto">
          <h2 className="text-3xl bg-gradient-to-r from-violet-700 to-orange-700 bg-clip-text text-transparent font-semibold mb-4 font-serif ">Result</h2>
          <p className="font-bold font-serif">Total Score: {totalScore}</p>
          <p className="font-bold font-serif">Internalising Score: {internalisingScore}</p>
          <p className="font-bold font-serif">Attention Score: {attentionScore}</p>
          <p className="font-bold font-serif">Externalising Score: {externalisingScore}</p>
          <p className="font-bold font-mono text-1xl">{riskMessage.slice(0, typingIndex)}</p>
        </div>
      )}
      <BarChart questionnaire={questionnaire} />
      
    </div>
  );
}

export default ChildrenTestPage;
