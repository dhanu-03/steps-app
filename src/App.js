import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [currentStep, setStep] = useState(1);

  function handlePrevious() {
    if (currentStep > 1) setStep(currentStep - 1);
  }

  function handleNext() {
    if (currentStep < 3) setStep(currentStep + 1);
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={currentStep >= 1 ? "active" : ""}>1</div>
        <div className={currentStep >= 2 ? "active" : ""}>2</div>
        <div className={currentStep >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {currentStep}: {messages[currentStep - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "white" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "white" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
