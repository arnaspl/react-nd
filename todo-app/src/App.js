import "./App.css";
import NewToDo from "./Components/NewToDo";
import ToDoList from "./Components/ToDoList";

function App() {
const DUMMY_TODOLIST = [
  {
    title: 'Programavimo namų darbai',
    priority: 'Labai aukštas',
    description: 'Sukurti To Do aplikaciją',
    date: new Date(2021, 12, 30).toDateString(),
    id: 0,
  },
  {
    title: 'Susitvarkyti namus',
    priority: 'Vidutinis',
    description: 'Susitvarkyti namus prieš naujuosius metus',
    date: new Date(2021, 12, 31).toDateString(),
    id: 1,
  },
];

  return (
    <div className="App">
      <header className="App-header">
        <p>To Do Aplikacija</p>
      </header>
      <NewToDo />
      <ToDoList toDoList={DUMMY_TODOLIST}/>
    </div>
  );
}

export default App;
