var fs = require('fs');
var path = require('path');
var readline = require('readline');
var exec = require('child_process').exec;
function readFileList(dir, filesList = []) {
    const files = fs.readdirSync(dir);
    // console.log(files);
    files.forEach((item, index) => {
        var fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            readFileList(path.join(dir, item), filesList); //递归读取文件
        } else {
            filesList.push(fullPath);
            // var data = fs.readFileSync(fullPath, 'utf-8');

//定义读取方法
            read_file(fullPath)
            function read_file(path,callback){
                var fRead = fs.createReadStream(path,'utf-8');
                var objReadline = readline.createInterface({
                    input:fRead
                });
                var arr = new Array();
                objReadline.on('line',function (line) {
                    if (line.length > 0) {
                        console.log(line);
                    }
                });
                objReadline.on('close',function () {
                });
            }
            // console.log('同步方法执行完毕');
        }
    });
    return filesList;
}
var filesList = [];
readFileList("D:\\dev\\test",filesList);
// console.log(filesList);
