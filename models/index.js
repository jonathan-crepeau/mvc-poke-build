const mongoose = require('mongoose');
const uri = "mongodb+srv://jonathan-crepeau:my-password@pokedexcluster.urgkbpy.mongodb.net/pokedex-build?retryWrites=true&w=majority"

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {console.log('DB connected...')})
    .catch((error) => console.log(error));

module.exports = {
    Pokemon: require('./Pokemon'),
}