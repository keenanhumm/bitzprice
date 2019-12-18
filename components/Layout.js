import NavBar from "./NavBar";
import Head from "next/head";

const Layout = props => (
  <div>
    <Head>
      <title>BitzPrice</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/cosmo/bootstrap.min.css"
      />
    </Head>
    <NavBar />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;