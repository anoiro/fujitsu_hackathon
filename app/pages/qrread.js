import Link from 'next/link';
import Layout_for_Store from '../components/Layout_for_Store';
import QRread from '../components/Read_QR';


export default () =>(
  <Layout_for_Store>
    <QRread />
  </Layout_for_Store>
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
