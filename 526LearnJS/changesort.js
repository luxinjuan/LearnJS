
/*
  选择排序
*/

function changeSortAsc(arr){     //升序
    for(var i = 0;i <= arr.length;i++){
    for(var j = i+1;j < arr.length;j++){
        if(arr[i] > arr[j])
        var temp = arr[j];
           arr[j] = arr[i];
           arr[i] = temp;
    }
}
}
function changeSortDesc(arr){     //降序
    for(var i = 0;i <= arr.length;i++){
    for(var j = i+1;j < arr.length;j++){
        if(arr[i] < arr[j])
        var temp = arr[j];
           arr[j] = arr[i];
           arr[i] = temp;
    }
}
}