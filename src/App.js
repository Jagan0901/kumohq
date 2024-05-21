import logo from './logo.svg';
import './App.css';
import { BrandName } from './Components/BrandName';
import { BrandLogo } from './Components/BrandLogo';
import { QuickBooks } from './Components/QuickBooks';
import { Mailchimp } from './Components/Mailchimp';
import { NavBar } from './Components/NavBar';

function App() {
  return (
    <div className="App">
      {/* <BrandName/>
       <BrandLogo/>
       <QuickBooks/>
       <Mailchimp/> */}
       <NavBar/>
    </div>
  );
}

export default App;
