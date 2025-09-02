import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [actors, setActors] = useState([]);

  const fetchActor = () => {
    axios
      .get(`https://lanciweb.github.io/demo/api/actors/`)
      .then((resp) => {
        console.log(resp.data)
        setActors(resp.data)
      })
    axios
      .get(`https://lanciweb.github.io/demo/api/actresses/`)
      .then((resp) => {
        console.log(resp.data)
      })
  }

  useEffect(fetchActor, []);

  return (
    <>
      <div className="bg-lg-gray">
        <div className="container ">
          <div className="row gy-3">
            <div className="col-12">
              <h1 className="text-center">Cast:</h1>
            </div>
            {actors.map((actor) => {
              return (
                <div className="col-12 col-md-4" key={actor.id}>
                  <div className="card" >
                    <img src={actor.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="head-card mb-3">
                        <h5 className="card-title mt-2">Nome: {actor.name}</h5>
                        <span className="card-text">Anno di nascita: <strong>{actor.birth_year}</strong></span>
                        <p className="card-text">Nazionalità: <strong>{actor.nationality}</strong></p>
                        <p className="card-text mb-3"><small className="text-body-secondary">Biografia: {actor.biography}</small></p>
                      </div>
                      <p className="card-text"><strong>Known for: {actor.known_for.join(", ")}</strong></p>
                    </div>
                  </div>
                </div>
              )
            })

            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
