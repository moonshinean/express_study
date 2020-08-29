
/**
 * 中间键： 就是处理过程的一个环节(本质上就是一个函数)
 */

 const express = require('express');
 const app = express();
 let total = 0
 app.use((req, res, next) => {
	//  记录访问时间
	console.log('有人访问');
	// next 方法的作用就是把请求传递到下一个中间件
	next() 
 })

 app.use('/user', (req, res, next) => {
	//  记录访问日志
	console.log('访问了/user')
	next()
 })

 app.use('/user', (req, res) => {
	total++;
	console.log(total)
	res.send('result');
 })

 app.listen(3000, () => {
	 console.log('runing...')
 })