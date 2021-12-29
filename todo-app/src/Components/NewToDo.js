import { useState } from 'react';

const NewToDo = () => {

    const submitHandler = (e) => {
        e.preventDefault();

        const toDoData = {
            title: title,
            priority: priority,
            description: description,
            date: new Date(date),
        };
    
        console.log(toDoData);
        setTitle("");
        setPriority("");
        setDescription("");
        setDate("");
      };

    // const [toDoInput, setToDoInput] = useState({
    //     title: '',
    //     priority: '',
    //     description: '',
    //     date: ''
    // });

    // const toDoInputHandler = (e) => {
    //     setToDoInput({
    //         ...toDoInput,
    //         [e.target.name]: e.target.value,
    //     })

    // }

    const [title, setTitle] = useState();
    const [priority, setPriority] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();


    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
      };

      const priorityChangeHandler = (e) => {
        setPriority(e.target.value);
      };

      const descriptionChangeHandler = (e) => {
        setDescription(e.target.value);
      };

      const dateChangeHandler = (e) => {
        setDate(e.target.value);
      };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Pavadinimas</label>
        <input id="title" type="text" onChange={titleChangeHandler} value={title}/>
      </div>
      <div>
        <label htmlFor="priority">Svarbumas</label>
        <input id="priority" type="text" onChange={priorityChangeHandler} value={priority}/>
      </div>
      <div>
        <label htmlFor="description">Aprašymas</label>
        <input id="description" type="text" onChange={descriptionChangeHandler} value={description}/>
      </div>
      <div>
        <label htmlFor="date">Iki kada reikia atlikti</label>
        <input type="date" min="2021-12-28" max="2022-12-31" onChange={dateChangeHandler} value={date}/>
      </div>
      <button>Pridėti</button>
    </form>
  );
};

export default NewToDo;
