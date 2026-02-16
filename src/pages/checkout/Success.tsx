
import React from 'react';

export default function Success() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-green-500 mb-4">Pagamento Aprovado</h1>
        <p className="text-gray-700">Seu pagamento foi processado com sucesso.</p>
      </div>
    </div>
  );
}
