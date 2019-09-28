# 项目环境的配置
>基于create-react-app创建的项目环境
>react-app-rewired 对create-react-app进行自定义配置

**环境相关依赖**
- react-app-rewired 
- customize-cra
- babel-plugin-import

```javascript
    yarn add react-app-rewired customize-cra babel-plugin-import --dev
```


# 技术栈
- 高阶组件
- react-router-dom
- redux
- react-redux
- redux-actions
- redux-thunk
- whatwg-fetch
- react-loadable
- qs
- styled-components
- http-proxy-middleware 跨域
- @babel/plugin-proposal-decorators 装饰器
```javascript
    yarn add react-router-dom redux react-redux redux-actions redux-thunk whatwg-fetch react-loadable qs styled-components -S
```
# 装饰器出现的问题
- @babel/plugin-transform-react-jsx-source  安装
- react-scripts  安装
# 装饰器使用流程(基于create-react-app)
- git add .    git commit -m "xxx"
- npm run eject
- 安装 yarn add  @babel/plugin-proposal-decorators  --dev
- 找到package.json文件中的babel属性
    ```javascript
        "plugins": [
        [
            "@babel/plugin-proposal-decorators",
            {
            "legacy": true
            }
        ]
        ]
    ```
- 