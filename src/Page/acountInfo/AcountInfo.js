import React, { useState } from 'react';
import './acountInfo.css'
import FormInfo from '../../components/formInfo/FormInfo'
import DataTable from '../../components/dataTable/DataTable'
export default function AcountInfo() {
    const [searchCode, setSearchCode] = useState('');
    const [memberNumber, setMemberNumber] = useState('');
    const [center, setCenter] = useState('');
    const [formName, setFormName] = useState('');

    const handleSave = () => {
        console.log("Saving data:", { searchCode, memberNumber, center, formName });
    };
    const data = [
        {
            accountNumbers: '001',
            accountConvenience: true,
            accountType: 'ईतर',
            deposit: '500',
            accountName: 'John Doe',
            accountNameEnglish: 'John',
            commission: '10',
            address: '123 Street',
            sweatCommission: '20',
            memberNo: 'M123',
            accountDate: '2024-01-01',
            accountMobile: '9999999999',
            accountRoute: 'R001',
            accountPhone: '8888888888',
            accountVillage: 'Village A',
            accountTaluka: 'Taluka B',
            accountDistrict: 'District C',
            accountTypeRadio: 'गाय',
            accountMemberTypeRadio: 'सभासद',
            aadhaarnumber: '123456789012',
            accountSheetNumber: 'S001',
            accountGst: 'GST12345',
            accountStatus: 'Active',
            accountCaste: 'हिंदु-मराठा',
            accountnumber: '123456789',
            accountBank: 'Bank XYZ',
            accountEmail: 'john@example.com',
            accountAge: '30',
            accountSex: 'पुरुष'
        },
        {
            accountNumbers: '001',
            accountConvenience: true,
            accountType: 'ईतर',
            deposit: '500',
            accountName: 'John Doe',
            accountNameEnglish: 'John',
            commission: '10',
            address: '123 Street',
            sweatCommission: '20',
            memberNo: 'M123',
            accountDate: '2024-01-01',
            accountMobile: '9999999999',
            accountRoute: 'R001',
            accountPhone: '8888888888',
            accountVillage: 'Village A',
            accountTaluka: 'Taluka B',
            accountDistrict: 'District C',
            accountTypeRadio: 'गाय',
            accountMemberTypeRadio: 'सभासद',
            aadhaarnumber: '123456789012',
            accountSheetNumber: 'S001',
            accountGst: 'GST12345',
            accountStatus: 'Active',
            accountCaste: 'हिंदु-मराठा',
            accountnumber: '123456789',
            accountBank: 'Bank XYZ',
            accountEmail: 'john@example.com',
            accountAge: '30',
            accountSex: 'पुरुष'
        },
        {
            accountNumbers: '001',
            accountConvenience: true,
            accountType: 'ईतर',
            deposit: '500',
            accountName: 'John Doe',
            accountNameEnglish: 'John',
            commission: '10',
            address: '123 Street',
            sweatCommission: '20',
            memberNo: 'M123',
            accountDate: '2024-01-01',
            accountMobile: '9999999999',
            accountRoute: 'R001',
            accountPhone: '8888888888',
            accountVillage: 'Village A',
            accountTaluka: 'Taluka B',
            accountDistrict: 'District C',
            accountTypeRadio: 'गाय',
            accountMemberTypeRadio: 'सभासद',
            aadhaarnumber: '123456789012',
            accountSheetNumber: 'S001',
            accountGst: 'GST12345',
            accountStatus: 'Active',
            accountCaste: 'हिंदु-मराठा',
            accountnumber: '123456789',
            accountBank: 'Bank XYZ',
            accountEmail: 'john@example.com',
            accountAge: '30',
            accountSex: 'पुरुष'
        },
        {
            accountNumbers: '001',
            accountConvenience: true,
            accountType: 'ईतर',
            deposit: '500',
            accountName: 'John Doe',
            accountNameEnglish: 'John',
            commission: '10',
            address: '123 Street',
            sweatCommission: '20',
            memberNo: 'M123',
            accountDate: '2024-01-01',
            accountMobile: '9999999999',
            accountRoute: 'R001',
            accountPhone: '8888888888',
            accountVillage: 'Village A',
            accountTaluka: 'Taluka B',
            accountDistrict: 'District C',
            accountTypeRadio: 'गाय',
            accountMemberTypeRadio: 'सभासद',
            aadhaarnumber: '123456789012',
            accountSheetNumber: 'S001',
            accountGst: 'GST12345',
            accountStatus: 'Active',
            accountCaste: 'हिंदु-मराठा',
            accountnumber: '123456789',
            accountBank: 'Bank XYZ',
            accountEmail: 'john@example.com',
            accountAge: '30',
            accountSex: 'पुरुष'
        },
        {
            accountNumbers: '001',
            accountConvenience: true,
            accountType: 'ईतर',
            deposit: '500',
            accountName: 'John Doe',
            accountNameEnglish: 'John',
            commission: '10',
            address: '123 Street',
            sweatCommission: '20',
            memberNo: 'M123',
            accountDate: '2024-01-01',
            accountMobile: '9999999999',
            accountRoute: 'R001',
            accountPhone: '8888888888',
            accountVillage: 'Village A',
            accountTaluka: 'Taluka B',
            accountDistrict: 'District C',
            accountTypeRadio: 'गाय',
            accountMemberTypeRadio: 'सभासद',
            aadhaarnumber: '123456789012',
            accountSheetNumber: 'S001',
            accountGst: 'GST12345',
            accountStatus: 'Active',
            accountCaste: 'हिंदु-मराठा',
            accountnumber: '123456789',
            accountBank: 'Bank XYZ',
            accountEmail: 'john@example.com',
            accountAge: '30',
            accountSex: 'पुरुष'
        },
        {
            accountNumbers: '001',
            accountConvenience: true,
            accountType: 'ईतर',
            deposit: '500',
            accountName: 'John Doe',
            accountNameEnglish: 'John',
            commission: '10',
            address: '123 Street',
            sweatCommission: '20',
            memberNo: 'M123',
            accountDate: '2024-01-01',
            accountMobile: '9999999999',
            accountRoute: 'R001',
            accountPhone: '8888888888',
            accountVillage: 'Village A',
            accountTaluka: 'Taluka B',
            accountDistrict: 'District C',
            accountTypeRadio: 'गाय',
            accountMemberTypeRadio: 'सभासद',
            aadhaarnumber: '123456789012',
            accountSheetNumber: 'S001',
            accountGst: 'GST12345',
            accountStatus: 'Active',
            accountCaste: 'हिंदु-मराठा',
            accountnumber: '123456789',
            accountBank: 'Bank XYZ',
            accountEmail: 'john@example.com',
            accountAge: '30',
            accountSex: 'पुरुष'
        },
        {
            accountNumbers: '001',
            accountConvenience: true,
            accountType: 'ईतर',
            deposit: '500',
            accountName: 'John Doe',
            accountNameEnglish: 'John',
            commission: '10',
            address: '123 Street',
            sweatCommission: '20',
            memberNo: 'M123',
            accountDate: '2024-01-01',
            accountMobile: '9999999999',
            accountRoute: 'R001',
            accountPhone: '8888888888',
            accountVillage: 'Village A',
            accountTaluka: 'Taluka B',
            accountDistrict: 'District C',
            accountTypeRadio: 'गाय',
            accountMemberTypeRadio: 'सभासद',
            aadhaarnumber: '123456789012',
            accountSheetNumber: 'S001',
            accountGst: 'GST12345',
            accountStatus: 'Active',
            accountCaste: 'हिंदु-मराठा',
            accountnumber: '123456789',
            accountBank: 'Bank XYZ',
            accountEmail: 'john@example.com',
            accountAge: '30',
            accountSex: 'पुरुष'
        },
        {
            accountNumbers: '001',
            accountConvenience: true,
            accountType: 'ईतर',
            deposit: '500',
            accountName: 'John Doe',
            accountNameEnglish: 'John',
            commission: '10',
            address: '123 Street',
            sweatCommission: '20',
            memberNo: 'M123',
            accountDate: '2024-01-01',
            accountMobile: '9999999999',
            accountRoute: 'R001',
            accountPhone: '8888888888',
            accountVillage: 'Village A',
            accountTaluka: 'Taluka B',
            accountDistrict: 'District C',
            accountTypeRadio: 'गाय',
            accountMemberTypeRadio: 'सभासद',
            aadhaarnumber: '123456789012',
            accountSheetNumber: 'S001',
            accountGst: 'GST12345',
            accountStatus: 'Active',
            accountCaste: 'हिंदु-मराठा',
            accountnumber: '123456789',
            accountBank: 'Bank XYZ',
            accountEmail: 'john@example.com',
            accountAge: '30',
            accountSex: 'पुरुष'
        }
    ];
    return (
        <>
            <div className='container'>
                <div className='left-side'>
                    <div className='heading'>खाते माहिती</div>
                    <div className='from'>
                        <FormInfo />
                    </div>
                    <div className="container-btn">
                        <div className="box">
                            <button>&lt;</button>
                        </div>
                        <div className="box">
                            <button>&lt;</button>
                        </div>
                        <div className="box">
                            <input type="text" />
                        </div>
                        <div className="box">
                            <button>&gt;</button>
                        </div>
                        <div className="box">
                            <button>&gt;</button>
                        </div>
                        <div className="box">
                            <button>नवीन</button>
                        </div>
                        <div className="box">
                            <button>नोंदवा</button>
                        </div>
                        <div className="box">
                            <input type="text" />
                        </div>
                        <div className="box">
                            <input type="text" />
                        </div>
                        <div className="box">
                            <button>रह</button>
                        </div>
                        <div className="box">
                            <input type='checkbox' />
                            <label>Direct Debit</label>
                        </div>
                    </div>
                    <div className='dataTable'>
                        <DataTable data={data} />
                    </div>
                </div>
            </div >
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
        </>
    )
}
