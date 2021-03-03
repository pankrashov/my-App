import { connect } from "react-redux";
import { Table } from "../Table/Table"
import React, {useState} from 'react';
import AddItemForm from "../Form/Form";
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

const Main = (props) => {
  const [editMode, setEditMode] = useState(false);
  const onEditMode = () => {
    setEditMode(true);
  }
  return (
    <div className="main">
      {!editMode && (
        <div className="container">
          <Table
          dataTable={props.tablesData}
          />
          <button onClick={onEditMode} className="btn">Add new item</button>
        </div>
      )}
      <Modal
      ariaHideApp={false}
      isOpen={editMode}
      style={customStyles}
    >
      <AddItemForm setEditMode={setEditMode}/>
    </Modal>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    tablesData: state.dataDable.tablesData,
  };
};
export default connect(mapStateToProps)(
  Main
);