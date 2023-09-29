import styles from './SideBar.module.css'
import {TbLayoutSidebarLeftCollapse} from 'react-icons/tb'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeModel } from '../../utils/modelSlice'

const SideBar=()=>{
  const [models,setModels]=useState();
  const dispatch=useDispatch();
  useEffect(() => {
    async function fetchModels(){
      const response =await fetch('http://localhost:3001/models');
      const models=await response.json();
      setModels(models); 
    }
    fetchModels();
  }, []);
  
    return (
        <div className={styles.sidebar_container}>
          <div className={styles.newchatbtn_container}>
             <div className={styles.newchatbtn}>
               <span>+</span><span>NewChat</span>
             </div>
             <div className={styles.closesidebarbtn}>
               <TbLayoutSidebarLeftCollapse/>
             </div>
          </div>
          <div className={styles.model_container}>
            <label htmlFor="models">Select a model</label>
             <select name="models" id="models" onChange={(e)=>dispatch(changeModel(e.target.value))}>
              {models && models.models.map((model)=>(
                <option key={model.id} value={model.id}>{model.id}</option>
              ))}
             </select>
          </div>
          <div>

          </div>
        </div>
    )
}

export default SideBar;