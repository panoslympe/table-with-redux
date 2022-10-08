import {Group,Help} from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const Head = () => {
    const users = useSelector(state => state.data);
    const selectedUsersLength = users.filter(entry => entry.checked).length;

    return (
        <Box display="flex" justifyContent="space-between">

            <Box display="flex" alignItems="center">
                <Group fontSize="large" sx={{ border: "1px solid black", borderRadius: "50%", padding: "3px", marginRight: "5px" }} />
                <Typography>Users</Typography>
            </Box>

            <Box  display="flex" alignItems="center">
                <Typography>{selectedUsersLength} selected</Typography>
                <Help fontSize="large" sx={{ padding: "3px", marginLeft: "5px" }} />
            </Box>
        </Box>
    )

}

export default Head