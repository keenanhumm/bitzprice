import Layout from "../components/Layout";
import Prices from "../components/Prices";
import Fetch from "isomorphic-unfetch";

const Index = (props) => (
  <Layout>
    <h1>Welcome to Bitzprice!</h1>
    <p>Keenan Humm</p>
    <Prices bpi={props.bpi} />
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await Fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const { bpi } = await res.json();

  return { bpi };
} 

export default Index;
