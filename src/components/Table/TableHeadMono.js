import React from 'react'
import PropTypes from 'prop-types';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Checkbox, Typography, Tab } from "@mui/material";
import { columns } from './data';
import { setCheckedUsersAll } from '../../store/slice';
import { useDispatch, useSelector } from 'react-redux';


function TableHeadMono(props) {

    const checkedUsers = useSelector(state => state.checkedUsers);
    const users = useSelector(state => state.data);

    const dispatch = useDispatch();

    const handleChecked = () => {
        dispatch(setCheckedUsersAll());

    }

    return (
        <TableHead>
            <TableRow>
                <TableCell>
                    <Checkbox checked={users.every(entry => entry.checked)} onChange={handleChecked} />
                </TableCell>
                {columns.map(entry => {
                    return <TableCell key={entry}>{entry}</TableCell>
                })}
            </TableRow>
        </TableHead>
    )
}

TableHeadMono.propTypes = {}

export default TableHeadMono
