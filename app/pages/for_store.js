import Link from 'next/link';
import Layout_for_Store from '../components/Layout_for_Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

export default () =><div>
	<Layout_for_Store header="" title="店舗用">
		<div class="explain">
			<div>Checking Health Application Over Corona (CHAOC)へようこそ．このアプリはコロナ抑制を目指したアプリになります．初めての方はRegistrationでアカウント作成，アカウント作成済みの方はログインへ進んでください．</div>
		</div>
  	<Link href="/registration_for_store">
		<button>アカウント作成&gt;&gt;</button>
		</Link>
		<div>
  		<Link href="/login_for_store">
			<button>ログイン&gt;&gt;</button>
			</Link>
		</div>
		<div>
  		<Link href="/user">
			<button>アカウント情報&gt;&gt;</button>
			</Link>
		</div>
		<br/>
		<div>
  		<Link href="/">
		  <button>消費者用はこちら&gt;&gt;</button>
			</Link>
		</div>
	</Layout_for_Store>
</div>
