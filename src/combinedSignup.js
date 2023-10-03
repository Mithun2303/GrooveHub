import React, { useState } from 'react';
import Signup1 from './signup-1';
import Signup2 from './signup-2';
import Signup3 from './signup-3';

const SignupForm = () => {
  const [step, setStep] = useState(1);
    let e = 1;
    function handleNext(i){
    if(i===1){
    setStep(2);
    }
    else if (i===2)
    {
        setStep(3);
    }
  };

  const handlePrevious = () => {
    setStep(1);
  };

  const handleSubmit = () => {
    // Handle form submission logic
  };

  return (
    <div>
      {step === 1 && <Signup1 onNext={(e) => handleNext(e)} />}
      {step === 2 && <Signup2 onNext={(e) => handleNext(e)}/>}
      {step === 3 && <Signup3/>}
    </div>
  );
};

export default SignupForm;