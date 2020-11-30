import Link from 'next/link';
import React from 'react';

const Register = () =>(
<div>
    <h1>ユーザー登録</h1>
    <div>あなたについて教えてください。</div><br/>
    <form action="./routes/request" method= "post" name="Form">
    お名前：<br/>
    <input type="text" name="Name" required/><br/><br/>
    年齢：<br/>
    <input type="text" name="Age" required/><br/><br/>
    性別：<br/>
    <input type="radio" name="gender" required/>男性&ensp;
    <input type="radio" name="gender" required/>女性<br/><br/>
    メールアドレス：<br/>
    <input type="text" name="Mail" required/><br/><br/>
    パスワード：<br/>
    <input type="password" name="Pass" required/><br/><br/>

    <input type="reset" name="Reset" value="リセット"/>&ensp;
    <input type="submit" name="Submit" value="登録"/><br/><br/>
    </form>
    <div>
    <Link href="/">
    <a>ホームに戻る &gt;&gt;</a>
    </Link>
    </div>
</div>
);export default Register;