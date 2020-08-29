/*
  模板引擎整合：art-template
*/

const express = require('express');
const path = require('path');

const template = require('art-template');

const app = express();

// 设置魔板路径

app.set('view', path.join(__dirname));

// 使express 兼容art-template模板引擎

app.engine('art', require('express-art-template'))


app.get('/list', (req, res) => {

});

app.listen(3000, () => {
    console.log('runing....');
})