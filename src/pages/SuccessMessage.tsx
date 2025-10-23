import React from 'react';
import { CheckCircle } from 'lucide-react';

const SuccessMessage: React.FC = () => {
  return (
    <div className="text-center text-white px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
      <CheckCircle className="mx-auto mb-4 text-white" size={48} />
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Thank You!</h2>
      <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto">
       Your service request has been successfully received, and we will contact you shortly to assist further..😊
      </p>
    </div>
  );
};

export default SuccessMessage;