import React, { createContext, useContext, useState, useCallback } from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.research": "Research",
    "nav.projects": "Projects",
    "nav.publications": "Publications",
    "nav.team": "Team",
    "nav.facilities": "Facilities",
    "nav.news": "News",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",

    // Home
    "home.hero.title": "Plantation Water Relation Lab",
    "home.hero.subtitle": "Understanding water dynamics in planted forests to sustain ecosystem services under global change",
    "home.hero.cta": "Explore Our Research",
    "home.about.title": "About PWRlab",
    "home.about.text": "PWRlab (Plantation Water Relation Lab) at Beijing Forestry University investigates the ecohydrological processes of planted forests across multiple scales. Our interdisciplinary team combines field measurements, remote sensing, and modeling approaches to understand how trees regulate water use and how plantation management affects watershed hydrology.",
    "home.news.title": "Latest News",
    "home.news.viewAll": "View All News",
    "home.stats.publications": "Publications",
    "home.stats.projects": "Active Projects",
    "home.stats.members": "Team Members",
    "home.stats.collaborators": "Global Partners",

    // Research
    "research.title": "Research Directions",
    "research.subtitle": "Our research spans from individual tree physiology to landscape-scale ecohydrology",
    "research.ecohydrology.title": "Plantation Ecohydrology",
    "research.ecohydrology.desc": "Investigating water cycling processes in planted forests, including rainfall interception, transpiration, soil water dynamics, and groundwater recharge. We study how plantation species composition, structure, and management affect watershed water balance.",
    "research.sapflow.title": "Tree Water Relations & Sap Flow",
    "research.sapflow.desc": "Measuring and modeling tree water use through sap flow techniques, stem water potential, and stomatal conductance. Our work reveals how trees regulate water transport under varying environmental conditions and drought stress.",
    "research.roots.title": "Root Ecology & Belowground Processes",
    "research.roots.desc": "Studying fine root dynamics, root water uptake patterns, and root-soil interactions using minirhizotron systems and isotope tracing. We explore how belowground processes influence whole-tree and stand-level water use.",
    "research.climate.title": "Climate-Vegetation Interactions",
    "research.climate.desc": "Examining how climate variability and change affect forest water use efficiency, growth, and resilience. We use long-term monitoring data and process-based models to project future forest-water relationships.",
    "research.ai.title": "AI-Assisted Forest Monitoring",
    "research.ai.desc": "Developing machine learning approaches for automated analysis of forest monitoring data, including sap flow pattern recognition, remote sensing image classification, and early warning systems for forest drought stress.",

    // Projects
    "projects.title": "Research Projects",
    "projects.subtitle": "Funded research advancing our understanding of forest-water interactions",
    "projects.current": "Current Projects",
    "projects.completed": "Completed Projects",
    "projects.funding": "Funding",
    "projects.period": "Period",

    // Publications
    "publications.title": "Publications",
    "publications.subtitle": "Peer-reviewed research from our lab",
    "publications.search": "Search publications...",
    "publications.filterYear": "Filter by year",
    "publications.allYears": "All Years",
    "publications.bibtex": "Import BibTeX",
    "publications.count": "{n} publication(s)",
    "publications.paperCount": "{n} paper(s)",
    "publications.empty": "No publications found.",

    // Team
    "team.title": "Our Team",
    "team.subtitle": "A diverse group of researchers united by curiosity about forest-water interactions",
    "team.pi": "Principal Investigator",
    "team.phd": "PhD Students",
    "team.msc": "MSc Students",
    "team.alumni": "Alumni",
    "team.collaborators": "Collaborators",
    "team.interests": "Research Interests",
    "team.googleScholar": "Google Scholar",
    "team.classOf": "Class of",
    "team.since": "Since",

    // Facilities
    "facilities.title": "Facilities & Equipment",
    "facilities.subtitle": "State-of-the-art instrumentation for forest ecosystem research",

    // News
    "news.title": "News & Updates",
    "news.subtitle": "Latest happenings in our lab",
    "news.readMore": "Read More",
    "news.tags.paper": "Publication",
    "news.tags.conference": "Conference",
    "news.tags.award": "Award",
    "news.tags.fieldwork": "Fieldwork",
    "news.tags.graduation": "Graduation",
    "news.tags.general": "News",

    // Gallery
    "gallery.title": "Gallery",
    "gallery.subtitle": "Snapshots from the field and lab",
    "gallery.fieldwork": "Fieldwork",
    "gallery.lab": "Laboratory",
    "gallery.team": "Team Life",
    "gallery.all": "All",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch or visit our lab",
    "contact.address.title": "Address",
    "contact.address.text": "School of Soil and Water Conservation, Beijing Forestry University, No. 35 Tsinghua East Road, Haidian District, Beijing 100083, China",
    "contact.address.short": "Beijing Forestry University, No. 35 Tsinghua East Road, Haidian District, Beijing",
    "contact.email.title": "Email",
    "contact.join.title": "Join Us",
    "contact.join.text": "We welcome motivated students and postdocs interested in forest ecohydrology. If you are passionate about understanding tree-water relationships and have a background in forestry, ecology, hydrology, or related fields, please send your CV and a brief statement of research interests to Prof. Xi.",
    "contact.cta": "Contact Prof. Xi",
    "contact.map.title": "Location",
    "contact.map.viewLarger": "View larger map",

    // Footer
    "footer.affiliation": "Beijing Forestry University",
    "footer.lab": "Plantation Water Relation Lab",
    "footer.copyright": "PWRlab. All rights reserved.",
    "footer.quickLinks": "Quick Links",
    "footer.links": "Links",
    "footer.address": "Beijing Forestry University, Haidian, Beijing 100083",
    "footer.bjfu": "Beijing Forestry University",
    "footer.uidaho": "University of Idaho",
  },
  zh: {
    // Nav
    "nav.home": "首页",
    "nav.research": "研究方向",
    "nav.projects": "科研项目",
    "nav.publications": "学术论文",
    "nav.team": "团队成员",
    "nav.facilities": "仪器设备",
    "nav.news": "新闻动态",
    "nav.gallery": "图片集锦",
    "nav.contact": "联系我们",

    // Home
    "home.hero.title": "人工林水分关系实验室",
    "home.hero.subtitle": "探索人工林水分动态机制，维护全球变化下的生态系统服务功能",
    "home.hero.cta": "了解我们的研究",
    "home.about.title": "关于 PWRlab",
    "home.about.text": "PWRlab（人工林水分关系实验室）隶属于北京林业大学，致力于研究人工林多尺度生态水文过程。我们的跨学科团队结合野外观测、遥感技术和模型模拟方法，深入理解林木水分利用调控机制以及人工林经营对流域水文的影响。",
    "home.news.title": "最新动态",
    "home.news.viewAll": "查看全部",
    "home.stats.publications": "发表论文",
    "home.stats.projects": "在研项目",
    "home.stats.members": "团队成员",
    "home.stats.collaborators": "国际合作",

    // Research
    "research.title": "研究方向",
    "research.subtitle": "我们的研究涵盖从单木生理到景观尺度生态水文的多个层面",
    "research.ecohydrology.title": "人工林生态水文",
    "research.ecohydrology.desc": "研究人工林水循环过程，包括降雨截留、蒸腾作用、土壤水分动态和地下水补给。探讨人工林树种组成、结构和经营方式对流域水量平衡的影响。",
    "research.sapflow.title": "林木水分关系与液流",
    "research.sapflow.desc": "利用液流技术、茎干水势和气孔导度等手段测量和模拟林木水分利用。揭示林木在不同环境条件和干旱胁迫下的水分传输调控机制。",
    "research.roots.title": "根系生态学",
    "research.roots.desc": "利用微根管系统和同位素示踪技术研究细根动态、根系吸水模式和根-土相互作用。探索地下过程如何影响单木和林分水平的水分利用。",
    "research.climate.title": "气候-植被相互作用",
    "research.climate.desc": "研究气候变异和变化如何影响森林水分利用效率、生长和抗逆性。利用长期监测数据和过程模型预测未来森林-水分关系。",
    "research.ai.title": "AI辅助森林监测",
    "research.ai.desc": "开发机器学习方法用于森林监测数据的自动化分析，包括液流模式识别、遥感图像分类和森林干旱胁迫预警系统。",

    // Projects
    "projects.title": "科研项目",
    "projects.subtitle": "推进森林-水分相互作用研究的资助项目",
    "projects.current": "在研项目",
    "projects.completed": "已结题项目",
    "projects.funding": "资助来源",
    "projects.period": "执行期",

    // Publications
    "publications.title": "学术论文",
    "publications.subtitle": "实验室发表的同行评审论文",
    "publications.search": "搜索论文...",
    "publications.filterYear": "按年份筛选",
    "publications.allYears": "全部年份",
    "publications.bibtex": "导入BibTeX",
    "publications.count": "共 {n} 篇论文",
    "publications.paperCount": "{n} 篇",
    "publications.empty": "未找到相关论文。",

    // Team
    "team.title": "团队成员",
    "team.subtitle": "一支因对森林-水分关系的好奇心而凝聚的多元化研究团队",
    "team.pi": "课题组负责人",
    "team.phd": "博士研究生",
    "team.msc": "硕士研究生",
    "team.alumni": "毕业生",
    "team.collaborators": "合作者",
    "team.interests": "研究兴趣",
    "team.googleScholar": "谷歌学术",
    "team.classOf": "届",
    "team.since": "入学于",

    // Facilities
    "facilities.title": "仪器设备",
    "facilities.subtitle": "先进的森林生态系统研究仪器装备",

    // News
    "news.title": "新闻动态",
    "news.subtitle": "实验室最新消息",
    "news.readMore": "阅读更多",
    "news.tags.paper": "论文发表",
    "news.tags.conference": "学术会议",
    "news.tags.award": "获奖",
    "news.tags.fieldwork": "野外工作",
    "news.tags.graduation": "毕业",
    "news.tags.general": "新闻",

    // Gallery
    "gallery.title": "图片集锦",
    "gallery.subtitle": "野外与实验室的精彩瞬间",
    "gallery.fieldwork": "野外工作",
    "gallery.lab": "实验室",
    "gallery.team": "团队生活",
    "gallery.all": "全部",

    // Contact
    "contact.title": "联系我们",
    "contact.subtitle": "欢迎联系或来访",
    "contact.address.title": "地址",
    "contact.address.text": "北京市海淀区清华东路35号 北京林业大学水土保持学院 100083",
    "contact.address.short": "北京市海淀区清华东路35号 北京林业大学",
    "contact.email.title": "邮箱",
    "contact.join.title": "加入我们",
    "contact.join.text": "我们欢迎对森林生态水文感兴趣的优秀学生和博士后加入团队。如果您热衷于理解林木-水分关系，并具有林学、生态学、水文学或相关领域背景，请将简历和研究兴趣简述发送至席老师邮箱。",
    "contact.cta": "联系席老师",
    "contact.map.title": "位置",
    "contact.map.viewLarger": "查看大地图",

    // Footer
    "footer.affiliation": "北京林业大学",
    "footer.lab": "人工林水分关系实验室",
    "footer.copyright": "PWRlab 版权所有",
    "footer.quickLinks": "快速链接",
    "footer.links": "友情链接",
    "footer.address": "北京市海淀区 北京林业大学 100083",
    "footer.bjfu": "北京林业大学",
    "footer.uidaho": "爱达荷大学",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const stored = localStorage.getItem("pwrlab-lang");
    return (stored as Language) || "en";
  });

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("pwrlab-lang", newLang);
    document.documentElement.lang = newLang === "zh" ? "zh-CN" : "en";
  }, []);

  const t = useCallback(
    (key: string) => {
      return translations[lang][key] || key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
