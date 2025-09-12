import React from 'react'
import TestSeriesCustomTable from '../../../components/custom/TestSeriesCustomTable'



const columns = [
  { id: 'title', label: 'Name', minWidth: 170 },
  
  {
    id: 'description',
    label: 'Description',
    minWidth: 170,
    format: (value) => value.toFixed(2),
  },
  { id: 'noOfQuestions', label: 'No of Questions', minWidth: 60, align:'center' },
  {
    id: 'marks',
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

function createData(testSeriesId,playlistId,title,description, noOfQuestions, marks, duration,visiblity) {

  return {testSeriesId,playlistId, title, description,noOfQuestions, marks, duration,visiblity };
}

const rows = [
  createData(1,1,'BPSC TRE 4.0','nothing but a problems', '50', 50, '60 Min','public'),

];


const TestSeries_List = () => {


  return (
    <>
        <div className='my-5'>
                    <div>
                         <span className='font-bold text-2xl mx-2 my-4'>List of Test Series</span>
        
                    </div>
                    <div>
                        <div className='flex justify-end'>
                            
                        </div>
                    </div>
                </div>
                <TestSeriesCustomTable columns={columns} rows={rows} />
    </>
  )
}

export default TestSeries_List