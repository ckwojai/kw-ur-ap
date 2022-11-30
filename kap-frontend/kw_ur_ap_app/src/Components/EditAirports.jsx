import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getAirports, editAirport } from '../Services/api';

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
        margin-top: 20px
`;

const EditAirport = () => {
    const [airport, setAirport] = useState(initialValue);
    const { name, type, iso_country, gps_code } = airport;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadAirportDetails();
    }, []);

    const loadAirportDetails = async() => {
        const response = await getAirports(id);
        setAirport(response.data);
    }

    const editAirportDetails = async() => {
        const response = await editAirport(id, airport);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setAirport({...airport, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Type</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='type' value={type} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Country</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='iso_country' value={iso_country} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">GPS Code</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='gps_code' value={gps_code} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editAirportDetails()}>Edit Airport</Button>
            </FormControl>
        </Container>
    )
}

export default EditAirport;