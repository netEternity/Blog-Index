/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "ET-Websites",
    sites: [
      {
        title: "ETOJ",
        url: "https://etoj.xyz/",
        description: "ETOJ是一个基于Hydro的OJ系统",
        icon: "",
        color: "#0171CD",
      },
      {
        title: "ETOJ Docs",
        description: "ETOJ文档",
        url: "https://docs.etoj.xyz/",
        icon: "",
      },
      {
        title: "ETOJ News",
        description: "ETOJ的新闻发布处",
        url: "https://news.etoj.xyz/",
        icon: "",
      },
    ],
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "CB_X2_Jun Blog",
        description: "CB_X2_Jun 的博客",
        url: "https://cb-x2-jun.github.io/",
        icon: "https://avatars.githubusercontent.com/u/184076746?v=4https://esunr-image-bed.oss-cn-beijing.aliyuncs.com/logo.jpg",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "ETOJ",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://etoj.xyz",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/Eternity-Sky",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "",
  ICP_URL: "",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "ET-网站发布页",
    keywords: "OJ, hydro, Index Page",
    description: "This is my OJ website index page.",
  },
};

export default GLOBAL_CONFIG;
