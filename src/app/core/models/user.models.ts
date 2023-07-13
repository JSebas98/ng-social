interface UserDTO {
  username: string;
  password: string;
}

interface User extends UserDTO{
  _id: string;
}

export { User, UserDTO };
