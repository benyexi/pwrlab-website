// ============================================================
// PWRlab Site Data — Replace placeholder content with real data
// ============================================================

export interface TeamMember {
  id: string;
  name: { en: string; zh: string };
  role: "pi" | "collaborator" | "phd" | "msc" | "alumni";
  photo: string;
  interests: { en: string; zh: string };
  bio?: { en: string; zh: string };
  email?: string;
  scholar?: string;
  researchgate?: string;
  orcid?: string;
  website?: string;
  year?: string; // graduation year for alumni, enrollment year for students
}

export interface Project {
  id: string;
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  funding: { en: string; zh: string };
  period: string;
  status: "current" | "completed";
  image?: string;
  pi?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  highlight?: boolean;
}

export interface NewsItem {
  id: string;
  title: { en: string; zh: string };
  date: string;
  summary: { en: string; zh: string };
  content?: { en: string; zh: string };
  tag: "paper" | "conference" | "award" | "fieldwork" | "graduation" | "general";
  image?: string;
}

export interface Facility {
  id: string;
  name: { en: string; zh: string };
  description: { en: string; zh: string };
  image: string;
  specs?: { en: string; zh: string }[];
}

export interface GalleryImage {
  id: string;
  src: string;
  caption: { en: string; zh: string };
  category: "fieldwork" | "lab" | "team";
}

// ---- Image URLs ----
const IMAGES = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/hero-banner-gp4JARb5SDyjY5GE8DaN64.webp",
  ecohydrology: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/research-ecohydrology-NFG5gBx7C5oVgi83EgRfts.webp",
  roots: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/research-roots-NEvJ8CWtdh6mpadopTyfhL.webp",
  fieldwork: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/fieldwork-gallery-DsZofphhPD4phhhzS82WPP.webp",
  facilities: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/facilities-station-3Az9RbCHQWVU9fF94Zx7R6.webp",
};

// ---- Team Members ----
export const teamMembers: TeamMember[] = [
  {
    id: "xi-benye",
    name: { en: "Prof. Benye Xi", zh: "席本野 教授" },
    role: "pi",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Plantation ecohydrology, tree water relations, plant physiological ecology",
      zh: "人工林生态水文、林木水分关系、植物生理生态学",
    },
    bio: {
      en: "Prof. Xi leads the Plantation Water Relation Lab at Beijing Forestry University. His research focuses on understanding water cycling processes in planted forests and developing sustainable management strategies for plantation ecosystems. He has published extensively in leading journals including Agricultural and Forest Meteorology, Tree Physiology, and Forest Ecology and Management.",
      zh: "席本野教授是北京林业大学人工林水分关系实验室负责人。研究聚焦于人工林水循环过程及可持续经营策略。在Agricultural and Forest Meteorology、Tree Physiology、Forest Ecology and Management等国际主流期刊发表多篇论文。",
    },
    email: "xibenye@bjfu.edu.cn",
    scholar: "https://scholar.google.com",
    researchgate: "https://www.researchgate.net",
    orcid: "https://orcid.org",
  },
  {
    id: "mark-coleman",
    name: { en: "Prof. Mark Coleman", zh: "Mark Coleman 教授" },
    role: "collaborator",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Forest productivity, carbon allocation, tree physiology, short-rotation forestry",
      zh: "森林生产力、碳分配、树木生理学、短轮伐期林业",
    },
    bio: {
      en: "Prof. Coleman is a forest ecophysiologist at the University of Idaho. He collaborates with PWRlab on research related to tree carbon-water trade-offs and plantation productivity optimization.",
      zh: "Coleman教授是爱达荷大学森林生态生理学家。与PWRlab在林木碳-水权衡及人工林生产力优化方面开展合作研究。",
    },
    email: "mcoleman@uidaho.edu",
    website: "https://www.uidaho.edu",
  },
  {
    id: "student-zhang",
    name: { en: "Zhang Wei", zh: "张伟" },
    role: "phd",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Sap flow dynamics, stomatal regulation, drought response",
      zh: "液流动态、气孔调控、干旱响应",
    },
    year: "2022",
  },
  {
    id: "student-li",
    name: { en: "Li Xiaomei", zh: "李晓梅" },
    role: "phd",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Root water uptake, stable isotopes, soil-plant-atmosphere continuum",
      zh: "根系吸水、稳定同位素、土壤-植物-大气连续体",
    },
    year: "2023",
  },
  {
    id: "student-uwimana",
    name: { en: "Uwimana Jean", zh: "Uwimana Jean" },
    role: "phd",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Tropical plantation hydrology, climate change impacts, water use efficiency",
      zh: "热带人工林水文、气候变化影响、水分利用效率",
    },
    year: "2023",
  },
  {
    id: "student-wang",
    name: { en: "Wang Yufei", zh: "王宇飞" },
    role: "msc",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Eddy covariance, evapotranspiration partitioning",
      zh: "涡度相关、蒸散发分割",
    },
    year: "2024",
  },
  {
    id: "student-chen",
    name: { en: "Chen Yutong", zh: "陈雨桐" },
    role: "msc",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Machine learning for forest monitoring, remote sensing",
      zh: "森林监测机器学习、遥感",
    },
    year: "2025",
  },
  {
    id: "student-niyonzima",
    name: { en: "Niyonzima Eric", zh: "Niyonzima Eric" },
    role: "msc",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Agroforestry water balance, tropical ecosystems",
      zh: "农林复合系统水量平衡、热带生态系统",
    },
    year: "2024",
  },
  {
    id: "alumni-liu",
    name: { en: "Dr. Liu Hao", zh: "刘浩 博士" },
    role: "alumni",
    photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Now at Chinese Academy of Forestry — Plantation water balance modeling",
      zh: "现就职于中国林业科学研究院 — 人工林水量平衡模拟",
    },
    year: "2024",
  },
];

