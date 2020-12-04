import Link from 'next/link';
import Layout from '../components/Layout';
import Upload from '../components/Upload';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Panel from "react-bootstrap/lib/Panel";
import { Button, Panel} from "react-bootstrap";

export default () =>(
	<Layout header="" title="健康状況 Upload Page">
	<Upload />
	</Layout>
)
