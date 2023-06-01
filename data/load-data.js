const fetch = require('cross-fetch');
const Platform = require('../models/platformModel');

const flushData = async()=>{
    try{
        await Platform.deleteMany();
        console.log('Existing data flushed successfully');
    }
    catch(err){
        console.error('Error flushing existing data:', err);
    }
}

const loadData = async()=>{
    try{
        const response = await fetch('https://api.wazirx.com/api/v2/tickers');
        const {btcinr,xrpinr,ethinr, trxinr, eosinr, zilinr, batinr, zrxinr, reqinr, nulsinr} = await response.json();
        const dataObj = [btcinr,xrpinr,ethinr, trxinr, eosinr, zilinr, batinr, zrxinr, reqinr, nulsinr];
        // console.log(dataObj.length);
        await Platform.create(dataObj);
        console.log('Data Loaded Successfully in database');
    }
    catch(err){
        console.log(err);
    }
}

module.exports={flushData, loadData};