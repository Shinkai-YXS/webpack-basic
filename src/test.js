/*
 * @Author: YXS
 * @Date: 2020-08-10 16:16:47
 * @LastEditors: YXS
 * @LastEditTime: 2020-08-11 20:28:08
 */
// 1. 导入 css 文件
require('../style/index.css')
const Data = require('../assets/data.xml')
module.exports = function() {
    let test = document.createElement('div')
    test.innerHTML = 'test for webpack'
    // 2. 添加类名
    test.classList.add('test_style')

    // 添加图片
    let image = new Image(500, 300)
    image.src = '../assets/images/candy.jpeg'
    test.appendChild(image)

    // 添加文字
    let text = document.createElement('p')
    text.innerHTML = 'hello，我是小双，这是我家可爱的猫咪~'
    text.classList.add('test_font')

    test.appendChild(text)

    console.log(Data)

    return test
}