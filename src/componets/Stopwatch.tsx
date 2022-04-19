import React, { FC, useState } from 'react'
function formatTime(time: number) {
   return time < 10 ? `0${time}` : time;
}
const Stopwatch: FC = () => {

   const [intervalTime, setIntervalTime] = useState<any>([]);
   const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 })
   const [isActive, setIsActive] = useState(0)
   const [inter, setInter] = useState<any>()
   const [isStart, setIsStart] = useState(false)

   const timeFull = `${formatTime(time.h)}:${formatTime(time.m)}:${formatTime(time.s)}:${formatTime(time.ms)}`;
   const Start = () => {
      setIsActive(1)
      setIsStart(true)
      setInter(setInterval(Run, 10))
   }
   const Stop = () => {
      setIsActive(2)
      clearInterval(inter)
   }
   const Continue = () => {
      setIsActive(1)
      setInter(setInterval(Run, 10))
   }
   const Reset = () => {
      setIsStart(false)
      setTime({ ms: 0, s: 0, m: 0, h: 0 })
      setIsActive(0)
      clearInterval(inter)
   }
   let updatedH: number = time.h;
   let updatedM: number = time.m;
   let updatedS: number = time.s;
   let updatedMS: number = time.ms;
   const Clear = () => {
      setTime({ ms: 0, s: 0, m: 0, h: 0 })
      setIsActive(0)
      clearInterval(inter)
      setIntervalTime([]);
   }
   const Run = () => {
      if (updatedMS >= 99) {
         updatedS++;
         updatedMS = 0;
      }
      if (updatedS >= 60) {
         updatedM++;
         updatedS = 0;
      }
      if (updatedM >= 60) {
         updatedH++;
         updatedM = 0;
      }
      updatedMS++;
      setTime({ ms: updatedMS, s: updatedS, m: updatedM, h: updatedH })
   }
   const IntervalGet = () => {

      setIntervalTime([...intervalTime, time])
      console.log(intervalTime)
   }
   return (
      <div className='osnova_stopwatch'>

         <h1 className='main_title'>
            Stopwatch
         </h1>

         <div className='stopwatch_container'>
            <div className="circycle">
               <h1>{timeFull}</h1> </div>
            <div className="buttons">

               <button className='interval' disabled={!isStart} onClick={IntervalGet} >Interval </button>

               {isActive >= 1 && <button onClick={Reset} >Reset</button>}
               {isActive === 0 && <button className='start' onClick={Start}>Start</button>}
               {isActive === 1 && <button className='stop' onClick={Stop}>Stop</button>}
               {isActive === 2 && <button className='start' onClick={Continue}> Conti</button>}
            </div></div>

         {<div className="item_stop">
            <h1>Intervals</h1>
            <ul>
               {intervalTime.map((item: any, index: number) => {
                  return <li key={index}><span style={
                     { background: "red" }}>{index + 1}</span>.{item.h}:{item.m}:{item.s}:{item.ms}</li>
               })}
            </ul>
            <button onClick={Clear}>Clear</button>
         </div>}
      </div>
   )
}

export default Stopwatch