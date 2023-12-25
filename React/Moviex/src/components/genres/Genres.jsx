import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home);

    return (
        <div className="genres">
            {data?.map((g) => {
                if (!genres[g]?.name) return;
                return (
                    <div key={g} className="genre">
                        {genres[g]?.name}
                    </div>
                );
            })}
        </div>
    );
};

export default Genres;



/*import React from 'react'


import './style.scss'
import { useSelector } from 'react-redux'

const Genres = () => {
    const { genres } = useSelector((state) => state.home)
    const data = Object.values(genres);
    //console.log("data", data);
    return (
        <div className="genres">
            {data?.map((g) => {
                //console.log(g)
                if (!genres[g]?.name) return null;
                return (
                    <div key={g} className="genre">
                        {genres[g]?.name}
                    </div>
                );
            })}
        </div>
    )
}

export default Genres*/