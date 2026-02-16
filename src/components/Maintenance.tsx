
import React from 'react';
import { HardHat } from 'lucide-react';

const Maintenance = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center p-6">
      <HardHat size={64} className="text-yellow-400 mb-8" />
      <h1 className="text-4xl font-black uppercase mb-4">Sistema em Manutenção</h1>
      <p className="text-gray-400 mb-8 max-w-md">
        Estamos realizando atualizações e melhorias. O acesso está temporariamente indisponível, exceto para áreas de teste autorizadas.
      </p>
    </div>
  );
};

export default Maintenance;
