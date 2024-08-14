
import React, { useState } from 'react';
import './Recommand.css'; 

const recommendedOptions = [
    { label: 'RECOMMENDED', href: '#' },
    { label: 'NEWEST FIRST', href: '#' },
    { label: 'POPULAR', href: '#' },
    { label: 'PRICE: HIGH TO LOW', href: '#' },
    { label: 'PRICE: LOW TO HIGH', href: '#' },
];

const Dropdown = () => {
    const [recommendedOpen, setRecommendedOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('RECOMMENDED');

    const toggleRecommended = () => {
        setRecommendedOpen(!recommendedOpen);
    };

    const handleOptionClick = (label) => {
        setSelectedOption(label);
        setRecommendedOpen(false); 
    };

    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={toggleRecommended}>
                {selectedOption}
            </button>
            <div className={`dropdown-content ${recommendedOpen ? 'show' : ''}`}>
                {recommendedOptions.map((option, index) => (
                    <a 
                        key={index} 
                        href={option.href}
                        onClick={() => handleOptionClick(option.label)}
                        className={selectedOption === option.label ? 'active' : ''}
                    >
                        {selectedOption === option.label && (
                            <span className="checkmark">✔</span>
                        )}
                        {option.label}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
