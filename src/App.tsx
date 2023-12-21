import classes from './App.module.css'
import CustomerReviews from './components/CustomerReiviews/CustomerReviews';
import Footer from './components/Footer/Footer';
import HealthcareProvider from './components/HealthcareProvider/HealthcareProvider';
import LatestArticle from './components/LatestArticles/LatestArticle';
import MobileApp from './components/MobileApp/MobileApp';
import OurServices from './components/OurServices/OurServices'
import TopBar from './components/TopBar/TopBar'
import VirtaulHealthcare from './components/VirtualHealthcare/VirtualHealthcare'

function App() {
  return (
    <>
    <div className={classes.container}>
      <header>
        <TopBar/>
        <VirtaulHealthcare/>
      </header>
      <OurServices/>
      <HealthcareProvider />
      <MobileApp />
      <CustomerReviews />
      <LatestArticle />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App