// ---- Projects ----
export const projects: Project[] = [
  {
    id: "nsfc-ecohydrology",
    title: {
      en: "Ecohydrological Processes and Water Use Strategies of Poplar Plantations Under Climate Change",
      zh: "气候变化下杨树人工林生态水文过程与水分利用策略",
    },
    description: {
      en: "This project investigates how poplar plantation ecohydrological processes respond to changing climate conditions in northern China. We combine long-term sap flow monitoring, eddy covariance measurements, and process-based modeling to quantify water use patterns and develop adaptive management strategies.",
      zh: "本项目研究华北地区杨树人工林生态水文过程对气候变化的响应。结合长期液流监测、涡度相关测量和过程模型，量化水分利用模式并制定适应性经营策略。",
    },
    funding: { en: "National Natural Science Foundation of China (NSFC)", zh: "国家自然科学基金" },
    period: "2023–2027",
    status: "current",
    image: IMAGES.ecohydrology,
  },
  {
    id: "moe-roots",
    title: {
      en: "Fine Root Dynamics and Belowground Carbon-Water Coupling in Planted Forests",
      zh: "人工林细根动态与地下碳-水耦合机制",
    },
    description: {
      en: "Using minirhizotron technology and stable isotope approaches, this project explores fine root turnover, root water uptake depth, and the coupling between belowground carbon allocation and water acquisition in plantation ecosystems.",
      zh: "利用微根管技术和稳定同位素方法，探索人工林生态系统中细根周转、根系吸水深度以及地下碳分配与水分获取的耦合机制。",
    },
    funding: { en: "Ministry of Education Key Project", zh: "教育部重点项目" },
    period: "2024–2026",
    status: "current",
    image: IMAGES.roots,
  },
  {
    id: "intl-collab",
    title: {
      en: "China-US Collaborative Research on Plantation Water Use Efficiency",
      zh: "中美人工林水分利用效率合作研究",
    },
    description: {
      en: "A collaborative project with the University of Idaho comparing water use efficiency of planted forests across climate gradients in China and the Pacific Northwest USA. Joint field campaigns and data sharing advance our understanding of cross-continental plantation ecohydrology.",
      zh: "与爱达荷大学合作，比较中国和美国太平洋西北地区不同气候梯度下人工林的水分利用效率。联合野外调查和数据共享推进跨大陆人工林生态水文研究。",
    },
    funding: { en: "China Scholarship Council / NSF", zh: "国家留学基金委 / 美国NSF" },
    period: "2022–2025",
    status: "current",
  },
  {
    id: "ai-monitoring",
    title: {
      en: "AI-Driven Forest Drought Early Warning System",
      zh: "AI驱动的森林干旱预警系统",
    },
    description: {
      en: "Developing deep learning models that integrate sap flow sensor data, meteorological observations, and satellite imagery to predict forest drought stress before visible symptoms appear.",
      zh: "开发深度学习模型，整合液流传感器数据、气象观测和卫星影像，在可见症状出现前预测森林干旱胁迫。",
    },
    funding: { en: "Beijing Natural Science Foundation", zh: "北京市自然科学基金" },
    period: "2024–2026",
    status: "current",
  },
  {
    id: "completed-poplar",
    title: {
      en: "Water Balance of Poplar Plantations in the North China Plain",
      zh: "华北平原杨树人工林水量平衡研究",
    },
    description: {
      en: "Comprehensive study of water balance components in poplar plantations, establishing long-term monitoring protocols and quantifying the impact of plantation density on regional water resources.",
      zh: "杨树人工林水量平衡组分综合研究，建立长期监测方案并量化人工林密度对区域水资源的影响。",
    },
    funding: { en: "NSFC General Program", zh: "国家自然科学基金面上项目" },
    period: "2019–2022",
    status: "completed",
  },
  {
    id: "completed-sapflow",
    title: {
      en: "Sap Flow Scaling Methods for Plantation Transpiration Estimation",
      zh: "人工林蒸腾估算的液流尺度转换方法",
    },
    description: {
      en: "Developed and validated methods for scaling sap flow measurements from individual trees to stand-level transpiration in planted forests with heterogeneous structure.",
      zh: "开发并验证了异质结构人工林中从单木液流到林分蒸腾的尺度转换方法。",
    },
    funding: { en: "NSFC Youth Program", zh: "国家自然科学基金青年项目" },
    period: "2016–2019",
    status: "completed",
  },
];

