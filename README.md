这是一款webapp书籍阅读应用。
使用追书神器的api。

### 技术栈
vue2 + vuex + vue-router + webpack + ES6 + axios + sass + element

### 源码地址
[https://github.com/yangyongjiandty/loveBook](https://github.com/yangyongjiandty/loveBook) 

### 版本功能
- [x] 热门模块-男生热门，女生热门，女频限免三部分
- [x] 分类模块-男生，女生，出版三部分
- [x] 分类详情模块-分为热门，新书，好评，完结，包月，根据小说内容分为全部，东方玄幻，异界大陆，异界争霸，远古神话
- [x] 书籍详情模块-包含书籍一些基本信息和简介，书籍目录入口，热门书评，同类推荐，包含加入书架功能，和立即阅读
- [x] 书籍目录模块-包含一共多少章，章节顺序（倒叙）
- [x] 同类推荐列表模块
- [x] 阅读模块-包含目录，昼夜阅读模式，以及字体调整和书籍背景颜色设置
- [x] 书架模块-包含加入到书架展示，以及上次阅读地方存储
- [x] 搜索模块-包含热搜的内容和历史搜索内容，以及清空历史搜索内容


### 项目运行

```   
git clone https://github.com/saucxs/loveBook

cd loveBook

npm install

npm run dev（本地运行 访问：http://localhost:8083）

npm run build （部署上线 生成的dist文件夹放到服务器中即可：需要配置代理，如使用nginx，可参考下面问题中的配置）
```
