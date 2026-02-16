
import React from 'react';

export default function Error() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Erro no Pagamento</h1>
        <p className="text-gray-700">Ocorreu um erro ao processar seu pagamento.</p>
      </div>
    </div>
  );
}
