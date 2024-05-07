
import './App.css';
import Counter from './components/Counter';
import FooterBoot from './components/FooterBoot';
import HeaderBoot from './components/HeaderBoot';
import Items from './components/Items';
import MainBrandName from './components/MainBrandName';




import NavBarBoot from './components/MainBrandName';
import RegisterForm from './components/RegisterForm';



function App() {
  return (
    <div className="App">
      <HeaderBoot></HeaderBoot>
    <MainBrandName></MainBrandName>
    <Items/>
  
    {/* <Counter/>
   <RegisterForm/> */}
      
    <FooterBoot/>
      

    </div>
  );
}

export default App;
