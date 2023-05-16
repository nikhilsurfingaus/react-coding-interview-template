import { Todos } from "../types/types";

type RenderListProps = {
  todos: Todos;
  flipCheck: (index: number) => void;
  remTask: (index: number) => void;
}

const RenderList = ({ todos, flipCheck, remTask }: RenderListProps) => {
  return (
    <>
      <div className="mt-4">
        <ul style={{ listStyle: "none" }}>
          {todos.map((task, index) => (
            <li key={index}>
              <p
                style={{
                  textDecoration: task.checked ? "line-through" : "none",
                  textTransform: "uppercase",
                  fontWeight: "bold"
                }}
              >
                <span>
                  {task.task}{" "}
                  <input
                    type="checkbox"
                    checked={task.checked}
                    onChange={() => flipCheck(index)}
                    className="mr-3"
                  />
                  <button
                    style={{
                      width: "25px",
                      height: "25px",
                      padding: "0",
                      fontSize: "14px",
                      marginLeft: "10px"
                    }}
                    className="pl-2 btn btn-danger btn-sm"
                    onClick={() => remTask(index)}
                  >
                    x
                  </button>
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RenderList;