// ---- Publications ----
export const publications: Publication[] = [
  {
    id: "pub-2025-1",
    title: "Partitioning evapotranspiration in a poplar plantation using sap flow and eddy covariance: Implications for water management",
    authors: "Xi B, Zhang W, Li X, Coleman M",
    journal: "Agricultural and Forest Meteorology",
    year: 2025,
    volume: "342",
    pages: "109876",
    doi: "10.1016/j.agrformet.2025.109876",
    highlight: true,
  },
  {
    id: "pub-2025-2",
    title: "Deep learning-based sap flow prediction under drought conditions in planted forests",
    authors: "Chen Y, Xi B, Wang Y",
    journal: "Ecological Informatics",
    year: 2025,
    volume: "78",
    pages: "102345",
    doi: "10.1016/j.ecoinf.2025.102345",
  },
  {
    id: "pub-2024-1",
    title: "Fine root dynamics and water uptake depth in response to drought in a poplar plantation",
    authors: "Li X, Xi B, Zhang W, Uwimana J",
    journal: "Tree Physiology",
    year: 2024,
    volume: "44",
    pages: "tpae089",
    doi: "10.1093/treephys/tpae089",
    highlight: true,
  },
  {
    id: "pub-2024-2",
    title: "Comparing water use efficiency of planted forests across climate gradients: A China-US synthesis",
    authors: "Xi B, Coleman M, Zhang W, Liu H",
    journal: "Forest Ecology and Management",
    year: 2024,
    volume: "556",
    pages: "121742",
    doi: "10.1016/j.foreco.2024.121742",
  },
  {
    id: "pub-2024-3",
    title: "Stomatal regulation of water loss in poplar under varying vapor pressure deficit",
    authors: "Zhang W, Xi B, Li X",
    journal: "Plant, Cell & Environment",
    year: 2024,
    volume: "47",
    pages: "1234–1248",
    doi: "10.1111/pce.14789",
  },
  {
    id: "pub-2023-1",
    title: "Root water uptake patterns revealed by stable isotopes in a mixed plantation",
    authors: "Li X, Xi B, Uwimana J",
    journal: "Journal of Hydrology",
    year: 2023,
    volume: "618",
    pages: "129234",
    doi: "10.1016/j.jhydrol.2023.129234",
  },
  {
    id: "pub-2023-2",
    title: "Scaling sap flow from tree to stand in heterogeneous poplar plantations: A Bayesian approach",
    authors: "Liu H, Xi B, Coleman M",
    journal: "Agricultural and Forest Meteorology",
    year: 2023,
    volume: "330",
    pages: "109312",
    doi: "10.1016/j.agrformet.2023.109312",
  },
  {
    id: "pub-2023-3",
    title: "Seasonal variation in hydraulic conductance and its coordination with leaf gas exchange in plantation trees",
    authors: "Zhang W, Xi B",
    journal: "Tree Physiology",
    year: 2023,
    volume: "43",
    pages: "567–580",
    doi: "10.1093/treephys/tpad023",
  },
  {
    id: "pub-2022-1",
    title: "Long-term water balance of a poplar plantation in the North China Plain: Implications for sustainable management",
    authors: "Xi B, Liu H, Zhang W, Coleman M",
    journal: "Forest Ecology and Management",
    year: 2022,
    volume: "519",
    pages: "120345",
    doi: "10.1016/j.foreco.2022.120345",
    highlight: true,
  },
  {
    id: "pub-2022-2",
    title: "Minirhizotron observations of fine root phenology in a temperate plantation forest",
    authors: "Li X, Xi B",
    journal: "Plant and Soil",
    year: 2022,
    volume: "475",
    pages: "345–360",
    doi: "10.1007/s11104-022-05432-8",
  },
];

