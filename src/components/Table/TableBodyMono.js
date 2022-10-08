import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Table, TableContainer, TableHead, TableCell, TableBody, Paper, Checkbox, Typography, TableRow, Switch } from "@mui/material";
import { columns } from './data';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTableData, setCheckedUsers, updateEntry } from '../../store/slice';


const TableBodyMono = (props) => {



    const users = useSelector(state => state.data);
    const checkedUsers = useSelector(state => state.checkedUsers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTableData())
    }, []);

    const handleChecked = (index) => {
     dispatch(setCheckedUsers(index));
    }


    return (
        <TableBody>
            {users?.map((user, index) => {
                return <TableRow key={user.id}>
                    <TableCell>
                        <Checkbox checked={user.checked} onChange={() => handleChecked(index)} />
                    </TableCell>
                    {columns.map((column, index) => {
                        if (column === "STATUS") return <TableCell key={`${index}+column`}>
                            <Switch
                                checked={user["active"]}
                                onChange={() => dispatch(updateEntry(user))} />
                        </TableCell>
                        return <TableCell key={`${index}-column`}>{user[column.toLowerCase()]}</TableCell>
                    }
                    )}
                </TableRow>
            }
            )}
        </TableBody>
    )
}

TableBodyMono.propTypes = {}

export default TableBodyMono;
