import React, { useState } from "react";
import '/src/App.css'

const TrafficLight = () => {

    const [selected, setSelected] = useState(null)

    const prenderLuz = (id) => {
        setSelected(id);
    }


    return (
        <>
            <div
                className="container d-flex flex-column align-items-center bg-dark p-3"
                style={{ width: "20px", height: "150px" }}>
            </div>

            <div className="container d-flex flex-column align-items-center bg-dark p-3 " style={{ width: "150px" }}>
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
        </>
    );
};

export default TrafficLight;