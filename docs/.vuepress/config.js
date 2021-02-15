module.exports = {
  title: "DM",
  description: "daimian的网站",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    navs: [
      { text: "学习笔记", link: "/note/" },
      { text: "数据看板", link: "/statistics/" },
      // { text: "管理平台", link: "/" },
    ],
    sidebar: {
      "/note/": [
        {
          title: "关于本站",
          path: "/note/",
        },
        {
          title: "ps",
          path: "/note/ps/cutout",
          collapsable: false,
          children: [
            {
              title: "抠图",
              path: "/note/ps/cutout",
            },
          ],
        },
      ],
      "/release/": true,
    },

    // 产品名字
    title: "TDE代理联调平台",
    // 口号
    slogan: "在线代理平台，支持免代理访问测试环境",
    // 首页按钮
    leftBtn: {
      text: "快速开始 →",
      link: "/wiki/about/quickstart-guide",
    },
    rightBtn: {
      text: "管理平台",
      link: "http://admin.tde.oa.com/",
    },
    footer: {
      lisence: "MIT",
      copyright: "© 2020 TENCENT TDE-Oteam.All Rights Reserved",
      repoLink: "https://git.code.oa.com/tde-oteam/tde",
    },
  },
};
