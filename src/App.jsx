import "./App.scss";
import beers from "./Data/BeerData";
import BeerCardLayout from "./components/BeerCard-Layout/BeerCard-Layout";


const App = () => {


  return (
    <div className="beerCard__application">
      <h1 className="beerCard__heading">Punk API</h1>      
      <BeerCardLayout beersData={beers}/>
    </div>
  );
};

export default App;
