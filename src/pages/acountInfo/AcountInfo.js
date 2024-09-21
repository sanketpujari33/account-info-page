import './acountInfo.css'
import SidebarMenu from '../../components/sidebarMenu/SidebarMenu'
import FormInfo from '../../components/formInfo/FormInfo'
import DataTable from '../../components/dataTable/DataTable'
export default function AcountInfo() {
    return (
        <>
            <SidebarMenu />
            <div className='container'>
                <div className='left-side'>
                    <div className='heading'>खाते माहिती</div>
                    <FormInfo />
                    <DataTable />
                </div>
            </div >
        </>
    )
}