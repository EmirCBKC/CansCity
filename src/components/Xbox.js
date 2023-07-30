import React, { useState, useEffect } from 'react';
import GamesData from './GamesData';

const XboxGameAPI = () => {
    const [xboxGame, setxboxGame] = useState([]);


    useEffect(() => {
        setxboxGame(GamesData);
    }, []);

    let xboxGames = xboxGame.filter(element => element.title == "XBOX" && element.edition.edition_name == "STANDART")

    return (
        <>
            {xboxGames.map((element) => (
                <div key={element.id} className="mt-5 mb-5 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="pc-game d-flex flex-column align-items-center">
                        <div className="p-4 d-flex flex-column align-items-center">
                            <img src={element.edition.img} width="100%" height="400px"></img>
                            <h1 className="text-center mt-2">{element.edition.game_name}</h1>
                            <h2 className="text-center price mt-2">{element.edition.price}$</h2>
                            <a href="/detail.html?id=${element.id}" className="btn btn-light mt-2">Go detail</a>
                            <button id="${element.id}" className="add-basket mt-2">Add Basket</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

function Xbox() {
    return (
        <>
            <div className="xbox-background d-flex justify-content-center flex-column align-items-center">
                <div data-aos="fade-up">
                    <div className="header">
                        <img src="/main-img/xbox/background.jpg" width="100%" height="100%"></img>
                    </div>
                </div>

                <div className="xbox-filter d-flex justify-content-around align-items-center mt-5 mb-5">
                    <button id="lowXbox" className="btn btn-danger">Low Price$</button>
                    <button id="highXbox" className="btn btn-danger">High Price$</button>
                    <input id="xbox_search" className="text-center" type="text" placeholder="search"></input>
                </div>

                <div className="xbox-content p-3">
                    <div id="xbox" className="xbox-row p-5 row">
                        <XboxGameAPI />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Xbox;