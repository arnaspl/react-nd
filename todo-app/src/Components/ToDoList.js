import ToDo from "./ToDo";

const ToDoList = (props) => {
    return (
        <div className='toDoList'>
            {props.toDoList.map((item) => {
               return (
               <ToDo title={item.title} priority={item.priority} description={item.description} date={item.date} />
               );
            })}
        </div>
    );
};

export default ToDoList;