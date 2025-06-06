import { useState } from 'react';
import { checkBoxData } from './data';

import styles from './DynamicChecbox.module.css';
const CheckBoxList = ({ data, cbState, setCbState }) => {

    const onChangeHandler=(e,node)=>{
        const newState={...cbState,[node.id]:e?.target?.checked}

        // if the parent is set to true then set all its childrens to true
        const updateChildren=(node,state)=>{
            if(node?.hasChildren && state[node?.id]===true){
                node?.children.forEach((childNode)=>{
                        state[childNode?.id]=true
                        if(childNode.hasChildren){
                            updateChildren(childNode,state)
                        } 
                })
            }
        }

        //  this function will check if each of the children are checked then parent should automatically be checked
        const updateParent=(node,state)=>{
            if (!node?.hasChildren){
                return state[node?.id] || false
            }
            else{
                const updatedCheckBoxState=node?.children.every((child)=>updateParent(child,state))
                return updatedCheckBoxState
            }
        }
        // If the the parent is set to true 
        updateChildren(node,newState)
        data.forEach(node1=>updateParent(node1,newState))
        setCbState(newState)
    }
  return (
    <div className={styles.checkBoxContainer} >
      {data.map((node, index) => (
        <div key={node?.id} className={styles.checkBox}>
          <input
            type='checkbox'
            name={node?.name}
            checked={cbState[node?.id]|| false}
            onChange={e=>onChangeHandler(e,node)}
          />
          <label>{node?.name}</label>
          {node?.hasChildren && (
            <div className={styles.children}>
              <CheckBoxList
                data={node?.children}
                cbState={cbState}
                setCbState={setCbState}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const DynamicCheckBox = () => {
  const [checkBoxState, setCheckBoxState] = useState({});
  return (
    <div className={styles.mainContainer}>
      <h1>Dynamic CheckBox Machine Coding Round</h1>
      <CheckBoxList
        data={checkBoxData}
        cbState={checkBoxState}
        setCbState={setCheckBoxState}
      />
    </div>
  );
};

export default DynamicCheckBox;
