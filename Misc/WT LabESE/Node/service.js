function concat(req, res) {
    var fn = req.query.string1;
    var fn2 = req.query.string2;
    res.send(fn + " " +  fn2);
  }
  var attachService = function (app) {
    app.get("/svc/concat", concat);
  };
  exports.attachService = attachService;