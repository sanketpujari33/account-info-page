import React, { useState } from 'react';
import './containerButtons.css'
export default function ContainerButtonsFooter() {
    const [searchCode, setSearchCode] = useState('');
    const [memberNumber, setMemberNumber] = useState('');
    const [center, setCenter] = useState('');

    const handleSave = () => {
        console.log("Saving data:", { searchCode, memberNumber, center });
        setSearchCode('');
        setMemberNumber('');
        setCenter('');
    };

    return (
        <div className='footer'>
            <div className='footer__search'>
                <label className='footer__label'>शोधा कोड</label>
                <input
                    type='text'
                    className='footer__input-1'
                    value={searchCode}
                    onChange={(e) => setSearchCode(e.target.value)}
                />
                <label className='footer__label'>सभासद न</label>
                <input
                    type='text'
                    className='footer__input'
                    value={memberNumber}
                    onChange={(e) => setMemberNumber(e.target.value)}
                />
                <label className='footer__label'>Center</label>
                <input
                    type='text'
                    className='footer__input'
                    value={center}
                    onChange={(e) => setCenter(e.target.value)}
                />
                <button
                    className="footer__Clear-btn"
                    onClick={handleSave}
                >
                    रह करा
                </button>
            </div>
        </div>
    )
}
