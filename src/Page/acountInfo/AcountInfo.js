import React, { useState } from 'react';
import './acountInfo.css'
import SidebarMenu from '../../components/sidebarMenu/SidebarMenu'
import FormInfo from '../../components/formInfo/FormInfo'
import DataTable from '../../components/dataTable/DataTable'
import { data } from '../../data'
import ContainerButtonsFooter from '../../components/containerButtons/ContainerButtonsFooter';
export default function AcountInfo() {
    const [searchCode, setSearchCode] = useState('');
    const [memberNumber, setMemberNumber] = useState('');
    const [center, setCenter] = useState('');
    const [formName, setFormName] = useState('');

    const handleSave = () => {
        console.log("Saving data:", { searchCode, memberNumber, center, formName });
    };
    return (
        <>
            <SidebarMenu />
            <div className='container'>
                <div className='left-side'>
                    <div className='heading'>खाते माहिती</div>
                    <FormInfo />

                    <DataTable data={data} />
                </div>
            </div >

        </>
    )
}
