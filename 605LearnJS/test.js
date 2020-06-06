/*
    使用Path[i][j]表示两点间的距离，不通的路径使用Infinity表示,自己到自己的距离为0,
    i、j均依次表示Huilongguan,Chaoyang Park,National Stadium,Olympic Park,Tsinghua University
*/
   var Path = [
    [0,10,8,15,Infinity],
    [Infinity,0,Infinity,12,Infinity],
    [Infinity,Infinity,0,Infinity,10],
    [17,Infinity,Infinity,0,5],
    [10,Infinity,Infinity,Infinity,0]
];
 var n = Path && Path.length;
 var m = n && Path[0].length;
 var minSum = 0;
 if(m && n && m===n){     //使用Floyd算法计算到每个点的最短距离
     for(var k = 0; k < n; k++){
         for(var i = 0; i < n; i++ ){
             for(var j = 0; j < n; j++){
                 if(Path[i][k] + Path[k][j] < Path[i][j]){
                     Path[i][j] = Path[i][k] + Path[k][j];
                 }
             }
         }
     }
 }
  // 因为只有奥森和清华才可以回到回龙观，所以首先计算出回龙观到奥森和清华的最短距离分别为Path[0][3]和Path[0][4]，
  //后比较回到回龙观的总的路径
 if((Path[0][3]+Path[3][0])>Path[0][4]+Path[4][0]){
     minSum = Path[0][4]+Path[4][0]   
     document.write("Huilongguan->National Stadium->Tsinghua University->Huilongguan距离最短，最短距离是:"+minSum) //清华的前驱节点是National Stadium
 }else{
     minSum = Path[0][3]+Path[3][0]
     document.write("Huilongguan->Olympic Park->Huilongguan距离最短，最短距离是:"+minSum) //Olympic Park前驱节点是Huilongguan
 }
 