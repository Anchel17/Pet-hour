export async function requestNotificationPermission(){
    if(!('Notification' in window)){
        alert('Este navegador não suporta notificações.');
        return false;
    }

    const permission = await Notification.requestPermission();
    return permission === 'granted';
}

export async function sendNotification(title, options = {}){
    if(!('Notification' in window)) return;

    const isGranted = Notification.permission === 'granted';
    
    if(!isGranted) return;

    if('serviceWorker' in navigator){
        const reg = await navigator.serviceWorker.ready;
        reg.showNotification(title, {
            icon: '/pet-hour-icon.svg',
            ...options
        });
    }
    else{
        new Notification(title, {
            icon: '/pet-hour-icon.svg',
            ...options
        });
    }
}