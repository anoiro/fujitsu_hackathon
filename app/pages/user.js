import Link from 'next/link';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

export default () =><div>
	<Layout header="" title="Accout">
		<div class="explain">
			<div>行いたい処理を選んでください。</div>
		</div>
  	<Link href="/user_confirm">
		<button>ユーザー情報確認&gt;&gt;</button>
		</Link>
		<div>
  		<Link href="/user_update">
			<button>ユーザー情報更新&gt;&gt;</button>
			</Link>
		</div>
        <div>
        <Link href="/user_delete">
            <button>アカウント削除&gt;&gt;</button>
        </Link>
        </div>
			<input type="text" size="30" />
	</Layout>
</div>