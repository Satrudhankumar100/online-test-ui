import React from 'react'
import CustomTable from '../../../components/custom/CustomTable'
import CreatePlaylist from '../../../components/playlist/CreatePlaylist'


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

function createData(testSeriesId,playlistId,title,description, noOfTestSeries, price, exprieDate,visiblity) {

  return {testSeriesId,playlistId, title, description,noOfTestSeries, price, exprieDate,visiblity };
}

const rows = [
  createData(1,1,'BPSC TRE 4.0','nothing but a problems', '50', 50, '30 days','public'),

];


const Test_Playlist = () => {
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