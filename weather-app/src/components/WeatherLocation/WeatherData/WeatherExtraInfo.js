import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeaterExtraInfo = ({humidity, wind}) =>(
    <div className = "weatherExtraInfo">
        <span className = "extraInfoHumedad"> {`Humedad: ${humidity} % `}</span>
        <span className = "extraInfoViento"> {`Viento: ${wind}`}</span>
    </div>
);

WeaterExtraInfo.propTypes = {
    humidity : PropTypes.number.isRequired,
    wind:PropTypes.string.isRequired,
};

export default WeaterExtraInfo;