const mongoose = require('mongoose');

const platformSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    last:{
        type:String,
        require:true
    },
    buy:{
        type:String,
        require:true
    },
    sell:{
        type:String,
        require:true
    },
    volume:{
        type:String,
        require:true
    },
    base_unit:{
        type:String,
        require:true
    }
});

const Platform = mongoose.model('platform', platformSchema);

module.exports = Platform;