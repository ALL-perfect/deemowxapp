# 微信小程序 医院demo
 
开发环境：windows下的微信开发者工具，模拟机型使用的是iPhone6

完成情况：完成了设计图中的70%的页面，基本实现了页面中的代码逻辑。具体实现情况可以看图，以下图片均来自真机调试。
<img src="https://github.com/ALL-perfect/deemowxapp/blob/deemowxapp/pic/pic2.png?raw=true" height="50%">
![image](https://github.com/ALL-perfect/deemowxapp/blob/deemowxapp/pic/pic2.png?raw=true)
![image](https://github.com/ALL-perfect/deemowxapp/blob/deemowxapp/pic/pic3.png?raw=true)
![image](https://github.com/ALL-perfect/deemowxapp/blob/deemowxapp/pic/pic4.png?raw=true)
![image](https://github.com/ALL-perfect/deemowxapp/blob/deemowxapp/pic/pic5.png?raw=true)
![image](https://github.com/ALL-perfect/deemowxapp/blob/deemowxapp/pic/pic6.png?raw=true)
按照任务要求，页面的样式方面用了很多vant-weapp组件标签，其中包括van-button、van-cell-group、van-cell、van-row、van-col、van-popup、van-field、van-tabbar，也同时配合css进行一定的排版。值得注意的是，底部导航栏的实现没有用微信官方文档给出的Tabbar组件，而是重新做了一个自定义组件custom-tab-bar，其中使用了vant-weapp的样式，使得实现效果可以与设计图中的基本一致，同时也是按照任务文档的要求来；但是这样一来，在微信开发者工具编译调试的时候一直会出现报错ERROR的情况，如下图：
！[图片](https://github.com/ALL-perfect/deemowxapp/blob/deemowxapp/pic/error.png?raw=true)
而在真机调试的时候是没有问题的，页面的跳转与导航栏文字和图标的颜色改变功能运行正常。

还有一个小问题是在本人信息的页面中，页面要求用户输入姓名和手机号，这里的输入获取与绑定用的是在标签中加入bind:change方法。一开始用的是bind:blur方法获取用户输入，但是效果不是很好，真机调试的时候经常出现丢失输入的情况，倒是在模拟器中的效果还行。改用bind:change之后，解决了丢失输入的问题，但是因为用户输入速度过快导致的延迟问题还是存在，暂时没有找到好的优化方案。

Ps：首页的图片滚动栏里选用的图片是网上随便找的，主要为了演示效果。

代码均是自己写的，但是有参考别人的样例，以下是参考的博客的链接：

https://blog.csdn.net/weixin_44151993/article/details/100561611

https://www.jb51.net/article/152112.htm

https://www.jianshu.com/p/1d62a193c320
