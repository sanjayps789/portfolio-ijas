import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import works from '../works.js';

function Works() {
    const [workData, setWorkData] = useState(works);
    const [activeCategory, setActiveCategory] = useState(''); // Track the active category

    const categories = ['All', 'Logo Animations', 'Logo', 'Mobile', 'Posters'];

    // Function to filter works based on selected category
    const filterWorks = (category) => {
        setActiveCategory(category); // Set the active category
        if (category === 'All') {
            setWorkData(works); // Show all works if 'All' category is selected
        } else {
            setWorkData(works.filter(item => item.category === category));
        }
    };

    return (
        <div id="works" style={{ minHeight: '100vh' }} className="w-100 d-flex align-items-center justify-content-center bg-black flex-column">
            <h1 className="text-white fw-bold pb-4">My Works</h1>
            
            {/* Horizontal Scrollable Nav Bar */}
            <div className="w-100 d-flex justify-content-center mb-4">
                <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', paddingBottom: '10px' }}>
                    {categories.map(category => (
                        <Button
                            key={category}
                            variant="link"
                            className={`text-white me-4 ${activeCategory === category ? 'border-bottom border-' : ''}`}
                            style={{ textDecoration: 'none' }}
                            onClick={() => filterWorks(category === 'All' ? 'All' : category)} // Fix this to filter 'All' correctly
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>
            
            {/* Display Works */}
            <div style={{ width: '90%' }} className="container">
                <div className="row py-5 mb-5">
                    {workData.length > 0 ? (
                        workData.map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-4 d-flex align-items-center justify-content-center">
                                <Card
                                    className="mb-5 py-4 rounded-4"
                                    style={{
                                        width: '20rem',
                                        height: 'auto',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    {/* Render content based on category */}
                                    {item.category === "Logo Animations" && (
                                        <video width="100%" controls autoPlay muted style={{ height: '300px', objectFit: 'contain' }}>
                                            <source src={item.url} type="video/mp4" />
                                        </video>
                                    )}
                                    {(item.category === "Logo" || item.category === "Posters" || item.category === "Mobile") && (
                                        <img src={item.url} alt={item.title} className="img-fluid rounded" style={{ height: '300px', objectFit: 'contain' }} />
                                    )}
                                </Card>
                            </div>
                        ))
                    ) : (
                        <div>
                            <h1 className="text-white">No Data Found</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Works;
