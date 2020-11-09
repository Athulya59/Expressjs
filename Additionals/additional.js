app.get('/login', function (req, res)
{
    res.render('login.ejs');
});

app.post('/user-data', function (req, res) {
    var user = req.body.emaillogin;
    var pass = req.body.passwordlogin;

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
  var dbo = db.db("Images");
  var query = { username:user, password:pass };
  dbo.collection("Users").find(query).toArray(function(err, result) {
    if (err) throw err;
    
    db.close();
        });
      });
    
    
    
});




MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Images");
    var myobj = { ISO:iso , Resolution: resolution, Pixel:pixel, Exposure:exposure, Camera:camera };
    dbo.collection("Metadata").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });