// const places = [
//     { name: 'Taj Mahal', location: 'Agra', image: 'images/taj-mahal.jpg' },
//     { name: 'Qutub Minar', location: 'Delhi', image: 'images/qutub-minar.jpg' },
//     { name: 'Red Fort', location: 'Delhi', image: 'images/red-fort.jpg' },
//     { name: 'Kerala Backwaters', location: 'Kerala', image: 'images/kerala-backwaters.jpg' },
//     { name: 'Rajasthan', location: 'Rajasthan', image: 'images/rajasthan.jpg' },
//     { name: 'Varanasi', location: 'Uttar Pradesh', image: 'images/varanasi.jpg' },
//     { name: 'Leh-Ladakh', location: 'Ladakh', image: 'images/leh-ladakh.jpg' },
//     { name: 'Goa Beaches', location: 'Goa', image: 'images/goa-beaches.jpg' },
//     { name: 'Golden Temple', location: 'Amritsar', image: 'images/golden-temple.jpg' },
//     { name: 'Meenakshi Temple', location: 'Madurai', image: 'images/meenakshi-temple.jpg' },
//     { name: 'Statue of Unity', location: 'Vadodara', image: 'images/statue-of-unity.jpg' },
//     { name: 'Sundarbans', location: 'West Bengal', image: 'images/sundarbans.jpg' },
//     { name: 'Akshardham Temple', location: 'Delhi', image: 'images/akshardham-temple.jpg' },
//     { name: 'Rishikesh', location: 'Uttarakhand', image: 'images/rishikesh.jpg' },
//     { name: 'Andaman Islands', location: 'Andaman & Nicobar', image: 'images/andaman-islands.jpg' },
//     { name: 'Darjeeling', location: 'West Bengal', image: 'images/darjeeling.jpg' }
// ];

const placeListDiv = document.querySelector('.place-list');

places.forEach(place => {
    const placeCard = document.createElement('div');
    placeCard.classList.add('place-card');

    const placeImage = document.createElement('img');
    placeImage.src = place.image;
    placeImage.alt = place.name;
    placeCard.appendChild(placeImage);

    const placeTitle = document.createElement('h3');
    placeTitle.textContent = place.name;
    placeCard.appendChild(placeTitle);

    const placeLocation = document.createElement('p');
    placeLocation.textContent = place.location;
    placeCard.appendChild(placeLocation);

    placeListDiv.appendChild(placeCard);
});
