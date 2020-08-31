/*
  模板引擎整合：art-template
*/

const express = require('express');
const path = require('path');

const template = require('art-template');

const app = express();

// 使express 兼容art-template模板引擎
app.engine('art', require('express-art-template'))

// 设置模板路径

app.set('views', path.join(__dirname, 'views'));
//  设置模板引擎
app.set('view engine', 'art')

app.get('/list', (req, res) => {
    console.log(path.join(__dirname));
    let data = {
      title: '水果', 
      list: ['apple', 'orange', 'banana']
    }
    // 参数一：模板名称，参数二：渲染模板的数据
    res.render('list', data);
});

app.listen(3000, () => {
    console.log('runing....');
})