# DeepShape Landing Page

深形智能 DeepShape - AI驱动的口腔修复设计平台官网

## 技术栈

- **Vite** - 现代化前端构建工具
- **React 19** - UI 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 原子化 CSS 框架

## 特性

- ✅ 完全响应式设计
- ✅ 现代化深色主题
- ✅ 平滑滚动和动画效果
- ✅ TypeScript 类型安全
- ✅ 组件化架构
- ✅ 性能优化

## 项目结构

```
landingpage/
├── src/
│   ├── components/        # React 组件
│   │   ├── Navbar.tsx     # 导航栏
│   │   ├── Hero.tsx       # 首屏
│   │   ├── Solutions.tsx  # 解决方案
│   │   ├── Features.tsx   # AI 流程展示
│   │   ├── Technology.tsx # 核心技术
│   │   ├── FAQ.tsx        # 常见问题
│   │   ├── Apply.tsx      # 申请表单
│   │   └── Footer.tsx     # 页脚
│   ├── App.tsx            # 主应用组件
│   ├── main.tsx           # 应用入口
│   └── index.css          # 全局样式
├── index.html             # HTML 入口
├── vite.config.ts         # Vite 配置
├── tailwind.config.js     # Tailwind 配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 项目依赖

```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 `http://localhost:3000` 查看网站。

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 主要 Sections

1. **Hero Section** - 首屏展示，包含主标题、CTA 按钮和关键数据
2. **Solutions** - 技工所和牙科诊所两种解决方案
3. **Features** - AI 核心流程三步展示
4. **Technology** - 核心技术栈介绍
5. **FAQ** - 常见问题解答
6. **Apply** - 内测申请表单
7. **Footer** - 页脚导航和社交媒体链接

## 设计特点

- **深色主题统一** - 采用深色背景 (#0a0a0a) 配合渐变色强调
- **简约 Logo** - Hero section 使用简洁的勾选图标配合渐变背景
- **流畅动画** - 悬停效果、滚动动画、渐变背景
- **响应式布局** - 完美适配桌面、平板和移动设备

## 优化建议

- 添加图片资源（产品截图、团队照片等）
- 集成真实的表单提交 API
- 添加 Google Analytics 或其他分析工具
- 实现暗色/亮色主题切换
- 添加多语言支持（中英文切换）

## License

ISC
