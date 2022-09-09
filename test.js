function moveZeros(arr) {
  console.log("arr");
  let begin=[];
  let end = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === 0) {
begin.push(arr[i])
    }
    else{
        end.push(arr[i])
    }
  }

  return end.concat(begin);
}
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
