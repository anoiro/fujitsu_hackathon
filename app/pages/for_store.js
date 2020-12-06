import Link from 'next/link';
import Layout_for_Store from '../components/Layout_for_Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

export default () =><div>
	<Layout_for_Store header="" title="店舗用">
		<div class="explain">
			<div>Checking Health Application Over Corona (CHAOC)へようこそ．<br/>このアプリはコロナ抑制を目指したアプリになります．初めての方はRegistrationでアカウント作成，アカウント作成済みの方はログインへ進んでください．</div>
		</div>
		<p>ログイン後、QRコード読み取り、店舗状況の確認がご利用頂けます。</p>
		<p>QRコード読み取り　→ Read QR Coad</p>
		<p>店舗状況確認　→ Shop Situation</p>
		<div>
  		<Link href="/">
		  <button>消費者用はこちら&gt;&gt;</button>
			</Link>
		</div>
	</Layout_for_Store>
</div>
