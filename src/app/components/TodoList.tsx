
'use client';

interface MyComponentProps {
    todoList: {
        name: string;
        staus: boolean;
    }[];
    toggleStaus: any;
    deleteText: any;

  }
function TodoList(props:MyComponentProps) {

    return (
        <div >
            <ul>
                {props.todoList.map((i, index) => {
                    return <li key={index} style={{margin:'10px auto', width:'30%' , textDecorationLine: i.staus ? 'line-through' : 'none' }}>{i.name}

                        <button onClick={() => { props.toggleStaus(i) }}>toggle</button>
                        <button onClick={() => { props.deleteText(i) }}>delete</button>
                    </li>
                })}
            </ul>
        </div>
    );
}
export default TodoList