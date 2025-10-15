import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '50px auto',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Segoe UI, sans-serif',
      textAlign: 'center',
    },
    input: {
      width: '80%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    button: {
      padding: '10px 20px',
      margin: '10px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#4CAF50',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
    },
    buttonSecondary: {
      backgroundColor: '#2196F3',
    },
    result: {
      marginTop: '20px',
      fontSize: '20px',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <h2>🧮 Simple Calculator</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={styles.input}
      />
      <div>
        <button onClick={handleAddition} style={styles.button}>Add</button>
        <button onClick={handleSubtraction} style={{ ...styles.button, ...styles.buttonSecondary }}>Subtract</button>
      </div>
      {result !== null && <div style={styles.result}>Result: {result}</div>}
    </div>
  );
}

export default Calculator;