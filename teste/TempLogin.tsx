
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TempLogin() {
  const navigate = useNavigate();
  const [accountType, setAccountType] = React.useState('client');

  const handleLogin = () => {
    if (accountType === 'client') {
      navigate('/test/client/dashboard');
    } else {
      navigate('/test/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login Temporário</h1>
        <div className="mb-4">
          <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">Selecione o tipo de conta:</label>
          <select 
            id="accountType" 
            value={accountType} 
            onChange={(e) => setAccountType(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="client">Cliente</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button 
          onClick={handleLogin}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
