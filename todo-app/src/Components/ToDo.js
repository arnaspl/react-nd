const ToDo = (props) => {
    return (
        <div>
            <div>
                <h2>Pavadinimas</h2>
                <p>{props.title}</p>
            </div>
            <div>
                <h2>Svarbumas</h2>
                <p>{props.priority}</p>
            </div>
            <div>
                <h2>Aprašymas</h2>
                <p>{props.description}</p>
            </div>
            <div>
                <h2>Iki kada atlikti</h2>
                <p>{props.date}</p>
            </div>
        </div>
    );
};

export default ToDo;