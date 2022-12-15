import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mrs. Khanbu Abdul Aleem </h2>

                <h5 className="address my-3">
                    H.No. 1/56, Bada Maidan,
                    <br /> Khooni Mohallah,
                    <br /> Adoni, Kurnool Dist.,
                    <br /> AP - 518 301.
                </h5>
                <p className="address">
                    Contact: <br />
                    K. Zuber Ahmed, <br />
                    K. Al-Haaj Muhammed Javeed - +91 94415 80407. <br />
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
