 //获取node这个节点下所有的子节点
 function elementByClassName(node,classStr){
     var nodes = node.getElementsByTagName("*");  //*代表通配符
     var arr = [];//存放符合条件的节点
     for(var i = 0;i<nodes.length;i++){
        if(nodes[i].className ===classStr){
            arr.push(nodes[i]);
        }
     }
     return arr;
 }

 //随机颜色设置
function randomColor(){
    var str ="rgba(" +parseInt(Math.random() *256)+","+parseInt(Math.random() *256)+","+parseInt(Math.random() *256);
    return str;
 }
 
 
 //跨浏览器兼容
 function getStyle(node,cssStyle){
    return node.currentStyle ? node.currentStyle[cssStyle]:getComputedStyle(node)[cssStyle];
}

 //封装跨浏览器兼容的阻止事件冒泡
 function stopBubble(e){
    //e是事件对象
    if(e.stopPropagation()){
        e.stopPropagation()
    }else{
        e.cancelBubble = true;
    }
}

  //编写一个跨浏览器阻止超链接默认行为的函数
  function perDef(e){
    if(e.preventDefault){
        e.preventDefault();
    }else{
        window.event.returnValue = false;
    }
}

/*
    事件监听器的兼容
    attachEvent()和detachEvent()
*/
function addEvent(node,eventType,funcName){
    if(node.addEventListener){
        node.addEventListener(eventType,funcName,false)
    }else{
        node.attachEvent("on"+eventType,funcName);
    }
}
function removeEvent(node,eventType,funcName){
    if(node.removeEventListener){
        node.removeEventListener(eventType,funcName)
    }else{
        node.和detachEvent("on"+eventType,funcName);
    }
}
