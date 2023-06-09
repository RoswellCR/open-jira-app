import { useContext } from 'react';
import { Drawer, Box, Typography, List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { UIContext } from '../../context/ui';

const menuItems: string[]= ['Inbox', 'Starred', 'Send Email', 'Draft']

export const Sidebar = () => {
  
  const {sidemenuOpen} = useContext(UIContext);
  const {closeSideMenu} = useContext(UIContext);

    return (
    <Drawer
        anchor="left"
        open={sidemenuOpen}
        onClose={closeSideMenu}
    >
        <Box sx={{ width: 250}}>
            <Box sx={{ padding : '5px 10px' }} >
                <Typography variant='h4'>Menu</Typography>
            </Box>

            <List>
                {
                    menuItems.map((text, index)=>(
                        <ListItemButton key={text}>
                            <ListItemIcon>
                                {index % 2 ? <InboxOutlinedIcon/> : <EmailOutlinedIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    ))
                }
            </List>
            <Divider />
            <List>
                {
                    menuItems.map((text, index)=>(
                        <ListItemButton key={text}>
                            <ListItemIcon>
                                {index % 2 ? <InboxOutlinedIcon/> : <EmailOutlinedIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    ))
                }
            </List>
        </Box>
        
    </Drawer>
  )
}
