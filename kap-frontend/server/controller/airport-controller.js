import Airport from '../model/airport.js';

// Get all airports
export const getAirports = async (request, response) => {
    try{
        const airports = await Airport.find();
        response.status(200).json(airports);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the airport in database
export const addAirport = async (request, response) => {
    const airport = request.body;
    
    const newAirport = new Airport(airport);
    try{
        await newAirport.save();
        response.status(201).json(newAirport);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a airport by id
export const getAirportById = async (request, response) => {
    try{
        const airport = await Airport.findById(request.params.id);
        response.status(200).json(airport);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited airport in the database
export const editAirport = async (request, response) => {
    let airport = request.body;

    const editAirport = new Airport(airport);
    try{
        await Airport.updateOne({_id: request.params.id}, editAirport);
        response.status(201).json(editAirport);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Deleting data of airport from the database
export const deleteAirport = async (request, response) => {
    try{
        await Airport.deleteOne({_id: request.params.id});
        response.status(201).json("Airport deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}