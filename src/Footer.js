import React from 'react'
import moment from 'moment';

// type Props = {
//   date: string
//   year: string
//   link1: React.ReactNode
//   link2: React.ReactNode
// }

export function Footer({ date, year, link1, link2 }) {
  date = moment().format("MM-DD HH:mm:ss")
  year = moment().year()
  return (
    <div className="pmndrs-menu">
      
      <div>
        <span>
          <b>Matthew Davis</b>
        </span>
        <a target="_blank" href="https://www.linkedin.com/in/tech-lead-matt-davis/">Linkedin</a>
        <a target="_blank" href="https://github.com/Deamoner">Github</a>
        <a target="_blank" href="https://discord.gg/NPRx32XsHM">Community</a>
      </div>
      <div>
        <span>{date}</span>
        <span>{year}</span>
      </div>
      <div>
        <span></span>
        <span>Developer looking to push the boundaries of technology and bring humans together</span>
      </div>
      <div style={{ width: '100%' }} />
      <div>
        Current Projects:
      <a target="_blank" href="https://aro.work/">ARO.Work - Augmented Reality Office</a>
      
      </div>
    </div>
  )
}