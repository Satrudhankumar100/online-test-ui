import React, { useEffect, useState } from 'react'
import CustomTable from '../../../components/custom/CustomTable'
import CreatePlaylist from '../../../components/playlist/CreatePlaylist'
import axios from 'axios';
import { Baseurl } from '../../../utils/BaseUrl';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';


const columns = [
  { id: 'title', label: 'Name', minWidth: 170 },
  
  {
    id: 'description',
    label: 'Description',
    minWidth: 170,
    format: (value) => value.toFixed(2),
  },
  { id: 'noOfTestSeries', label: 'No of Test Series', minWidth: 100, align:'center' },
  {
    id: 'price',
    label: 'Price',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'exprieDate',
    label: 'Subsribtion Expire',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'visiblity',
    label: 'visiblity',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  }
];






const Test_Playlist = () => {

     const authHeader = useAuthHeader()
     const [rows,setRows] = useState([])

  const FetchPlaylist = async ()=>{
  try{

     const resp = await axios.get(`${Baseurl}/playlists`, { headers: { "Content-Type": "application/json","Authorization": authHeader() }})
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
                 <span className='font-bold text-2xl mx-2 my-4'>Playlist of Test Series</span>

            </div>
            <div>
                <div className='flex justify-end'>
                    <CreatePlaylist />
                </div>
            </div>
        </div>
        <div>
          <CustomTable columns={columns} rows={rows} />

        </div>
    </>
  )
}

export default Test_Playlist