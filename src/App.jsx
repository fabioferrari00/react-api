import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  axios
    .get(`https://lanciweb.github.io/demo/api/actors/`)
    .then((resp) => {
      console.log(resp.data)
    })
  axios
    .get(`https://lanciweb.github.io/demo/api/actresses/`)
    .then((resp) => {
      console.log(resp.data)
    })

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Cast:</h1>
          </div>
          <div className="col-12 col-md-4">
            <div class="card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/220px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png" className="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Nome:</h5>
                <span class="card-text">Anno di nascita:</span>
                <span class="card-text">Nazionalità:</span>
                <p class="card-text"><small class="text-body-secondary">Biografia:</small></p>
                <p class="card-text"><small class="text-body-secondary">Known for:</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
