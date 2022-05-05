const express = require('express');
const axios = require('axios');
const soap = require('soap')
const PORT = process.env.PORT || 4000;

const app = express();

const splitter_function = (agr)=>{
    console.log('splitter function')
    const splitter = agr.splitter
    const splitted_msg = args.message.slp
}



app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
