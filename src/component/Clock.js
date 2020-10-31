import React, { useState } from 'react';

const Clock = () => {
	let date = new Date().toLocaleTimeString();
	let [currTime, updateTime] = useState(date);
	// console.log(date)

	const changeTimePerSec = () => {
        date = new Date().toLocaleTimeString();
		updateTime(date);
	}
    setInterval(changeTimePerSec, 1000);

    return (
        <>
        <h1 className="clock_style"> {currTime} </h1>
        </>
    );
}
    
    export default Clock;