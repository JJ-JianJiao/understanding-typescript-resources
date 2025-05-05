function generateError(msg?: string) {
  throw new Error(msg);
}

generateError(); //optional ？

type User = {
  name: string;
  age: number;
  role?: "admin" | "guest";
};

let input = "";
const didProvideInput = input ?? false; //？？ check the left is null or undefined, if yes, choose the right side.
