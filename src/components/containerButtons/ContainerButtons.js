import { useContext } from 'react';
import { AppContext } from '../../server/AppContext';
import './containerButtons.css'

export default function ContainerButtons() {
    const { formData, handleInputChange, handleReset, handlePrev, handleNext, handleSave, handleNew } = useContext(AppContext);

    return (
        <div className="container-btn">
            <div className="box">
                <button onClick={handlePrev}>&lt;&lt;</button>
            </div>
            <div className="box">
                <button onClick={handlePrev}>&lt;</button>
            </div>
            <div className="box">
                <input
                    type="text"
                    id="accountNumbers"
                    name="accountNumbers"
                    className="form-input form-input-accountNumbers"
                    value={formData.accountNumbers}
                    onChange={handleInputChange}
                />
            </div>
            <div className="box">
                <button onClick={handleNext}>&gt;</button>
            </div>
            <div className="box">
                <button onClick={handleNext}>&gt;&gt;</button>
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
                    id="Disbursement"
                    name="Disbursement"
                    className="form-input form-input-Disbursement"
                    value={formData.Disbursement}
                    onChange={handleInputChange}
                />
            </div>
            <div className="box">
                <input
                    type="text"
                    id="Decimate"
                    name="Decimate"
                    className="form-input form-input-Decimate"
                    value={formData.Decimate}
                    onChange={handleInputChange}
                />
            </div>
            <div className="box">
                <button onClick={handleReset}>रद</button>
            </div>
            <div className="box">
                <input
                    type="checkbox"
                    id="directdebit"
                    name="directdebit"
                    className="form-input form-input-checkbox"
                    checked={formData.directdebit}
                    onChange={handleInputChange}
                />
                <label>Direct Debit</label>
            </div>
        </div>
    );
}
