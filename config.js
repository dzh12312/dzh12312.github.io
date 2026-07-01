/**
 * 个人名片 · 唯一推荐修改的文件（像填表一样改下面对象即可）
 * 说明见仓库根目录 README.md
 */
const CONFIG = {
  meta: {
    title: '邓子豪 · 个人名片',
    description:
      '邓子豪 — 复旦大学腾飞书院工科学生个人名片：简介、技能与兴趣、科研、竞赛、实习与社会实践。',
    lang: 'zh-CN'
  },

  /** 顶栏与页脚文案 */
  site: {
    headerName: '腾小飞~邓子豪',
    footerName: '邓子豪',
    footerOrg: '复旦大学腾飞书院 计算与智能创新学院',
    footerNote: '本页为 github.io 静态部署教程示例 · 左右滑动或方向键切换'
  },

  /**
   * 底部圆点导航顺序与每一「张」幻灯片
   * 不需要某一整页时，把对应项的 enabled 改为 false（不必删 HTML）
   */
  slides: [
    { id: 'home', enabled: true, navLabel: '主页', navAriaLabel: '首页' },
    { id: 'skills', enabled: true, navLabel: '技能', navAriaLabel: '技能与兴趣' },
    { id: 'research', enabled: false, navLabel: '科研经历', navAriaLabel: '科研经历' },
    { id: 'competition', enabled: false, navLabel: '竞赛获奖', navAriaLabel: '竞赛获奖' },
    { id: 'internship', enabled: true, navLabel: '实习经验', navAriaLabel: '实习经验' },
    { id: 'social', enabled: true, navLabel: '社会实践', navAriaLabel: '社会实践' }
  ],

  /** 装饰图：右下角水印；技能等卡片标题旁小图标 */
  assets: {
    watermark: 'assets/FDU.png',
    sectionIcon: 'assets/标题.svg'
  },

  profile: {
    greetingLead: '你好，我是',
    /** 首页大标题里渐变显示的名字 */
    displayName: '邓子豪',
    locationLine: '复旦大学腾飞书院-计算与智能创新学院',
    intro: '工科学生一枚~ 计算机科学与技术专业在读。',
    quote: '「永远在腾飞路上！」',
    /** 头像：可把图片放到 assets/ 下，例如 assets/avatar.jpg */
    avatar: 'assets/头像1.jpg',
    avatarAlt: '腾小飞~邓子豪',
    aboutTitle: 'About Me',
    /** 右侧「关于我」列表；有 href 时渲染为链接 */
    aboutRows: [
      { label: '年龄', value: '永远的 18 岁' },
      { label: '爱好', value: '探索世界' },
      {
        label: 'GitHub',
        value: 'dzh12312',
        href: 'https://github.com/dzh12312'
      },
      {
        label: '联系方式',
        value: '2036034467@qq.com',
        href: 'mailto:2036034467@qq.com'
      }
    ]
  },

  links: {
    /** 右上角「GitHub 仓库」按钮 */
    repoUrl: 'https://github.com/dzh12312/dzh12312.github.io',
    repoLabel: 'GitHub 仓库',
    /** 主按钮文案与跳转的幻灯片 id（须为上面 slides 中某一 id） */
    primaryCtaLabel: '浏览技能',
    primaryCtaSlideId: 'skills'
  },

  skills: {
    title: '技能',
    columns: [
      {
        sections: [
          {
            heading: 'Language',
            items: ['Chinese', 'English']
          },
          {
            heading: 'Interests',
            items: ['Painting', 'Football'，'Valorant']
          }
        ]
      },
      {
        sections: [
          {
            heading: 'Tech',
            items: ['C','C++']
          }
        ]
      },
      {
        sections: [
          {
            heading: 'Reading list',
            items: ['《月亮与六便士》', '《CSAPP》', '《文化苦旅》']
          }
        ]
      }
    ]
  },

  /** 各经历页：标题 + 字符串列表（留空数组则整段列表不渲染） */
  timelines: {
    research: {
      title: '科研经历',
      items: [
        '参与发表一篇 WON 负一区文章',
        '参与腾飞科创并顺利结项',
        'xxxx 实验室周公下棋全勤奖'
      ]
    },
    competition: {
      title: '竞赛获奖经历',
      items: [
        '数模国赛永远在参与',
        '电赛、ACM、RM 有空一定了解'
      ]
    },
    internship: {
      title: '实习经验',
      items: [
        '被窝优秀实习生','深度参与无畏契约项目，实习认证时长 500h+']
    }，
    social: {
      title: '社会实践',
      items: ['熬夜冠军王', '美食达人']
    }
  }
}
