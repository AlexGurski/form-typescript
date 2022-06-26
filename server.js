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

app.post('/', function (
    request,
    response
  ) {
    if (!request.body) return response.sendStatus(400)
    console.log(request.body)
    setTimeout(()=>{
        response.json(request.body)
    },500)
  })

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });