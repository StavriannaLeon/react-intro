import {useState, useEffect} from "react";

const OnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
       const handler = () => setIsOnline(navigator.onLine);
       const pollingID: number = setInterval(handler, 5000); // 5 secs

       window.addEventListener('online', handler);
       window.addEventListener('offline', handler);

       // cleanup function
       return () => {
           clearInterval(pollingID);
           window.removeEventListener('online', handler);
           window.removeEventListener('offline', handler);
       }
    }, [])

    return (
        <>
            {/*.bg-green-500.text-white*/}
            {/*<div className="bg-green-500 text-white text-center mt-12 mx-4 p-4 rounded">*/}
            <div className={`
            text-white text-center mt-12 mx-4 p-4 rounded ${isOnline ? "bg-green-500" : "bg-custom-dark-red"}
            `}>
                { isOnline ? "You are online!" : "You are offline!" }
            </div>
        </>
    )
}

export default OnlineStatus;