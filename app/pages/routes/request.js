var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    var name = req.body.Name;
    var age = req.body.Age;
    var gender = req.body.gender;
    var mail = req.body.Maill;
    var pass = req.body.Pass;
    console.log(name);
  });

module.exports = router;

const A = () =>(
    <div>
        <h1>ご登録ありがとうございます</h1>
        <div>
        <Link href="/">
        <a>ホームに戻る &gt;&gt;</a>
        </Link>
        </div>
    </div>
    );export default A;