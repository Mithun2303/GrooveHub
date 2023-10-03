import React, { useState } from 'react';
import Forgetpassword1 from './forgetpassword1';
import Forgetpassword2 from './forgetpassword2';

const ForgetPasswordForm = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(2);
  };

  const handlePrevious = () => {
    setStep(1);
  };

  const handleSubmit = () => {
    // Handle form submission logic
  };

  return (
    <div>
      {step === 1 && <Forgetpassword1 onNext={handleNext} />}
      {step === 2 && <Forgetpassword2/>}
    </div>
  );
};

export default ForgetPasswordForm;