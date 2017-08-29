var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
articleOne:{
    title:'Article One | Rozeen Zorzis',
    heading: 'Article One',
    date: 'Aug 29,2017',
    content:`
    <p>This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article. 
           </p>    
           <p>This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article. 
           </p>
           <p>This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article. 
           </p>`
    
},
articleTwo:{
    title:'Article Two | Rozeen Zorzis',
    heading: 'Article Two',
    date: 'Aug 30,2017',
    content:`
    <p>This is the content of my second article.
           </p>`
},
articleThree:{
    title:'Article Three | Rozeen Zorzis',
    heading: 'Article Three',
    date: 'Aug 31,2017',
    content:`
    <p>This is the content of my third article.
           </p>`
},
};
function createTemplate(data){
        var title=data.title;
        var date=data.date;
        var heading=data.heading;
        var content=data.content;
    
        var htmlTemplate=`
        <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content ="width=device-width, initial-scale=1">
             <link href="/ui/style.css" rel="stylesheet" />
        </head>   
        <body>
           <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                  ${content}
                </div>
          </div>
        
        </body>
        </html>


`;
       return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'ui' , 'index.html'));
});
app.get('/article-one',function(req,res){
    res.send(createTemplate(articleOne));
});

app.get('/article-two',function(req,res){
    res.send(createTemplate(articleTwo));
});

app.get('/article-three',function(req,res){
   res.send(createTemplate(articleThree));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
}); 

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
