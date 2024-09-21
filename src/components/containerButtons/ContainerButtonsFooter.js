import { useContext } from 'react';
import { AppContext } from '../../server/AppContext';
import './containerButtons.css'
export default function ContainerButtonsFooter() {
    const { formData, handleInputChange, handleReset } = useContext(AppContext);

    return (
        <div className='footer'>
            <div className='footer__search'>
                <label className='footer__label'>शोधा कोड</label>
                <input
                    type="text"
                    id="searchCode"
                    name="searchCode"
                    className='footer__input-1'
                    value={formData.searchCode}
                    onChange={handleInputChange}
                />
                <label className='footer__label'>सभासद न</label>
                <input
                    type="text"
                    id="memberNumber"
                    name="memberNumber"
                    className='footer__input'
                    value={formData.memberNumber}
                    onChange={handleInputChange}
                />
                <label className='footer__label'>Center</label>
                <input
                    ype="text"
                    id="center"
                    name="center"
                    className='footer__input'
                    value={formData.center}
                    onChange={handleInputChange}
                />
                <button
                    className="footer__Clear-btn"
                    onClick={handleReset}
                >
                    रह करा
                </button>
            </div>
        </div>
    )
}
