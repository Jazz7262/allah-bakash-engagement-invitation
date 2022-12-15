import React from "react";
import "../styles/Timeline.css";

function Timeline() {
    return (
        <section id="timeline">
            <h1 className="inshaallaah">Inshaallaah ...</h1>

            <div className="wrapper" data-aos="fade-up" data-aos-delay="100">
                <div className="content">
                    <h1>Engagement Ceremony</h1>
                    <p>
                        On Saturday, 17<sup>th</sup> December, 2022,
                        <br />
                        22<sup>nd</sup> Jamaad-ul-'Ulaa, 1444 Hijri,
                        <br />
                        Time: 02:00 PM.
                    </p>
                    <h2>Venue:</h2>
                    <p>
                        Mubarak Function Hall,
                        <br /> Bandihatti Road,
                        <br /> Cowl Bazaar, Bellari,
                        <br /> Karnataka - 583 102.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
