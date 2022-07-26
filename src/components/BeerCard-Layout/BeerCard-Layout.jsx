import BeerCard from "../BeerCard/BeerCard";
import "./BeerCard-Layout";

const BeerCardLayout =({beersData}) => {

  const beerCard = beersData.map(beer => {
    return <BeerCard key={beer.id} name={beer.name} description={beer.description} image={beer.image_url} />
  })

  return (  
    <section>
      <p className="beerCards"> {beerCard}</p>
    </section> 
  )
}

export default BeerCardLayout