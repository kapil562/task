import React, { useState } from 'react';
import './App.css';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [ageResult, setAgeResult] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const inputDate = new Date(birthDate);

    let years;
    if (
      today.getMonth() > inputDate.getMonth() ||
      (today.getMonth() === inputDate.getMonth() && today.getDate() >= inputDate.getDate())
    ) {
      years = today.getFullYear() - inputDate.getFullYear();
    } else {
      years = today.getFullYear() - inputDate.getFullYear() - 1;
    }

    let months;
    if (today.getDate() >= inputDate.getDate()) {
      months = today.getMonth() - inputDate.getMonth();
    } else {
      months = today.getMonth() - inputDate.getMonth() - 1;
      months = months < 0 ? months + 12 : months;
    }

    let days;
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (today.getDate() >= inputDate.getDate()) {
      days = today.getDate() - inputDate.getDate();
    } else {
      days = today.getDate() - inputDate.getDate() + monthDays[inputDate.getMonth()];
    }

    let result = `<p class="birthdate">You were born on ${inputDate.toDateString()}.</p>`;
    result += `<p class="age">You are ${years} years, ${months} months and ${days} days old.</p>`;
    if (months === 0 && days === 0) {
      result += `<p class="wishing">Happy Birthday!🎂🎈🎈</p>`;
    }

    setAgeResult(result);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      calculateAge();
    }
  };

  return (
    <div className="container">
      <div className="age-calculator">
        <h1 className="heading"><i className="fas fa-calculator"></i> Age Calculator</h1>
        <div className="controls">
          <input
            type="date"
            id="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button id="calculate" onClick={calculateAge}>Calculate</button>
        </div>
        <div className="result" dangerouslySetInnerHTML={{ __html: ageResult }}></div>
      </div>
    </div>
  );
}

export default AgeCalculator;
