import React , {useState} from 'react'

const Busy = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const [busyDays, setBusyDays] = useState([]);

    const toggleDay = (day) => {
    setBusyDays(prev =>
    prev.includes(day)
      ? prev.filter(d => d !== day)   
      : [...prev, day]               
   );
  };
  
  return (
    <div>
    <div className="week">
       {days.map(day => (
      <button
      key={day}
      onClick={() => toggleDay(day)}
      className={busyDays.includes(day) ? "busy" : ""}
     >
      {busyDays.includes(day) ? `${day} (Busy)` : day}
       </button>
     ))}
    </div>
    </div>
  )
}

export default Busy
