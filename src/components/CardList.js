import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    
    // Add variable to loop through components
    // Use map instead of forEach
    // Key is required so React correctly identifies each element in the DOM
    var cardComponent = robots.map((user,i) => {
        return (<Card 
        key={robots[i].id} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email}/>
        );
    });

    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;