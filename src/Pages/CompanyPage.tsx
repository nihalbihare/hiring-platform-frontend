import { Button } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'
import SimilarCompany from '../CompanyProfile/SimilarCompany'
import Company from '../CompanyProfile/Company'




const CompanyPage = () => {
    const navigate = useNavigate();
  return (
    <div className= 'min-h-[100vh] bg-mine-shaft-950 font-["poppins"] p-4'>

    <Button my='md' leftSection={<IconArrowLeft size={20}/>}
    onClick={()=>navigate(-1)} variant='light' color='bright-sun.4'>Back</Button>
  <div className='flex gap-5'>
    <Company />
    <SimilarCompany/>
    </div>
    </div>
  )
}

export default CompanyPage
