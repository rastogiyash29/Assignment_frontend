import React, { useEffect, useState } from 'react'
import {axiosClient} from '../../utils/axiosClient';
import Form_card from '../form_card/Form_card';
import './styles.scss'

function All_Forms_Data() {
  const [formArray,setFromArray]=useState([])

  useEffect(()=>{
    fetchData();
  },[]);

  async function fetchData(){
    const data=await axiosClient.get('form/all');
    if(data?.status==='ok'){
      console.log(data.result);
      setFromArray(data.result);      
    } 
    else{
      window.location.replace('/error','_self');
    }
  } 


  return (
    <div id="all_forms_data_container">
      <div className="card-list">
        {formArray.map((form,index)=>(
          <div className="card" key={index}>
          <Form_card name={form.name} email={form.email} address={form.address} 
          phone={form.phone} dob={form.dob}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default All_Forms_Data