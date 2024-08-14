import Header from '../components/Header';
import Header1 from '../components/Header1';
import Card from '../components/Card' 
import Footer from '../components/Footer'
import Top from '../components/Top'
import Header2 from '../components/Header2'

export default function Home() {
  return (
    <>
    <Top/>
      <Header />
      <Header1 />
      <Header2/>
      <Card/>
      <Footer/>
    </>
  );
}
