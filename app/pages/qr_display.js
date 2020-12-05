import Link from 'next/link';
import Layout from '../components/Layout';
import QR_display from '../components/QR_display';
//import Sample from '../components/qrread';


export default () =>(
  <Layout title = "健康状態">
    <QR_display />
  </Layout>
);
