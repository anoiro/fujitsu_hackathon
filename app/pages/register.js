import Link from 'next/link';
import React from 'react';

const Register = () =>(
<div>
    <h1>ユーザー登録</h1>
    <div>以下の内容を入力してください。</div><br/>
    <form action="./routes/request" method= "post" name="Form">
    お名前：<br/>
    <input type="text" name="name" required/><br/><br/>
    メールアドレス：<br/>
    <input type="text" name="e-mail" required/><br/><br/>
    パスワード：<br/>
    <input type="password" name="pass" required/><br/><br/>

    <input type="reset" name="reset" value="リセット"/>&ensp;
    <input type="submit" name="submit" value="登録"/><br/><br/>
    </form>
    <div>
    <Link href="/">
    <a>ホームに戻る &gt;&gt;</a>
    </Link>
    </div>
</div>
);export default Register;