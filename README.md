# DoubanDemo

采用MEAN的豆瓣应用

数据使用nodejs的`superagent `、`cheerio`、`mongoose`，和`fs`模块获取豆瓣数据，涉及文档DOM解析并保存到数据库，读取json文件并保存到数据库。

数据库使用mongodb搭载mongoose，数据库可视化工具使用Robo Studio 3T，简洁方便。

前端使用Angularjs + MDUI。

获取当前城市使用公共api `https://ipapi.co/json/` 和 ip2region库。

`dataBase`为所需数据文件夹，可直接导入Robo Studio 3T。

更多功能正在加载中...

调试步骤：

> 1. 本地安装mongodb环境，导入`database`文件下的数据。
> 2. `bower install`安装bower依赖。
> 3. `npm install`安装npm依赖。
> 4. `npm start`或`nodemon`启动项目。
> 也可导入WebStorm下进行启动。