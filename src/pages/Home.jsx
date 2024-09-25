import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import Tags from "../components/tags/Tags";
import Pagination from "../components/ui/Pagination";
import Videos from "../components/videos/Videos";

function Home() {
  return (
    <div>
      <Navbar />
      <Tags />
      <Videos />
      <Pagination />
      <Footer />
    </div>
  );
}

export default Home;
