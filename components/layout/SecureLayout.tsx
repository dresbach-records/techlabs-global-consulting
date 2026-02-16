
import React, { useState, useEffect } from 'react';

// Component to detect DevTools
const DevToolsDetector = () => {
  useEffect(() => {
    const threshold = 160;
    const checkDevTools = () => {
      if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
        // DevTools are likely open
        document.body.innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:#000;color:#fff;font-family:monospace;"><h1>Security Alert</h1><p>Developer tools are not permitted on this site.</p></div>';
      }
    };

    const interval = setInterval(checkDevTools, 1000);
    window.addEventListener('resize', checkDevTools);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkDevTools);
    };
  }, []);

  return null;
};

// Component for the watermark
const Watermark = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 9999,
      opacity: 0.05,
      backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZnl9IjUwJSIgZm9udC1zaXplPSIyMCIgZm9udC1mYW1pbHk9ImFyaWFsIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUpIj5EUkVTQkFDSCBIT1NUSU5HPC90ZXh0Pjwvc3ZnPg==")',
      backgroundRepeat: 'repeat'
    }}></div>
  );
};


const SecureLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DevToolsDetector />
      <Watermark />
      {children}
    </>
  );
};

export default SecureLayout;
