import React, {useContext} from 'react'
import { Box, Divider, Drawer, List, Typography, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MailOutlineOutlineIcon from '@mui/icons-material/MailOutlineOutlined'
import InboxOutlineIcon from '@mui/icons-material/InboxOutlined'
import { UIContext } from '../../context/ui/UIContext';
const menuItems : string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {

    const {sidemenuOpen,closeSideMenu} = useContext(UIContext)
  return (
    <Drawer
        anchor="left"
        open={sidemenuOpen}
        onClose={closeSideMenu}
    >
        <Box sx={{padding:'5px 10px'}}>
            <Typography variant="h4">Menú</Typography>
        </Box>
        <Box sx={{width: 250}}>
            <List>
                {menuItems.map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 ? <InboxOutlineIcon/> : <MailOutlineOutlineIcon/> }
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {menuItems.map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 ? <InboxOutlineIcon/> : <MailOutlineOutlineIcon/> }
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>

        </Box>
    </Drawer>
  )
}
