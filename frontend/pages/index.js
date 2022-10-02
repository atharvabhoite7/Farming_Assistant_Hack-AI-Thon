import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import HomeContent from "../components/HomeContent";

export default function Home() {
  return (
    <Layout title="Home" content="This is the homepage">
      <HomeContent />
    </Layout>
  );
}
