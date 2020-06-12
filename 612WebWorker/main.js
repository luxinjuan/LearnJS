// 主线程也必须指定message事件的回调函数，监听子线程发来的信号。
worker.addEventListener('message', function(e) {
	console.log(e.data);
}, false);

// 主线程可以监听子线程是否发生错误。如果发生错误，会触发主线程的error事件。
worker.addEventListener('error', function(event) {
    console.log(event);
  });
//   worker.onerror(function(event) {
//     console.log(event);
//   });


//使用完毕之后，为了节省系统资源，必须在主线程调用terminate方法，手动关闭子线程。
worker.terminate();