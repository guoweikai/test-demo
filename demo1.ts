export const foo = 123;

function identity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
identity([1, 2, 3]);

class b<T> {
  a: Array<T>;
}
