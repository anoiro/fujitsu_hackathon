import Link from 'next/link';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Index from '../components/Index';

export default () =><div>
	<Layout header="" title="Home">
		<div class="explain">
			<div>Checking Health Application Over Corona (CHAOC)へようこそ．このアプリはコロナ抑制を目指したアプリになります．初めての方はRegistrationでアカウント作成，アカウント作成済みの方はログインへ進んでください．</div>
		</div>
  	<Link href="/registration">
		<button>アカウント作成&gt;&gt;</button>
		</Link>
		<div>
  		<Link href="/login">
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
  		<Link href="/for_store">
		  <button>店舗用はこちら&gt;&gt;</button>
			</Link>
		</div>
	</Layout>
</div>
