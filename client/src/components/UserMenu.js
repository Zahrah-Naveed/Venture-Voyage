import {useValue} from '../context/ContextProvider';
import { Logout, Settings } from '@mui/icons-material'
import {ListItemIcon, Menu, MenuItem} from '@mui/material'
import React from 'react'
import Dashboard from '../pages/dashboard/Dashboard';
const UserMenu = ({anchorUserMenu, setAnchorUserMenu}) => {
    const{dispatch} = useValue()
    const handleCloseUserMenu = ()=>{
        setAnchorUserMenu(null)
    }

    const navigate=useNavigate()

    return (
        <Menu
        anchorEl={anchorUserMenu}
        open={Boolean(anchorUserMenu)}
        onClose={handleCloseUserMenu}
        onClick={handleCloseUserMenu}
        >
            <MenuItem>
            <ListItemIcon>
                <Settings fontsize="small" />
            </ListItemIcon>
            Profile
            </MenuItem>

            <MenuItem onClick={()=> navigate('dashboard')}>
            <ListItemIcon>
                <Dashboard fontsize="small" />
            </ListItemIcon>
            Dashboard
            </MenuItem>

            <MenuItem onClick={()=>dispatch({type:'UPDATE_USER', payload:null})}>
            <ListItemIcon>
                <Logout fontsize="small" />
            </ListItemIcon>
            Logout
            </MenuItem>
        </Menu>
    )
}

export default UserMenu;