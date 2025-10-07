import { useEffect } from 'react'
import './App.css'
import { requestNotificationPermission, sendNotification } from './services/notificationService'

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
    <div className='bg-red-500 w-full h-full'>
      <button onClick={handleNotify}>Clique</button>
    </div>
  )
}

export default App
