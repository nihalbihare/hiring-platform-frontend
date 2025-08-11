import TalentsCard from './TalentsCard'
import { Sort } from '../FindJobs/Sort'
import { getAllProfiles } from '../Services/ProfileServices'
import { useDispatch, useSelector } from 'react-redux'
import { resetFilter } from '../Slices/FilterSlice'
import { useEffect, useState } from 'react'

const Talents = () => {
  const dispatch = useDispatch()
  const [talents, setTalent] = useState<any[]>([])
  const sort = useSelector((state: any) => state.sort)
  const filter = useSelector((state: any) => state.filter)
  const [filterTalents, setFilterTalents] = useState<any[]>([])

  useEffect(() => {
    dispatch(resetFilter())
    getAllProfiles()
      .then((res) => {
        setTalent(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
useEffect(()=>{
   if(sort == "Experience (Low to High)"){
    setTalent([...talents].sort((a:any, b:any) => a.totalExp - b.totalExp))
  }
  else if(sort == "Experience (High to Low)"){
    setTalent([...talents].sort((a:any, b:any) => b.totalExp - a.totalExp))
  }
  else{
    setTalent(talents)
  }
 },[sort])

  useEffect(() => {
    let filterTalent = talents;
    if (filter.name) filterTalent = filterTalent.filter((talent: any) =>
        talent.name.toLowerCase().includes(filter.name.toLowerCase())
      )
    
    if(filter["Job Title"] && filter['Job Title'] .length > 0){
      // Flatten and filter only non-empty strings
      const jobTitles = filter["Job Title"]
        .flatMap((title:any) => Array.isArray(title) ? title : [title])
        .filter((title:any) => typeof title === "string" && title.trim() !== "");
      if (jobTitles.length > 0) {
        filterTalent = filterTalent.filter((talent:any)=>
          jobTitles.some((title:string)=>
            (talent.jobTitle || talent.role || "").toLowerCase().includes(title.toLowerCase())
          )
        );
      }
    }
    if(filter["Location"] && filter["Location"].length > 0){
      // Flatten and filter only non-empty strings
      const locations = filter["Location"]
        .flatMap((location:any) => Array.isArray(location) ? location : [location])
        .filter((location:any) => typeof location === "string" && location.trim() !== "");
      if (locations.length > 0) {
        filterTalent = filterTalent.filter((talent:any)=>
          locations.some((location:string)=>
            (talent.location || "").toLowerCase().includes(location.toLowerCase())
          )
        );
      }
    }
    if(filter["Skills"] && filter["Skills"].length > 0){
      // Flatten and filter only non-empty strings
      const skills = filter["Skills"]
        .flatMap((skill:any) => Array.isArray(skill) ? skill : [skill])
        .filter((skill:any) => typeof skill === "string" && skill.trim() !== "");
      if (skills.length > 0) {
        filterTalent = filterTalent.filter((talent:any)=>
          skills.some((skill:string)=>
            (talent.skills || []).some((talentSkill:any)=>
              talentSkill.toLowerCase().includes(skill.toLowerCase())
            )
          )
        );
      }
    }
    if (filter.exp && filter.exp.length>0) {
    filterTalent = filterTalent.filter((talent: any) =>
      filter.exp[0] <= talent.totalExp && talent.totalExp <= filter.exp[1]
    );
  }
  setFilterTalents(filterTalent);
  }, [filter, talents])

  return (
    <div className='p-5 mx-6 '>
      <div className='flex justify-between'>
        <div className='text-2xl font-semibold'> Talents</div>
        <Sort />
      </div>
      <div className='mt-10 flex flex-wrap gap-7 px-6 justify-start '>
        {
        filterTalents.length?filterTalents.map((talent: any, index: number) => (
          <TalentsCard key={index} {...talent} />
        )):<div className='font-semibold text-2xl'>Talents Not Found</div>
        }
      </div>
    </div>
  )
}

export default Talents