// ---- News ----
export const newsItems: NewsItem[] = [
  {
    id: "news-2025-03",
    title: {
      en: "New paper published in Agricultural and Forest Meteorology",
      zh: "新论文发表于Agricultural and Forest Meteorology",
    },
    date: "2025-03-15",
    summary: {
      en: "Our latest work on partitioning evapotranspiration in poplar plantations has been published. This study provides new insights into water management strategies for planted forests.",
      zh: "我们关于杨树人工林蒸散发分割的最新研究已发表。该研究为人工林水分管理策略提供了新见解。",
    },
    tag: "paper",
  },
  {
    id: "news-2025-02",
    title: {
      en: "PWRlab presents at AGU Fall Meeting 2024",
      zh: "PWRlab参加2024年AGU秋季会议",
    },
    date: "2025-01-10",
    summary: {
      en: "Three members of our lab presented their research at the AGU Fall Meeting in Washington, D.C. Topics included sap flow dynamics, root water uptake, and AI-based forest monitoring.",
      zh: "实验室三名成员在华盛顿特区举行的AGU秋季会议上展示了研究成果。主题包括液流动态、根系吸水和AI森林监测。",
    },
    tag: "conference",
    image: IMAGES.fieldwork,
  },
  {
    id: "news-2024-12",
    title: {
      en: "Welcome new MSc student Chen Yutong",
      zh: "欢迎新硕士生陈雨桐加入",
    },
    date: "2024-12-01",
    summary: {
      en: "Chen Yutong joins PWRlab as a new MSc student. She will work on machine learning approaches for forest drought monitoring.",
      zh: "陈雨桐作为新硕士生加入PWRlab。她将从事森林干旱监测的机器学习方法研究。",
    },
    tag: "general",
  },
  {
    id: "news-2024-09",
    title: {
      en: "Dr. Liu Hao successfully defends PhD thesis",
      zh: "刘浩博士顺利通过博士论文答辩",
    },
    date: "2024-09-20",
    summary: {
      en: "Congratulations to Dr. Liu Hao for successfully defending his PhD thesis on 'Water balance modeling of poplar plantations in the North China Plain'. He will join the Chinese Academy of Forestry as a postdoctoral researcher.",
      zh: "祝贺刘浩博士顺利通过题为'华北平原杨树人工林水量平衡模拟'的博士论文答辩。他将加入中国林业科学研究院从事博士后研究。",
    },
    tag: "graduation",
  },
  {
    id: "news-2024-07",
    title: {
      en: "Summer field campaign completed at Daxing experimental station",
      zh: "大兴实验站夏季野外观测圆满完成",
    },
    date: "2024-07-30",
    summary: {
      en: "Our team completed a month-long intensive field campaign at the Daxing poplar plantation experimental station, collecting sap flow, soil moisture, and microclimate data during the peak growing season.",
      zh: "团队在大兴杨树人工林实验站完成了为期一个月的集中野外观测，采集了生长旺季的液流、土壤水分和小气候数据。",
    },
    tag: "fieldwork",
    image: IMAGES.fieldwork,
  },
  {
    id: "news-2024-05",
    title: {
      en: "Prof. Xi visits University of Idaho for collaborative research",
      zh: "席本野教授访问爱达荷大学开展合作研究",
    },
    date: "2024-05-15",
    summary: {
      en: "Prof. Xi visited the University of Idaho for two weeks to advance the China-US collaborative research project on plantation water use efficiency with Prof. Mark Coleman.",
      zh: "席本野教授访问爱达荷大学两周，与Mark Coleman教授推进中美人工林水分利用效率合作研究项目。",
    },
    tag: "general",
  },
];

