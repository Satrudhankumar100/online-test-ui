import React from 'react'
import QuestionsCustomTable from '../../../components/custom/QuestionsCustomTable'

const columns = [
  { id: 'question', label: 'Question', minWidth: 170 },
  
  {
    id: 'currectOption',
    label: 'CurrectOption',
    minWidth: 100,
    format: (value) => value.toFixed(2),
  },
  { id: 'optiona', label: 'option  A', minWidth: 60, align:'center' },
  {
    id: 'optionb',
    label: 'option B',
    minWidth: 60,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'optionc',
    label: 'option C',
    minWidth: 60,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'optiond',
    label: 'option D',
    minWidth: 60,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'marks',
    label: 'marks',
    minWidth: 60,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

function createData(testSeriesId,playlistId,title,description, noOfQuestions, marks, duration,visiblity) {

  return {testSeriesId,playlistId, title, description,noOfQuestions, marks, duration,visiblity };
}

const rows = [
  createData(1,1,'BPSC TRE 4.0','nothing but a problems', '50', 50, '60 Min','public'),

];


const Question_List = () => {
  return (
        <>
            <div className='my-5'>
                        <div>
                             <span className='font-bold text-2xl mx-2 my-4'>List of Questions</span>
            
                        </div>
                        <div>
                            <div className='flex justify-end'>
                                
                            </div>
                        </div>
                    </div>
                    <QuestionsCustomTable />
        </>
  )
}

export default Question_List