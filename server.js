const express = require("express");
const path = require('path');
const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({
    extended: false,
  })
  
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static(path.resolve(__dirname, './build')));
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});

app.post('/', function (
    request,response
  ) {
    //imitation of slowly server
    setTimeout(()=>{
      if (!request.body){
        response.json({status:false, text:'NO DATA'}) 
      } else{
      if (request.body.status){
            response.json({status:true, text:'Date saves in server'})  
          }
        else{
            response.json({status:false, text:'ERROR VALIDATION'})  
        }
      }
    },500)
  })



app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });