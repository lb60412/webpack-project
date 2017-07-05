# project structure
```
.
├── config                     //配置文件目录
│   ├── base.js                //基础配置
│   ├── develop.js             //开发配置
│   ├── publish.babel.js       //发布配置
│   └── template.html          //HTML模板
├── src                        //开发目录 
│   ├── images              
│   │   └── icon.png
│   ├── index.js               //入口文件
│   └── sass
│       ├── base.scss
│       └── index.scss
├── .eslintrc                  //Eslint配置
├── .gitignore                 //git提交配置
├── package.json               //安装依赖
└── README.md                  //项目说明
```

# project initial
- nodejs version 6.5
- install

```
$ cd 
$ sudo npm install
```

# project develop
```
$ sudo npm start
```
# peoject publish
```
	//project release directory dist 
	$ sudo npm run publish
```