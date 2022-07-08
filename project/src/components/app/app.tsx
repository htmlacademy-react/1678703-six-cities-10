import MainPage from '../../pages/main-page/main-page';


type AppProps = {
  quantityOffers: number;
}


function App({quantityOffers}: AppProps): JSX.Element {


  return (
    <MainPage quantityOffers={quantityOffers}/>
  );
}

export default App;