// ---- Facilities ----
export const facilities: Facility[] = [
  {
    id: "sapflow",
    name: { en: "Sap Flow Measurement System", zh: "液流测量系统" },
    description: {
      en: "Thermal dissipation probe (TDP) and heat ratio method (HRM) systems for continuous monitoring of tree water use. Our lab operates 50+ sensors across multiple plantation sites.",
      zh: "热扩散探针（TDP）和热比率法（HRM）系统，用于连续监测林木水分利用。实验室在多个人工林样地运行50余个传感器。",
    },
    image: IMAGES.ecohydrology,
    specs: [
      { en: "Granier-type TDP sensors", zh: "Granier型TDP传感器" },
      { en: "ICT HRM sensors", zh: "ICT HRM传感器" },
      { en: "CR1000X dataloggers", zh: "CR1000X数据采集器" },
    ],
  },
  {
    id: "minirhizotron",
    name: { en: "Minirhizotron System", zh: "微根管系统" },
    description: {
      en: "CI-600 root scanner system for non-destructive monitoring of fine root dynamics, including root production, mortality, and turnover rates at multiple soil depths.",
      zh: "CI-600根系扫描仪系统，用于非破坏性监测细根动态，包括不同土壤深度的根系生产、死亡和周转速率。",
    },
    image: IMAGES.roots,
    specs: [
      { en: "CI-600 In-Situ Root Imager", zh: "CI-600原位根系成像仪" },
      { en: "60+ observation tubes", zh: "60余根观测管" },
      { en: "WinRHIZO Tron analysis software", zh: "WinRHIZO Tron分析软件" },
    ],
  },
  {
    id: "eddycovariance",
    name: { en: "Eddy Covariance System", zh: "涡度相关系统" },
    description: {
      en: "Open-path eddy covariance system for measuring ecosystem-level fluxes of water vapor, CO2, and energy above the plantation canopy.",
      zh: "开路涡度相关系统，用于测量人工林冠层上方生态系统水平的水汽、CO2和能量通量。",
    },
    image: IMAGES.facilities,
    specs: [
      { en: "LI-7500DS open-path analyzer", zh: "LI-7500DS开路分析仪" },
      { en: "CSAT3 sonic anemometer", zh: "CSAT3超声风速仪" },
      { en: "30m flux tower", zh: "30米通量塔" },
    ],
  },
  {
    id: "weather",
    name: { en: "Automatic Weather Station", zh: "自动气象站" },
    description: {
      en: "Comprehensive meteorological monitoring including air temperature, humidity, precipitation, wind speed, solar radiation, and soil temperature/moisture profiles.",
      zh: "综合气象监测，包括气温、湿度、降水、风速、太阳辐射和土壤温湿度剖面。",
    },
    image: IMAGES.facilities,
    specs: [
      { en: "Campbell Scientific CR6 logger", zh: "Campbell Scientific CR6采集器" },
      { en: "Soil moisture profile (TDR)", zh: "土壤水分剖面（TDR）" },
      { en: "Tipping bucket rain gauge", zh: "翻斗式雨量计" },
    ],
  },
  {
    id: "isotope",
    name: { en: "Stable Isotope Analysis", zh: "稳定同位素分析" },
    description: {
      en: "Access to Picarro L2130-i cavity ring-down spectrometer for water stable isotope analysis (δ18O, δ2H), enabling root water uptake source identification.",
      zh: "配备Picarro L2130-i腔衰荡光谱仪进行水稳定同位素分析（δ18O、δ2H），用于根系吸水来源识别。",
    },
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
    specs: [
      { en: "Picarro L2130-i CRDS", zh: "Picarro L2130-i CRDS" },
      { en: "Cryogenic vacuum distillation line", zh: "低温真空蒸馏系统" },
    ],
  },
];

// ---- Gallery ----
export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: IMAGES.fieldwork,
    caption: { en: "Field measurements at the Daxing experimental station", zh: "大兴实验站野外测量" },
    category: "fieldwork",
  },
  {
    id: "g2",
    src: IMAGES.ecohydrology,
    caption: { en: "Installing sap flow sensors on poplar trees", zh: "在杨树上安装液流传感器" },
    category: "fieldwork",
  },
  {
    id: "g3",
    src: IMAGES.roots,
    caption: { en: "Minirhizotron observation of root systems", zh: "微根管观测根系" },
    category: "lab",
  },
  {
    id: "g4",
    src: IMAGES.facilities,
    caption: { en: "Eddy covariance flux tower above the plantation canopy", zh: "人工林冠层上方的涡度相关通量塔" },
    category: "fieldwork",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    caption: { en: "Lab meeting and research discussion", zh: "组会与研究讨论" },
    category: "team",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
    caption: { en: "Stable isotope analysis in the laboratory", zh: "实验室稳定同位素分析" },
    category: "lab",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
    caption: { en: "Team celebration after successful field campaign", zh: "野外观测圆满完成后的团队合影" },
    category: "team",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    caption: { en: "Poplar plantation at the experimental site", zh: "实验样地杨树人工林" },
    category: "fieldwork",
  },
];

export { IMAGES };
