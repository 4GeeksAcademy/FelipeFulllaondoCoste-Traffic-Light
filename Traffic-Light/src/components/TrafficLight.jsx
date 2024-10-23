import React, { useState } from "react";
import '/src/App.css'

const TrafficLight = () => {

    const [selected, setSelected] = useState(null)

    const prenderLuz = (id) => {
        setSelected(id);
    }

    const alternarLuz = () => {
        if (selected === 'red') {
            return setSelected('yellow')
        } else if (selected === 'yellow') {
            return setSelected('green')
        } else {
            return setSelected('red')
        }
    }

    return (
        <>
            <div
                className="container d-flex flex-column align-items-center bg-dark p-3"
                style={{ width: "20px", height: "150px" }}>
            </div>

            <div className="container d-flex flex-column align-items-center bg-dark p-3 rounded" style={{ width: "150px" }}>
                <div
                    className={`bg-danger rounded-circle ${selected === 'red' ? 'glow' : ''}`}
                    style={{ width: "100px", height: "100px" }}
                    onClick={() => prenderLuz('red')}>
                </div>
                <div
                    className={`bg-warning rounded-circle ${selected === 'yellow' ? 'glow' : ''}`}
                    style={{ width: "100px", height: "100px" }}
                    onClick={() => prenderLuz('yellow')}>
                </div>
                <div
                    className={`bg-success rounded-circle ${selected === 'green' ? 'glow' : ''}`}
                    style={{ width: "100px", height: "100px" }}
                    onClick={() => prenderLuz('green')}>
                </div>
            </div>


            <div className="container d-flex flex-column align-items-center p-3">
                <button onClick={alternarLuz} type="button" className="btn btn-outline-light btn-lg border">Alternar Color</button>
            </div>
        </>
    );
};

export default TrafficLight;