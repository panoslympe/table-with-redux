import { useEffect, useState } from 'react';
import axios from "axios";
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";
import TableHeadMono from './TableHeadMono';
import TableBodyMono from './TableBodyMono';
import Head from './Head';

const DataTable = () => {
    const [users, setUsers] = useState([]);



    // useEffect(() => {
    //    getUsers();
    // }, []);

    // const getUsers = async () => {
    //     const {data} = await axios.get(" https://panos.users.challenge.dev.monospacelabs.com/users");
    //     setUsers(data);
    // }



    return (
        <TableContainer>
            <Table>
                <TableHeadMono />
                <TableBodyMono />
            </Table>
        </TableContainer>

    )
}

export default DataTable