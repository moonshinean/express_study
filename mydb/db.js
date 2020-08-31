/** 
 * 封装操作数据库的通用api
*/

const mysql = require('mysql')

exports.base = (sql, data, callback) => {
        // 创建链接
    const connection = mysql.createConnection({
        host: '8.129.165.188', // 数据库所在的服务器的域名或者ip地址
        user: 'root', // 登录数据库的账号
        password: '#Moonshine125', // 登录数据库的密码
        database: 'book'
    })
    // 执行连接数据库操作
    connection.connect();

    // 操作数据库(数据库操作也是异步的)
    connection.query(sql, data, function (error, results, fields) {
        if (error) throw error;
        callback(results)
      });

    // 关闭数据库
     connection.end(); 
}