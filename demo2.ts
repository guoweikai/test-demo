
function reverse<T>(items: T[]): T[] {
    const toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
      toreturn.push(items[i]);
    }
    return toreturn;
  }

  const sample = [1, 2, 3];
let reversed = reverse(sample);
  
const strArr = ['1', '2'];
let reversedStrs = reverse(strArr);

