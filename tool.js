 function elementByClassName(node,classStr){
     //1.获取node这个节点下所有的子节点
     var nodes = node.getElementsByTagName("*");  //*代表通配符
     var arr = [];//存放符合条件的节点
     for(var i = 0;i<nodes.length;i++){
        if(nodes[i].className ===classStr){
            arr.push(nodes[i]);
        }
     }
     return arr;
 }
 
 //跨浏览器兼容
 function getStyle(node,cssStyle){
    return node.currentStyle ? node.currentStyle[cssStyle]:getComputedStyle(node)[cssStyle];
}