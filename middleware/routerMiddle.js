/**
 * 
 * 中间件的挂载方式 和执行流程
 * use
 * 路由方式 : get post put delete
 * 
 * 路由方式
 * 
 */

 const express = require('express')
 const app = express();

//  app.get('/abc', (req, res, next) => {
//      console.log(1)
//     //  跳转到下一个路由
//      next('route')
//  }, (req, res) => {
//     console.log(2)
//     res.send('abc')
//  });

//  app.get('/abc', (req, res) => {
//      console.log(3)
//      res.send('hello')
//  })

var cb0 = (req, res, next) => {
     console.log('cb0');
     next();
}

var cb1 = (req, res, next) => {
    console.log('cb1')
    next()
}

var cb2 = (req, res) => {
    res.send('Hello from c!')
}

app.get('/hello', [cb0, cb1, cb2]);

 app.listen(3000, () => {
     console.log('runing....')
 })