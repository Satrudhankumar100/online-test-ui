import React from 'react'; // ✅ Import React
import { MdDashboardCustomize, MdOutlinePlaylistAdd } from 'react-icons/md';
import { FaUserEdit, FaPenSquare, FaUserLock } from 'react-icons/fa';

const InstitueNavData = [
    {
        id:1,
        title:'Dashboard',
        icon: MdDashboardCustomize,
        path:'/auth/dashboard' 
    },
     {
        id:2,
        title:'Profile',
        icon: FaUserEdit,
        path:'/auth/dashboard' 
    },
     {
        id:3,
        title:'Playlist',
        icon: MdOutlinePlaylistAdd,
        path:'/auth/test_playlist' 
    },
     {
        id:4,
        title:'Test Series',
        icon: FaPenSquare,
        path:'/auth/list_testseries/1'  
    },
     {
        id:5,
        title:'Logout',
        icon:FaUserLock,
        path:'/' 
    }
]

export {InstitueNavData}