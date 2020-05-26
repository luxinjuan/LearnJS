
/*
   冒泡排序
*/
function bubbleSortAsc(arr){   //升序
    for(var i = 0;i <= arr.length;i++){
        for(var j = 0;j < arr.length-(i+1);j++){
            if(arr[j] > arr[j+1]){   //大于号
               var temp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = temp;
            }
        } 
    }
 } 

 function bubbleSortDesc(arr){   //降序
    for(var i = 0;i <= arr.length;i++){
        for(var j = 0;j < arr.length-(i+1);j++){
            if(arr[j] < arr[j+1]){      //小于号
               var temp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = temp;
            }
        } 
    }
 } 