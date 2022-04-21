import React from 'react';
import PropTipes from 'prop-types';

import './Error.css'

const Error = ({message}) => (
    <div className="error alert position-absolute" role="alert">
        {message}
    </div>
);

Error.PropTipes = {
    message: PropTipes.string,
};

Error.defaultProps = {
    message: 'Ha ocurrido un error',
}

export default Error;