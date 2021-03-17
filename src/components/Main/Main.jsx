import { connect } from "react-redux";
import { Table } from "../Table/Table"
import React, {useState, useEffect} from 'react';
import {AddItemForm} from "../Form/Form";
import { addItem } from '../../redux/dataReducer';
import Modal from 'react-modal';

const customStyles = {
  content : {
    padding                   : '0',
    left                  : '50%',
    top                   : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '80%',
    height                : '80vh'
  }
};

export const Context = React.createContext();

const Main = (props) => {
  const [edistat, setState] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const toogleEditMode = () => setEditMode(prev => !prev)

  useEffect(() => {
    setState(props.tablesData)
  }, [props.tablesData])

  return (
    <Context.Provider value={editMode}>
      <div className="main">
        {!editMode && (
        <div className="container">
            <Table
            dataTable={edistat}
            />
            <button onClick={toogleEditMode} className="btn">Add new item</button>
        </div>
        )}
        <Modal
        ariaHideApp={false}
        isOpen={editMode}
        style={customStyles}
      >
        <AddItemForm addItem={props.addItem} toggle={toogleEditMode}/>
      </Modal>
      </div>
    </Context.Provider>
  );
}
const mapStateToProps = (state) => {
  return {
    tablesData: state.dataDable.tablesData,
  };
};

export default connect(mapStateToProps, {addItem})(
  Main
);