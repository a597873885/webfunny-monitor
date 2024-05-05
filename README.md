# webfunny-monitor

## 专业版、H5探针、npm包

hello，小伙伴们，为了方便大家引入探针，我们提供了npm包供大家下载。

### 一、安装探针依赖包

npm install webfunny-monitor --save

### 二、引入探针npm包，配置上报信息

```
import webfunny from "webfunny-monitor"
// 初始化上报信息，越早执行越好
webfunny.initMonitor({
  webfunnyDomain: "cloud.webfunny.com", // 上报域名
  webfunnyMonitorId: "webfunny_20240409_002146_pro", // 项目标识（ID）
})
```

### 三、配置业务数据（可选）

```
window.localStorage.wmUserInfo = JSON.stringify({ userId: 'userId', userTag: 'tag', projectVersion: '1.0.1', env: 'pro' })
```

### 四、安装完成

PS: 一般用户在本地经过反复测试，都会产生一些脏数据。所以再引入新探针的时候，可以清理一下localStorage里的数据，再刷新页面。


### 联系客服

如有疑问，请联系微号：webfunny2