import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // استبدلنا BrowserRouter بـ HashRouter
import App from './App';
import './style.css'; // استيراد ملف الاستايل العام

// كود إجباري لمسح أي نسخة قديمة مخزنة في المتصفح (Service Worker)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);