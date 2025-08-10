import React, { useEffect, useState } from 'react'
import { Sort } from './Sort'
import JobCard from './JobCard'
import { getAllJobs } from '../Services/JobService'
import { useDispatch, useSelector } from 'react-redux'
import { resetFilter } from '../Slices/FilterSlice'
import { resetSort } from '../Slices/SortSlice'

const Jobs = () => {
  // Getting sort and filter states from Redux store
  const sort = useSelector((state: any) => state.sort)
  const filter = useSelector((state: any) => state.filter)
  const dispatch = useDispatch()

  // jobList will store all fetched jobs (from API), initially empty
  const [jobList, setJobList] = useState<any[]>([])

  // filterJobs will store jobs after applying filters (used in rendering)
  const [filterJobs, setFilterJobs] = useState<any[]>([])

  /**
   * FETCH JOB DATA ONCE ON COMPONENT LOAD
   */
  useEffect(() => {
    getAllJobs().then((res) => {
      // Filter only jobs with status "ACTIVE"
      const activeJobs = res.filter((job: any) => job.jobStatus === "ACTIVE")

      console.log("Fetched ACTIVE jobs:", activeJobs) // debug
      setJobList(activeJobs)

      // Reset sort and filter on first load
      dispatch(resetFilter())
      dispatch(resetSort())
    }).catch((err) => {
      console.error("Error fetching jobs:", err)
    })
  }, [])

  /**
   * SORT JOBS WHEN SORT OPTION CHANGES
   */
  useEffect(() => {
    if (sort === "Most Recent") {
      // Sort by post time descending
      setJobList(prev => [...prev].sort((a, b) =>
        new Date(b.postTime).getTime() - new Date(a.postTime).getTime()
      ))
    } else if (sort === "Salary (Low to High)") {
      // Sort by salary ascending
      setJobList(prev => [...prev].sort((a, b) => a.packageOffered - b.packageOffered))
    } else if (sort === "Salary (High to Low)") {
      // Sort by salary descending
      setJobList(prev => [...prev].sort((a, b) => b.packageOffered - a.packageOffered))
    } else {
      // No sort, keep the original list
      setJobList(prev => [...prev])
    }
  }, [sort])

  /**
   * APPLY FILTERS WHENEVER FILTER OR JOB LIST CHANGES
   */
  useEffect(() => {
    // Start with full job list
    let filtered = [...jobList]

    // 🔹 JOB TITLE FILTER
    if (filter["Job Title"]?.length) {
      const titles = filter["Job Title"]
        .flatMap((title: any) => Array.isArray(title) ? title : [title])
        .filter((title: string) => typeof title === "string" && title.trim() !== "")
      filtered = filtered.filter((job: any) =>
        titles.some((title: string) =>
          (job.jobTitle || job.role || "").toLowerCase().includes(title.toLowerCase())
        )
      )
    }

    // 🔹 LOCATION FILTER
    if (filter["Location"]?.length) {
      const locations = filter["Location"]
        .flatMap((l: any) => Array.isArray(l) ? l : [l])
        .filter((l: string) => typeof l === "string" && l.trim() !== "")
      filtered = filtered.filter((job: any) =>
        locations.some((loc: string) =>
          (job.location || "").toLowerCase().includes(loc.toLowerCase())
        )
      )
    }

    // 🔹 EXPERIENCE FILTER
    if (filter["Experience"]?.length) {
      const experiences = filter["Experience"]
        .flatMap((exp: any) => Array.isArray(exp) ? exp : [exp])
        .filter((exp: string) => typeof exp === "string" && exp.trim() !== "")
      filtered = filtered.filter((job: any) =>
        experiences.some((exp: string) =>
          (job.experience || "").toLowerCase().includes(exp.toLowerCase())
        )
      )
    }

    // 🔹 JOB TYPE FILTER (e.g., Full-Time, Part-Time)
    if (filter["Job Type"]?.length) {
      const types = filter["Job Type"]
        .flatMap((t: any) => Array.isArray(t) ? t : [t])
        .filter((t: string) => typeof t === "string" && t.trim() !== "")
      filtered = filtered.filter((job: any) =>
        types.some((type: string) =>
          (job.jobType || "").toLowerCase().includes(type.toLowerCase())
        )
      )
    }

    // 🔹 SALARY RANGE FILTER (example: 5 LPA to 15 LPA)
    if (filter.salary?.length === 2) {
      const [min, max] = filter.salary
      filtered = filtered.filter((job: any) =>
        job.packageOffered >= min && job.packageOffered <= max
      )
    }

    console.log("Filtered jobs:", filtered) // debug filtered jobs
    setFilterJobs(filtered) // update filtered job list
  }, [filter, jobList])

  /**
   * JSX RETURN
   */
  return (
    <div className='p-5 mx-6'>
      <div className='flex justify-between flex-wrap mt-5 '>
        <div className='text-2xl font-semibold xs-mx:text-xl  flex items-center'>Recommended Jobs</div>
        <Sort sort="job" />
      </div>

      <div className="mt-10 flex flex-wrap gap-8 justify-start">
        {/* Show message when no jobs match filter */}
        {filterJobs.length === 0 && (
          <p className="text-white">No jobs found.</p>
        )}

        {/* Render each job using JobCard only if it’s a valid object */}
        {filterJobs.map((job: any, index: number) =>
          Object.keys(job).length > 0 ? <JobCard key={index} {...job} /> : null
        )}
      </div>
    </div>
  )
}

export default Jobs
