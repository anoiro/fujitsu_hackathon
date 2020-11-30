var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    var name = req.body.name;
    var mail = req.body.e-mail;
    var pass = req.body.pass;
    console.log(name);
  });

module.exports = router;

const Submit = () =>(
    <div>
        <h1>ご登録ありがとうございます</h1>
        <div>
        <Link href="/">
        <a>ホームに戻る &gt;&gt;</a>
        </Link>
        </div>
    </div>
    );export default Submit;