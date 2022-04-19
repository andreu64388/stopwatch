import React, { ChangeEvent, FC, useState } from 'react'
import { formatTime } from '../functions/Time'

const Timer: FC = () => {
   const [hours, setHours] = useState<string>("00")
   const [minutes, setMinutes] = useState<string>("00")
   const [seconds, setSeconds] = useState<string>("42")
   const [time, setTime] = useState({ s: 0, m: 0, h: 0 })
   const [isActive, setIsActive] = useState(0)
   const [inter, setInter] = useState<any>()
   const [isStart, setIsStart] = useState(false)
   const timeFull = `${formatTime(time.h)}:${formatTime(time.m)}:${formatTime(time.s)}`;

   const Start = () => {
      setTime({ s: Number(hours), m: Number(minutes), h: Number(hours) })
      setInter(setInterval(Run, 1000))
   }
   let updatedH: number = time.h;
   let updatedM: number = time.m;
   let updatedS: number = time.s;

   const Run = () => {
      if (updatedS === 0) {
         updatedM--;
         updatedS = 59;
      }
      if (updatedM) {
         updatedS--;
         updatedS = 59;
      }

      updatedS--;
      setTime({ s: updatedS, m: updatedM, h: updatedH })
   }


   return (
      <div className='timer'>
         {timeFull}

         <div className="timer_main">
            <div className="cirsycle">


               <div className='timer_input'>
                  <input type="text"
                     maxLength={2}

                     value={hours} onChange={(e: ChangeEvent<HTMLInputElement>) => setHours(e.target.value)}
                  />:
                  <input type="text" value={minutes}
                     maxLength={2}
                     onChange={(e: ChangeEvent<HTMLInputElement>) => setMinutes(e.target.value)} />:
                  :
                  <input type="text" value={seconds}
                     maxLength={2}
                     onChange={(e: ChangeEvent<HTMLInputElement>) => setSeconds(e.target.value)}
                  />
               </div>
            </div>
         </div>
         <div className="btns_timer">
            <button onClick={Start}>Start</button>
         </div>

      </div>
   )
}

export default Timer