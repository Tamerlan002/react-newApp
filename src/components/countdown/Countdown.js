import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "./countdown.scss";

const Countdown = () => {
  const [day, setDays] = useState(0);
  const [hour, setHours] = useState(0);
  const [minute, setMinutes] = useState(0);
  const [second, setSeconds] = useState(0);

  const interval = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1700, //Fade Animation
    });

    const deadline = () => {
      //Current time calculation
      const endDate = new Date("2022-04-01T12:35:19Z");
      const today = new Date();
      const timeDiff = endDate - today;

      const seconds = 1000;
      let minutes = seconds * 60;
      let hours = minutes * 60;
      let days = hours * 24;

      let timeDays = Math.floor(timeDiff / days);
      let timeHours = Math.floor((timeDiff % days) / hours);
      let timeMinutes = Math.floor((timeDiff % hours) / minutes);
      let timeSeconds = Math.floor((timeDiff % minutes) / seconds);

      timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
      timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
      timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

      setDays(timeDays);
      setHours(timeHours);
      setMinutes(timeMinutes);
      setSeconds(timeSeconds);
    };

    interval.current = setInterval(() => {
      // Triggers deadline function which executes current time
      deadline();
    }, 1000);
    return () => {
      clearInterval(interval.current);
      interval.current = null;
    }
  }, []);


  return (
    <div>
      { minute >= 0 && second >= 0 && hour >= 0 && day >= 0
            ?
            <div className="countdown-time pt-4">
            <article data-aos="fade-up">
          <p>{day.toString()}</p>
          <h3>Days</h3>
        </article>
        <span data-aos="fade-right">:</span>
        <article data-aos="fade-down">
          <p>{hour.toString()}</p>
          <h3>Hours</h3>
        </article>
        <span data-aos="fade-down">:</span>
        <article data-aos="fade-up">
          <p>{minute.toString()}</p>
          <h3>Minutes</h3>
        </article>
        <span data-aos="fade-left">:</span>
        <article data-aos="fade-down">
          <p>{second.toString()}</p>
          <h3>Seconds</h3>
        </article>
        </div>
            :   
            <div className="countdown-time pt-4" > 
              <p className="end-date-text">Service will be provided soon</p> 
            </div>
        }
        

    </div>
  );
};

export default Countdown;
