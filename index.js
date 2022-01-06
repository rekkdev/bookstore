const express = require('express');
const app = express();
const fs = require('fs');


app.use(express.static('public'));
app.use('/css',express.static(__dirname+ 'public/css'));


function GetFormatedBookData(){
    var rawtext = fs.readFileSync("./data.txt",'utf-8');
    var rawbooklist = rawtext.split('\n');
    var output = `<table class = "table"><tr>
    <td>Book</td>
    <td>Author</td>
    <td>Categ</td>
    <td>sub Categ</td>
    <td>available</td>
    <td>borrowed</td>
    </tr>`;
    for (let i = 0; i < rawbooklist.length; i++) {
        const element = rawbooklist[i];
        output+="<tr>";
        for (let j = 0; j < element.split('/').length; j++) {
            const element_ = element.split('/')[j];
            output+="<td>"+element_+"</td>";
        }
        output+="</tr>";
    }
    output+="</table>";
    return output;
}

app.get('/', (req, res) => {
  res.send(`
    <html>
        <head>
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
        </head>
        <body>
            ${GetFormatedBookData()}
        </body>
    </html>
  `);
})

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
  console.log(`http://192.168.0.156:3000/`);
})

