import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { formatTime } from '../functions/Time'
const Timer: FC = () => {
   const [hours, setHours] = useState<string>("00")
   const [minutes, setMinutes] = useState<string>("00")
   const [seconds, setSeconds] = useState<string>("22")
   const [time, setTime] = useState({ s: 0, m: 0, h: 0 })
   const [isActive, setIsActive] = useState<boolean>(false)
   const [inter, setInter] = useState<any>()
   const timeFull = `${formatTime(time.h)}:${formatTime(time.m)}:${formatTime(time.s)}`;
   useEffect(() => {
      setTime({ s: Number(seconds), m: Number(minutes), h: Number(hours) })

   }, [hours, minutes, seconds])
   var inters:any = null;
   const Start = () => {

      setIsActive(true)
      inters = (setInterval(Countdown, 1000))

   }
   const Stop = () => {
      setTime({ s: Number(seconds), m: Number(minutes), h: Number(hours) })
      setIsActive(false)

   }
   let updatedH: number = time.h;
   let updatedM: number = time.m;
   let updatedS: number = time.s;

   const Countdown = () => {
      if
         (updatedS === 0) {
         updatedM--;
         updatedS = 59;
      } else {
         updatedS--;
      }
      if (updatedM < 0) {
         updatedH--;
         updatedM = 59;
      }

      if (updatedH === 0 && updatedM === 0 && updatedS === 0) {

         setIsActive(false)
         clearInterval(inters)
         updatedH = time.h
         updatedM = time.m;
         updatedS = time.s;
      }

      setTime({ s: updatedS, m: updatedM, h: updatedH })
   }

   return (
      <div className='timer'>

         <div className="timer_main">
            <div className="cirsycle">
               <div className='timer_input'>
                  {isActive ? <h1>{timeFull}</h1> : <>
                     <input type="text"
                        maxLength={2}
                        value={hours} onChange={(e: ChangeEvent<HTMLInputElement>) => setHours(e.target.value)}
                     />:
                     <input type="text" value={minutes}
                        maxLength={2}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setMinutes(e.target.value)} />:

                     <input type="text" value={seconds}
                        maxLength={2}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setSeconds(e.target.value)}
                     /></>
                  }

               </div>
            </div>
         </div>
         <div className="btns_timer">

            {isActive ? <button onClick={Stop}>Stop</button> : <button onClick={Start}>Start</button>}

         </div>

      </div>
   )
}

export default Timer