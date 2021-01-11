# JSON2HTML
把一段JSON数据结构格式化为一个HTML页面

## How to use
1. 点击添加数据按钮
2. 添加JSON数据
3. 点击确定
4. 点击添加配置按钮
5. 添加配置脚本

## 配置格式
```javascript
{
  [JSON key值]: '映射后的名称',
}

{
  [JSON key值]: {
    title: '映射后的名称',
    columns?: ['需要的列的key值', '需要的列的key值'] // 只有在JSON value为数组时有效
  }
}
```
