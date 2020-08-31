/** 
 *  更新数据
*/

// 架子数据库驱动
const mysql = require('mysql');

// 创建链接
const connection = mysql.createConnection({
    host: '8.129.165.188', // 数据库所在的服务器的域名或者ip地址
    user: 'root', // 登录数据库的账号
    password: '#Moonshine125', // 登录数据库的密码
    database: 'book'
})
// 执行连接数据库操作
connection.connect();

let sql = 'update book set name=?,author=?,category=?,description=? where id=?';
let data = ['浪潮之巅', '吴军', '计算机', 'IT巨头的兴衰史', 12]

// 操作数据库
connection.query(sql, data, function (error, results, fields) {
    if (error) throw error;
    if(results.affectedRows === 1){
        console.log('更新成功');
    }
  });
// 关闭数据库
connection.end();