import React, { useState, useEffect } from 'react';
import BarChart from './BarChart';

const ParentTestPage = () => {
  const questions = [
    "1. Your child seems sad, unhappy, or depressed",
    "2. Your child is down on him or herself or has very low self-esteem",
    "3. Your child does not enjoy anything or seems unable to have fun",
    "4. Your child worries a lot",
    "5. Your child has trouble sleeping",
    "6. Your child gets tired easily or has little energy",
    "7. Your child is too frightened or scared",
    "8. Your child is nervous or tense",
    "9. Your child cries a lot",
    "10. Your child is irritable or angry",
    "11. Your child is having headaches or stomachaches",
    "12. Your child is not doing well in school or has trouble concentrating",
    "13. Your child does not listen to rules or has behavior problems in school or at home",
    "14. Your child fights with other children or is bullies by other children",
    "15. Your child is teased or bullied by other children",
    "16. Your child does not have many friends or gets along better with adults than with other children",
    "17. Your child is not interested in things or does not have hobbies",
    "18. Your child is in trouble with his or her family or does not get along with parents or brothers or sisters"
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
      <h1 className="text-4xl font-semibold text-center mb-8 text-cyan-400 font-mono">Parent Symptom Checklist (PSC)</h1>
      <form onSubmit={handleSubmit}>
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-white">Questionnaire</h2>
          <p className="mb-4 text-white text-2xl">For each question, please select "Never," "Sometimes," or "Often."</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
            {questions.map((question, index) => (
              <div key={index} className="flex flex-col rounded-lg p-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white">
                <label className="block mb-2 text-2xl">{question}</label>
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
                  <button type="button" name={`item${index + 1}`} value="1" onClick={handleChange} className={`w-1/3 py-1 border rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${questionnaire[`item${index + 1}`] === 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}>
                    Sometimes
                  </button>
                  <button type="button" name={`item${index + 1}`} value="0" onClick={handleChange} className={`w-1/3 py-1 border rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${questionnaire[`item${index + 1}`] === 0 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}>
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
          <p className="font-bold font-mono">{riskMessage.slice(0, typingIndex)}</p>
        </div>
      )}
      <BarChart questionnaire={questionnaire} />
    </div>
  );
}

export default ParentTestPage;
