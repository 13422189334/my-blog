// let arr = [4,23,100,9,7,49,36,57];
// console.log("原始数据："+arr);
//
// for(var i=0;i<arr.length-1;i++){//确定轮数
//   for(var j=0;j<arr.length-i-1;j++){//确定每次比较的次数
//     if(arr[j]>arr[j+1]){
//       tem = arr[j];
//       arr[j] = arr[j+1];
//       arr[j+1] = tem;
//     }
//   }
//   console.log("第"+i+"次排序"+arr)
// }
// console.log("最终排序："+arr)


let arr = [4,23,100,9,7,49,36,57];
console.log("原始数据：" + arr);

for (let i= 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j+ 1]) {
      let temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = temp
    }
  }
}

console.log("输出数据：" + arr);
