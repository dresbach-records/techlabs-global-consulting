
import React from 'react';

const Maintenance = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center p-6">
      <img src="/Logo_Dresbach.png" alt="Dresbach Logo" className="w-48 mb-8" />
      <h1 className="text-4xl font-black uppercase mb-4">Sistema em Manutenção</h1>
      <p className="text-gray-400 mb-8 max-w-md">
        Estamos realizando atualizações e melhorias. O acesso está temporariamente indisponível, exceto para áreas de teste autorizadas.
      </p>
    </div>
  );
};

export default Maintenance;
