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
  title?: { en: string; zh: string };
  education?: { en: string; zh: string }[];
  honors?: { en: string; zh: string }[];
  positions?: { en: string; zh: string }[];
  email?: string;
  scholar?: string;
  researchgate?: string;
  orcid?: string;
  website?: string;
  year?: string; // graduation year for alumni, enrollment year for students
}

export interface Award {
  id: string;
  title: { en: string; zh: string };
  year: number;
  rank?: string;
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

// ---- Awards ----
export const awards: Award[] = [
  {
    id: "award-2024-liangxi",
    title: {
      en: "Liangxi Forestry Science & Technology Award, 2nd Prize — Smart Irrigation for Poplar Plantations",
      zh: "梁希林业科学技术奖二等奖 — 杨树人工林智慧灌溉",
    },
    year: 2024,
    rank: "#1",
  },
  {
    id: "award-2024-cast",
    title: {
      en: "China Association for S&T — Research Instrument Innovation Case Award",
      zh: "中国科协科研仪器创新案例奖",
    },
    year: 2024,
  },
  {
    id: "award-2020-liangxi-paper",
    title: {
      en: "8th Liangxi Young Paper Award, 1st Prize",
      zh: "第八届梁希青年论文奖一等奖",
    },
    year: 2020,
  },
  {
    id: "award-2018-moe",
    title: {
      en: "Ministry of Education Science & Technology Award, 2nd Prize",
      zh: "教育部科学技术奖二等奖",
    },
    year: 2018,
  },
  {
    id: "award-2016-liangxi",
    title: {
      en: "Liangxi Forestry Science & Technology Award, 2nd Prize",
      zh: "梁希林业科学技术奖二等奖",
    },
    year: 2016,
    rank: "#2",
  },
  {
    id: "award-cast-paper",
    title: {
      en: "4th CAST Outstanding Paper Award (sole recipient in forestry)",
      zh: "第四届中国科协优秀论文奖（林学唯一）",
    },
    year: 2017,
  },
];

// ---- Team Members ----
export const teamMembers: TeamMember[] = [
  {
    id: "xi-benye",
    name: { en: "Prof. Benye Xi", zh: "席本野 教授" },
    role: "pi",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    title: {
      en: "Professor & PhD Supervisor (Exceptionally Promoted), College of Forestry, Beijing Forestry University",
      zh: "教授、博士生导师（破格晋升），北京林业大学林学院",
    },
    interests: {
      en: "Plantation ecohydrology, tree water relations, plant physiological ecology",
      zh: "人工林生态水文、林木水分关系、植物生理生态学",
    },
    bio: {
      en: "Prof. Xi (b. 1985, Gongyi, Henan) leads the Plantation Water Relation Lab at Beijing Forestry University. He is a recipient of the National \"Ten Thousand Talents Plan\" Young Top Talent award and National Forestry Bureau Young S&T Innovation Talent. He serves as PI at the National Key Lab of Efficient Forest Production, Director of the Key Lab of Forest Cultivation and Ecosystem in Arid/Semi-arid Areas (National Forestry Bureau), and core member (#2) of the National Poplar Plantation Innovation Team. His lab has developed a series of self-designed sap flow probes and soil sensors deployed across 1,600+ units nationwide.",
      zh: "席本野（1985年生，河南巩义），北京林业大学人工林水分关系实验室负责人。入选国家\"万人计划\"青年拔尖人才、国家林业局青年科技创新人才。现任林木高效培育全国重点实验室PI、国家林业局干旱半干旱地区森林培育及生态系统研究重点实验室主任、国家杨树人工林创新团队核心成员（排名第2）。团队自主研发的液流探针和土壤传感器已在全国部署1600余套。",
    },
    education: [
      { en: "BSc Forestry, Central South University of Forestry & Technology (2003–2007)", zh: "学士，林学，中南林业科技大学（2003–2007）" },
      { en: "PhD Forest Cultivation, Beijing Forestry University (2007–2013)", zh: "博士，森林培育学，北京林业大学（2007–2013）" },
      { en: "Visiting Scholar, University of Canterbury, New Zealand (2012–2013, 2015)", zh: "访问学者，新西兰坎特伯雷大学（2012–2013, 2015）" },
      { en: "Visiting Scholar, Lincoln University & Plant and Food Research, NZ (2017–2018)", zh: "访问学者，新西兰林肯大学 & Plant and Food Research（2017–2018）" },
    ],
    honors: [
      { en: "National \"Ten Thousand Talents Plan\" Young Top Talent", zh: "国家\"万人计划\"青年拔尖人才" },
      { en: "National Forestry Bureau Young S&T Innovation Talent", zh: "国家林业局青年科技创新人才" },
    ],
    positions: [
      { en: "PI, National Key Lab of Efficient Forest Production", zh: "林木高效培育全国重点实验室PI" },
      { en: "Director, Key Lab of Forest Cultivation & Ecosystem in Arid/Semi-arid Areas", zh: "干旱半干旱地区森林培育及生态系统研究重点实验室主任" },
      { en: "Core Member (#2), National Poplar Plantation Innovation Team", zh: "国家杨树人工林创新团队核心成员（排名第2）" },
    ],
    email: "xibenye@bjfu.edu.cn",
    scholar: "https://scholar.google.com/citations?user=8L5SxYIAAAAJ",
    researchgate: "https://www.researchgate.net/profile/Benye-Xi",
    orcid: "https://orcid.org/0000-0003-4730-6384",
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
    id: "brent-clothier",
    name: { en: "Dr. Brent Clothier", zh: "Brent Clothier 博士" },
    role: "collaborator",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Soil physics, root water uptake, plant-soil interactions",
      zh: "土壤物理学、根系吸水、植物-土壤相互作用",
    },
    bio: {
      en: "Dr. Clothier is a distinguished scientist at Plant and Food Research, New Zealand. He collaborates with PWRlab on root water uptake and soil hydrology research.",
      zh: "Clothier博士是新西兰Plant and Food Research杰出科学家。与PWRlab在根系吸水和土壤水文方面开展合作。",
    },
    website: "https://www.plantandfood.com",
  },
  {
    id: "nadezhda-nadezhdina",
    name: { en: "Dr. Nadezhda Nadezhdina", zh: "Nadezhda Nadezhdina 博士" },
    role: "collaborator",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Sap flow methodology, tree hydraulics, forest hydrology",
      zh: "液流方法学、树木水力学、森林水文学",
    },
    bio: {
      en: "Dr. Nadezhdina is a leading expert in sap flow measurement techniques. She collaborates with PWRlab on developing advanced sap flow methodologies.",
      zh: "Nadezhdina博士是液流测量技术领域的领军专家。与PWRlab在先进液流方法学开发方面合作。",
    },
  },
  {
    id: "david-tissue",
    name: { en: "Prof. David Tissue", zh: "David Tissue 教授" },
    role: "collaborator",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Plant ecophysiology, climate change impacts, carbon-water relations",
      zh: "植物生态生理学、气候变化影响、碳-水关系",
    },
    bio: {
      en: "Prof. Tissue is a plant ecophysiologist specializing in climate change impacts on vegetation. He collaborates with PWRlab on drought resistance and water use efficiency research.",
      zh: "Tissue教授是植物生态生理学家，专注于气候变化对植被的影响。与PWRlab在抗旱性和水分利用效率方面合作。",
    },
  },
  {
    id: "brendan-choat",
    name: { en: "Prof. Brendan Choat", zh: "Brendan Choat 教授" },
    role: "collaborator",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Plant hydraulics, xylem embolism, drought-induced tree mortality",
      zh: "植物水力学、木质部栓塞、干旱导致的树木死亡",
    },
    bio: {
      en: "Prof. Choat is a world-leading expert in plant hydraulics. He collaborates with PWRlab on tree hydraulic vulnerability and drought response research.",
      zh: "Choat教授是植物水力学领域的世界级专家。与PWRlab在树木水力脆弱性和干旱响应方面合作。",
    },
  },
  {
    id: "placeholder-phd-1",
    name: { en: "PhD Student", zh: "博士研究生" },
    role: "phd",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Plantation ecohydrology",
      zh: "人工林生态水文",
    },
    year: "2020",
  },
  {
    id: "placeholder-phd-2",
    name: { en: "PhD Student", zh: "博士研究生" },
    role: "phd",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Tree water relations & sap flow",
      zh: "林木水分关系与液流",
    },
    year: "2021",
  },
  {
    id: "placeholder-phd-3",
    name: { en: "PhD Student", zh: "博士研究生" },
    role: "phd",
    photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Root ecology & belowground processes",
      zh: "根系生态学",
    },
    year: "2021",
  },
  {
    id: "placeholder-phd-4",
    name: { en: "PhD Student", zh: "博士研究生" },
    role: "phd",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Climate-vegetation interactions",
      zh: "气候-植被相互作用",
    },
    year: "2022",
  },
  {
    id: "placeholder-phd-5",
    name: { en: "PhD Student", zh: "博士研究生" },
    role: "phd",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Sap flow dynamics & drought response",
      zh: "液流动态与干旱响应",
    },
    year: "2022",
  },
  {
    id: "placeholder-phd-6",
    name: { en: "PhD Student", zh: "博士研究生" },
    role: "phd",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "AI-assisted forest monitoring",
      zh: "AI辅助森林监测",
    },
    year: "2023",
  },
  {
    id: "placeholder-phd-7",
    name: { en: "PhD Student", zh: "博士研究生" },
    role: "phd",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Soil water dynamics",
      zh: "土壤水分动态",
    },
    year: "2023",
  },
  {
    id: "placeholder-phd-8",
    name: { en: "PhD Student", zh: "博士研究生" },
    role: "phd",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Evapotranspiration partitioning",
      zh: "蒸散发分割",
    },
    year: "2024",
  },
  {
    id: "placeholder-phd-intl-1",
    name: { en: "International PhD Student", zh: "留学博士生" },
    role: "phd",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Tropical plantation hydrology",
      zh: "热带人工林水文",
    },
    year: "2022",
  },
  {
    id: "placeholder-phd-intl-2",
    name: { en: "International PhD Student", zh: "留学博士生" },
    role: "phd",
    photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Agroforestry water balance",
      zh: "农林复合系统水量平衡",
    },
    year: "2023",
  },
  {
    id: "placeholder-phd-intl-3",
    name: { en: "International PhD Student", zh: "留学博士生" },
    role: "phd",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Forest ecosystem water cycling",
      zh: "森林生态系统水循环",
    },
    year: "2024",
  },
  {
    id: "placeholder-msc-1",
    name: { en: "MSc Student", zh: "硕士研究生" },
    role: "msc",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Sap flow measurement & modeling",
      zh: "液流测量与模拟",
    },
    year: "2023",
  },
  {
    id: "placeholder-msc-2",
    name: { en: "MSc Student", zh: "硕士研究生" },
    role: "msc",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Remote sensing of forest water stress",
      zh: "森林水分胁迫遥感",
    },
    year: "2023",
  },
  {
    id: "placeholder-msc-3",
    name: { en: "MSc Student", zh: "硕士研究生" },
    role: "msc",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Root water uptake patterns",
      zh: "根系吸水模式",
    },
    year: "2024",
  },
  {
    id: "placeholder-msc-4",
    name: { en: "MSc Student", zh: "硕士研究生" },
    role: "msc",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Soil moisture monitoring",
      zh: "土壤水分监测",
    },
    year: "2024",
  },
  {
    id: "placeholder-msc-5",
    name: { en: "MSc Student", zh: "硕士研究生" },
    role: "msc",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Plantation water use efficiency",
      zh: "人工林水分利用效率",
    },
    year: "2024",
  },
  {
    id: "placeholder-msc-6",
    name: { en: "MSc Student", zh: "硕士研究生" },
    role: "msc",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Machine learning for forest monitoring",
      zh: "森林监测机器学习",
    },
    year: "2025",
  },
  {
    id: "placeholder-msc-7",
    name: { en: "MSc Student", zh: "硕士研究生" },
    role: "msc",
    photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Stem diameter variation & tree growth",
      zh: "茎干直径变化与树木生长",
    },
    year: "2025",
  },
  {
    id: "placeholder-msc-8",
    name: { en: "MSc Student", zh: "硕士研究生" },
    role: "msc",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Poplar plantation irrigation management",
      zh: "杨树人工林灌溉管理",
    },
    year: "2025",
  },
  {
    id: "placeholder-msc-9",
    name: { en: "MSc Student", zh: "硕士研究生" },
    role: "msc",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    interests: {
      en: "Sensor development & calibration",
      zh: "传感器研发与标定",
    },
    year: "2025",
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
    id: "pub-2026-1",
    title: "CLIP-TLNet: Canopy Light Interception Prediction with Transformer-LSTM Network Through 3D Complexity-Temporal Dynamics Modeling",
    authors: "Yang M, Gao Y, Xi B, Wang X, Huang Q, Meng W",
    journal: "Plant Phenomics",
    year: 2026,
    pages: "100170",
    doi: "10.34133/plantphenomics.100170",
  },
  {
    id: "pub-2026-2",
    title: "Effects of deficit irrigation at different phenological periods on yield, quality, and water productivity of Xanthoceras sorbifolium Bunge in the Horqin Sandy Land of China",
    authors: "Song S, Xi B, Liu Y, Zhong J, Wang X, Jia L",
    journal: "Agricultural Water Management",
    year: 2026,
    volume: "325",
    pages: "110130",
    doi: "10.1016/j.agwat.2024.110130",
  },
  {
    id: "pub-2025-3",
    title: "Two years of experimental rainfall exclusion does not promote leaf drought resistance in improved Populus varieties common to North China",
    authors: "Sun J, Huang R, Yang W, Kong X, Duan J, Xi B, Li X, Choat B, Tissue DT, Johnson D",
    journal: "Tree Physiology",
    year: 2025,
    volume: "45",
    pages: "tpaf135",
    doi: "10.1093/treephys/tpaf135",
    highlight: true,
  },
  {
    id: "pub-2025-4",
    title: "Growth and Biomass Distribution Responses of Populus tomentosa to Long-Term Water-Nitrogen Coupling in the North China Plain",
    authors: "Wang Y, Liu J, He Y, Zhu W, Jia L, Xi B",
    journal: "Plants",
    year: 2025,
    volume: "14(12)",
    pages: "1833",
    doi: "10.3390/plants14121833",
  },
  {
    id: "pub-2025-5",
    title: "Hybrid ecophysiological growth model for deciduous Populus tomentosa plantation in northern China",
    authors: "Salekin S, Bloomberg M, Xi B, Liu J, Liu Y, Li D, Mason EG",
    journal: "Forest Ecosystems",
    year: 2025,
    volume: "12",
    pages: "100270",
    doi: "10.1016/j.fecs.2024.100270",
  },
  {
    id: "pub-2025-6",
    title: "Hydraulic traits are coordinated but decoupled from carbon traits in herbaceous species",
    authors: "Huang R, Wu H, Sun J, Di N, Duan J, Xi B, Li X, Jansen S, Choat B",
    journal: "Functional Ecology",
    year: 2025,
    volume: "39(5)",
    pages: "1302-1317",
    doi: "10.1111/1365-2435.14725",
  },
  {
    id: "pub-2025-7",
    title: "L2: Accurate Forestry Time-Series Completion and Growth Factor Inference",
    authors: "Jiang L, Yang M, Xi B, Meng W, Duan J",
    journal: "Forests",
    year: 2025,
    volume: "16(6)",
    pages: "895",
    doi: "10.3390/f16060895",
  },
  {
    id: "pub-2025-8",
    title: "A Method for the 3D Reconstruction of Landscape Trees in the Leafless Stage",
    authors: "Li J, Huang Q, Wang X, Xi B, Duan J, Yin H, Li L",
    journal: "Remote Sensing",
    year: 2025,
    volume: "17(8)",
    pages: "1473",
    doi: "10.3390/rs17081473",
  },
  {
    id: "pub-2025-9",
    title: "MFCPopulus: A Point Cloud Completion Network Based on Multi-Feature Fusion for the 3D Reconstruction of Individual Populus Tomentosa in Planted Forests",
    authors: "Liu H, Yang M, Xi B, Wang X, Huang Q, Xu C, Meng W",
    journal: "Forests",
    year: 2025,
    volume: "16(4)",
    pages: "635",
    doi: "10.3390/f16040635",
  },
  {
    id: "pub-2024-10",
    title: "Cultivar and tree size, but not climate, are principal factors affecting stem quality of Populus tomentosa plantations in the North China Plain",
    authors: "Zhu W, Wang Y, Qu G, Xi B, Jia L",
    journal: "Forest Ecology and Management",
    year: 2024,
    volume: "573",
    pages: "122348",
    doi: "10.1016/j.foreco.2024.122348",
  },
  {
    id: "pub-2024-11",
    title: "Herb hydraulics: Variation and correlation for traits governing drought tolerance and efficiency of water transport",
    authors: "Huang R, Di N, Xi B, Yang J, Duan J, Li X, Feng J, Choat B, Tissue DT",
    journal: "Science of the Total Environment",
    year: 2024,
    volume: "907",
    pages: "168095",
    doi: "10.1016/j.scitotenv.2023.168095",
  },
  {
    id: "pub-2024-12",
    title: "Matching root water uptake patterns to fine root and soil water distributions",
    authors: "Zhu W, Zhao D, Di N, Li D, Zhou O, Sun Y, Jia L, Ding C, Xi B",
    journal: "Plant and Soil",
    year: 2024,
    volume: "495(1)",
    pages: "499-516",
    doi: "10.1007/s11104-023-06341-w",
  },
  {
    id: "pub-2024-13",
    title: "Monitoring of phenology and irrigation responses of plantation forests based on vegetation remote sensing",
    authors: "Guan P, Gong Y, Zhu L, Lei G, Xi B, Zheng Y",
    journal: "Plant and Soil",
    year: 2024,
    volume: "497(1)",
    pages: "377-396",
    doi: "10.1007/s11104-023-06370-7",
  },
  {
    id: "pub-2024-14",
    title: "New dielectric-based smart sensor with multi-probe arrays for in-vivo monitoring of trunk water content distribution of a tree in a poplar stand",
    authors: "Cheng X, Wu X, Zhu Y, Zhao Y, Xi B, Yan X, de Oliveira RF, Cheng Q",
    journal: "Computers and Electronics in Agriculture",
    year: 2024,
    volume: "227",
    pages: "109585",
    doi: "10.1016/j.compag.2024.109585",
  },
  {
    id: "pub-2024-15",
    title: "Robust hydraulic traits correlation in woody species despite large trait variation along natural and experimental environmental gradients",
    authors: "Huang R, Wang Y, Duan J, Xi B, Yang J, Li X, Feng J, Choat B, Tissue DT",
    journal: "Functional Ecology",
    year: 2024,
    volume: "38(8)",
    pages: "1835-1847",
    doi: "10.1111/1365-2435.14602",
  },
  {
    id: "pub-2024-16",
    title: "Thinning vs. Pruning: Impacts on Sap Flow Density and Water Use Efficiency in Young Populus tomentosa Plantations in Northern China",
    authors: "Liu Y, Liu Y, Qi S, Fan Z, Xue Y, Tang Q, Liu Z, Zheng X, Wu C, Xi B, Duan J",
    journal: "Forests",
    year: 2024,
    volume: "15(3)",
    pages: "536",
    doi: "10.3390/f15030536",
  },
  {
    id: "pub-2024-17",
    title: "Trees in cooler regions are more vulnerable to thermal stress: Evidence from temperate poplar plantations in Northern China during the 2022 heatwaves",
    authors: "Kong X, Zhang S, Wang A, Liu Y, Wang K, Zhao X, Di N, Ding C, Li X, Xi B",
    journal: "Agricultural and Forest Meteorology",
    year: 2024,
    volume: "356",
    pages: "110181",
    doi: "10.1016/j.agrformet.2024.110181",
    highlight: true,
  },
  {
    id: "pub-2023-18",
    title: "Evaporation-driven internal hydraulic redistribution alleviates root drought stress: Mechanisms and modeling",
    authors: "Liu Y, Nadezhdina N, Hu W, Clothier B, Duan J, Li X, Xi B",
    journal: "Plant Physiology",
    year: 2023,
    volume: "193(3)",
    pages: "2413-2427",
    doi: "10.1093/plphys/kiad364",
    highlight: true,
  },
  {
    id: "pub-2023-19",
    title: "Framework of Virtual Plantation Forest Modeling and Data Analysis for Digital Twin",
    authors: "Li W, Yang M, Xi B, Huang Q",
    journal: "Forests",
    year: 2023,
    volume: "14(4)",
    pages: "683",
    doi: "10.3390/f14040683",
  },
  {
    id: "pub-2023-20",
    title: "Long-term variation of the sap flow to tree diameter relation in a temperate poplar forest",
    authors: "Zhao X, Li X, Hu W, Zhao D, Di N, Duan J, Li D, Liu Y, Xi B",
    journal: "Journal of Hydrology",
    year: 2023,
    volume: "618",
    pages: "129234",
    doi: "10.1016/j.jhydrol.2023.129234",
  },
  {
    id: "pub-2023-21",
    title: "Response of Fine-Root Traits of Populus tomentosa to Drought in Shallow and Deep Soil",
    authors: "Tan J, Yu W, Liu Y, Guo Y, Liu N, Fu H, Di N, Duan J, Li X, Xi B",
    journal: "Forests",
    year: 2023,
    volume: "14(5)",
    pages: "951",
    doi: "10.3390/f14050951",
  },
  {
    id: "pub-2023-22",
    title: "Variations of deep water uptake and water use efficiency indicated divergence in tree growth stability",
    authors: "Li Y, Huang Y, Li X, Huo X, Li X, Xu C, Li Z, Xu C, Xi B, Wu X",
    journal: "Forest Ecology and Management",
    year: 2023,
    volume: "545",
    pages: "121131",
    doi: "10.1016/j.foreco.2023.121131",
  },
  {
    id: "pub-2023-23",
    title: "Xylem anatomical and hydraulic traits vary within crown but not respond to water and nitrogen addition in Populus tomentosa",
    authors: "Zhang Y, Ding C, Liu Y, Li S, Li X, Xi B, Duan J",
    journal: "Agricultural Water Management",
    year: 2023,
    volume: "279",
    pages: "108169",
    doi: "10.1016/j.agwat.2023.108169",
  },
  {
    id: "pub-2022-24",
    title: "A Deep Learning-Based Method for Extracting Standing Wood Feature Parameters from Terrestrial Laser Scanning Point Clouds of Artificially Planted Forest",
    authors: "Shen X, Huang Q, Wang X, Li J, Xi B",
    journal: "Remote Sensing",
    year: 2022,
    volume: "14(15)",
    pages: "3842",
    doi: "10.3390/rs14153842",
  },
  {
    id: "pub-2022-25",
    title: "Effects of key forest management practices and climatic factors on the growth of Populus tomentosa plantations in the North China Plain",
    authors: "Zhu W, Wu X, Jia L, Xi B",
    journal: "Forest Ecology and Management",
    year: 2022,
    volume: "522",
    pages: "120469",
    doi: "10.1016/j.foreco.2022.120469",
  },
  {
    id: "pub-2022-26",
    title: "Evaluation of method to model stomatal conductance and its use to assess biomass increase in poplar trees",
    authors: "Li D, Li X, Xi B, Hernandez-Santana V",
    journal: "Agricultural Water Management",
    year: 2022,
    volume: "261",
    pages: "107344",
    doi: "10.1016/j.agwat.2021.107344",
  },
  {
    id: "pub-2022-27",
    title: "Fine root plasticity of young Populus tomentosa plantations under drip irrigation and nitrogen fertigation in the North China Plain",
    authors: "He Y, Li G, Xi B, Zhao H, Jia L",
    journal: "Agricultural Water Management",
    year: 2022,
    volume: "263",
    pages: "107446",
    doi: "10.1016/j.agwat.2021.107446",
  },
  {
    id: "pub-2022-28",
    title: "Is it necessary to apply chemical weed control in short-rotation poplar plantations on deep soil sites?",
    authors: "Fu J, Zou S, Coleman MD, Li X, Hu W, Wang A, Zhang P, Zeng Z, Ding C, Xi B, Di N",
    journal: "Industrial Crops and Products",
    year: 2022,
    volume: "184",
    pages: "115047",
    doi: "10.1016/j.indcrop.2022.115047",
  },
  {
    id: "pub-2022-29",
    title: "Lack of phenotypic plasticity in leaf hydraulics for 10 woody species common to urban forests of North China",
    authors: "Han H, Xi B, Wang Y, Feng J, Li X, Tissue DT",
    journal: "Tree Physiology",
    year: 2022,
    volume: "42(6)",
    pages: "1185-1200",
    doi: "10.1093/treephys/tpab177",
  },
  {
    id: "pub-2022-30",
    title: "Near-Earth Remote Sensing Images Used to Determine the Phenological Characteristics of the Canopy of Populus tomentosa B301 under Three Methods of Irrigation",
    authors: "Guan P, Zheng Y, Lei G, Liu Y, Zhu L, Guo Y, Wang Y, Xi B",
    journal: "Remote Sensing",
    year: 2022,
    volume: "14(12)",
    pages: "2844",
    doi: "10.3390/rs14122844",
  },
  {
    id: "pub-2022-31",
    title: "Soil-moisture-dependent nocturnal water use strategy and its responses to meteorological factors in a seasonal-arid poplar plantation",
    authors: "Di N, Yang S, Liu Y, Fan Y, Duan J, Nadezhdina N, Li X, Xi B",
    journal: "Agricultural Water Management",
    year: 2022,
    volume: "274",
    pages: "107984",
    doi: "10.1016/j.agwat.2022.107984",
  },
  {
    id: "pub-2022-32",
    title: "Stand development modifies effects of soil water availability on poplar fine-root traits: evidence from a six-year experiment",
    authors: "Zou S, Li D, Di N, Liu J, Li L, Liu Y, Xi B, Coleman MD",
    journal: "Plant and Soil",
    year: 2022,
    volume: "480",
    pages: "477-498",
    doi: "10.1007/s11104-022-05596-3",
  },
  {
    id: "pub-2022-33",
    title: "Unlocking Drought-Induced Tree Mortality: Physiological Mechanisms to Modeling",
    authors: "Li X, Xi B, Wu X, Choat B, Feng J, Jiang M, Tissue DT",
    journal: "Frontiers in Plant Science",
    year: 2022,
    volume: "13",
    pages: "835921",
    doi: "10.3389/fpls.2022.835921",
  },
  {
    id: "pub-2022-34",
    title: "Variations in water-balance components and carbon stocks in poplar plantations with differing water inputs over a whole rotation: implications for sustainable forest management under climate change",
    authors: "Liu J, Li D, Fernandez JE, Coleman M, Hu W, Di N, Zou S, Liu Y, Xi B, Clothier B",
    journal: "Agricultural and Forest Meteorology",
    year: 2022,
    volume: "320",
    pages: "108958",
    doi: "10.1016/j.agrformet.2022.108958",
    highlight: true,
  },
  {
    id: "pub-2021-35",
    title: "An undiscovered facet of hydraulic redistribution driven by evaporation - A study from a Populus tomentosa plantation",
    authors: "Liu Y, Nadezhdina N, Di N, Ma X, Liu J, Zou S, Xi B, Clothier B",
    journal: "Plant Physiology",
    year: 2021,
    volume: "186(1)",
    pages: "361-372",
    doi: "10.1093/plphys/kiab036",
    highlight: true,
  },
  {
    id: "pub-2021-36",
    title: "Characteristics of airborne particles retained on conifer needles across China in winter and preliminary evaluation of the capacity of trees in haze mitigation",
    authors: "Cao Z, Wu X, Wang T, Zhao Y, Wang D, Wei Y, Yan G, Yue C, Duan J, Xi B",
    journal: "Science of the Total Environment",
    year: 2021,
    volume: "806",
    pages: "150704",
    doi: "10.1016/j.scitotenv.2021.150704",
  },
  {
    id: "pub-2021-37",
    title: "Global distribution of soapberries (Sapindus L.) habitats under current and future climate scenarios",
    authors: "Liu J, Wang L, Sun C, Xi B, Li D, Chen Z, He Q, Weng X, Jia L",
    journal: "Scientific Reports",
    year: 2021,
    volume: "11",
    pages: "19916",
    doi: "10.1038/s41598-021-99389-2",
  },
  {
    id: "pub-2021-38",
    title: "Irrigation management in poplar (Populus spp.) plantations: A review",
    authors: "Xi B, Clothier B, Coleman M, Duan J, Hu W, Li D, Di N, Liu Y, Fu J, Li J, Jia L, Fernandez JE",
    journal: "Forest Ecology and Management",
    year: 2021,
    volume: "494",
    pages: "119330",
    doi: "10.1016/j.foreco.2021.119330",
    highlight: true,
  },
  {
    id: "pub-2021-39",
    title: "Sample size estimation for achieving the desired uncertainty for estimates of tree fine root trait parameters",
    authors: "Xi B, Di N, Bloomberg M, Moltchanova E",
    journal: "Trees",
    year: 2021,
    volume: "35",
    pages: "1197-1207",
    doi: "10.1007/s00468-021-02108-9",
  },
  {
    id: "pub-2021-40",
    title: "The optimal tensiometer installation position for scheduling border irrigation in Populus tomentosa plantations",
    authors: "Jiao M, Yang W, Hu W, Clothier B, Zou S, Li D, Di N, Liu J, Liu Y, Duan J, Xi B",
    journal: "Agricultural Water Management",
    year: 2021,
    volume: "253",
    pages: "106948",
    doi: "10.1016/j.agwat.2021.106948",
  },
  {
    id: "pub-2021-41",
    title: "The retention characteristics for water-soluble and water-insoluble particulate matter of five tree species along an air pollution gradient in Beijing, China",
    authors: "Yue C, Cui K, Duan J, Wu X, Yan P, Rodriguez C, Fu H, Deng T, Zhang S, Liu J, Guo Z, Xi B, Cao Z",
    journal: "Science of the Total Environment",
    year: 2021,
    volume: "767",
    pages: "145497",
    doi: "10.1016/j.scitotenv.2021.145497",
  },
  {
    id: "pub-2021-42",
    title: "Understanding the relationship between biomass production and water use of Populus tomentosa trees throughout an entire short-rotation",
    authors: "Li D, Liu J, Verhoef A, Xi B, Hernandez-Santana V",
    journal: "Agricultural Water Management",
    year: 2021,
    volume: "246",
    pages: "106710",
    doi: "10.1016/j.agwat.2020.106710",
  },
  {
    id: "pub-2020-43",
    title: "Effects of drip irrigation and nitrogen fertigation on stand growth and biomass allocation in young triploid Populus tomentosa plantations",
    authors: "He Y, Xi B, Bloomberg M, Jia L, Zhao D",
    journal: "Forest Ecology and Management",
    year: 2020,
    volume: "461",
    pages: "117937",
    doi: "10.1016/j.foreco.2020.117937",
  },
  {
    id: "pub-2020-44",
    title: "Influence of drip irrigation, nitrogen fertigation, and precipitation on soil water and nitrogen distribution, tree seasonal growth and nitrogen uptake in young triploid poplar plantations",
    authors: "He Y, Xi B, Li G, Wang Y, Jia L, Zhao D",
    journal: "Agricultural Water Management",
    year: 2020,
    volume: "243",
    pages: "106460",
    doi: "10.1016/j.agwat.2020.106460",
  },
  {
    id: "pub-2019-45",
    title: "Diurnal and nocturnal transpiration behaviors and their responses to groundwater-table fluctuations and meteorological factors of Populus tomentosa in the North China Plain",
    authors: "Di N, Xi B, Clothier B, Wang Y, Li G, Jia L",
    journal: "Forest Ecology and Management",
    year: 2019,
    volume: "448",
    pages: "445-456",
    doi: "10.1016/j.foreco.2019.06.009",
  },
  {
    id: "pub-2019-46",
    title: "Modeling soil evaporation and the response of the crop coefficient to leaf area index in mature Populus tomentosa plantations growing under different soil water availabilities",
    authors: "Di N, Wang Y, Clothier B, Liu Y, Jia L, Xi B, Shi H",
    journal: "Agricultural and Forest Meteorology",
    year: 2019,
    volume: "264",
    pages: "125-137",
    doi: "10.1016/j.agrformet.2018.10.004",
  },
  {
    id: "pub-2019-47",
    title: "Patterns of variations in leaf turgor pressure and responses to environmental factors in Populus tomentosa",
    authors: "Li D, Xi B, Wang F, Jia L",
    journal: "Chinese Journal of Plant Ecology",
    year: 2019,
    volume: "43(2)",
    pages: "175-183",
    doi: "10.17521/cjpe.2018.0209",
  },
  {
    id: "pub-2019-48",
    title: "Where to monitor the soil-water potential for scheduling drip irrigation in Populus tomentosa plantations located on the North China Plain?",
    authors: "Yang T, Li D, Clothier B, Wang Y, Duan J, Di N, Li G, Li X, Jia L, Xi B, Hu W",
    journal: "Forest Ecology and Management",
    year: 2019,
    volume: "437",
    pages: "99-112",
    doi: "10.1016/j.foreco.2019.01.036",
  },
  {
    id: "pub-2018-49",
    title: "An investigation of the leaf retention capacity, efficiency and mechanism for atmospheric particulate matter of five greening tree species in Beijing, China",
    authors: "Liu J, Cao Z, Zou S, Liu H, Hai X, Wang S, Duan J, Xi B, Yan G, Zhang S, Jia Z",
    journal: "Science of the Total Environment",
    year: 2018,
    volume: "616-617",
    pages: "493-502",
    doi: "10.1016/j.scitotenv.2017.10.314",
  },
  {
    id: "pub-2018-50",
    title: "Genetic structure and biogeographic divergence among Sapindus species: An inter-simple sequence repeat-based study of germplasms in China",
    authors: "Sun C, Wang L, Liu J, Zhao G, Gao S, Xi B, Duan J, Weng X, Jia L",
    journal: "Industrial Crops and Products",
    year: 2018,
    volume: "118",
    pages: "1-10",
    doi: "10.1016/j.indcrop.2018.03.029",
  },
  {
    id: "pub-2018-51",
    title: "Hydrologic regulation of plant rooting depth: Pay attention to the widespread scenario with intense seasonal groundwater table fluctuation",
    authors: "Xi B, Di N, Liu J, Zhang R, Cao Z",
    journal: "Proceedings of the National Academy of Sciences",
    year: 2018,
    volume: "115(18)",
    pages: "E4084-E4085",
    doi: "10.1073/pnas.1803987115",
    highlight: true,
  },
  {
    id: "pub-2018-52",
    title: "Leaf Phenology Variation within the Canopy and Its Relationship with the Transpiration of Populus tomentosa under Plantation Conditions",
    authors: "Wang Y, Li G, Di N, Clothier B, Duan J, Li D, Jia L, Xi B, Ma F",
    journal: "Forests",
    year: 2018,
    volume: "9(10)",
    pages: "603",
    doi: "10.3390/f9100603",
  },
  {
    id: "pub-2018-53",
    title: "Root system characteristics of plantation-grown Populus tomentosa adapted to seasonal fluctuation in the groundwater table",
    authors: "Di N, Liu Y, Mead DJ, Xie Y, Jia L, Xi B",
    journal: "Trees",
    year: 2018,
    volume: "32",
    pages: "137-149",
    doi: "10.1007/s00468-017-1619-2",
  },
  {
    id: "pub-2017-54",
    title: "Modeling stand water use response to soil water availability and groundwater level for a mature Populus tomentosa plantation located on the North China Plain",
    authors: "Xi B, Di N, Wang Y, Duan J, Jia L",
    journal: "Forest Ecology and Management",
    year: 2017,
    volume: "391",
    pages: "1-12",
    doi: "10.1016/j.foreco.2017.02.016",
  },
  {
    id: "pub-2017-55",
    title: "Natural variation in fatty acid composition of Sapindus spp. seed oils",
    authors: "Sun C, Jia L, Xi B, Wang L, Weng X",
    journal: "Industrial Crops and Products",
    year: 2017,
    volume: "102",
    pages: "97-104",
    doi: "10.1016/j.indcrop.2017.03.011",
  },
  {
    id: "pub-2016-56",
    title: "Effects of Nitrogen Application Rate and Frequency on Biomass Accumulation and Nitrogen Uptake of Populus tomentosa under Drip Fertigation",
    authors: "Xi B, Wang Y, Jia L",
    journal: "Journal of Beijing Forestry University",
    year: 2016,
    volume: "38(6)",
    pages: "60-69",
  },
  {
    id: "pub-2016-57",
    title: "Modeling growth response to soil water availability simulated by HYDRUS for a mature triploid Populus tomentosa plantation located on the North China Plain",
    authors: "Xi B, Bloomberg M, Watt MS, Wang Y, Jia L",
    journal: "Agricultural Water Management",
    year: 2016,
    volume: "176",
    pages: "243-254",
    doi: "10.1016/j.agwat.2016.06.017",
  },
  {
    id: "pub-2015-58",
    title: "Response of diameter growth, biomass allocation and N uptake to N fertigation in a triploid Populus tomentosa plantation in the North China Plain: Ontogenetic shift does not exclude plasticity",
    authors: "Wang Y, Xi B, Bloomberg M, Moltchanova E, Li G, Jia L",
    journal: "European Journal of Forest Research",
    year: 2015,
    volume: "134(5)",
    pages: "889-898",
    doi: "10.1007/s10342-015-0897-8",
  },
  {
    id: "pub-2015-59",
    title: "Response of sap flow to flooding in plantations of irrigated and non-irrigated triploid poplar",
    authors: "Yan X, Xi B, Jia L, Li G",
    journal: "Journal of Forest Research",
    year: 2015,
    volume: "20(3)",
    pages: "375-385",
    doi: "10.1007/s10310-015-0482-0",
  },
  {
    id: "pub-2014-60",
    title: "Root biomass distribution of triploid Populus tomentosa under wide- and narrow-row spacing planting schemes and its responses to soil nutrients",
    authors: "Di N, Xi B, Pinto JR, Wang Y, Li G, Jia L",
    journal: "Chinese Journal of Plant Ecology",
    year: 2014,
    volume: "38(1)",
    pages: "1-12",
    doi: "10.3724/SP.J.1258.2013.00099",
  },
  {
    id: "pub-2014-61",
    title: "The effects of subsurface irrigation at different soil water potential thresholds on the growth and transpiration of Populus tomentosa in the North China Plain",
    authors: "Xi B, Li G, Bloomberg M, Jia L",
    journal: "Australian Forestry",
    year: 2014,
    volume: "77(2)",
    pages: "95-104",
    doi: "10.1080/00049158.2014.920552",
  },
  {
    id: "pub-2013-62",
    title: "Characteristics of fine root system and water uptake in a triploid Populus tomentosa plantation in the North China Plain: Implications for irrigation water management",
    authors: "Xi B, Wang Y, Jia L, Bloomberg M, Li G, Di N",
    journal: "Agricultural Water Management",
    year: 2013,
    volume: "118",
    pages: "55-64",
    doi: "10.1016/j.agwat.2012.11.006",
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
// Self-developed instruments: 50-60% cost reduction vs foreign products, 1600+ units deployed
// Selected as "Agricultural High-tech Innovation Achievement" by Ministry of S&T
export const selfDevelopedInstruments = {
  summary: {
    en: "Our lab independently designs and manufactures a series of forest monitoring instruments, achieving 50\u201360% cost reduction compared to foreign products. Over 1,600 units have been deployed across institutions including CAS, CAF, Wuhan University, and more. Selected as \"Agricultural High-tech Innovation Achievement\" by the Ministry of Science & Technology.",
    zh: "\u5b9e\u9a8c\u5ba4\u81ea\u4e3b\u7814\u53d1\u4e86\u7cfb\u5217\u68ee\u6797\u76d1\u6d4b\u4eea\u5668\uff0c\u6210\u672c\u6bd4\u8fdb\u53e3\u4ea7\u54c1\u964d\u4f4e50\u201360%\u3002\u5df2\u5728\u4e2d\u56fd\u79d1\u5b66\u9662\u3001\u4e2d\u56fd\u6797\u79d1\u9662\u3001\u6b66\u6c49\u5927\u5b66\u7b49\u5355\u4f4d\u90e8\u7f721600\u4f59\u5957\u3002\u5165\u9009\u79d1\u6280\u90e8\u201c\u519c\u4e1a\u9ad8\u65b0\u6280\u672f\u521b\u65b0\u6210\u679c\u201d\u3002",
  },
  totalDeployed: "1,600+",
  costReduction: "50\u201360%",
};

export const facilities: Facility[] = [
  {
    id: "tdp-probe",
    name: { en: "Self-developed TDP Sap Flow Probe", zh: "\u81ea\u7814TDP\u6db2\u6d41\u63a2\u9488" },
    description: {
      en: "Independently designed thermal dissipation probe (TDP) for measuring tree sap flow. Achieves comparable accuracy to commercial products at 50\u201360% lower cost. Widely adopted by research institutions across China.",
      zh: "\u81ea\u4e3b\u8bbe\u8ba1\u7684\u70ed\u6269\u6563\u6db2\u6d41\u63a2\u9488\uff08TDP\uff09\uff0c\u7cbe\u5ea6\u4e0e\u8fdb\u53e3\u4ea7\u54c1\u76f8\u5f53\uff0c\u6210\u672c\u964d\u4f4e50\u201360%\u3002\u5df2\u88ab\u5168\u56fd\u591a\u5bb6\u7814\u7a76\u673a\u6784\u91c7\u7528\u3002",
    },
    image: IMAGES.ecohydrology,
    specs: [
      { en: "Thermal dissipation principle (Granier method)", zh: "\u70ed\u6269\u6563\u539f\u7406\uff08Granier\u65b9\u6cd5\uff09" },
      { en: "50\u201360% cost reduction vs imports", zh: "\u6210\u672c\u6bd4\u8fdb\u53e3\u964d\u4f4e50\u201360%" },
      { en: "Deployed at CAS, CAF, Wuhan Univ. & more", zh: "\u5df2\u5728\u4e2d\u79d1\u9662\u3001\u4e2d\u56fd\u6797\u79d1\u9662\u3001\u6b66\u6c49\u5927\u5b66\u7b49\u90e8\u7f72" },
    ],
  },
  {
    id: "hfd-probe",
    name: { en: "Self-developed HFD Sap Flow Probe", zh: "\u81ea\u7814HFD\u6db2\u6d41\u63a2\u9488" },
    description: {
      en: "Heat field deformation (HFD) sap flow probe for measuring radial sap flow profiles in tree stems. Enables detailed analysis of sap flow distribution across sapwood.",
      zh: "\u70ed\u573a\u53d8\u5f62\uff08HFD\uff09\u6db2\u6d41\u63a2\u9488\uff0c\u7528\u4e8e\u6d4b\u91cf\u6811\u5e72\u5f84\u5411\u6db2\u6d41\u5256\u9762\u3002\u53ef\u8be6\u7ec6\u5206\u6790\u8fb9\u6750\u4e2d\u6db2\u6d41\u5206\u5e03\u3002",
    },
    image: IMAGES.ecohydrology,
    specs: [
      { en: "Heat field deformation principle", zh: "\u70ed\u573a\u53d8\u5f62\u539f\u7406" },
      { en: "Radial sap flow profiling", zh: "\u5f84\u5411\u6db2\u6d41\u5256\u9762\u6d4b\u91cf" },
      { en: "Multi-point temperature sensing", zh: "\u591a\u70b9\u6e29\u5ea6\u4f20\u611f" },
    ],
  },
  {
    id: "hrm-probe",
    name: { en: "Self-developed HRM Sap Flow Probe", zh: "\u81ea\u7814HRM\u6db2\u6d41\u63a2\u9488" },
    description: {
      en: "Heat ratio method (HRM) sap flow probe capable of measuring low and reverse sap flows. Ideal for monitoring nighttime water movement and hydraulic redistribution.",
      zh: "\u70ed\u6bd4\u7387\u6cd5\uff08HRM\uff09\u6db2\u6d41\u63a2\u9488\uff0c\u53ef\u6d4b\u91cf\u4f4e\u6d41\u901f\u548c\u53cd\u5411\u6db2\u6d41\u3002\u9002\u7528\u4e8e\u76d1\u6d4b\u591c\u95f4\u6c34\u5206\u8fd0\u52a8\u548c\u6c34\u529b\u518d\u5206\u914d\u3002",
    },
    image: IMAGES.ecohydrology,
    specs: [
      { en: "Heat ratio method principle", zh: "\u70ed\u6bd4\u7387\u6cd5\u539f\u7406" },
      { en: "Low & reverse flow measurement", zh: "\u4f4e\u6d41\u901f\u53ca\u53cd\u5411\u6d41\u6d4b\u91cf" },
      { en: "Nighttime hydraulic redistribution", zh: "\u591c\u95f4\u6c34\u529b\u518d\u5206\u914d\u76d1\u6d4b" },
    ],
  },
  {
    id: "dual-mode-probe",
    name: { en: "Self-developed Dual-mode Sap Flow Probe", zh: "\u81ea\u7814\u53cc\u6a21\u5f0f\u6db2\u6d41\u63a2\u9488" },
    description: {
      en: "Innovative dual-mode sap flow probe combining TDP and HRM methods in a single instrument. Provides comprehensive sap flow data across the full range of flow velocities.",
      zh: "\u521b\u65b0\u6027\u53cc\u6a21\u5f0f\u6db2\u6d41\u63a2\u9488\uff0c\u5c06TDP\u548cHRM\u65b9\u6cd5\u96c6\u6210\u4e8e\u4e00\u4f53\u3002\u53ef\u5728\u5168\u6d41\u901f\u8303\u56f4\u5185\u63d0\u4f9b\u5168\u9762\u7684\u6db2\u6d41\u6570\u636e\u3002",
    },
    image: IMAGES.ecohydrology,
    specs: [
      { en: "Combined TDP + HRM in one probe", zh: "TDP + HRM\u53cc\u6a21\u5f0f\u96c6\u6210" },
      { en: "Full velocity range coverage", zh: "\u5168\u6d41\u901f\u8303\u56f4\u8986\u76d6" },
      { en: "Automatic mode switching", zh: "\u81ea\u52a8\u6a21\u5f0f\u5207\u6362" },
    ],
  },
  {
    id: "tensiometer",
    name: { en: "Self-developed Electronic Tensiometer", zh: "\u81ea\u7814\u7535\u5b50\u5f20\u529b\u8ba1" },
    description: {
      en: "High-precision electronic tensiometer for continuous soil water potential monitoring. Features automatic data logging and remote data transmission capabilities.",
      zh: "\u9ad8\u7cbe\u5ea6\u7535\u5b50\u5f20\u529b\u8ba1\uff0c\u7528\u4e8e\u8fde\u7eed\u76d1\u6d4b\u571f\u58e4\u6c34\u52bf\u3002\u5177\u5907\u81ea\u52a8\u6570\u636e\u8bb0\u5f55\u548c\u8fdc\u7a0b\u6570\u636e\u4f20\u8f93\u529f\u80fd\u3002",
    },
    image: IMAGES.facilities,
    specs: [
      { en: "Continuous soil water potential monitoring", zh: "\u8fde\u7eed\u571f\u58e4\u6c34\u52bf\u76d1\u6d4b" },
      { en: "Automatic data logging", zh: "\u81ea\u52a8\u6570\u636e\u8bb0\u5f55" },
      { en: "Remote data transmission", zh: "\u8fdc\u7a0b\u6570\u636e\u4f20\u8f93" },
    ],
  },
  {
    id: "soil-moisture",
    name: { en: "Self-developed Deep Soil Moisture Profile Probe", zh: "\u81ea\u7814\u6df1\u5c42\u571f\u58e4\u6c34\u5206\u5256\u9762\u63a2\u9488" },
    description: {
      en: "Multi-depth soil moisture monitoring probe for measuring volumetric water content profiles from surface to deep soil layers. Essential for understanding root water uptake patterns.",
      zh: "\u591a\u6df1\u5ea6\u571f\u58e4\u6c34\u5206\u76d1\u6d4b\u63a2\u9488\uff0c\u7528\u4e8e\u6d4b\u91cf\u4ece\u8868\u5c42\u5230\u6df1\u5c42\u571f\u58e4\u7684\u4f53\u79ef\u542b\u6c34\u91cf\u5256\u9762\u3002\u5bf9\u7406\u89e3\u6839\u7cfb\u5438\u6c34\u6a21\u5f0f\u81f3\u5173\u91cd\u8981\u3002",
    },
    image: IMAGES.facilities,
    specs: [
      { en: "Multi-depth profile measurement", zh: "\u591a\u6df1\u5ea6\u5256\u9762\u6d4b\u91cf" },
      { en: "Surface to deep soil monitoring", zh: "\u8868\u5c42\u81f3\u6df1\u5c42\u571f\u58e4\u76d1\u6d4b" },
      { en: "Compatible with CR1000X loggers", zh: "\u517c\u5bb9CR1000X\u91c7\u96c6\u5668" },
    ],
  },
  {
    id: "dendrometer",
    name: { en: "Self-developed Stem Diameter Micro-variation Sensor", zh: "\u81ea\u7814\u830e\u5e72\u76f4\u5f84\u5fae\u53d8\u5316\u4f20\u611f\u5668" },
    description: {
      en: "High-resolution dendrometer for measuring sub-micrometer stem diameter variations. Captures diurnal stem shrinkage and swelling patterns linked to tree water status.",
      zh: "\u9ad8\u5206\u8fa8\u7387\u6811\u6728\u5f84\u5411\u751f\u957f\u4eea\uff0c\u7528\u4e8e\u6d4b\u91cf\u4e9a\u5fae\u7c73\u7ea7\u830e\u5e72\u76f4\u5f84\u53d8\u5316\u3002\u53ef\u6355\u6349\u4e0e\u6811\u6728\u6c34\u5206\u72b6\u6001\u76f8\u5173\u7684\u65e5\u5468\u671f\u830e\u5e72\u6536\u7f29\u548c\u81a8\u80c0\u6a21\u5f0f\u3002",
    },
    image: IMAGES.facilities,
    specs: [
      { en: "Sub-micrometer resolution", zh: "\u4e9a\u5fae\u7c73\u7ea7\u5206\u8fa8\u7387" },
      { en: "Diurnal shrinkage/swelling tracking", zh: "\u65e5\u5468\u671f\u6536\u7f29/\u81a8\u80c0\u8ffd\u8e2a" },
      { en: "Tree water status indicator", zh: "\u6811\u6728\u6c34\u5206\u72b6\u6001\u6307\u793a" },
    ],
  },
  {
    id: "minirhizotron",
    name: { en: "Minirhizotron System", zh: "\u5fae\u6839\u7ba1\u7cfb\u7edf" },
    description: {
      en: "CI-600 root scanner system for non-destructive monitoring of fine root dynamics, including root production, mortality, and turnover rates at multiple soil depths.",
      zh: "CI-600\u6839\u7cfb\u626b\u63cf\u4eea\u7cfb\u7edf\uff0c\u7528\u4e8e\u975e\u7834\u574f\u6027\u76d1\u6d4b\u7ec6\u6839\u52a8\u6001\uff0c\u5305\u62ec\u4e0d\u540c\u571f\u58e4\u6df1\u5ea6\u7684\u6839\u7cfb\u751f\u4ea7\u3001\u6b7b\u4ea1\u548c\u5468\u8f6c\u901f\u7387\u3002",
    },
    image: IMAGES.roots,
    specs: [
      { en: "CI-600 In-Situ Root Imager", zh: "CI-600\u539f\u4f4d\u6839\u7cfb\u6210\u50cf\u4eea" },
      { en: "60+ observation tubes", zh: "60\u4f59\u6839\u89c2\u6d4b\u7ba1" },
      { en: "WinRHIZO Tron analysis software", zh: "WinRHIZO Tron\u5206\u6790\u8f6f\u4ef6" },
    ],
  },
  {
    id: "eddycovariance",
    name: { en: "Eddy Covariance System", zh: "\u6da1\u5ea6\u76f8\u5173\u7cfb\u7edf" },
    description: {
      en: "Open-path eddy covariance system for measuring ecosystem-level fluxes of water vapor, CO2, and energy above the plantation canopy.",
      zh: "\u5f00\u8def\u6da1\u5ea6\u76f8\u5173\u7cfb\u7edf\uff0c\u7528\u4e8e\u6d4b\u91cf\u4eba\u5de5\u6797\u51a0\u5c42\u4e0a\u65b9\u751f\u6001\u7cfb\u7edf\u6c34\u5e73\u7684\u6c34\u6c7d\u3001CO2\u548c\u80fd\u91cf\u901a\u91cf\u3002",
    },
    image: IMAGES.facilities,
    specs: [
      { en: "LI-7500DS open-path analyzer", zh: "LI-7500DS\u5f00\u8def\u5206\u6790\u4eea" },
      { en: "CSAT3 sonic anemometer", zh: "CSAT3\u8d85\u58f0\u98ce\u901f\u4eea" },
      { en: "30m flux tower", zh: "30\u7c73\u901a\u91cf\u5854" },
    ],
  },
  {
    id: "weather",
    name: { en: "Automatic Weather Station", zh: "\u81ea\u52a8\u6c14\u8c61\u7ad9" },
    description: {
      en: "Comprehensive meteorological monitoring including air temperature, humidity, precipitation, wind speed, solar radiation, and soil temperature/moisture profiles.",
      zh: "\u7efc\u5408\u6c14\u8c61\u76d1\u6d4b\uff0c\u5305\u62ec\u6c14\u6e29\u3001\u6e7f\u5ea6\u3001\u964d\u6c34\u3001\u98ce\u901f\u3001\u592a\u9633\u8f90\u5c04\u548c\u571f\u58e4\u6e29\u6e7f\u5ea6\u5256\u9762\u3002",
    },
    image: IMAGES.facilities,
    specs: [
      { en: "Campbell Scientific CR6 logger", zh: "Campbell Scientific CR6\u91c7\u96c6\u5668" },
      { en: "Soil moisture profile (TDR)", zh: "\u571f\u58e4\u6c34\u5206\u5256\u9762\uff08TDR\uff09" },
      { en: "Tipping bucket rain gauge", zh: "\u7ffb\u6597\u5f0f\u96e8\u91cf\u8ba1" },
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
