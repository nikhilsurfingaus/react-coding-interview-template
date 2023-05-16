export type Country = {
  name: string;
  value: string;
  cities: string[];
};

export type Countries = Country[];

export type User = {
  username: string;
  pfp: string;
};

export type Users = User[];

export type Todo = {
  task: string;
  checked: boolean;
}

export type Todos = Todo[];