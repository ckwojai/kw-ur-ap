import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { getAirports, deleteAirport } from '../Services/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllAirports = () => {
    const [airports, setAirports] = useState([]);
    
    useEffect(() => {
        getAllAirports();
    }, []);

    const deleteAirportData = async (id) => {
        await deleteAirport(id);
        getAllAirports();
    }

    const getAllAirports = async () => {
        let response = await getAirports();
        setAirports(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Country</TableCell>
                    <TableCell>GPS Code</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {airports.map((airport) => (
                    <TRow key={airport.id}>
                        <TableCell>{airport._id}</TableCell>
                        <TableCell>{airport.name}</TableCell>
                        <TableCell>{airport.type}</TableCell>
                        <TableCell>{airport.iso_country}</TableCell>
                        <TableCell>{airport.gps_code}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${airport._id}`}>Edit</Button> 
                            <Button color="secondary" variant="contained" onClick={() => deleteAirportData(airport._id)}>Delete</Button>
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllAirports;