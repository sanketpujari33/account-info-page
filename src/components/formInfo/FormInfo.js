import React, { useState } from 'react';
import './formInfo.css';

function FormInfo() {

    const [formData, setFormData] = useState({
        accountNumbers: '',
        accountConvenience: false,
        accountType: '',
        deposit: '',
        accountName: '',
        accountNameEnglish: '',
        commission: '',
        address: '',
        sweatCommission: '',
        memberNo: '',
        accountDate: '',
        accountMobile: '',
        accountRoute: '',
        accountPhone: '',
        accountVillage: '',
        accountTaluka: '',
        accountDistrict: '',
        accountTypeRadio: '',
        accountMemberTypeRadio: '',
        aadhaarnumber: '',
        accountSheetNumber: '',
        accountGst: '',
        accountStatus: '',
        accountCaste: '',
        accountnumber: '',
        accountBank: '',
        accountEmail: '',
        accountAge: '',
        accountSex: ''
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: newValue }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    const formFields = [
        { name: 'accountNumbers', label: 'खाते क्रमांक', type: 'text' },
        { name: 'accountConvenience', label: 'सोयीनुसार खाते नं.', type: 'checkbox' },
        { name: 'accountType', label: 'खाते प्रकार', type: 'select', options: ['ईतर', 'Eng'] },
        { name: 'deposit', label: 'अनामत (प्रति लि.)', type: 'text' },
        { name: 'accountName', label: 'नाव', type: 'text' },
        { name: 'accountNameEnglish', label: 'Eng', type: 'text' },
        { name: 'commission', label: 'कमीशन (प्रति ति.)', type: 'text' },
        { name: 'address', label: 'पत्ता', type: 'text' },
        { name: 'sweatCommission', label: 'स्वेिटकमीशन(प्रलि)', type: 'text' },
        { name: 'memberNo', label: 'सभासद क्र.', type: 'text' },
        { name: 'accountDate', label: 'सभासद दि.', type: 'date' },
        { name: 'accountMobile', label: 'मोबाईल', type: 'text' },
        { name: 'accountRoute', label: 'सेंटर (Route) कोड', type: 'text' },
        { name: 'accountPhone', label: 'फोन', type: 'text' },
        { name: 'accountVillage', label: 'गाव', type: 'text' },
        { name: 'accountTaluka', label: 'तालुका', type: 'text' },
        { name: 'accountDistrict', label: 'जिल्हा', type: 'text' },
        { name: 'accountTypeRadio', label: 'दूध प्रकार', type: 'radio', options: ['गाय', 'म्हैस'] },
        { name: 'accountMemberTypeRadio', label: 'सभासद प्रकार', type: 'radio', options: ['सभासद', 'गैर सभासद'] },
        { name: 'aadhaarnumber', label: 'आधार क्रमांक', type: 'text' },
        { name: 'accountSheetNumber', label: 'दर पत्रक क्रमांक', type: 'text' },
        { name: 'accountGst', label: 'GST', type: 'text' },
        { name: 'accountStatus', label: 'खाते स्थिती', type: 'select', options: ['NA', 'Active', 'Inactive'] },
        { name: 'accountCaste', label: 'जात', type: 'select', options: ['हिंदु-मराठा', 'मुस्लिम', 'Other'] },
        { name: 'accountnumber', label: 'खाते क्रमांक', type: 'text' },
        { name: 'accountBank', label: 'बँक', type: 'text' },
        { name: 'accountEmail', label: 'ई-मेल', type: 'email' },
        { name: 'accountAge', label: 'वय', type: 'number' },
        { name: 'accountSex', label: 'लिंग', type: 'select', options: ['पुरुष', 'स्त्री', 'Other'] }
    ];

    return (
        <>
            <div className='forms'>
                <div className="form-container form-content">
                    <form className="form-elements" onSubmit={handleSubmit}>
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
                        ))
                        }
                    </form >
                </div >
            </div>
        </>
    );
}

export default FormInfo;
