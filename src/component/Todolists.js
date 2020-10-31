import React, { useState } from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

function Todolists(props) {


  //filling heart
  const fillingHeart = (id) => {
    let newArray = [...props.todonotes]

    if (newArray[id].isHearted) {
      newArray[id].isHearted = false;
    } else {
      newArray[id].isHearted = true;
    }

    props.addnotes(newArray);

  }

  const Checkbox = (id) => {
    let newArray = [...props.todonotes]
    if (newArray[id].isCompleted) {
      newArray[id].isCompleted = false;
    } else {
      newArray[id].isCompleted = true;

    }

    props.addnotes(newArray);

  }


  return (
    <>
      <div className="h4 text-capitalize">
        {props.val.isCompleted ? <>{props.id + 1 + "." + " "}<s>{props.val.todolist}</s> </> : props.id + 1 + "." + " " + props.val.todolist}
      </div>

      <h6 style={{ fontStyle: "italic", fontSize: "12px" }}>{props.val.todayDate}</h6>

      <button className="p-0" style={{ backgroundColor: props.val.isHearted ? "green" : "#E1DFE1" }} onClick={() => fillingHeart(props.id)}>
        <FavoriteBorderIcon />
      </button>

      <button className="p-0 mx-2" style={{ backgroundColor: props.val.isCompleted ? "green" : "#E1DFE1" }} onClick={() => Checkbox(props.id)} >
        <CheckBoxIcon />
      </button>

      <button disabled={props.val.isHearted && true}className="p-0" onClick={() => props.onDelete(props.id)}>
        <DeleteForeverIcon />
      </button>



    </>


  )
}

export default Todolists;
