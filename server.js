var http = require('http');
var path = require('path');
var express = require('express');
var app = require('express')();
var fileUpload = require('express-fileupload');
app.use(fileUpload());

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
    

        res.sendFile(__dirname + '/public/index.html');

  


});
//-------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------
app.post('/upload', function(req, res) {
    var tem = req.get('host');

 
       
        if (!req.files.ufile)
            res.send('<h2>No files were uploaded :( </h2>');
        else {
        	fname=req.files.ufile.name;
        	console.log(fname);
        	
            sampleFile = req.files.ufile;
           
           sampleFile.mv('uploads/' + fname , function(err) {
                    if (err)
                        return res.status(500).send(err);

                    
                    res.send('<h2>File uploaded Successfully :) </h2><a href="./index.html">Back</a>');
                });

        }
   
});
console.log("Server on port 8000");
app.listen(8000);