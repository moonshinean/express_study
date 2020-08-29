/*
*
* 托管静态文件
*
* */

const express = require('express');
const app = express();
// 实现静态资源服务
// use 方法的第一个参数可以指定一个虚拟目录(虚拟路径)
// let server = app.use('/adb', express.static('public'));
//
// server.listen(3000, () => {
// 	console.log('runing....');
// })

app.use('/adb', express.static('public'));
app.use('/hi', express.static('hi'));


app.listen(3000, () => {
	console.log('runing ....');
})
