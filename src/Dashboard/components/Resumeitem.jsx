import { Notebook } from 'lucide-react'
import React from 'react'

function Resumeitem({resume}) {
  return (
    <div >
      <div className='p-14 bg-secondary flex items-center justify-center '>
        <Notebook/>
      
      </div>
      <h2>{resume.title}</h2>
    </div>
  )
}

export default Resumeitem