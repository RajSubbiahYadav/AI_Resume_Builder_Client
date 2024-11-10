import React, { useEffect } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react';
//import GlobalApi from 'service/GlobalApi'
import { GetUserResumes } from '@/service/GlobalApi';
import ResumeCardItem from './components/ResumeCardItem';
import { useState } from 'react';
import Resumeitem from './components/ResumeItem';

function Dashboard() {

  const { user } = useUser();
  const [resumeList,setResumeList]=useState([]);

  useEffect(()=>{
    user&&GetResumesList()
  },[user])

// Used to Get Usera Resume List

  const GetResumesList = async () => {
    GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(resp => {
        setResumeList(resp.data.data)
      });
  };


  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p className='font-semibold py-4'>Start Creating AI resume for your next Job role :) </p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5
      mt-10 gap-5'>
        <AddResume/>
        {resumeList.length>0&&resumeList.map((resume,index)=>{
         return <ResumeCardItem resume={resume} key={index}/>
          
          
        })}
      </div>
    </div>
  )
}

export default Dashboard
