(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{395:function(t,s,e){"use strict";e.r(s);var a=e(42),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",[t._v("Eventmesh-runtime快速入门说明")]),t._v(" "),e("h2",{attrs:{id:"_1-远程部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-远程部署"}},[t._v("#")]),t._v(" 1 远程部署")]),t._v(" "),e("h3",{attrs:{id:"_1-1-依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-依赖"}},[t._v("#")]),t._v(" 1.1 依赖")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("建议使用64位操作系统，建议使用Linux / Unix；\n64位JDK 1.8+;\nGradle至少为5.6, 推荐 5.6.*\n")])])]),e("h3",{attrs:{id:"_1-2-下载源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-下载源码"}},[t._v("#")]),t._v(" 1.2 下载源码")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/WeBankFinTech/EventMesh",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/WeBankFinTech/EventMesh"),e("OutboundLink")],1),t._v("\n您将获得"),e("strong",[t._v("EventMesh-master.zip")])]),t._v(" "),e("h3",{attrs:{id:"_1-3-构建源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-构建源码"}},[t._v("#")]),t._v(" 1.3 构建源码")]),t._v(" "),e("div",{staticClass:"language-$ xslt extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("unzip EventMesh-master.zip\ncd / *您的部署路径* /EventMesh-master/eventmesh-runtime\ngradle clean dist tar -x test\n")])])]),e("p",[t._v("您将在目录/ "),e("em",[t._v("您的部署路径")]),t._v(" /EventMesh-master/eventmesh-runtime/dist中获得"),e("strong",[t._v("eventmesh-runtime_1.0.0.tar.gz")])]),t._v(" "),e("h3",{attrs:{id:"_1-4-部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-部署"}},[t._v("#")]),t._v(" 1.4 部署")]),t._v(" "),e("ul",[e("li",[t._v("部署eventmesh-runtime")])]),t._v(" "),e("div",{staticClass:"language-$ xslt extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("upload eventmesh-runtime_1.0.0.tar.gz\ntar -zxvf eventmesh-runtime_1.0.0.tar.gz\ncd bin\n配置 proxy.properties\ncd ../bin\nsh start.sh\n")])])]),e("p",[t._v('如果看到"ProxyTCPServer[port=10000] started...."，则说明设置成功。')]),t._v(" "),e("h2",{attrs:{id:"_2-本地构建运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-本地构建运行"}},[t._v("#")]),t._v(" 2 本地构建运行")]),t._v(" "),e("h3",{attrs:{id:"_2-1-依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-依赖"}},[t._v("#")]),t._v(" 2.1 依赖")]),t._v(" "),e("p",[t._v("同上述步骤 1.1")]),t._v(" "),e("h3",{attrs:{id:"_2-2-下载源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-下载源码"}},[t._v("#")]),t._v(" 2.2 下载源码")]),t._v(" "),e("p",[t._v("同上述步骤 1.2")]),t._v(" "),e("h3",{attrs:{id:"_2-3-本地启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-本地启动"}},[t._v("#")]),t._v(" 2.3 本地启动")]),t._v(" "),e("p",[e("strong",[t._v("2.3.1 项目结构说明：")])]),t._v(" "),e("p",[e("img",{attrs:{src:"C:%5CUsers%5Cmikexue%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20201229211217729.png",alt:""}})]),t._v(" "),e("ul",[e("li",[t._v("eventmesh-common : eventmesh公共类与方法模块")]),t._v(" "),e("li",[t._v("eventmesh-connector-api : eventmesh插件接口定义模块")]),t._v(" "),e("li",[t._v("eventmesh-connector-defibus : eventmesh defibus插件模块")]),t._v(" "),e("li",[t._v("eventmesh-connector-rocketmq : eventmesh rocketmq插件模块")]),t._v(" "),e("li",[t._v("eventmesh-runtime : eventmesh运行时模块")]),t._v(" "),e("li",[t._v("eventmesh-sdk-java : eventmesh java客户端sdk")]),t._v(" "),e("li",[t._v("eventmesh-starter : eventmesh本地启动运行项目入口")])]),t._v(" "),e("blockquote",[e("p",[t._v("注：插件模块遵循java spi机制，需要在对应模块中的/main/resources/META-INF/services 下配置相关接口与实现类的映射文件")])]),t._v(" "),e("p",[e("strong",[t._v("2.3.2 配置VM启动参数")])]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dlog4j")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("configurationFile"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\\eventmesh"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("runtime\\conf\\log4j2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xml\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dproxy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("home"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\\eventmesh"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("runtime\\logs\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dproxy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("home"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\\eventmesh"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("runtime\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DconfPath")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\\eventmesh"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("runtime\\conf\n")])])]),e("p",[e("strong",[t._v("2.3.3 配置build.gradle文件")])]),t._v(" "),e("p",[t._v("通过修改dependencies，compile project 项来指定项目启动后加载的插件")]),t._v(" "),e("blockquote",[e("p",[t._v("默认加载eventmesh-connector-defibus插件")])]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("dependencies "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    compile "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("project")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('":eventmesh-runtime"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("project")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('":eventmesh-connector-defibus"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("加载RocketMQ插件配置：")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("dependencies "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    compile "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("project")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('":eventmesh-runtime"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("project")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('":eventmesh-connector-rocketmq"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("strong",[t._v("2.3.4 启动运行")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("运行com.webank.eventmesh.starter.StartUp的主要方法\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);