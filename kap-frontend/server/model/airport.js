import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const airportSchema = mongoose.Schema({
    name: String,
    type: String,
    iso_country: String,
    gps_code: String
});

autoIncrement.initialize(mongoose.connection);
airportSchema.plugin(autoIncrement.plugin, 'airports');
// we need to turn it into a model
const postAirport = mongoose.model('airports', airportSchema);

export default postAirport; 