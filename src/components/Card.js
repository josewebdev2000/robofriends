// Must import React to write JSX

import React from 'react';

// props has objects of id, name, and email in this case

// Destructuring parameters
const Card = ({name, email, id}) => {

    return(
        <div className="bg-light-green dib br3 pa3 ma3 bw2 shadow-5 grow">
            <img src={'https://robohash.org/' + id + '?200x200'} alt='A RoboFriend' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;