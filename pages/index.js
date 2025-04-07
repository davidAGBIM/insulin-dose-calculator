import { useState } from "react";

export default function Home() {
  const [carbs, setCarbs] = useState(40);
  const [currentBG, setCurrentBG] = useState(6.5);
  const [targetBG, setTargetBG] = useState(5.5);
  const [carbRatio, setCarbRatio] = useState(8);
  const [sensitivityFactor, setSensitivityFactor] = useState(0.3);
  const [results, setResults] = useState(null);

  const calculateDose = () => {
    const mealDose = carbs / carbRatio;
    const correctionDose = (currentBG - targetBG) / sensitivityFactor;
    const totalDose = mealDose + correctionDose;

    setResults({
      mealDose: mealDose.toFixed(2),
      correctionDose: correctionDose.toFixed(2),
      totalDose: totalDose.toFixed(2),
    });
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>
        Insulin Dose Calculator
      </h1>

      <div style={{ marginTop: '2rem' }}>
        <label>Meal Carbs (g)</label>
        <input type="number" value={carbs} onChange={e => setCarbs(Number(e.target.value))} />

        <label>Current BG (mmol/L)</label>
        <input type="number" value={currentBG} onChange={e => setCurrentBG(Number(e.target.value))} />

        <label>Target BG (mmol/L)</label>
        <input type="number" value={targetBG} onChange={e => setTargetBG(Number(e.target.value))} />

        <label>Carb Ratio (g/unit)</label>
        <input type="number" value={carbRatio} onChange={e => setCarbRatio(Number(e.target.value))} />

        <label>Sensitivity Factor (mmol/L per unit)</label>
        <input type="number" value={sensitivityFactor} onChange={e => setSensitivityFactor(Number(e.target.value))} />

        <button onClick={calculateDose} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Calculate
        </button>

        {results && (
          <div style={{ marginTop: '1rem' }}>
            <p><strong>Meal Dose:</strong> {results.mealDose} u</p>
            <p><strong>Correction Dose:</strong> {results.correctionDose} u</p>
            <p><strong>Total Dose:</strong> {results.totalDose} u</p>
          </div>
        )}
      </div>
    </div>
  );
}
