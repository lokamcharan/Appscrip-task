import React, { useState } from "react";
import './Filter.css'; 

const Filter = ({ filter }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="filter">
            <div
                onClick={() => setOpen(!open)}
                className="accordionHeaderSection"
            >
                <h3>{filter?.title}</h3>
                <h3>
                    {open ? (
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.72003 10.73L7.0667 6.38489C7.58003 5.87174 8.42003 5.87174 8.93336 6.38489L13.28 10.73"
                                stroke="#292D32"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    ) : (
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.72125 6.00017L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018"
                                stroke="#292D32"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </h3>
            </div>
            {open && (
                <div className="filter-content">
                    <div className="checkbox-container">
                        <input type="checkbox" id="customizable" />
                        <label htmlFor="customizable">CUSTOMIZABLE</label>
                    </div>
                    <h4>All</h4>
                    <p>Unselect all</p>
                    {filter?.options?.map((option, index) => (
                        <div className="checkbox-container" key={index}>
                            <input type="checkbox" id={option} />
                            <label htmlFor={option}>{option}</label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const filters = [
    { title: "IDEAL FOR", options: ["Men", "Women", "Kids"] },
    { title: "OCCASION", options: ["Casual", "Formal", "Party"] },
    { title: "WORK", options: ["Embroidered", "Printed", "Solid"] },
    { title: "FABRIC", options: ["Cotton", "Silk", "Wool"] },
    { title: "SEGMENT", options: ["Premium", "Standard", "Economy"] },
    { title: "SUITABLE FOR", options: ["Summer", "Winter", "All Seasons"] },
    { title: "RAW MATERIALS", options: ["Organic", "Synthetic", "Blended"] },
    { title: "PATTERN", options: ["Striped", "Checked", "Floral"] },
];

const FilterList = () => {
    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className="filter-list">
            <button
                className="toggle-filters"
                onClick={() => setShowFilters(!showFilters)}
            >
                {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
            {showFilters && filters.map((filter, index) => (
                <Filter key={index} filter={filter} />
            ))}
        </div>
    );
};

export default FilterList;
