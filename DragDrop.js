import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../assets/styles/App.css";

const PictureList= [
    {
        id:1,
        url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F32%2FHuman-Hands-Front-Back.jpg%2F655px-Human-Hands-Front-Back.jpg&imgrefurl=https%3A%2F%2Fwww.askdifference.com%2Fpalm-vs-hand%2F&tbnid=RSiXkQU8ekCsxM&vet=12ahUKEwjR5NOOov72AhXSO80KHXXwBswQMygPegUIARCHAg..i&docid=gxaLrfiy8YoAgM&w=655&h=437&q=hand&hl=en&ved=2ahUKEwjR5NOOov72AhXSO80KHXXwBswQMygPegUIARCHAg"
    },
    {
        id:2,
        url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.texasheart.org%2Fwp-content%2Fuploads%2F2017%2F12%2Fthi-coronary-arteries.jpg&imgrefurl=https%3A%2F%2Fwww.texasheart.org%2Fheart-health%2Fheart-information-center%2Ftopics%2Fthe-coronary-arteries%2F&tbnid=bKauKqtUV3M_qM&vet=12ahUKEwjOy76rov72AhULm2oFHX15BCgQMygFegUIARDjAQ..i&docid=tLReparXvk__iM&w=393&h=287&q=artery&hl=en&ved=2ahUKEwjOy76rov72AhULm2oFHX15BCgQMygFegUIARDjAQ"
    },
    {
        id:3,
        url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.mayoclinic.org%2F-%2Fmedia%2Fkcms%2Fgbs%2Fpatient-consumer%2Fimages%2F2013%2F08%2F26%2F10%2F31%2Fds00832_im02048_ans7_largearteries_jpg.jpg&imgrefurl=https%3A%2F%2Fwww.mayoclinic.org%2Fdiseases-conditions%2Ftakayasus-arteritis%2Fmultimedia%2Flarge-arteries%2Fimg-20007251&tbnid=QVHRlmQEeUiMiM&vet=12ahUKEwjOy76rov72AhULm2oFHX15BCgQMygGegUIARDlAQ..i&docid=dEUpEaw_pAFUaM&w=632&h=976&q=artery&hl=en&ved=2ahUKEwjOy76rov72AhULm2oFHX15BCgQMygGegUIARDlAQ"
    },
]

function DragDrop() {
    const [board, setBoard] = useState([]);
  
    const [{ isOver }, drop] = useDrop(() => ({
      accept: "image",
      drop: (item) => addImageToBoard(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
  
    const addImageToBoard = (id) => {
      const pictureList = PictureList.filter((picture) => id === picture.id);
      setBoard((board) => [...board, pictureList[0]]);
    };
    return (
      <>
        <div className="Pictures">
          {PictureList.map((picture) => {
            return <Picture url={picture.url} id={picture.id} />;
          })}
        </div>
        <div className="Board" ref={drop}>
          {board.map((picture) => {
            return <Picture url={picture.url} id={picture.id} />;
          })}
        </div>
      </>
    );
  }
  
  export default DragDrop;