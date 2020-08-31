/** 
 *  登录验证 (前端 + 后端 + 数据库)
 * 
*/

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db.js')
const app = express();


// 处理请求参数
// 挂载请求餐宿处理中间件(post)
app.use(bodyParser.urlencoded({extended: false}))

// 处理json格式数据参数
app.use(bodyParser.json());

app.post('/check', (req, res) =>{
    let param = req.body;
    let sql = 'select count(*) as total from users where username=? and password =?'
    let data = [param.username, param.password];

    db.base(sql, data, (result) => {
        if(result[0].total == 1){
            
        }
    })
})

app.listen(3000, () => {
    console.log('run...');
})