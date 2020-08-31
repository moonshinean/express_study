/** 
 * 业务模块
*/

let data = require('./data/data.json');
const fs = require('fs');
const path = require('path');

// 自动成功图书编号 (自增)
let maxBookCode = () => {
    let arr = [];
    data.forEach((item) => {
        arr.push(item.id)
    })
    return Math.max.apply(null, arr);
}

// 渲染主页面
exports.showIndex = (req, res) => {
    res.render('index', {list: data});
}
// 渲染添加图书的界面
exports.toAddBook = (req, res) => {
    res.render('addBook', {})
}

// 添加图书
exports.addBook = (req, res) => {
    // 获取表单数据
    let info = req.body;
    let book = {};
    for(let key in info) {
        book[key] = info[key];
    }
    book.id = maxBookCode() + 1;
    data.push(book);
    // 把内存中的数据写入文件
    fs.writeFile(path.join(__dirname, './data/data.json'), JSON.stringify(data, null, 4), (err) => {
        if (err) {
            res.send('server error');
        }
        // 文件写入成功之后重新跳转到主页面
        res.redirect('/');
    })
}

// 编辑跳转图书页面
exports.toEditBook = (req, res) => {
    let id = req.query.id;
    let book  = {};
    data.forEach(item => {
        if (id == item.id){
            book = item;
            return;
        }
    })
    res.render('editBook', book)
}

// 修改图书
exports.editBook = (req, res) =>{
   let info = req.body;
   data.forEach(item => {
       if(info.id == item.id){
           for(let key in info){
               item[key] = info[key];
           }
           return;
       }
   })
      // 把内存中的数据写入文件
      fs.writeFile(path.join(__dirname, './data/data.json'), JSON.stringify(data, null, 4), (err) => {
        if (err) {
            res.send('server error');
        }
        // 文件写入成功之后重新跳转到主页面
        res.redirect('/');
    })
}

// 删除图书信息
exports.deleteBook = (req, res) => {
    let id = req.query.id;
    let delIndex = 0;
    data.forEach((item, index) =>{
        if(item.id == id){
            delIndex = index;
        }
        return;
    })
    data.splice(delIndex, 1);
     // 把内存中的数据写入文件
     fs.writeFile(path.join(__dirname, './data/data.json'), JSON.stringify(data, null, 4), (err) => {
        if (err) {
            res.send('server error');
        }
        // 文件写入成功之后重新跳转到主页面
        res.redirect('/');
    });
}