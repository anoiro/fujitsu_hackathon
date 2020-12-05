import Link from 'next/link';
import Layout from '../components/Layout';
import QRread from '../components/Read_QR';


export default () =>(
  <Layout>
    <QRread />
  </Layout>
);
// import dynamic from 'next/dynamic'
// const DynamicComponent = dynamic(
//     () => import('../../../components/QrReaderComponent'),
//     { ssr: false }
// )
// return (
//        <Layout header="Fire" title="Sample data.">
//         <DynamicComponent  />
//          <QRread />
//        </Layout>
// )
// export default DynamicComponent
