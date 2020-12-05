import Link from 'next/link';
import Layout from '../components/Layout';
import QR_sample from '../components/QR_sample';
//import Sample from '../components/qrread';


export default () =>(
  <Layout header="Fire" title="Sample data.">
    <QR_sample />
  </Layout>
);
