const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DATABASE_DEPLOY)
        console.log("connect db success")

    }catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB;