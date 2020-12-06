import Link from 'next/link';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Index from '../components/Index';

export default () =><div>
	<Layout header="" title="Home">
		<div class="explain">
			<div>Checking Health Application Over Corona (CHAOC)へようこそ．<br/>このアプリはコロナ抑制を目指したアプリになります．初めての方はRegistrationでアカウント作成，アカウント作成済みの方はログインへ進んでください．</div>
		</div>
		<p>ログイン後、体調の入力、QRコード作成、店舗検索がご利用頂けます。</p>
		<p>体調の入力 → Upload</p>
		<p>QRコード作成　→ QR Coad</p>
		<p>店舗検索　→ Search Shop</p>
		<div>
  		<Link href="/for_store">
		  <button>店舗用はこちら&gt;&gt;</button>
			</Link>
		</div>
	</Layout>
</div>
