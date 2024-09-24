import React, { useContext } from 'react'
import './accountInfoSecond.css'
import { AppContext } from '../../server/AppContext'
import { type } from '@testing-library/user-event/dist/type';
export default function AccountInfoSecond() {
    const { formData, handleInputChange, handleReset, handleSearch } = useContext(AppContext);
    const formFields = [
        { name: 'accountNumbers', label: 'खाते क्रमांक', type: 'text' },
        { name: 'accountConvenience', label: 'सोयीनुसार खाते नं.', type: 'checkbox' },
        { name: 'accountType', label: 'खाते प्रकार', type: 'select', options: ['ईतर', 'Eng'] },
        { name: 'deposit', label: 'अनामत (प्रति लि.)', type: 'text' },
        { name: 'accountName', label: 'नाव', type: 'text' },
        { name: 'accountNameEnglish', label: 'Eng', type: 'text' },
        { name: 'commission', label: 'कमीशन (प्रति लि.)', type: 'text' },
        { name: 'address', label: 'पत्ता', type: 'text' },
        { name: 'rebateCommission', label: 'रिबेट कमीशन (प्रति लि.)', type: 'text' },
        { name: 'memberNo', label: 'सभासद क्र.', type: 'text' },
        { name: 'accountDate', label: 'सभासद दि', type: 'date' },
        { name: 'accountMobile', label: 'मोबाईल', type: 'text' },
        { name: 'accountRoute', label: 'सेंटर (Route) कोड', type: 'text' },
        { name: 'accountPhone', label: 'फोन', type: 'text' },
        { name: 'accountVillage', label: 'गाव', type: 'text' },
        { name: 'accountTaluka', label: 'तालुका', type: 'text' },
        { name: 'freightNo', label: 'वाहतुक (प्रति ली.)', type: 'text' },
        { name: 'accountTypeRadio', label: 'दूध प्रकार', type: 'radio', options: ['गाय', 'म्हैस'] },
        { name: 'accountTypeMember', label: 'सभासद प्रकार', type: 'radio', options: ['सभासद', 'गैर सभासद'] },
        { name: 'aadharNo', label: 'आधार', type: 'text' },
        { name: 'rateSheet', label: 'दर पत्रक', type: 'select', options: ['cow', 'Buffalo'] },
        { name: 'no', type: 'text', },
        { name: 'bankACNo', label: 'बैंक A/C नंबर', type: 'text' },
        { name: 'GST', label: 'GST', type: 'text' },
        { name: 'accountDistrict', label: 'जिल्हा', type: 'text' },
        { name: 'accountBankNo', label: 'बैंक ', type: 'text' },
        { name: 'accountStates', label: 'स्टेट्स', type: 'select', options: ['NA', ''] },
        { name: 'accountEmail', label: 'ईमेल', type: 'email' },
        { name: 'accountCaste', label: 'जात', type: 'select', options: ['हिंदू-मराठा', 'हिंदू',] },
        { name: 'accountAge', label: 'वय', type: 'date' },
        { name: 'Age', label: '', type: 'number' },
        { name: 'accountSex', label: 'लिंग', type: 'select', options: ['पुरुष', 'स्त्री', 'इतर'] },
    ]
    return (
        <>
            <div className='sidebar-Menu'>
            </div>
            <div className='second-info-page'>
                <h1>स्वाते माहिती</h1>
                <div className='form-filed'>
                    <form className="form-elements" onSubmit="">
                        {formFields.map((field) => (
                            <div key={field.name} className={`form-field form-field-${field.name}`}>
                                <label htmlFor={field.name} className={`form-label  form-label-${field.name}`}>
                                    {field.label}
                                </label>
                                {
                                    field.type === 'checkbox' ? (
                                        <input
                                            type="checkbox"
                                            id={field.name}
                                            name={field.name}
                                            className="form-input form-input-checkbox"
                                            checked={formData[field.name]}
                                            onChange={handleInputChange}
                                        />
                                    ) : field.type === 'radio' ? (
                                        field.options.map((option) => (
                                            <div key={option} className={`form-radio-group${field.name}`}>
                                                <input
                                                    type="radio"
                                                    id={`${field.name}${option}`}
                                                    name={field.name}
                                                    value={option}
                                                    className="form-input form-input-radio"
                                                    checked={formData[field.name] === option}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor={`${field.name}${option}`} className={`form-label  form-label-${field.name}`}>
                                                    {option}
                                                </label>
                                            </div>
                                        ))
                                    ) : field.type === 'select' ? (
                                        <select
                                            id={field.name}
                                            name={field.name}
                                            className={`form-input-select form-input-${field.name}`}
                                            value={formData[field.name]}
                                            onChange={handleInputChange}
                                        >
                                            {field.options.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            type={field.type}
                                            id={field.name}
                                            name={field.name}
                                            className={`form-input form-input-${field.name}`}
                                            value={formData[field.name]}
                                            onChange={handleInputChange}
                                        />
                                    )
                                }
                            </div>
                        ))}
                    </form>
                </div>
                <div className='btn-opration'>
                    <h1>Button</h1>
                </div>
                <div className='table-filed'>
                    <h1>Table</h1>
                </div>
                <div className='btn-search'>
                    <h1>Search Button</h1>
                </div>
            </div>
        </>
    )
}
