import React, { useState } from 'react';
import './containerButtons.css'

export default function ContainerButtons() {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [isDirectDebit, setIsDirectDebit] = useState(false);

    const handlePrev = () => {
        console.log('Previous button clicked');
    };

    const handleNext = () => {
        console.log('Next button clicked');
    };

    const handleNew = () => {
        console.log('New button clicked');
    };

    const handleSave = () => {
        console.log('Save button clicked');
    };

    const handleReset = () => {
        setInputValue1('');
        setInputValue2('');
        setInputValue3('');
        setIsDirectDebit(false);
        console.log('Reset button clicked');
    };

    return (
        <div className="container-btn">
            <div className="box">
                <button onClick={handlePrev}>&lt;</button>
            </div>
            <div className="box">
                <button onClick={handlePrev}>&lt;</button>
            </div>
            <div className="box">
                <input
                    type="text"
                    value={inputValue1}
                    onChange={(e) => setInputValue1(e.target.value)}
                />
            </div>
            <div className="box">
                <button onClick={handleNext}>&gt;</button>
            </div>
            <div className="box">
                <button onClick={handleNext}>&gt;</button>
            </div>
            <div className="box">
                <button onClick={handleNew}>नवीन</button>
            </div>
            <div className="box">
                <button onClick={handleSave}>नोंदवा</button>
            </div>
            <div className="box">
                <input
                    type="text"
                    value={inputValue2}
                    onChange={(e) => setInputValue2(e.target.value)}
                />
            </div>
            <div className="box">
                <input
                    type="text"
                    value={inputValue3}
                    onChange={(e) => setInputValue3(e.target.value)}
                />
            </div>
            <div className="box">
                <button onClick={handleReset}>रह</button>
            </div>
            <div className="box">
                <input
                    type='checkbox'
                    checked={isDirectDebit}
                    onChange={() => setIsDirectDebit(!isDirectDebit)}
                />
                <label>Direct Debit</label>
            </div>
        </div>
    );
}
