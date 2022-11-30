import { useState } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addAirport } from '../Services/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: '',
    type: '',
    iso_country: '',
    gps_code: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddAirport = () => {
    const [airport, setAirport] = useState(initialValue);
    const { name, type, iso_country, gps_code } = airport;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setAirport({...airport, [e.target.name]: e.target.value})
    }

    const addAirportDetails = async() => {
        await addAirport(airport);
        navigate('/all');
    }
    
    return ( 
        <Container>
            <Typography variant="h4">Add Airport</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Type</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='type' value={type} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Country</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='iso_country' value={iso_country} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">GPS Code</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='gps_code' value={gps_code} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addAirportDetails()}>Add Airport</Button>
            </FormControl>
        </Container>
    )
}

export default AddAirport;