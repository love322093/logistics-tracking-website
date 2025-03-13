# Logistics Tracking Website

## 项目简介
这是一个前端物流记录查询网站，支持多国语言翻译并根据用户的定位自动切换语言。该网站的界面美观，能够自适应手机和PC设备，提供便捷的物流查询功能。

## 技术栈
- React
- TypeScript
- CSS
- Axios（用于API请求）

## 项目结构
```
logistics-tracking-website
├── public
│   ├── index.html          # 网站的主HTML文件
│   └── locales            # 多语言翻译文件
│       ├── en.json        # 英文翻译
│       ├── zh.json        # 中文翻译
│       └── es.json        # 西班牙文翻译
├── src
│   ├── assets
│   │   └── styles
│   │       └── main.css    # 全站CSS样式
│   ├── components
│   │   ├── Header.tsx      # 头部组件
│   │   ├── Footer.tsx      # 底部组件
│   │   └── TrackingForm.tsx # 物流查询表单组件
│   ├── hooks
│   │   └── useTranslation.ts # 自定义Hook，用于语言切换
│   ├── pages
│   │   ├── Home.tsx        # 主页组件
│   │   └── TrackingResult.tsx # 查询结果组件
│   ├── services
│   │   └── api.ts          # API交互服务
│   ├── App.tsx             # 主应用组件
│   └── index.tsx           # 应用入口文件
├── package.json             # npm配置文件
├── tsconfig.json            # TypeScript配置文件
└── README.md                # 项目文档
```

## 安装与运行
1. 克隆项目到本地：
   ```
   git clone <repository-url>
   cd logistics-tracking-website
   ```

2. 安装依赖：
   ```
   npm install
   ```

3. 启动开发服务器：
   ```
   npm start
   ```

4. 打开浏览器访问 `http://localhost:3000` 查看项目。

## 部署
要部署该项目，可以使用以下命令构建生产版本：
```
npm run build
```
构建完成后，将 `build` 文件夹中的内容部署到您的服务器。

## 贡献
欢迎任何形式的贡献！请提交问题或拉取请求。

## 许可证
该项目使用 MIT 许可证。