
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

// Error Boundary simples para nível de entrada
class GlobalErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Critical Runtime Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          height: '100vh', 
          backgroundColor: '#000', 
          color: '#19C37D', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontFamily: 'monospace',
          padding: '20px',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>SYSTEM_RECOVERY_MODE</h1>
          <p style={{ color: '#666', marginTop: '10px' }}>Ocorreu uma falha na execução do nó principal.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              marginTop: '30px',
              padding: '12px 24px',
              backgroundColor: '#19C37D',
              color: '#000',
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer',
              textTransform: 'uppercase'
            }}
          >
            Reiniciar Protocolos
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <GlobalErrorBoundary>
      <HashRouter>
        <App />
      </HashRouter>
    </GlobalErrorBoundary>
  </React.StrictMode>
);
