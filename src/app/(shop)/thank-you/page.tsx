import React from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const ThankYouPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
      <h1 className="text-4xl font-bold mb-2">Thank You!</h1>
      <p className="text-lg text-gray-600 mb-6">Your order has been placed successfully.</p>
      <Link href="/" className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700">
        Continue Shopping
      </Link>
    </div>
  );
};

export default ThankYouPage;
