import classes from './App.module.css'
import CustomerReviews, { Review } from './components/CustomerReiviews/CustomerReviews';
import Footer from './components/Footer/Footer';
import HealthcareProvider from './components/HealthcareProvider/HealthcareProvider';
import LatestArticle from './components/LatestArticles/LatestArticle';
import MobileApp from './components/MobileApp/MobileApp';
import OurServices from './components/OurServices/OurServices'
import TopBar from './components/TopBar/TopBar'
import VirtaulHealthcare from './components/VirtualHealthcare/VirtualHealthcare'

function App() {
  const reviews: Review[] = [
    {name: "Edward Newgate", position: "Founder Circle", review: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”'},
    {name: "Vasiliy Newgate", position: "Founder Rectange", review: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”'},
    {name: "Ivan Newgate", position: "Founder Square", review: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”'},
    {name: "Andrew Newgate", position: "Founder Triangle", review: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”'},
  ]
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
      <CustomerReviews reviews={reviews}/>
      <LatestArticle />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App
