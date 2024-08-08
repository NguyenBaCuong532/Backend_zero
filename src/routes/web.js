app.get('/', function (req, res) {
    res.send('Hello World 123')
  })
  
  app.get('/abc', function (req, res) {
    res.send('Check ABC')
  })
  app.get('/cuongnb', function (req, res) {
    res.render('sample.ejs')
  })
  