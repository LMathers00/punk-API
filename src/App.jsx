import "./App.scss";
import beers from "./Data/BeerData";
import BeerCardLayout from "./components/BeerCard-Layout/BeerCard-Layout";


const App = () => {


  return (
    <div className="beerCard__application">
      <main className="beerCard-container">
      <h1 className="beerCard__heading">Punk API</h1>
      <section className="beerCard-container__beer-container">
      <BeerCardLayout beersData={beers}/>
        </section> 
        </main>     
  
    </div>
  );
};

export default App;
