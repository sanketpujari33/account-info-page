import React, { useState } from 'react';
import './sidebarMenu.css';
export default function SidebarMenu() {
    const [searchCode, setSearchCode] = useState('');
    const [memberNumber, setMemberNumber] = useState('');
    const [center, setCenter] = useState('');
    const [formName, setFormName] = useState('');

    const listItems = [
        { id: 1, label: 'उत्पादक यादी', href: '#' },
        { id: 2, label: 'सप्लायर / व्यापारी मंडळी यादी', href: '#' },
        { id: 3, label: 'दुध संघ यादी', href: '#' },
        { id: 4, label: 'सेवक यादी', href: '#' },
        { id: 5, label: 'सभासद यादी (नाया नुसार)', href: '#' },
        { id: 6, label: 'सभासद यादी (कोड बुसार)', href: '#' },
        { id: 7, label: 'सभासद "आय" यादी', href: '#' },
        { id: 8, label: 'मतदार यादी 1', href: '#' },
        { id: 9, label: 'मतदार यादी 2', href: '#' },
        { id: 10, label: 'मतदार यादी 3', href: '#' },
        { id: 11, label: 'मयत तपशील 1', href: '#' },
        { id: 12, label: 'मयत तपशील 2', href: '#' },
        { id: 13, label: 'मयत तपशील 3', href: '#' },
        { id: 14, label: 'जातीनुसार मतदार यादी', href: '#' },
        { id: 15, label: 'मतदार रिपोर्ट', href: '#' },
        { id: 16, label: 'बैंक यादी', href: '#' },
        { id: 17, label: 'बैंक कस्टमर यादी', href: '#' },
        { id: 18, label: 'बैंक आधार नं. कस्टमर यादी', href: '#' },
    ];

    const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
    });

    const handleCheckboxChange = (e) => {
        setCheckboxes({
            ...checkboxes,
            [e.target.id]: e.target.checked,
        });
    };

    const handleSave = () => {
        console.log("Saving data:", { searchCode, memberNumber, center, formName, checkboxes });
    };

    return (
        <div className="container-sidebar">
            <div className="checkboxes">
                <div className="check">
                    <input
                        type="checkbox"
                        id="checkbox1"
                        checked={checkboxes.checkbox1}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="checkbox1">सर्व कपाती वीरक्षक बाकी दाखवणे बंद</label>
                </div>

                <div className="check">
                    <input
                        type="checkbox"
                        id="checkbox2"
                        checked={checkboxes.checkbox2}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="checkbox2">अनागत शिल्लक बाकी दाखवणे बंद</label>
                </div>
                <div className="check">
                    <input
                        type="checkbox"
                        id="checkbox3"
                        checked={checkboxes.checkbox3}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="checkbox3">अडव्हान्स शिल्लक बाकी दासवणे बंद</label>
                </div>



            </div>

            <div className="list">
                <ul>
                    {listItems.map((item) => (
                        <li key={item.id}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <button className="upload-button">Upload For Mobile App</button>

            <div className="footer__form">
                <button
                    className="footer__form-btn"
                    onClick={handleSave}
                >
                    From
                </button>
                <button
                    className="footer__save-btn"
                    onClick={handleSave}
                >
                    SAVE
                </button>
                <input type="text" />
            </div>
        </div>
    )
}
