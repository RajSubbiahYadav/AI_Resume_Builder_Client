import React, { useState } from 'react'
import PersonalDetail from './forms/PersonalDetail'
import Summery from './forms/Summery'
import WorkExperience from './forms/WorkExperience'
import Education from './forms/Education'
import Skills from './forms/Skills'
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react'
import { Button } from '@/components/ui/button'

function FormSection() {

  const [activeFormIndex,setActiveFormIndex]=useState(1);
  const [enableNext,setEnableNext]=useState(false)

  return (
    <div>
      <div className='flex justify-between items-center '>
        <Button variant="outline" className='flex gap-2' size="sm" > <LayoutGrid/> Theme</Button>
        <div className='flex gap-2'>
          {activeFormIndex >1 && <Button size="sm" 
          onClick={()=>setActiveFormIndex(activeFormIndex-1)}
          > <ArrowLeft/> </Button>}
          
          <Button disabled={!enableNext}
          className='flex gap-2' size="sm" 
          onClick={()=>setActiveFormIndex(activeFormIndex+1)}
          >Next <ArrowRight/> </Button>
        </div>
      </div>
      {/* Personal Detail  */}
    {activeFormIndex ==1? 
     <PersonalDetail enableNext={(v)=>setEnableNext(v)} />
    : activeFormIndex ==2? 
     <Summery enableNext={(v)=>setEnableNext(v)} />
    : activeFormIndex ==3?
    <WorkExperience enableNext={(v)=>setEnableNext(v)} />
    : activeFormIndex ==4?
    <Education enableNext={(v)=>setEnableNext(v)} />
    : activeFormIndex ==5 ?
    <Skills enableNext={(v)=>setEnableNext(v)} />
    : null
      }
      {/* Summary  */}
    
      {/* Experience  */}
    
      {/* Education Details  */}
    
      {/* Skills  */}
    
    </div>
  )
}

export default FormSection
