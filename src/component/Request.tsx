import { useState } from "react";
import data from "./Request.json"
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import status from './Status.json';
import priority from './Priority.json';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function Request(){
    const [mockData, setMockData] = useState(data);
    const [first, setFirst] = useState(0);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [name, setName] = useState('');
    const [selectedPriority, setSelectedPriority] = useState(null);
    const [date, setDate] = useState('');
    const [visible, setVisible] = useState(false);
    

    function handleChange(event: any, val?: string){
        if(!event && val === 'status'){
            setSelectedStatus(null);
        }
        else if(!event && val === 'priority'){
            setSelectedPriority(null);
        }
        else if(event?.target){
          setName(event?.target?.value);
        }
        else if(event?.statusId){ 
            setSelectedStatus(event);
        }
        else if(event?.priorityId){ 
            setSelectedPriority(event);
        }
        else {
            setDate(event);
        }
      }
    function clear(): void{
        setName('');
        setDate('')
        setSelectedStatus(null);
        setSelectedPriority(null);
    }
  
    return <>
    <div>
        <h3>Request Search</h3>
        <br/>
        <label>Status : </label>
            <Dropdown value={selectedStatus} onChange={(e) => handleChange(e.value,'status')} options={status} optionLabel="statusName" 
                editable filter showClear placeholder="Select Status" />
        <label>Name : </label>
                <input type="text" value={name} onChange={handleChange} name="name"/>
        <label>Priority : </label>
    <Dropdown value={selectedPriority} onChange={(e) => handleChange(e.value,'priority')} options={priority} optionLabel="priorityName" 
        editable filter showClear placeholder="Select Priority" />
        <label>Oldest request date : </label>
        <Calendar value={date} onChange={(e) => handleChange(e.value,'calendar')} /> 
        <Button label="CLEAR" severity="secondary" onClick={() => clear()} rounded/> 
        <Button label="SEARCH" severity="success" rounded />    
    </div>
    <br/>
    <div>
        <h2>All Request</h2>
            <DataTable value={mockData}  paginator rows={10} first={first} onPage={(e) => setFirst(e.first)} >
                <Column field="docname" header="DOCUMENT NAME" sortable></Column>
                <Column field="lastreview" header="LAST REVIEW" sortable></Column>
                <Column field="receivedon" header="RECEIVED ON" sortable></Column>
                <Column field="importedon" header="IMPORTED ON" sortable></Column>
                <Column field="requeststatus" header="REQUEST STATUS" sortable></Column>
                <Column field="openrequest" header="OPEN REQUEST" sortable></Column>
                <Column field="requestdetails" header="REQUEST DETAILS" sortable></Column>
            </DataTable>
        </div>
        <div className="admin" onClick={() => setVisible(true)} >
            Fax Administration Help
        </div>
    <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    </Dialog>
    </>
}