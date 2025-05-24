import React from 'react'
import './experience.css'
import { NavLink } from 'react-router-dom'

import Experiences_Data from '../../assets/experiences_data'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';

function Experience(){
    return (
        <div className='experience'>
            <div className='experience-title'>
            <h1 > WORK EXPERIENCE</h1>
            <p> Press on an icon to learn more!</p>
       </div>
        <Timeline position="alternate">
            {Experiences_Data.map((experience, index)=>{
                return <TimelineItem  className='timeline-item'>
            <TimelineSeparator>
              <TimelineConnector />
              <NavLink className="experience-navlink" to ={`/experiences/${experience.s_no}` }>
              <IconButton>
              <TimelineDot 
              sx={{

              width: 'clamp(20px, 10vw, 64px)',   
    height: 'clamp(20px, 10vw, 64px)',
              backgroundColor: 'white',
              padding: 0, 
              overflow: 'hidden', 
            }}
            >
            {  <img src={experience.s_img} alt="icon"
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', 
                borderRadius: '50%', 
              }}
              ></img> }
              </TimelineDot>
              </IconButton>
              </NavLink>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className='timelineOppositeContent' sx={{
               py: '32px', px: 2 , m: 'auto 0'
               }} color="black">
            <Typography  sx={{
                fontSize: 'clamp(5px, 1vw, 16px)',

              }} >
                {experience.s_time}
              </Typography>
              <Typography 
              
              sx={{
                fontSize: 'clamp(8px, 2vw, 20px)', // min 12px, scales with viewport, max 20px
              }}>
                {experience.s_role}
              </Typography>
              <Typography sx={{
                fontSize: 'clamp(5px, 1vw, 16px)'
              }} >{experience.s_name}</Typography>
            </TimelineContent>
          </TimelineItem>})}
        </Timeline>
        </div>
      );

}

export default Experience;