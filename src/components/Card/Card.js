import React, { Component } from 'react';
import styles from './Card.css';

class Card extends Component {
    state = [
        {
            fullname: 'Sarah Connor',
            image: 'http://globalmedicalco.com/photos/globalmedicalco/20/98177.png',
            occupation: 'Software Engineer',
            connections: 'Bob, Maria, Linda',
        },
        {
            fullname: 'Sarah Connor',
            image: 'http://globalmedicalco.com/photos/globalmedicalco/20/98177.png',
            occupation: 'Software Engineer',
            connections: 'Bob, Maria, Linda',
        },
        {
            fullname: 'Sarah Connor',
            image: 'http://globalmedicalco.com/photos/globalmedicalco/20/98177.png',
            occupation: 'Software Engineer',
            connections: 'Bob, Maria, Linda',
        },
    ];

	render() {
		return (

            <div className='CardList'>
                <p className='list__heading'>
                    People you may know
                </p>

                <div className='cards'>
                {this.state.map((each) => {
                    return (
                    <div className="personal__card">
                        <img src={each.image} />
                        <div className='contentCard__username'>{each.fullname}</div>
                        <div>{each.occupation}</div>
                        <div>{each.connections}</div>
                    </div>
                    );
                })}
                </div>
            </div>

		);
	}
};

export default Card;
