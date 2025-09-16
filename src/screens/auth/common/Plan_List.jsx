import React, { useEffect, useState } from 'react'

import CreatePlan from './CreatePlan';
import PlansCustomTable from '../../../components/custom/PlansCustomTable';


const columns = [
  { id: 'title', label: 'Title', minWidth: 170 },
  {
   id: 'description',
   label: 'Description',
   minWidth: 170,
   
 },
  
  {
    id: 'price',
    label: 'price',
    minWidth: 100,
    format: (value) => value.toFixed(2),
  },
  
  {
    id: 'discount',
    label: 'discount%',
    minWidth: 100,
    format: (value) => value.toFixed(2),
  },
  
  {
    id: 'discount_priod',
    label: 'discount Priods(days)',
    minWidth: 100,   
  },
  
  {
    id: 'duration',
    label: 'duration(Days)',
    minWidth: 100,   
  },
 
 
  
];

function createData(testSeriesId,playlistId,title,description, noOfQuestions, marks, duration,visiblity) {

  return {testSeriesId,playlistId, title, description,noOfQuestions, marks, duration,visiblity };
}

const rows = [
  createData(1,1,'BPSC TRE 4.0','nothing but a problems', '50', 50, '60 Min','public'),

];


const Plan_List = () => {

  
  return (
        <>


            <div className='my-5'>
                        <div>
                             <span className='font-bold text-2xl mx-2 my-4'>List of Plans</span>
            
                        </div>
                        <div>
                            <div className='flex justify-end'>
                                <CreatePlan />
                            </div>
                        </div>
                    </div>
                    <PlansCustomTable columns={columns} rows={rows} />
        </>
  )
}

export default Plan_List