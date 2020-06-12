// 回调函数，监听message事件,self代表子线程自身
self.addEventListener('message', function(e) {
    self.postMessage('You said: ' + e.data);   //  self.postMessage表示，子线程向主线程发送一个信号
  }, false);

  //   根据主线程发来的不同的信号值，子线程可以调用不同的方法
  self.onmessage = function(event) {
    var method = event.data.method;
    var args = event.data.args;
  
    var reply = doSomething(args);
    self.postMessage({method: method, reply: reply});
  };

  //子线程内部关闭自身。
  self.close();