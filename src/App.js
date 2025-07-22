import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [currentStep, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (currentStep > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (currentStep < 3) setStep((s) => s + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
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
      )}
    </>
  );
}
