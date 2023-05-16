import "./shared.css";

const Home = () => {
  return (
    <div className="main">
      <h1>Home</h1>
      <div className="task">
        <h1>Task 1: Counter</h1>
        <p>Create a simple counter component with the following:</p>
        <ul>
          <li>Dynamic Counter</li>
          <li>Increment</li>
          <li>Decrement</li>
          <li>Reset</li>
          <li>Custom Input</li>
        </ul>
      </div>
      <div className="task">
        <h1>Task 2: Dropdown</h1>
        <p>Create a dynamic dropdown selection:</p>
        <ul>
          <li>Top select Country</li>
          <li>Bottom select Cities</li>
          <li>Submit Button</li>
          <li>Render Country & City</li>
        </ul>
      </div>
      <div className="task">
        <h1>Task 3: TodoList</h1>
        <p>Create a Todo List With Child Prop Render:</p>
        <ul>
          <li>Todo List Add Task Input</li>
          <li>Render Tasks With Child & Props</li>
          <li>Allow Delete Task</li>
          <li>Allow Cross/Linethrough Task</li>
        </ul>
      </div>
      <div className="task mb-5">
        <h1>Task 4: Peoples API</h1>
        <p>Get Users and Render Users:</p>
        <ul>
          <li>Use             <a
              href="https://rapidapi.com/ayoub21hajouj/api/fake-users6/"
              target="_blank"
              rel="noopener noreferrer"
            >FakeUser</a> API to get a single User</li>
          <li>Each Button Press Store User</li>
          <li>Use Child Prop to render all user cards</li>
          <li>Store Username and Profile Picture</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
