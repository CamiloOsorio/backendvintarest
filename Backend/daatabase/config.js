const mongoose = require('mongoose')

const dbConnection = async() => {
    try {
        mongoose.connect(process.env.DB_CONNECTION, {
            autoIndex: true
        })
        console.log('DB online')
    } catch (error) {
        console.log(error)
        throw new Error('error al conectar en DB')
    }
}

module.exports={dbConnection}