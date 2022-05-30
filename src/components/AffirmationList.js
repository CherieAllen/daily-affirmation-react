import React, { useEffect, useState } from "react";
import AffirmationCard from "./AffirmationCard";

function AffirmationList() {
const [affirmations, setAffirmations] = useState();

  useEffect(() => {
    fetch("https://daily-affirmation-db.web.app/affirmations")
      .then((response) => response.json())
      .then((data) => setAffirmations(data))
      .catch(console.error);
  }, []);


  return (
    <section style ={{marginTop:'60px'}} >
  {!affirmations 
   ? <h2>Loading</h2>
    : affirmations.map (affirmations => <AffirmationCard affirmations ={affirmations} key={affirmations.id} /> )};
    </section>

    )
    }
 
    export default AffirmationList;

