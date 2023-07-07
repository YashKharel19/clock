import { useState, useEffect } from 'react';
import './Clock.css';
// Make clock funtion
function Clock() {
    // Initialize currenttime
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    // Update time using use effect in each second
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="clock">
            <div className="timer-container">
                <div className="timer-segment">
                    <span>{currentTime}</span>
                </div>
            </div>
        </div>
    )
}

export default Clock