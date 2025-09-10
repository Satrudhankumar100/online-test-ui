import React from 'react'
import CustomTable from '../../../components/custom/CustomTable'
import CreatePlaylist from '../../../components/playlist/CreatePlaylist'

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
        <CustomTable />
    </>
  )
}

export default Test_Playlist