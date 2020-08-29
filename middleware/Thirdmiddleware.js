/** 
 * 
 * 应用中间件 (第三方)
 * 
 * 
*/

const bodyParser = require('body-parser')
const express = require('express');

const app = express();

// 挂载内置中间件
app.use(express.static('public'))

// 挂载参数处理中间件(post)
app.use(bodyParser.urlencoded({extended: false}));
//  处理json格式的内容
app.use(bodyParser.json());


app.get('/login', (req, res) => {
    let data = req.query;
    console.log(data);
    res.send('get data')
})


app.post('/login', (req, res) => {
    let data = req.body;
    if(data.username === 'admin' && data.password === '123'){
        res.send('success')
    }else{
        // console.log(data);
        res.send('failure')
    }
  
})

app.listen(3000, () => {
    console.log('run...');
})