import React, { useEffect, useState } from 'react'
import TestSeriesCustomTable from '../../../components/custom/TestSeriesCustomTable'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import axios from 'axios';
import { Baseurl } from '../../../utils/BaseUrl';
import { useParams } from 'react-router-dom';
import TestSeriesForm from '../../../components/playlist/TestSeriesForm';
import BulkQuestionUpload from '../../../components/playlist/BulkQuestionUpload';



const columns = [
  { id: 'title', label: 'Name', minWidth: 170 },
  
  {
    id: 'description',
    label: 'Description',
    minWidth: 170,
    format: (value) => value.toFixed(2),
  },
  { id: 'totalQuestion', label: 'No of Questions', minWidth: 60, align:'center' },
  {
    id: 'totalMarks',
    label: 'Total Marks',
    minWidth: 60,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'duration',
    label: 'Duration',
    minWidth: 60,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'visiblity',
    label: 'visiblity',
    minWidth: 60,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  }
];




const TestSeries_List = () => {

     const { id } = useParams();  
     const authHeader = useAuthHeader()
     const [rows,setRows] = useState([])

  const FetchPlaylist = async ()=>{
  try{

     const resp = await axios.get(`${Baseurl}/test/all/${id}`, { headers: { "Content-Type": "application/json","Authorization": authHeader() }})
        console.log(resp.data);
        setRows(resp.data?.data)

  }catch(err){
    console.log(err)
  }
}

useEffect(()=>{
    FetchPlaylist();
},[])


  return (
    <>
        <div className='my-5'>
                    <div>
                         <span className='font-bold text-2xl mx-2 my-4'>List of Test Series</span>
        
                    </div>
                    <div>
                        <div className='flex justify-end gap-4'>
                            <TestSeriesForm />
                            <BulkQuestionUpload />
                        </div>
                    </div>
                </div>
                <TestSeriesCustomTable columns={columns} rows={rows} />
    </>
  )
}

export default TestSeries_List