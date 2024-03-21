// Index is the Entry point
//require mongoose after running npm install mongodb
const mongoose = require('mongoose');

const { ATLAS_URI } = require('../config');

mongoose
  .connect(ATLAS_URI)
  .then(() => console.log('Database connected!'))
  .catch((err) => console.error(err))

  //setup schemas
  const playerSchema = new mongoose.Schema({
    username: String,
    password: String,
    characterName: String,
    class: String,
    healthPoints: Number,
    magicPoints: Number,
    currency: Number,
    inventory: [String],
    img: String
  })
//creates player in the db
const Player = mongoose.model('Player', playerSchema)

module.exports = {
  Player
}