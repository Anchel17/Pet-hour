import { useEffect } from 'react'
import './App.css'
import { requestNotificationPermission, sendNotification } from './services/notificationService'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    requestNotificationPermission();
  }, []);

  const handleNotify = () =>{
    sendNotification('Pet Hour', {
      body: 'Hora do remédio de Amora!',
      tag: 'medication-alert'
    })
  }

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  )
}

export default App
