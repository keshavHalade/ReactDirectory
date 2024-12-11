import React, { useState } from 'react'

const steps = [
    "Add Profile",
     "Add Edducation",
   "Submit"
];
function App() {    
    const [step,setStep] = useState(1);

    function onPrevious(){
        console.log(step);
        if(step >1) setStep(step -1);
    }

    function onNext(){
        if(step < 3) setStep(step + 1);
    }


  return (
    <div className="container border border-2 rounded w-50 mt-5 p-4 bg-light">
    <div className="d-flex justify-content-between align-items-center mt-3">
        <span className={`border border-2 p-3 rounded-circle text-white ${step >= 1 ? 'bg-primary' : 'bg-secondary'}`}>1</span>
        <span className={`border border-2 p-3 rounded-circle text-white ${step >= 2 ? 'bg-primary' : 'bg-secondary'}`}>2</span>
        <span className={`border border-2 p-3 rounded-circle text-white ${step >= 3 ? 'bg-primary' : 'bg-secondary'}`}>3</span>
    </div>
    <div className="d-flex justify-content-center mt-5 mb-4">
        <p className="h5 fw-bold text-center">Step {step}: {steps[step - 1]}</p>
    </div>
    <div className="d-flex justify-content-between">
        <button 
            className="btn btn-outline-primary rounded-pill px-4 py-2 fw-bold" 
            onClick={onPrevious}
            disabled={step === 1}>
            Previous
        </button>
        <button 
            className="btn btn-primary rounded-pill px-4 py-2 fw-bold" 
            onClick={onNext}
            disabled={step === steps.length}>
            Next
        </button>
    </div>
</div>

  )
}

export default App