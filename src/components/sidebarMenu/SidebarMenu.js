import { useContext } from 'react';
import { AppContext } from '../../server/AppContext';
import './sidebarMenu.css';
export default function SidebarMenu() {
    const { formData, listItems, handleInputChange, handleSave, } = useContext(AppContext);

    return (
        <div className='sidebar'>
            <div className="header"></div>
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
            <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal"></div>
                <div className="spinner diagonal part-2"></div>
            </label>
            <div id="sidebarMenu">
                <div className="container-sidebar">
                    <div className="checkboxes">
                        <div className="check">
                            <input
                                type="checkbox"
                                id="stopShowingAllDeductionsLeftByVeeraksha"
                                name='stopShowingAllDeductionsLeftByVeeraksha'
                                className='stopShowingAllDeductionsLeftByVeeraksha'
                                checked={formData.stopShowingAllDeductionsLeftByVeeraksha}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="checkbox1">सर्व कपाती वीरक्षक बाकी दाखवणे बंद</label>
                        </div>

                        <div className="check">
                            <input
                                type="checkbox"
                                id="stopShowingOutstandingBalances"
                                name='stopShowingOutstandingBalances'
                                className='stopShowingOutstandingBalances'
                                checked={formData.stopShowingOutstandingBalances}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="checkbox2">अनागत शिल्लक बाकी दाखवणे बंद</label>
                        </div>
                        <div className="check">
                            <input
                                type="checkbox"
                                name='advanceBalanceDueDaswaneOff'
                                id="advanceBalanceDueDaswaneOff"
                                className='advanceBalanceDueDaswaneOff'
                                checked={formData.advanceBalanceDueDaswaneOff}
                                onChange={handleInputChange}
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
                        <button>
                            From
                        </button>
                        <button
                            className="footer__save-btn"
                            onClick={handleSave}
                        >
                            SAVE
                        </button>
                        <input
                            type="text"
                            id="formName"
                            name="formName"
                            className='footer__name-input'
                            value={formData.formName}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
