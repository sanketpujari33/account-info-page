import React from 'react';
import './DataTable.css'
function DataTable({ data }) {
    return (
        <div className="container-DataTable">
            <table className="table">
                <thead>
                    <tr>
                        <th className="tableHeader arrow">  </th>
                        <th className="tableHeader">खाते क्रमांक</th>
                        <th className="tableHeader">सोयीनुसार खाते नं.</th>
                        <th className="tableHeader">खाते प्रकार</th>
                        <th className="tableHeader">अनामत (प्रति लि.)</th>
                        <th className="tableHeader">खातेदार नाव</th>
                        <th className="tableHeader">इंग्रजी नाव</th>
                        <th className="tableHeader">कमीशन (प्रति ति.)</th>
                        <th className="tableHeader">पत्ता</th>
                        <th className="tableHeader">स्वेिट कमीशन (प्रति लि.)</th>
                        <th className="tableHeader">सभासद क्र.</th>
                        <th className="tableHeader">सभासद दि.</th>
                        <th className="tableHeader">मोबाईल</th>
                        <th className="tableHeader">सेंटर (Route) कोड</th>
                        <th className="tableHeader">फोन</th>
                        <th className="tableHeader">गाव</th>
                        <th className="tableHeader">तालुका</th>
                        <th className="tableHeader">जिल्हा</th>
                        <th className="tableHeader">दूध प्रकार</th>
                        <th className="tableHeader">सभासद प्रकार</th>
                        <th className="tableHeader">आधार क्रमांक</th>
                        <th className="tableHeader">दर पत्रक क्रमांक</th>
                        <th className="tableHeader">GST</th>
                        <th className="tableHeader">खाते स्थिती</th>
                        <th className="tableHeader">जात</th>
                        <th className="tableHeader">बँक खाते क्र.</th>
                        <th className="tableHeader">बँक</th>
                        <th className="tableHeader">ई-मेल</th>
                        <th className="tableHeader">वय</th>
                        <th className="tableHeader">लिंग</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="row">
                            <td className="tableCells arrow">

                            </td>
                            <td className="tableCell">{row.accountNumbers}</td>
                            <td className="tableCell">{row.accountConvenience ? 'Yes' : 'No'}</td>
                            <td className="tableCell">{row.accountType}</td>
                            <td className="tableCell">{row.deposit}</td>
                            <td className="tableCell">{row.accountName}</td>
                            <td className="tableCell">{row.accountNameEnglish}</td>
                            <td className="tableCell">{row.commission}</td>
                            <td className="tableCell">{row.address}</td>
                            <td className="tableCell">{row.sweatCommission}</td>
                            <td className="tableCell">{row.memberNo}</td>
                            <td className="tableCell">{row.accountDate}</td>
                            <td className="tableCell">{row.accountMobile}</td>
                            <td className="tableCell">{row.accountRoute}</td>
                            <td className="tableCell">{row.accountPhone}</td>
                            <td className="tableCell">{row.accountVillage}</td>
                            <td className="tableCell">{row.accountTaluka}</td>
                            <td className="tableCell">{row.accountDistrict}</td>
                            <td className="tableCell">{row.accountTypeRadio}</td>
                            <td className="tableCell">{row.accountMemberTypeRadio}</td>
                            <td className="tableCell">{row.aadhaarnumber}</td>
                            <td className="tableCell">{row.accountSheetNumber}</td>
                            <td className="tableCell">{row.accountGst}</td>
                            <td className="tableCell">{row.accountStatus}</td>
                            <td className="tableCell">{row.accountCaste}</td>
                            <td className="tableCell">{row.accountnumber}</td>
                            <td className="tableCell">{row.accountBank}</td>
                            <td className="tableCell">{row.accountEmail}</td>
                            <td className="tableCell">{row.accountAge}</td>
                            <td className="tableCell">{row.accountSex}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
