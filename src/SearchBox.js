import React, { useState } from "react";
import Select from "react-select";

const SearchBox = ({handleAdvance,setAdvance}) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (<>
        <div className="search-container">
            <div className="container h-100 my-auto d-flex align-items-center justify-content-center">
                <form className="my-auto" action="">
                    <div className="search-box advance-search-box">
                        <input type="text" className="form-control keyword-search-box p-2" placeholder="Search..." />
                        <button className="search-icon btn d-flex justify-content-center align-items-center">
                            <span className="material-symbols-outlined ">
                                search
                            </span>
                        </button>
                    </div>

                    <div className="advance-content-container d-block mt-3">
                        <div className="row row-cols-md-3 row-cols-1">
                            <div className="col">
                                <Select isSearchable="true" placeholder="Country" options={options} />
                            </div>
                            <div className="col">
                                <Select placeholder="University" options={options} />
                            </div>
                            <div className="col">
                                <Select placeholder="Courses" options={options} />
                            </div>
                        </div>
                    </div>
                    <div onClick={handleAdvance} className="advance-search-container">
                        <p className="text-white advance-search-btn text-center mt-3">Hide Advance Search</p>
                    </div>

                </form>
            </div>

        </div>
    </>);
}

export default SearchBox;