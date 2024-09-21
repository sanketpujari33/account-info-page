import React, { createContext, useState, useEffect } from 'react';
import { data } from './data'
export const AppContext = createContext();
export const AppProvider = ({ children }) => {
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
        { name: 'accountSex', label: 'लिंग', type: 'select', options: ['पुरुष', 'स्त्री', 'Other'] },
    ];
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
        accountSex: '',
        searchCode: '',
        memberNumber: '',
        center: '',
        stopShowingAllDeductionsLeftByVeeraksha: '',
        stopShowingOutstandingBalances: '',
        advanceBalanceDueDaswaneOff: '',
        formName: '',

    });
    const handleNew = () => {
        setFormData({
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
            accountSex: '',
            searchCode: '',
            memberNumber: '',
            center: '',
            stopShowingAllDeductionsLeftByVeeraksha: '',
            stopShowingOutstandingBalances: '',
            advanceBalanceDueDaswaneOff: '',
            formName: '',
        });
        setCurrentIndex(-1);
        console.log('handlenew')
        console.log(formData);

    };

    const [records, setRecords] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const handleInputChange = (event) => {
        console.log("Input Chsnge");
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: newValue }));
        console.log(formData);
    };

    const handlePrev = () => {
        console.log('handlePrev');
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setFormData(records[currentIndex - 1]);
        }
        console.log(formData);
    };

    const handleNext = () => {
        console.log('handleNext');
        if (currentIndex < records.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setFormData(records[currentIndex + 1]);
        }
        console.log(formData);
    };


    const handleSave = () => {
        console.log('handleSave');
        const updatedRecords = [...records];
        if (currentIndex === -1) {
            updatedRecords.push(formData);
        } else {
            updatedRecords[currentIndex] = formData;
        }
        setRecords(updatedRecords);
        setCurrentIndex(updatedRecords.length - 1);
        console.log(formData);
    };

    const handleReset = () => {
        console.log('handleReset');
        if (currentIndex !== -1) {
            setFormData(records[currentIndex]);
        } else {
            handleNew();
        }
        console.log(formData);
    };


    return (
        <AppContext.Provider value={{
            data,
            listItems,
            formFields,
            formData,
            records,
            currentIndex,
            setFormData,
            setRecords,
            setCurrentIndex,
            handleInputChange,
            handlePrev,
            handleNext,
            handleNew,
            handleSave,
            handleReset,
        }}>
            {children}
        </AppContext.Provider>
    );
};