// ============================================================
// PWRlab Site Data — Replace placeholder content with real data
// ============================================================

export interface TeamMember {
  id: string;
  name: { en: string; zh: string };
  role: "pi" | "collaborator" | "faculty" | "engineer" | "phd" | "msc" | "alumni_phd" | "alumni_msc";
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
  currentPosition?: { en: string; zh: string }; // for alumni: current employer/position
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
  tags?: string[];
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
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/hero-banner-new-67k4NNb8kABikxgGFzF3wo.webp",
  ecohydrology: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/research-ecohydrology-NFG5gBx7C5oVgi83EgRfts.webp",
  roots: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/research-roots-NEvJ8CWtdh6mpadopTyfhL.webp",
  fieldwork: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/fieldwork-gallery-DsZofphhPD4phhhzS82WPP.webp",
  facilities: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/facilities-station-3Az9RbCHQWVU9fF94Zx7R6.webp",
  // Page hero banners
  heroResearch: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/hero-research-SB9nAvpUeA2ddp4S9x5btV.webp",
  heroProjects: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/hero-projects-XUZqf5Lv5V9yYPn5SsM9sd.webp",
  heroPublications: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/hero-publications-AongEWd4wuSziF4gKsmQeQ.webp",
  heroTeam: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/hero-team-NUcYCtXtaQsqubas3ADgan.webp",
  heroFacilities: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/hero-facilities-H5mpsb9GVPPoB8jcpnxqMz.webp",
  heroNews: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/hero-news-hpBt7BPKQYiWsSVpQvuYb7.webp",
  heroGallery: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/hero-gallery-BCVLFMowpvnSJdBgr9Eqmx.webp",
  heroContact: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/hero-contact-QXvhUDApc5HyCw2uYwSqZe.webp",
};

// ---- Awards ----
export const awards: Award[] = [
  { id: "award-2024-liangxi", title: { en: "Liangxi Forestry S&T Award, 2nd Prize (Rank #1) — Smart Irrigation for Poplar", zh: "梁希林业科学技术奖二等奖（排名第1）— 白杨大径材精准智能化水分管理技术及应用" }, year: 2024, rank: "#1" },
  { id: "award-2024-green", title: { en: "1st National Youth Green S&T Innovation Competition, Silver Award (Advisor)", zh: "首届青年绿色科技创新大赛银奖（指导教师）" }, year: 2024 },
  { id: "award-2024-cast-instrument", title: { en: "CAST Research Instrument Innovation Case Award", zh: "中国科协科研仪器案例库优秀案例奖" }, year: 2024 },
  { id: "award-2023-teaching", title: { en: "BJFU College of Forestry 1st Youth Teaching Excellence Award", zh: "北京林业大学林学院第一届青年教学名师奖" }, year: 2023 },
  { id: "award-2021-thesis-advisor", title: { en: "Beijing Outstanding Undergraduate Thesis Advisor", zh: "北京市优秀本科毕业设计（论文）指导教师" }, year: 2021 },
  { id: "award-2021-teaching-1st", title: { en: "BJFU Undergraduate Teaching Achievement Award, 1st Prize (Rank #10)", zh: "北京林业大学校级本科教学成果一等奖（排名第10）" }, year: 2021 },
  { id: "award-2020-liangxi-paper", title: { en: "8th Liangxi Young Paper Award, 1st Prize", zh: "第八届梁希青年论文奖一等奖" }, year: 2020 },
  { id: "award-cast-idol", title: { en: "CAST 'Science Idol' Scientist Spirit Video Award, 3rd Prize", zh: "中国科协'科学也偶像'科学家精神短视频三等奖" }, year: 2020 },
  { id: "award-2019-thesis-advisor", title: { en: "Beijing Outstanding Undergraduate Thesis Advisor", zh: "北京市优秀本科毕业设计（论文）指导教师" }, year: 2019 },
  { id: "award-2019-grad-teaching", title: { en: "BJFU Graduate Teaching Achievement Award, 1st Prize (Rank #5)", zh: "北京林业大学研究生教学成果奖一等奖（排名第5）" }, year: 2019 },
  { id: "award-2018-moe", title: { en: "Ministry of Education S&T Award, 2nd Prize (Rank #15)", zh: "教育部科学技术奖二等奖（排名第15）" }, year: 2018, rank: "#15" },
  { id: "award-2018-star", title: { en: "BJFU 'Star of Science & Technology'", zh: "北京林业大学'科技之星'" }, year: 2018 },
  { id: "award-2018-liangxi-paper", title: { en: "Liangxi Young Paper Award, 3rd Prize", zh: "梁希青年论文奖三等奖" }, year: 2018 },
  { id: "award-2017-bjfu-paper", title: { en: "BJFU 6th Outstanding Young Academic Paper Award, 2nd Prize", zh: "北京林业大学第六届优秀青年学术论文二等奖" }, year: 2017 },
  { id: "award-cast-outstanding", title: { en: "4th CAST Outstanding S&T Paper Award (sole recipient in forestry)", zh: "第四届中国科协优秀科技论文奖（全国98篇，林业领域唯一）" }, year: 2017 },
  { id: "award-cast-agri", title: { en: "4th CAST Agriculture & Forestry Outstanding Paper Award, Grand Prize (sole in forestry)", zh: "第四届中国科协农林优秀论文特等奖（林业领域唯一）" }, year: 2017 },
  { id: "award-2016-liangxi", title: { en: "Liangxi Forestry S&T Award, 2nd Prize (Rank #2)", zh: "梁希林业科学技术奖二等奖（排名第2）" }, year: 2016, rank: "#2" },
  { id: "award-2015-shenguofang", title: { en: "Shen Guofang Forest Cultivation Award Fund", zh: "沈国舫森林培育奖励基金" }, year: 2015 },
  { id: "award-2015-teaching", title: { en: "BJFU Young Teacher Teaching Skills Competition, 3rd Prize", zh: "北京林业大学青年教师教学基本功比赛三等奖" }, year: 2015 },
  { id: "award-2014-liangxi-paper", title: { en: "Liangxi Young Paper Award, 2nd Prize", zh: "梁希青年论文奖二等奖" }, year: 2014 },
  { id: "award-2013-thesis", title: { en: "BJFU Outstanding Doctoral Dissertation", zh: "北京林业大学优秀博士论文" }, year: 2013 },
];

// ---- Team Members ----
export const teamMembers: TeamMember[] = [
  {
    id: "xi-benye",
    name: { en: "Prof. Benye Xi", zh: "席本野 教授" },
    role: "pi",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/xi-benye-photo_fdf7c3c5.png",
    title: {
      en: "Professor & PhD Supervisor (Exceptionally Promoted), College of Forestry, Beijing Forestry University",
      zh: "教授、博士生导师（破格晋升），北京林业大学林学院",
    },
    interests: {
      en: "Plantation ecohydrology, tree water relations, plant physiological ecology",
      zh: "人工林生态水文、林木水分关系、植物生理生态学",
    },
    bio: {
      en: "Prof. Xi (b. 1985, Gongyi, Henan) leads the Plantation Water Relation Lab at Beijing Forestry University. He is a recipient of the National 'Ten Thousand Talents Plan' Young Top Talent award and National Forestry Bureau Young S&T Innovation Talent. He serves as PI at the National Key Lab of Efficient Forest Production, Director of the Key Lab of Forest Cultivation and Ecosystem in Arid/Semi-arid Areas (National Forestry Bureau), and core member (#2) of the National Poplar Plantation Innovation Team. His lab has developed a series of self-designed sap flow probes and soil sensors deployed across 1,600+ units nationwide.",
      zh: "席本野（1985年生，河南巩义），北京林业大学人工林水分关系实验室负责人。入选国家「万人计划」青年拔尖人才、国家林业局青年科技创新人才。现任林木高效培育全国重点实验室PI、国家林业局干旱半干旱地区森林培育及生态系统研究重点实验室主任、国家杨树人工林创新团队核心成员（排名第2）。团队自主研发的液流探针和土壤传感器已在全国部署1600余套。",
    },
    education: [
      { en: "BSc Forestry, Central South University of Forestry & Technology (2003-2007)", zh: "学士，林学，中南林业科技大学（2003-2007）" },
      { en: "PhD Forest Cultivation, Beijing Forestry University (2007-2013)", zh: "博士，森林培育学，北京林业大学（2007-2013）" },
      { en: "Visiting Scholar, University of Canterbury, New Zealand (2012-2013, 2015)", zh: "访问学者，新西兰坎特伯雷大学（2012-2013, 2015）" },
      { en: "Visiting Scholar, Lincoln University & Plant and Food Research, NZ (2017-2018)", zh: "访问学者，新西兰林肯大学 & Plant and Food Research（2017-2018）" },
    ],
    honors: [
      { en: "National 'Ten Thousand Talents Plan' Young Top Talent", zh: "国家「万人计划」青年拔尖人才" },
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
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/mark_coleman_1b98bef6.png",
    interests: { en: "Forest productivity, carbon allocation, tree physiology", zh: "森林生产力、碳分配、树木生理学" },
    bio: { en: "Prof. Coleman is a forest ecophysiologist at the University of Idaho, collaborating with PWRlab on plantation productivity optimization.", zh: "Coleman教授是爱达荷大学森林生态生理学家，与PWRlab在人工林生产力优化方面合作。" },
    email: "mcoleman@uidaho.edu",
    website: "https://www.uidaho.edu",
  },
  {
    id: "brent-clothier",
    name: { en: "Dr. Brent Clothier", zh: "Brent Clothier 博士" },
    role: "collaborator",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    interests: { en: "Soil physics, root water uptake, plant-soil interactions", zh: "土壤物理学、根系吸水、植物-土壤相互作用" },
    bio: { en: "Dr. Clothier is a distinguished scientist at Plant and Food Research, New Zealand.", zh: "Clothier博士是新西兰Plant and Food Research杰出科学家。" },
    website: "https://www.plantandfood.com",
  },
  {
    id: "nadezhda-nadezhdina",
    name: { en: "Dr. Nadezhda Nadezhdina", zh: "Nadezhda Nadezhdina 博士" },
    role: "collaborator",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    interests: { en: "Sap flow methodology, tree hydraulics, forest hydrology", zh: "液流方法学、树木水力学、森林水文学" },
    bio: { en: "Dr. Nadezhdina is a leading expert in sap flow measurement techniques.", zh: "Nadezhdina博士是液流测量技术领域的领军专家。" },
  },
  {
    id: "david-tissue",
    name: { en: "Prof. David Tissue", zh: "David Tissue 教授" },
    role: "collaborator",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    interests: { en: "Plant ecophysiology, climate change impacts, carbon-water relations", zh: "植物生态生理学、气候变化影响、碳-水关系" },
    bio: { en: "Prof. Tissue specializes in climate change impacts on vegetation.", zh: "Tissue教授专注于气候变化对植被的影响。" },
  },
  {
    id: "brendan-choat",
    name: { en: "Prof. Brendan Choat", zh: "Brendan Choat 教授" },
    role: "collaborator",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    interests: { en: "Plant hydraulics, xylem embolism, drought-induced tree mortality", zh: "植物水力学、木质部栓塞、干旱导致的树木死亡" },
    bio: { en: "Prof. Choat is a world-leading expert in plant hydraulics.", zh: "Choat教授是植物水力学领域的世界级专家。" },
  },
  {
    id: "jose-fernandez",
    name: { en: "Prof. Jose-Enrique Fernandez", zh: "Jose-Enrique Fernandez 教授" },
    role: "collaborator",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    interests: { en: "Irrigation scheduling, plant water status, precision agriculture", zh: "灌溉调度、植物水分状态、精准农业" },
    bio: { en: "Prof. Fernandez is an expert in precision irrigation at CSIC, Spain.", zh: "Fernandez教授是西班牙CSIC精准灌溉专家。" },
  },
  {
    id: "wei-hu",
    name: { en: "Dr. Wei Hu", zh: "胡伟 博士" },
    role: "collaborator",
    photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
    interests: { en: "Soil physics, vadose zone hydrology, water resource management", zh: "土壤物理学、包气带水文学、水资源管理" },
    bio: { en: "Dr. Hu is a soil physicist at Plant and Food Research, New Zealand.", zh: "胡伟博士是新西兰Plant and Food Research土壤物理学家。" },
  },
  // ---- Faculty Members ----
  { id: "duan-jie", name: { en: "Jie Duan", zh: "段劼" }, role: "faculty", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/duan_jie_397b852d.webp", interests: { en: "Sustainable forest management, xylem hydraulic traits, plantation irrigation", zh: "森林培育与可持续经营、木质部水力特性、人工林灌溉管理" }, title: { en: "Professor, PhD Supervisor", zh: "教授、博士生导师" }, currentPosition: { en: "College of Forestry, Beijing Forestry University", zh: "北京林业大学林学院" } },
  { id: "huang-qingqing", name: { en: "Qingqing Huang", zh: "黄青青" }, role: "faculty", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/huang_qingqing_633ca6fb.png", interests: { en: "Smart forestry monitoring, UAV remote sensing, forestry equipment & informatics", zh: "智慧林业监测、无人机遥感、林业装备与信息化" }, title: { en: "Associate Professor", zh: "副教授" }, currentPosition: { en: "College of Engineering, Beijing Forestry University", zh: "北京林业大学工学院" } },
  { id: "wang-xin", name: { en: "Xin Wang", zh: "王鑫" }, role: "faculty", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/wang_xin_65f66822.png", interests: { en: "Forest cultivation, plantation carbon storage, soil respiration", zh: "森林培育、人工林碳储量、土壤呼吸" }, title: { en: "Associate Professor", zh: "副教授" }, currentPosition: { en: "College of Forestry, Beijing Forestry University", zh: "北京林业大学林学院" } },
  { id: "han-qiaoling", name: { en: "Qiaoling Han", zh: "韩巧玲" }, role: "faculty", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/han_qiaoling_cbb87cb4.jpeg", interests: { en: "AI-based soil CT image processing, multimodal data analysis, deep learning", zh: "人工智能、土壤CT图像处理、多模态数据分析" }, title: { en: "Associate Professor", zh: "副教授" }, currentPosition: { en: "College of Engineering, Beijing Forestry University", zh: "北京林业大学工学院" } },
  { id: "yang-meng", name: { en: "Meng Yang", zh: "杨猛" }, role: "faculty", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face", interests: { en: "Computer graphics, VR/AR, forest health immersive experience, AI", zh: "计算机图形学、虚拟/增强现实、森林康养沉浸式体验、人工智能" }, title: { en: "Associate Professor", zh: "副教授" }, currentPosition: { en: "School of Information Science and Technology, Beijing Forestry University", zh: "北京林业大学信息学院" } },
  { id: "di-nan-faculty", name: { en: "Nan Di", zh: "邸楠" }, role: "faculty", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/di_nan_eb36dd15.png", interests: { en: "Plantation ecohydrology, sap flow measurement, water use efficiency", zh: "人工林生态水文、液流测量、水分利用效率" }, title: { en: "Associate Professor", zh: "副教授" }, currentPosition: { en: "School of Ecology and Environment, Inner Mongolia University", zh: "内蒙古大学生态与环境学院" } },
  { id: "li-ximeng", name: { en: "Ximeng Li", zh: "李熙萌" }, role: "faculty", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/li_ximeng_22032662.png", interests: { en: "Carbon metabolism regulation, vascular plant drought strategies, crop water use efficiency", zh: "碳代谢调控、维管植物抗旱策略、作物水分利用效率" }, title: { en: "Associate Professor", zh: "副教授" }, currentPosition: { en: "College of Life and Environmental Sciences, Minzu University of China", zh: "中央民族大学生命与环境科学学院" } },
  { id: "liu-yang-faculty", name: { en: "Yang Liu", zh: "刘洋" }, role: "faculty", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/liu_yang_ba2bdb40.png", interests: { en: "Forest cultivation, plantation water relations", zh: "森林培育、人工林水分关系" }, title: { en: "Lecturer", zh: "讲师" }, currentPosition: { en: "School of Agriculture, Forestry, Medicine and Pharmacy, National Open University of China", zh: "国家开放大学农林医药教学部" } },
  // ---- Engineer ----
  { id: "li-xin", name: { en: "Xin Li", zh: "李新" }, role: "engineer", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/li_xin_98824214.png", interests: { en: "Sap flow probe R&D, forestry instrument manufacturing", zh: "液流探针研发、林业仪器制造" }, title: { en: "Engineer", zh: "工程师" }, currentPosition: { en: "Beijing Shiyutong Technology Co., Ltd.", zh: "北京时域通科技有限公司" } },
  // ---- PhD Students (12) ----
  { id: "sajid-hussain", name: { en: "Sajid Hussain", zh: "Sajid Hussain" }, role: "phd", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face", interests: { en: "Plantation water management, tree physiology", zh: "人工林水分管理、树木生理" }, year: "2021" },
  { id: "kong-xin", name: { en: "Xin Kong (孔鑫)", zh: "孔鑫" }, role: "phd", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/kong_xin_d37056b0.jpg", interests: { en: "Heatwave impacts on poplar plantations", zh: "热浪对杨树人工林的影响" }, year: "2022" },
  { id: "wang-kai", name: { en: "Kai Wang (王凯)", zh: "王凯" }, role: "phd", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/wang_kai_6a5f4b76.jpg", interests: { en: "Nutrient allocation in plantation forests", zh: "人工林养分分配" }, year: "2022" },
  { id: "fulgence-h", name: { en: "Fulgence Hagumubuzima", zh: "Fulgence Hagumubuzima" }, role: "phd", photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face", interests: { en: "Thinning effects on timber quality, meta-analysis", zh: "间伐对木材质量的影响、荟萃分析" }, year: "2023" },
  { id: "zhao-xiaoning", name: { en: "Xiaoning Zhao (赵小宁)", zh: "赵小宁" }, role: "phd", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/zhao_xiaoning_e68cad40.png", interests: { en: "Sap flow scaling and transpiration estimation", zh: "液流尺度转换与蒸腾估算" }, year: "2023" },
  { id: "yang-wenhan", name: { en: "Wenhan Yang (杨文涵)", zh: "杨文涵" }, role: "phd", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/yang_wenhan_315cbca7.jpg", interests: { en: "Deep soil desiccation and tree responses", zh: "深层土壤干化与林木响应" }, year: "2023" },
  { id: "wang-aoyu", name: { en: "Aoyu Wang (王傲宇)", zh: "王傲宇" }, role: "phd", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/wang_aoyu_e64ed8c3.jpg", interests: { en: "Plant water regulation strategies", zh: "植物水分调节策略" }, year: "2024" },
  { id: "li-lingya", name: { en: "Lingya Li (李玲雅)", zh: "李玲雅" }, role: "phd", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/li_lingya_4be1aed0.jpg", interests: { en: "Plantation water consumption patterns", zh: "人工林耗水规律" }, year: "2024" },
  { id: "jean-intl", name: { en: "Jean (International)", zh: "Jean（留学生）" }, role: "phd", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face", interests: { en: "Tropical-temperate plantation comparison", zh: "热带-温带人工林对比" }, year: "2025" },
  { id: "zheng-ni", name: { en: "Ni Zheng (郑泥)", zh: "郑泥" }, role: "phd", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face", interests: { en: "Forest hydrology and water cycling", zh: "森林水文与水循环" }, year: "2025" },
  { id: "bi-sisheng", name: { en: "Sisheng Bi (毕思圣)", zh: "毕思圣" }, role: "phd", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face", interests: { en: "Tree water relations under climate change", zh: "气候变化下的林木水分关系" }, year: "2025" },
  { id: "hu-yangyang", name: { en: "Yangyang Hu (胡杨阳)", zh: "胡杨阳" }, role: "phd", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face", interests: { en: "Soil-plant-atmosphere continuum", zh: "土壤-植物-大气连续体" }, year: "2025" },
  // ---- MSc Students (9) ----
  { id: "lin-ying", name: { en: "Ying Lin (林樱)", zh: "林樱" }, role: "msc", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face", interests: { en: "Root water uptake modeling", zh: "根系吸水模拟" }, year: "2023" },
  { id: "jiao-yuzhang", name: { en: "Yuzhang Jiao (焦玉章)", zh: "焦玉章" }, role: "msc", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face", interests: { en: "Irrigation scheduling optimization", zh: "灌溉制度优化" }, year: "2023" },
  { id: "miao-tengfei", name: { en: "Tengfei Miao (缪腾飞)", zh: "缪腾飞" }, role: "msc", photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face", interests: { en: "Drought resistance of poplar varieties", zh: "杨树品种抗旱性" }, year: "2024" },
  { id: "zhao-xinyi", name: { en: "Xinyi Zhao (赵欣怡)", zh: "赵欣怡" }, role: "msc", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face", interests: { en: "Remote sensing of plantation phenology", zh: "人工林物候遥感" }, year: "2024" },
  { id: "yuan-meng", name: { en: "Meng Yuan (袁梦)", zh: "袁梦" }, role: "msc", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face", interests: { en: "Soil moisture dynamics", zh: "土壤水分动态" }, year: "2024" },
  { id: "li-han", name: { en: "Han Li (李涵)", zh: "李涵" }, role: "msc", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face", interests: { en: "Sap flow measurement techniques", zh: "液流测量技术" }, year: "2025" },
  { id: "wu-junrong", name: { en: "Junrong Wu (吴俊蓉)", zh: "吴俊蓉" }, role: "msc", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face", interests: { en: "Tree hydraulic architecture", zh: "树木水力结构" }, year: "2025" },
  { id: "an-shan", name: { en: "Shan An (安珊)", zh: "安珊" }, role: "msc", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face", interests: { en: "Forest ecosystem water balance", zh: "森林生态系统水量平衡" }, year: "2025" },
  { id: "fu-guobin", name: { en: "Guobin Fu (符国斌)", zh: "符国斌" }, role: "msc", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face", interests: { en: "Sensor development and calibration", zh: "传感器研发与标定" }, year: "2025" },
  // ---- Graduated PhD Students ----

  { id: "li-doudou", name: { en: "Doudou Li", zh: "李豆豆" }, role: "alumni_phd", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face", interests: { en: "Forest cultivation", zh: "森林培育" }, year: "2021", currentPosition: { en: "Institute of Medicinal Plant Development, CAMS", zh: "中国医学科学研究院药用植物研究所" } },

  // ---- Graduated MSc Students ----
  { id: "zhang-ruina", name: { en: "Ruina Zhang", zh: "张瑞娜" }, role: "alumni_msc", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face", interests: { en: "Forest cultivation", zh: "森林培育" }, year: "2019", currentPosition: { en: "Beijing Greenorno Technology", zh: "北京绿奥诺技术服务有限公司" } },
  { id: "ma-xu", name: { en: "Xu Ma", zh: "马煕" }, role: "alumni_msc", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/ma_xu_d8eed9da.jpg", interests: { en: "Forest cultivation", zh: "森林培育" }, year: "2020", currentPosition: { en: "Chinese Society of Forestry", zh: "中国林学会咨询部" } },
  { id: "liu-jinqiang", name: { en: "Jinqiang Liu", zh: "刘金强" }, role: "alumni_msc", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/liu_jinqiang_55289e76.png", interests: { en: "Forest cultivation", zh: "森林培育" }, year: "2020", currentPosition: { en: "MDPI Forests Editorial Office", zh: "MDPI出版社 Forests 编辑部" } },
  { id: "zou-songyan", name: { en: "Songyan Zou", zh: "邹松言" }, role: "alumni_msc", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/zou_songyan_8d62aa62.png", interests: { en: "Forest cultivation", zh: "森林培育" }, year: "2022", currentPosition: { en: "Chongqing Forestry Investment Co.", zh: "重庆市林业投资开发有限责任公司" } },
  { id: "ji-zhelin", name: { en: "Zhelin Ji", zh: "吉哲琳" }, role: "alumni_msc", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/ji_zhelin_bd9f45bd.jpg", interests: { en: "Forest cultivation", zh: "森林培育" }, year: "2022" },
  { id: "guo-youzheng", name: { en: "Youzheng Guo", zh: "郭有正" }, role: "alumni_msc", photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face", interests: { en: "Forest cultivation", zh: "森林培育" }, year: "2023", currentPosition: { en: "Yantai Municipal Garden Management", zh: "烟台市城市管理局园林管理处" } },
  { id: "fan-yunxiang", name: { en: "Yunxiang Fan", zh: "范云翔" }, role: "alumni_msc", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face", interests: { en: "Forest cultivation", zh: "森林培育" }, year: "2023", currentPosition: { en: "Liaoning Forestry Development Center", zh: "辽宁省林业发展服务中心" } },
  { id: "tan-jianbiao", name: { en: "Jianbiao Tan", zh: "谭键彪" }, role: "alumni_msc", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/tan_jianbiao_7b2a7538.jpg", interests: { en: "Forest cultivation", zh: "森林培育" }, year: "2023", currentPosition: { en: "Jiangxi Forestry Ecological Engineering Center", zh: "江西省林业生态工程建设中心" } },
  { id: "chen-cheng", name: { en: "Cheng Chen", zh: "陈澄" }, role: "alumni_msc", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face", interests: { en: "Forest cultivation", zh: "森林培育" }, year: "2023", currentPosition: { en: "Guangdong Linda Forestry Design Co.", zh: "广东霖达林业设计有限公司" } },
  { id: "yang-shangjin", name: { en: "Shangjin Yang", zh: "杨尚锦" }, role: "alumni_msc", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/yang_shangjin_1261dda4.jpg", interests: { en: "Forest cultivation", zh: "森林培育" }, year: "2023", currentPosition: { en: "Inspur Database Technology Co.", zh: "山东浪潮数据库技术有限公司" } },
  { id: "tian-xiaonan", name: { en: "Xiaonan Tian", zh: "田晓楠" }, role: "alumni_msc", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/tian_xiaonan_55d9c82c.png", interests: { en: "Forest cultivation", zh: "森林培育" }, year: "2024", currentPosition: { en: "Beijing Yugen Technology Co.", zh: "北京雨根科技有限公司" } },
  { id: "zhang-shusen", name: { en: "Shusen Zhang", zh: "张树森" }, role: "alumni_msc", photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face", interests: { en: "Forest cultivation", zh: "森林培育" }, year: "2024", currentPosition: { en: "Dongying Natural Resources Bureau, Shandong", zh: "山东省东营市自然资源局" } },
  { id: "yu-weichen", name: { en: "Weichen Yu", zh: "余伟晨" }, role: "alumni_msc", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/yu_weichen_bb792ab5.jpg", interests: { en: "Forest cultivation", zh: "森林培育" }, year: "2025" },
  { id: "wang-yunhui", name: { en: "Yunhui Wang", zh: "王云慧" }, role: "alumni_msc", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/wang_yunhui_97a1ffe5.jpg", interests: { en: "Forest cultivation", zh: "森林培育" }, year: "2025", currentPosition: { en: "National Forestry & Grassland Administration", zh: "国家林草局林产规划院" } },
  { id: "wang-yujing", name: { en: "Yujing Wang", zh: "王雨静" }, role: "alumni_msc", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/wang_yujing_58f4e62a.jpg", interests: { en: "Forest cultivation", zh: "森林培育" }, year: "2025" },
  { id: "miao-huayang", name: { en: "Huayang Miao", zh: "苗华阳" }, role: "alumni_msc", photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/miao_huayang_bcbf3b47.jpg", interests: { en: "Forest cultivation", zh: "森林培育" }, year: "2025", currentPosition: { en: "Hebei Provincial Forestry Department", zh: "河北省林业厅" } },
  { id: "liu-yuan-msc", name: { en: "Yuan Liu", zh: "刘媛" }, role: "alumni_msc", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face", interests: { en: "Forest cultivation", zh: "森林培育" }, year: "2025", currentPosition: { en: "Inner Mongolia Forestry Department", zh: "内蒙古林业厅" } },
];

// ---- Projects ----
export const projects: Project[] = [
  {
    id: "14th-five-year-rd",
    title: {
      en: "Precise and Efficient Cultivation Technology for Large-Diameter Poplar Industrial Timber",
      zh: "白杨大径级工业资源材精准高效培育技术研究",
    },
    description: {
      en: "National Key R&D Program project (14th Five-Year Plan) focusing on developing precision cultivation technologies for producing large-diameter industrial timber from poplar plantations, including smart irrigation, nutrient management, and structural optimization.",
      zh: "国家重点研发计划“十四五”课题，聚焦白杨大径级工业资源材精准高效培育技术，包括智能灌溉、养分管理和结构优化。",
    },
    funding: { en: "National Key R&D Program (14th Five-Year Plan), CNY 10M", zh: "国家重点研发计划“十四五”课题，1000万元" },
    period: "2021–2024",
    status: "current",
    image: IMAGES.ecohydrology,
    pi: "PI",
  },
  {
    id: "nsfc-soil-drying",
    title: {
      en: "Soil Desiccation Development and Tree-Soil Feedback Mechanisms in North China Plain Poplar Plantations",
      zh: "华北平原典型杨树林土壤干层发育过程及其与林木的互馈关系和机制",
    },
    description: {
      en: "Investigating the development of deep soil desiccation layers in poplar plantations and the feedback mechanisms between trees and soil water depletion, with implications for sustainable plantation management.",
      zh: "研究杨树人工林深层土壤干层发育过程及其与林木的互馈关系和机制，为可持续人工林经营提供依据。",
    },
    funding: { en: "NSFC General Program, CNY 580K", zh: "国家自然科学基金面上项目，58万元" },
    period: "2022–2025",
    status: "current",
    pi: "PI",
  },
  {
    id: "bjfu-55-team",
    title: {
      en: "Precision Smart Cultivation Innovation Team for Timber Plantations",
      zh: "用材林精准智能化培育创新团队",
    },
    description: {
      en: "BJFU '5.5 Engineering' innovation team focused on developing precision and smart cultivation technologies for timber plantations, integrating IoT sensors, AI-driven decision systems, and automated management.",
      zh: "北京林业大学“5·5工程”创新团队，聚焦用材林精准智能化培育技术研发，整合物联网传感器、AI决策系统和自动化管理。",
    },
    funding: { en: "BJFU '5.5 Engineering', CNY 1.2M", zh: "北京林业大学“5·5工程”，120万元" },
    period: "2023–2027",
    status: "current",
    pi: "PI",
  },
  {
    id: "13th-five-year-rd",
    title: {
      en: "Precision Water-Nutrient Control and Tree Structure Management for Poplar Plantations in Yellow River Floodplain",
      zh: "黄泛平原区毛白杨精准水肥智能调控及树体结构调控技术研究",
    },
    description: {
      en: "National Key R&D Program project (13th Five-Year Plan) developing precision water and nutrient management technologies for poplar plantations in the Yellow River floodplain region.",
      zh: "国家重点研发计划“十三五”课题，研发黄泛平原区毛白杨精准水肥智能调控及树体结构调控技术。",
    },
    funding: { en: "National Key R&D Program (13th Five-Year Plan), CNY 978K", zh: "国家重点研发计划“十三五”课题，97.78万元" },
    period: "2016–2020",
    status: "completed",
    pi: "PI",
  },
  {
    id: "nsfc-soil-water-potential",
    title: {
      en: "Optimal Soil Water Potential Monitoring Position for Poplar Irrigation Scheduling",
      zh: "用于毛白杨灌溉制度制定的土壤水势最佳监测位点及其变化特征与机制研究",
    },
    description: {
      en: "Determining the optimal position for soil water potential monitoring to guide irrigation scheduling in poplar plantations, and investigating the mechanisms of soil water potential variation.",
      zh: "确定毛白杨灌溉制度制定的土壤水势最佳监测位点，研究土壤水势变化特征与机制。",
    },
    funding: { en: "NSFC General Program, CNY 580K", zh: "国家自然科学基金面上项目，58万元" },
    period: "2020–2023",
    status: "completed",
    pi: "PI",
  },
  {
    id: "nsfc-deep-soil-water",
    title: {
      en: "Deep Soil Water Utilization Characteristics and Mechanisms in Poplar Plantations Under Shallow Soil Moisture Gradients",
      zh: "浅土层水分梯度下毛白杨对深层土壤水的利用特征与机制",
    },
    description: {
      en: "Investigating how poplar trees access and utilize deep soil water resources under varying shallow soil moisture conditions, with implications for understanding tree drought resilience.",
      zh: "研究不同浅层土壤水分条件下毛白杨对深层土壤水的利用特征与机制，为理解林木抗旱能力提供依据。",
    },
    funding: { en: "NSFC General Program, CNY 600K", zh: "国家自然科学基金面上项目，60万元" },
    period: "2019–2022",
    status: "completed",
    pi: "PI",
  },
  {
    id: "12th-five-year",
    title: {
      en: "Precision Root-Zone Water-Nutrient Control and Pruning Technology for Triploid Poplar Pulp Plantations",
      zh: "三倍体毛白杨速生纸浆林精准根区水养调控及修枝技术研究",
    },
    description: {
      en: "Developing precision root-zone water and nutrient management combined with pruning techniques for high-yield triploid poplar pulp plantations.",
      zh: "研发三倍体毛白杨速生纸浆林精准根区水养调控及修枝技术。",
    },
    funding: { en: "12th Five-Year National S&T Plan, CNY 500K", zh: "“十二五”农村领域国家科技计划，50万元" },
    period: "2015–2019",
    status: "completed",
    pi: "PI",
  },
  {
    id: "nsfc-youth",
    title: {
      en: "Quantitative Response of Poplar Growth and Transpiration to Root-Zone Water Under Drip and Border Irrigation",
      zh: "滴、畦灌下毛白杨生长及蒸腾对根区水的动态定量响应特征与机制",
    },
    description: {
      en: "NSFC Youth Program investigating the dynamic quantitative response characteristics and mechanisms of poplar growth and transpiration to root-zone water under different irrigation methods.",
      zh: "国家自然科学基金青年项目，研究滴灌和畦灌下毛白杨生长及蒸腾对根区水的动态定量响应特征与机制。",
    },
    funding: { en: "NSFC Youth Program, CNY 250K", zh: "国家自然科学基金青年项目，25万元" },
    period: "2015–2017",
    status: "completed",
    pi: "PI",
  },
];

// ---- Editorial Roles ----
export interface EditorialRole {
  id: string;
  role: { en: string; zh: string };
  journal: string;
  type: "editor" | "guest_editor" | "reviewer";
}

export const editorialRoles: EditorialRole[] = [
  { id: "ed-linye", role: { en: "Youth Editor", zh: "青年编委" }, journal: "Scientia Silvae Sinicae (林业科学)", type: "editor" },
  { id: "ed-zhiwu", role: { en: "Youth Editor", zh: "青年编委" }, journal: "Bulletin of Botanical Research (植物研究)", type: "editor" },
  { id: "ed-bjfu", role: { en: "Editor", zh: "编委" }, journal: "Journal of Beijing Forestry University (北京林业大学学报)", type: "editor" },
  { id: "ed-tree-med", role: { en: "Editor", zh: "编委" }, journal: "Tree Medicine (树木医学)", type: "editor" },
  { id: "ed-frontiers", role: { en: "Review Editor", zh: "审稿编辑" }, journal: "Frontiers in Forests and Global Change", type: "editor" },
  { id: "ge-awm", role: { en: "Guest Editor — Special Issue: Water Resource Regulation for Improving Quality, Productivity and Functioning of Tree Plantation", zh: "客座编辑 — 专刊：提升人工林质量、生产力和功能的水资源调控" }, journal: "Agricultural Water Management", type: "guest_editor" },
  { id: "ge-fps", role: { en: "Guest Editor — Special Issue: Silviculture and Agriculture Tree Growth Under Water Stress", zh: "客座编辑 — 专刊：水分胁迫下的林业和农业树木生长" }, journal: "Frontiers in Plant Science", type: "guest_editor" },
  { id: "ge-forests", role: { en: "Guest Editor — Special Issue: Sap Flow — A Tool to Talk with Tree", zh: "客座编辑 — 专刊：液流——与树木对话的工具" }, journal: "Forests", type: "guest_editor" },
];

// ---- Teaching ----
export interface Course {
  id: string;
  name: { en: string; zh: string };
  level: "undergraduate" | "graduate" | "international";
  distinction?: { en: string; zh: string };
}

export const courses: Course[] = [
  { id: "silviculture", name: { en: "Silviculture", zh: "森林培育学" }, level: "undergraduate", distinction: { en: "National First-class Undergraduate Course (Rank #4); National Course Ideological-Political Demonstration Project (Rank #4)", zh: "国家一流本科课程（排名第4）；国家课程思政示范项目（排名第4）" } },
  { id: "vegetation-restoration", name: { en: "Vegetation Restoration Engineering", zh: "植被恢复工程学" }, level: "undergraduate" },
  { id: "forestry-exp-design", name: { en: "Forestry Experimental Design", zh: "林业试验设计" }, level: "undergraduate" },
  { id: "silviculture-practice", name: { en: "Silviculture Field Practice", zh: "森林培育学实习" }, level: "undergraduate" },
  { id: "intro-forestry", name: { en: "Introduction to Forestry", zh: "林学概论" }, level: "undergraduate" },
  { id: "research-methods", name: { en: "Research Methods in Silviculture", zh: "森林培育研究法" }, level: "graduate" },
  { id: "advanced-silviculture", name: { en: "Advanced Silviculture Topics", zh: "高级森林培育专题" }, level: "graduate" },
  { id: "frontier-forestry", name: { en: "The Frontier of Forestry Technology", zh: "林业技术前沿" }, level: "international" },
];


// ---- Publications ----
// Complete publication list from Prof. Xi Benye's CV (updated 2026.3)
// 129 published papers + 11 under review = 140 total
export const publications: Publication[] = [
  {
    id: "pub-2026-1",
    title: "CLIP-TLNet: Canopy Light Interception Prediction with Transformer-LSTM Network Through 3D Complexity-Temporal Dynamics Modeling",
    authors: "Yang M, Gao Y, Xi B, Wang X*, Huang Q, Meng W",
    journal: "Plant Phenomics",
    year: 2026,
    doi: "10.1016/j.plaphe.2026.100170",
    highlight: true,
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2025-1",
    title: "A weakly supervised soil pore segmentation method based on traditional segmentation algorithm",
    authors: "Fu Y, Huang Z, Zhao Y, Xi B, Zhao Y, Han Q*",
    journal: "Catena",
    year: 2025,
    doi: "10.1016/j.catena.2024.108660",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2025-2",
    title: "Two years of experimental rainfall exclusion does not promote leaf drought resistance in improved Populus varieties common to North China",
    authors: "Sun J, Huang R, Yang W, Kong X, Duan J, Xi B*, Li X*, Choat B, Tissue D",
    journal: "Tree Physiology",
    year: 2025,
    doi: "10.1093/treephys/tpaf135",
    tags: ["SCI", "Q2 TOP"]
  },
  {
    id: "pub-2025-3",
    title: "Growth and Biomass Distribution Responses of Populus tomentosa to Long-Term Water-Nitrogen Coupling in the North China Plain",
    authors: "Wang Y, Liu J, He Y, Zhu W, Jia L*, Xi B*",
    journal: "Plants",
    year: 2025,
    tags: ["SCI", "Q2"]
  },
  {
    id: "pub-2025-4",
    title: "Hydraulic traits are coordinated but decoupled from carbon traits in herbaceous species",
    authors: "Huang R, Wu H, Sun J, Di N*, Duan J, Xi B, Li X*, Jansen S, Choat B, Tissue DT",
    journal: "Functional Ecology",
    year: 2025,
    doi: "10.1111/1365-2435.14753",
    highlight: true,
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2025-5",
    title: "间伐强度对毛白杨S86人工林器官养分含量、化学计量特征和养分重吸收的影响",
    authors: "王亚飞, 王凯, 刘洋, 丁晓菲, 续可心, 张国庆, 贾黎明*, 席本野",
    journal: "林业科学",
    year: 2025,
    tags: ["EI"]
  },
  {
    id: "pub-2025-6",
    title: "不同密度和水分管理下毛白杨人工林细根分布特征",
    authors: "周欧, 古丽米热, 祝维, 王亚飞, 贾黎明*, 席本野",
    journal: "南京林业大学学报(自然科学版)",
    year: 2025,
    tags: ["CSCD"]
  },
  {
    id: "pub-2025-7",
    title: "水氮耦合处理对毛白杨纸浆林生长及土壤水养特征影响",
    authors: "王亚飞, 刘洋, 王凯, 丁晓菲, 续可心, 贾黎明*, 席本野",
    journal: "林业科学",
    year: 2025,
    tags: ["EI"]
  },
  {
    id: "pub-2024-1",
    title: "Trees in cooler regions are more vulnerable to thermal stress: evidence from temperate poplar plantations in Northern China during the 2022 heatwaves",
    authors: "Kong X, Zhang S, Wang A, Liu Y, Wang K, Zhao X, Di N, Ding C*, Li X, Xi B*",
    journal: "Agricultural and Forest Meteorology",
    year: 2024,
    doi: "10.1016/j.agrformet.2024.110181",
    highlight: true,
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2024-2",
    title: "Cultivar and tree size, but not climate, are principal factors affecting stem quality of Populus tomentosa plantations in the North China Plain",
    authors: "Zhu W, Wang Y, Qu G, Xi B*, Jia L*",
    journal: "Forest Ecology and Management",
    year: 2024,
    doi: "10.1016/j.foreco.2024.122348",
    tags: ["SCI", "Q2 TOP"]
  },
  {
    id: "pub-2024-3",
    title: "基于改进的PSPNet网络的毛白杨根系自动分割量化系统",
    authors: "张鹏翀, 韩巧玲, 席本野, 郑秋燕, 赵玥*",
    journal: "浙江农业学报",
    year: 2024,
    tags: ["CSCD"]
  },
  {
    id: "pub-2024-4",
    title: "不同密度和水分管理下毛白杨林分土壤水分特征",
    authors: "周欧, 古丽米热, 祝维, 王亚飞, 曲冠博, 李少然, 贾黎明*, 席本野",
    journal: "北京林业大学学报",
    year: 2024,
    tags: ["CSCD"]
  },
  {
    id: "pub-2024-5",
    title: "Thinning vs. pruning: impacts on sap flow density and water use efficiency in young Populus tomentosa plantations in Northern China",
    authors: "Liu Y, Liu Y, Qi S, Fan Z, Xue Y, Tang Q, Liu Z, Zheng X, Wu C, Xi B, Duan J*",
    journal: "Forests",
    year: 2024,
    doi: "10.3390/f15030563",
    tags: ["SCI", "Q2"]
  },
  {
    id: "pub-2024-6",
    title: "Robust hydraulic traits correlation in woody species despite large trait variation along natural and experimental environmental gradients",
    authors: "Huang R, Wang Y, Duan J, Xi B, Yang J, Li X, Feng J, Choat B, Tissue DT",
    journal: "Functional Ecology",
    year: 2024,
    doi: "10.1111/1365-2435.14591",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2024-7",
    title: "New dielectric-based smart sensor with multi-probe arrays for in-vivo monitoring of trunk water content distribution of a tree in a poplar stand",
    authors: "Cheng X, Wu X, Zhu Y, Zhao Y, Xi B, Yan X, de Oliveira RF, Cheng Q*",
    journal: "Computers and Electronics in Agriculture",
    year: 2024,
    doi: "10.1016/j.compag.2024.109585",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2024-8",
    title: "改进UNet-VAE网络的土壤多类型孔隙三维分割方法",
    authors: "韩巧玲, 宋美慧, 席本野, 赵玥*, 赵燕东",
    journal: "农业工程学报",
    year: 2024,
    tags: ["EI"]
  },
  {
    id: "pub-2024-9",
    title: "几种量化植物水分调节策略的方法对比——以毛白杨为例",
    authors: "王傲宇, 郭有正, 邓坦, 刘洋, 邸楠, 段劼, 李熙萌*, 席本野",
    journal: "林业科学",
    year: 2024,
    tags: ["EI"]
  },
  {
    id: "pub-2024-10",
    title: "树木夜间液流组分划分方法比较——以毛白杨为例",
    authors: "杨尚锦, 范云翔, 韩巧玲, 赵玥, 邸楠*, 席本野",
    journal: "植物生态学报",
    year: 2024,
    tags: ["CSCD"]
  },
  {
    id: "pub-2023-1",
    title: "Evaporation-driven internal hydraulic redistribution alleviates root drought stress: mechanisms and modeling",
    authors: "Liu Y, Nadezhdina N, Hu W, Clothier B, Li X, Duan J, Xi B*",
    journal: "Plant Physiology",
    year: 2023,
    doi: "10.1093/plphys/kiad364",
    highlight: true,
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2023-2",
    title: "Effects of stand age and structure on root distribution and root water uptake in fast-growing poplar plantations",
    authors: "Zhu W, Zhou O, Sun Y, Li X, Yilihamu G, Wang Y, Di N, Li D, Fu J, Xi B*, Jia L*",
    journal: "Journal of Hydrology",
    year: 2023,
    doi: "10.1016/j.jhydrol.2022.128831",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2023-3",
    title: "Plant hydraulics provide guidance for irrigation management in mature poplar plantation",
    authors: "Guo Y, Di N, Liu Y, Tan J, Zhang S, Yu W, Gao G, Duan J, Xi B*, Li X*",
    journal: "Agricultural Water Management",
    year: 2023,
    doi: "10.1016/j.agwat.2022.108029",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2023-4",
    title: "Response of fine-root traits of Populus tomentosa to drought in shallow and deep soil",
    authors: "Tan J, Yu W, Liu Y, Guo Y, Liu N, Fu H, Di N, Duan J, Li X, Xi B*",
    journal: "Forests",
    year: 2023,
    doi: "10.3390/f14050951",
    tags: ["SCI", "Q2"]
  },
  {
    id: "pub-2023-5",
    title: "Response mechanism of growth and gypenosides content for Gynostemma longipes cultivated at two altitude habitats to fine root morphological characteristics",
    authors: "Li D, Li G, Xi B, Gan J, Wen D, Cao F, Suo F, Li J, Ma B, Guo B*",
    journal: "Frontiers in Plant Science",
    year: 2023,
    doi: "10.3389/fpls.2023.1143745",
    tags: ["SCI", "Q2 TOP"]
  },
  {
    id: "pub-2023-6",
    title: "辽东山区不同坡向长白落叶松人工林树冠特征与林木生长关系",
    authors: "和璐璐, 张萱, 章毓文, 王晓霞, 刘亚栋, 刘岩, 范子莹, 何远洋, 席本野, 段劼*",
    journal: "植物生态学报",
    year: 2023,
    doi: "10.17521/cjpe.2022.0390",
    tags: ["CSCD"]
  },
  {
    id: "pub-2023-7",
    title: "Responses of xylem anatomical and hydraulic traits to irrigation and fertigation in different canopy heights of Populus tomentosa",
    authors: "Zhang Y, Ding C, Liu Y, Li S, Li X, Xi B*, Duan J*",
    journal: "Agricultural Water Management",
    year: 2023,
    doi: "10.1016/j.agwat.2022.108169",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2023-8",
    title: "Long-term variation of the sap flow to tree diameter relation in a temperate poplar forest",
    authors: "Zhao X, Li X, Hu W, Liu J, Di N, Duan J, Li D, Liu Y, Guo Y, Wang A, Deng T, Xi B*",
    journal: "Journal of Hydrology",
    year: 2023,
    doi: "10.1016/j.jhydrol.2023.129189",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2023-9",
    title: "Framework of virtual plantation forest modeling and data analysis for digital twin",
    authors: "Li W, Yang M*, Xi B, Huang Q",
    journal: "Forests",
    year: 2023,
    doi: "10.3390/f14040683",
    tags: ["SCI", "Q2"]
  },
  {
    id: "pub-2023-10",
    title: "毛白杨根系液流与水力再分配特征",
    authors: "刘洋, 马煦, 邸楠, 曾子航, 付海曼, 李新, 席本野*",
    journal: "植物生态学报",
    year: 2023,
    tags: ["CSCD"]
  },
  {
    id: "pub-2023-11",
    title: "水氮耦合下高密度毛白杨纸浆林树木各器官化学计量特征",
    authors: "王亚飞, 祝维, 杨红青, 周欧, 古丽米热, 刘洋, 段劼, 贾黎明, 席本野",
    journal: "北京林业大学学报",
    year: 2023,
    tags: ["CSCD"]
  },
  {
    id: "pub-2023-12",
    title: "Visualization Simulation of Branch Fractures Based on Internal Structure Reconstruction",
    authors: "Yang M*, Zhang Y, Xi B",
    journal: "Forests",
    year: 2023,
    doi: "10.3390/f14071020",
    tags: ["SCI", "Q2"]
  },
  {
    id: "pub-2023-13",
    title: "Variations of deep water uptake and water use efficiency indicated divergence in tree growth stability",
    authors: "Li Y, Huang Y, Li X, Huo X, Li X, Xu C, Li Z, Xu C, Xi B, Wu X*",
    journal: "Forest Ecology and Management",
    year: 2023,
    doi: "10.1016/j.foreco.2023.121131",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2023-14",
    title: "灌溉施肥对杨树人工林林木及地力效应研究进展",
    authors: "王亚飞, 贺曰林, 杨红青, 祝维, 贾黎明*, 席本野",
    journal: "世界林业研究",
    year: 2023,
    tags: ["CSCD"]
  },
  {
    id: "pub-2023-15",
    title: "A method for extracting the tree feature parameters of Populus tomentosa in the leafy stage",
    authors: "Shen X, Huang Q*, Wang X, Xi B",
    journal: "Forests",
    year: 2023,
    doi: "10.3390/f14121757",
    tags: ["SCI", "Q2"]
  },
  {
    id: "pub-2023-16",
    title: "混交林内毛白杨和刺槐根系吸水的动态生态位划分",
    authors: "祝维, 周欧, 孙一鸣, 古丽米热, 王亚飞, 杨红青, 贾黎明*, 席本野",
    journal: "植物生态学报",
    year: 2023,
    tags: ["CSCD"]
  },
  {
    id: "pub-2023-17",
    title: "毛白杨人工林吸收根判定阈值对其空间分布特征的影响",
    authors: "刘媛, 席慧青, 陈姝含, 邸楠*, 席本野",
    journal: "生态学报",
    year: 2023,
    tags: ["CSCD"]
  },
  {
    id: "pub-2023-18",
    title: "短轮伐毛白杨人工林耗水规律及作物系数曲线构建",
    authors: "李玲雅, 邸楠, 刘金强, 赵小宁, 邹松言, 付海曼, 席本野*",
    journal: "林业科学",
    year: 2023,
    tags: ["EI"]
  },
  {
    id: "pub-2023-19",
    title: "Matching root water uptake patterns to fine root and soil water distributions",
    authors: "Zhu W, Zhao D, Di N, Li D, Zhou O, Sun Y, Jia L*, Ding C*, Xi B",
    journal: "Plant and Soil",
    year: 2023,
    doi: "10.1007/s11104-023-06349-0",
    tags: ["SCI", "Q2 TOP"]
  },
  {
    id: "pub-2023-20",
    title: "Herb hydraulics: variation and correlation for traits governing drought tolerance and efficiency of water transport",
    authors: "Huang R, Di N, Xi B, Yang J, Duan J, Li X, Feng J, Choat B, Tissue D",
    journal: "Science of the Total Environment",
    year: 2023,
    doi: "10.1016/j.scitotenv.2023.168095",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2023-21",
    title: "Hydraulics facilitate urban forest establishment by informing tree dynamics under drought",
    authors: "Wang Y, Liao T, Guo L, Liu G*, Xi B",
    journal: "Forests",
    year: 2023,
    doi: "10.3390/f14122415",
    tags: ["SCI", "Q2"]
  },
  {
    id: "pub-2023-22",
    title: "Physics-based modeling and fluttering dynamics process simulation for catkins",
    authors: "Zhang J, Yang M*, Xi B, Duan J, Huang Q, Meng W",
    journal: "Forests",
    year: 2023,
    doi: "10.3390/f14122431",
    tags: ["SCI", "Q2"]
  },
  {
    id: "pub-2023-23",
    title: "Monitoring of phenology and irrigation responses of plantation forests based on vegetation remote sensing",
    authors: "Guan P, Gong Y, Zhu L, Lei G, Zheng Y*, Xi B",
    journal: "Plant and Soil",
    year: 2023,
    doi: "10.1007/s11104-023-06400-0",
    tags: ["SCI", "Q2 TOP"]
  },
  {
    id: "pub-2022-1",
    title: "Soil-moisture-dependent nocturnal water use strategy and its responses to meteorological factors in a seasonal-arid poplar plantation",
    authors: "Di N, Yang S, Liu Y, Fan Y, Duan J, Nadezhdina N, Li X, Xi B*",
    journal: "Agricultural Water Management",
    year: 2022,
    doi: "10.1016/j.agwat.2022.107984",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2022-2",
    title: "Morphology and biomass of fine root are affected by spatial-temporal distribution more than irrigation in a Populus tomentosa plantation",
    authors: "Zou S, Li D, Di N, Liu J, Li L, Wang Y, Xi B*, Coleman M*",
    journal: "Plant and Soil",
    year: 2022,
    doi: "10.1007/s11104-022-05567-4",
    tags: ["SCI", "Q2 TOP"]
  },
  {
    id: "pub-2022-3",
    title: "Is it necessary to apply chemical weed control in short-rotation poplar plantations on deep soil sites?",
    authors: "Fu J, Zou S, Coleman M, Li X, Hu W, Wang A, Zhang P, Zeng Z, Ding C, Xi B*, Di N*",
    journal: "Industrial Crops and Products",
    year: 2022,
    doi: "10.1016/j.indcrop.2022.115025",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2022-4",
    title: "Variations of water balance components and carbon sink in poplar plantations with differing water inputs over a whole rotation: implications for sustainable forest management under climate change",
    authors: "Liu J, Li D, Fernandez JE, Coleman M, Hu W, Di N, Zou S, Xi B*, Clothier B",
    journal: "Agricultural and Forest Meteorology",
    year: 2022,
    doi: "10.1016/j.agrformet.2022.108958",
    highlight: true,
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2022-5",
    title: "Lack of phenotypic plasticity in leaf hydraulics for 10 woody species common to urban forests of North China",
    authors: "Han H, Xi B, Wang Y, Feng J, Li X, Tissue D",
    journal: "Tree Physiology",
    year: 2022,
    doi: "10.1093/treephys/tpac003",
    tags: ["SCI", "Q2 TOP"]
  },
  {
    id: "pub-2022-6",
    title: "Improving representation of drought induced tree mortality in vegetation models with plant hydraulic traits",
    authors: "Li X, Xi B, Wu X, Choat B, Feng J, Tissue D",
    journal: "Frontiers in Plant Science",
    year: 2022,
    doi: "10.3389/fpls.2022.835921",
    tags: ["SCI", "Q2 TOP"]
  },
  {
    id: "pub-2022-7",
    title: "Near-earth remote sensing images used to determine the phenological characteristics of the canopy of Populus tomentosa B301 under three methods of irrigation",
    authors: "Guan P, Zheng Y, Lei G, Liu Y, Zhu L, Guo Y, Wang Y, Xi B",
    journal: "Remote Sensing",
    year: 2022,
    doi: "10.3390/rs14122844",
    tags: ["SCI", "Q2 TOP"]
  },
  {
    id: "pub-2022-8",
    title: "Evaluation of methods to modelling stomatal conductance and its use to assess biomass increase in poplar trees",
    authors: "Li D, Li X, Xi B*, Hernandez-Santana V*",
    journal: "Agricultural Water Management",
    year: 2022,
    doi: "10.1016/j.agwat.2021.107228",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2022-9",
    title: "Effects of forest management and climate factors on the growth of poplar plantations in the North China Plain",
    authors: "Zhu W, Wu X, Jia L*, Xi B*",
    journal: "Forest Ecology and Management",
    year: 2022,
    doi: "10.1016/j.foreco.2022.120444",
    tags: ["SCI", "Q2 TOP"]
  },
  {
    id: "pub-2022-10",
    title: "A deep learning-based method for extracting standing wood feature parameters from terrestrial laser scanning point clouds of artificially planted forest",
    authors: "Shen X, Huang Q*, Wang X, Li J, Xi B",
    journal: "Remote Sensing",
    year: 2022,
    doi: "10.3390/rs14153842",
    tags: ["SCI", "Q2 TOP"]
  },
  {
    id: "pub-2022-11",
    title: "2年生毛白杨细根生长、分布及形态特征对滴灌水氮耦合的响应",
    authors: "贺曰林, 李广德, 席本野, 戴腾飞, 贾黎明",
    journal: "北京林业大学学报",
    year: 2022,
    tags: ["CSCD"]
  },
  {
    id: "pub-2022-12",
    title: "毛白杨夜间液流及茎干水分运动时空动态及其环境影响因子",
    authors: "范云翔, 邸楠*, 刘洋, 章毓文, 段劼, 李新, 王海红, 席本野",
    journal: "植物生态学报",
    year: 2022,
    tags: ["CSCD"]
  },
  {
    id: "pub-2022-13",
    title: "Granier原始公式计算树干液流速率的适用性分析——以毛白杨为例",
    authors: "赵小宁, 田晓楠, 李新, 李广德, 郭有正, 贾黎明, 段劼, 席本野*",
    journal: "植物生态学报",
    year: 2022,
    tags: ["CSCD"]
  },
  {
    id: "pub-2021-1",
    title: "Characteristics of airborne particles retained on conifer needles across China in winter and preliminary evaluation of the capacity of trees in haze mitigation",
    authors: "Cao Z*, Wu X, Wang T, Zhao Y, Zhao Y, Wang D, Chang Y, Wei Y, Yan G, Fan Y, Yue C, Duan J, Xi B*",
    journal: "Science of the Total Environment",
    year: 2021,
    doi: "10.1016/j.scitotenv.2021.150704",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2021-2",
    title: "Irrigation management in poplar plantations",
    authors: "Xi B*, Clothier B, Coleman M, Duan J, Hu W, Di N, Liu Y, Fu J, Li J, Jia L*, Fernandez JE",
    journal: "Forest Ecology and Management",
    year: 2021,
    doi: "10.1016/j.foreco.2021.119330",
    highlight: true,
    tags: ["SCI", "Q2 TOP"]
  },
  {
    id: "pub-2021-3",
    title: "Understanding the relationship between biomass production and water use of Populus tomentosa trees throughout an entire short-rotation",
    authors: "Li D, Liu J, Verhoef A, Xi B*, Hernandez-Santana V",
    journal: "Agricultural Water Management",
    year: 2021,
    doi: "10.1016/j.agwat.2020.106710",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2021-4",
    title: "A new facet of hydraulic redistribution driven by transpiration - A case study from a Populus tomentosa plantation with a deep ground-water table",
    authors: "Liu Y, Nadezhdina N, Di N, Ma X, Xi B*, Clothier B*",
    journal: "Plant Physiology",
    year: 2021,
    doi: "10.1093/plphys/kiab036",
    highlight: true,
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2021-5",
    title: "The retention characteristics for water-soluble and water-insoluble particulate matter of five tree species along an air pollution gradient in Beijing, China",
    authors: "Yue C, Cui K, Duan J, Yan P, Rodriguez C, Fu H, Deng T, Zhang S, Liu J, Guo Z, Xi B*, Cao Z*",
    journal: "Science of the Total Environment",
    year: 2021,
    doi: "10.1016/j.scitotenv.2021.145497",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2021-6",
    title: "Influence of drip irrigation, nitrogen fertigation, and precipitation on soil water and nitrogen distribution, tree seasonal growth and nitrogen uptake in young triploid poplar (Populus tomentosa) plantations",
    authors: "He Y, Xi B, Li G, Wang Y, Jia L, Zhao D",
    journal: "Agricultural Water Management",
    year: 2021,
    doi: "10.1016/j.agwat.2020.106460",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2021-7",
    title: "The optimal tensiometer installation position for scheduling border irrigation in Populus tomentosa plantations",
    authors: "Jiao M, Yang W, Hu W, Clothier B, Zou S, Li D, Di N, Liu J, Liu Y, Duan J*, Xi B*",
    journal: "Agricultural Water Management",
    year: 2021,
    doi: "10.1016/j.agwat.2021.106922",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2021-8",
    title: "Global distribution of soapberries (Sapindus L.) habitats under current and future climate scenarios",
    authors: "Liu J, Wang L, Sun C, Xi B, Li D, Chen Z, He Q, Weng X, Jia L*",
    journal: "Scientific Reports",
    year: 2021,
    tags: ["SCI", "Q3"]
  },
  {
    id: "pub-2021-9",
    title: "Plantation Model of Soapberry (Sapindus mukorossi Gaertn.) in Southeast China in Relation to Environmental Impact Effect Based on a Life Cycle Assessment",
    authors: "Liu S, Liu J, Gao Y, Xi B, Chen Z, Chang S, Gao S, Zhao G, Weng X, Jia L*",
    journal: "BioEnergy Research",
    year: 2021,
    doi: "10.1007/s12155-021-10312-1",
    tags: ["SCI", "Q3"]
  },
  {
    id: "pub-2021-10",
    title: "Fine root plasticity of young Populus tomentosa plantations under drip irrigation and nitrogen fertigation in the North China Plain",
    authors: "He Y, Li G, Xi B, Zhao H, Jia L*",
    journal: "Agricultural Water Management",
    year: 2021,
    doi: "10.1016/j.agwat.2021.107341",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2021-11",
    title: "叶片大气颗粒物滞纳能力评估方法的定量对比",
    authors: "岳晨, 李广德, 席本野*, 曹治国",
    journal: "环境科学",
    year: 2021,
    tags: ["EI"]
  },
  {
    id: "pub-2021-12",
    title: "树干液流及其主要影响因子对摘芽强度的响应",
    authors: "李广德, 张亚雄, 邓坦, 李豆豆, 刘金强, 贾黎明, 席本野*",
    journal: "农业工程学报",
    year: 2021,
    tags: ["EI"]
  },
  {
    id: "pub-2021-13",
    title: "三倍体毛白杨分枝格局对不同土壤供水水平的响应",
    authors: "张亚雄, 王烨*, 李广德, 李豆豆, 贺曰林, 席本野, 孙丽娟",
    journal: "林业科学",
    year: 2021,
    tags: ["EI"]
  },
  {
    id: "pub-2021-14",
    title: "三倍体毛白杨无性系B301幼树树冠结构特征研究",
    authors: "李广德, 张亚雄, 付海曼, 邓坦, 李豆豆, 岳宗伟, 刘金强, 王烨*, 席本野",
    journal: "西北林学院学报",
    year: 2021,
    tags: ["CSCD"]
  },
  {
    id: "pub-2021-15",
    title: "三倍体毛白杨-小麦复合系统细根分布及形态特征研究",
    authors: "邹松言, 苏曼琳, 王烨*, 席本野",
    journal: "北京林业大学学报",
    year: 2021,
    tags: ["CSCD"]
  },
  {
    id: "pub-2021-16",
    title: "不同灌溉条件下杨树人工林蒸腾过程及环境响应",
    authors: "赵文芹, 席本野, 刘金强, 刘洋, 邹松言, 宋午椰, 陈立欣*",
    journal: "植物生态学报",
    year: 2021,
    tags: ["CSCD"]
  },
  {
    id: "pub-2020-1",
    title: "Sample size estimation for achieving the desired uncertainty for estimates of tree fine root trait parameters",
    authors: "Xi B, Di N, Bloomberg M, Moltchanova E*",
    journal: "Trees-Structure and Function",
    year: 2020,
    doi: "10.1007/s00468-020-02032-4",
    tags: ["SCI", "Q3"]
  },
  {
    id: "pub-2020-2",
    title: "Effects of drip irrigation and nitrogen fertigation on stand growth and biomass allocation in young triploid Populus tomentosa plantations",
    authors: "He Y, Xi B, Bloomberg M, Jia L, Zhao D",
    journal: "Forest Ecology and Management",
    year: 2020,
    doi: "10.1016/j.foreco.2020.117937",
    tags: ["SCI", "Q2 TOP"]
  },
  {
    id: "pub-2020-3",
    title: "Tree growth patterns and diagnosis of water status based on trunk diameter fluctuations in fast-growing Populus tomentosa plantations",
    authors: "Li D, Fernandez JE, Li X, Xi B*, Jia L, Hernandez-Santana V",
    journal: "Agricultural Water Management",
    year: 2020,
    doi: "10.1016/j.agwat.2020.106348",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2020-4",
    title: "降雨和灌溉影响下毛白杨叶片的颗粒物滞纳特征变化及其生理特性响应规律",
    authors: "马煦, 曹治国, 岳晨, 金楚晗, 刘俊, 刘洋, 刘金强, 段劼, 修桂芳, 席本野*",
    journal: "林业科学",
    year: 2020,
    tags: ["EI"]
  },
  {
    id: "pub-2020-5",
    title: "毛白杨茎干不同方位夜间液流变化规律及其影响因子",
    authors: "赵飞飞, 马煦, 邸楠, 王烨, 刘洋, 李广德, 贾黎明, 席本野*",
    journal: "植物生态学报",
    year: 2020,
    tags: ["CSCD"]
  },
  {
    id: "pub-2020-6",
    title: "沟灌水氮耦合对毛白杨林木生长及水氮吸收利用的影响",
    authors: "于景麟, 刘峰, 贺曰林, 祝维, 席本野, 贾黎明",
    journal: "应用生态学报",
    year: 2020,
    tags: ["CSCD"]
  },
  {
    id: "pub-2020-7",
    title: "水肥耦合对毛白杨林分土壤氮、细根分布及生物量的影响",
    authors: "刘峰, 席本野, 戴腾飞等",
    journal: "北京林业大学学报",
    year: 2020,
    tags: ["CSCD"]
  },
  {
    id: "pub-2019-1",
    title: "Modeling soil evaporation and the response of the crop coefficient to leaf area index in mature Populus tomentosa plantations growing under different soil water availabilities",
    authors: "Di N, Wang Y, Clothier B, Liu Y, Jia L, Xi B*, Shi H",
    journal: "Agricultural and Forest Meteorology",
    year: 2019,
    doi: "10.1016/j.agrformet.2018.12.007",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2019-2",
    title: "Where to monitor the soil water potential for scheduling drip irrigation in Populus tomentosa plantations located on the North China Plain",
    authors: "Yang T, Li D, Clothier B, Wang Y, Duan J, Di N, Li G, Li X, Jia L, Xi B*, Hu W*",
    journal: "Forest Ecology and Management",
    year: 2019,
    doi: "10.1016/j.foreco.2019.01.036",
    tags: ["SCI", "Q2 TOP"]
  },
  {
    id: "pub-2019-3",
    title: "Diurnal and nocturnal transpiration behaviors and their responses to groundwater-table fluctuations and meteorological factors in a mature Populus tomentosa plantation",
    authors: "Di N, Xi B, Clothier B, Wang Y, Li G, Jia L*",
    journal: "Forest Ecology and Management",
    year: 2019,
    doi: "10.1016/j.foreco.2019.117570",
    tags: ["SCI", "Q2 TOP"]
  },
  {
    id: "pub-2019-4",
    title: "5种树种叶面水溶性与非水溶性大气颗粒物滞纳特征",
    authors: "刘金强, 曹治国, 郭泽敏, 段劼, 刘欢欢, 闫广轩, 席本野*",
    journal: "应用生态学报",
    year: 2019,
    tags: ["CSCD"]
  },
  {
    id: "pub-2019-5",
    title: "毛白杨细根生长、分布与形态对土壤水分梯度的短期响应特征",
    authors: "邹松言, 李豆豆, 汪金松, 邸楠, 刘金强, 王烨, 李广德, 段劼, 贾黎明, 席本野*",
    journal: "林业科学",
    year: 2019,
    tags: ["EI"]
  },
  {
    id: "pub-2019-6",
    title: "杨树根系形态、分布、动态特征及其吸水特性",
    authors: "席本野",
    journal: "北京林业大学学报",
    year: 2019,
    tags: ["CSCD"]
  },
  {
    id: "pub-2018-1",
    title: "Hydrologic regulation of plant rooting depth: Pay attention to the widespread scenario with intense seasonal groundwater table fluctuation",
    authors: "Xi B, Di N, Liu J, Zhang R, Cao Z",
    journal: "PNAS",
    year: 2018,
    doi: "10.1073/pnas.1803987115",
    highlight: true,
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2018-2",
    title: "A comprehensive investigation of the retention capacity, efficiency and mechanism for atmospheric particulate matter of greening tree leaves in Beijing, China",
    authors: "Liu J, Cao Z, Zou S, Liu H, Hai X, Wang S, Duan J*, Xi B*, Zhang S, Jia Z",
    journal: "Science of the Total Environment",
    year: 2018,
    doi: "10.1016/j.scitotenv.2017.10.314",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2018-3",
    title: "Root system characteristics of plantation-grown Populus tomentosa adapted to seasonal fluctuation in the groundwater table",
    authors: "Di N, Liu Y, Mead DJ, Xie Y, Jia L*, Xi B*",
    journal: "Trees-Structure and Function",
    year: 2018,
    doi: "10.1007/s00468-017-1619-2",
    tags: ["SCI", "Q3"]
  },
  {
    id: "pub-2018-4",
    title: "Leaf phenology variation within canopy and its relationship with transpiration of Populus tomentosa under plantation condition",
    authors: "Wang Y, Li G, Di N, Clothier B, Duan J, Li D, Jia L, Xi B*, Ma F",
    journal: "Forests",
    year: 2018,
    doi: "10.3390/f9100603",
    tags: ["SCI", "Q2"]
  },
  {
    id: "pub-2018-5",
    title: "Methodology for assessing the air purification abilities of tree species quantitatively and accurately",
    authors: "Liu J, Zhang R, Liu H, Duan J, Kang J, Guo Z, Xi B*, Cao Z*",
    journal: "JOVE",
    year: 2018,
    doi: "10.3791/58026",
    tags: ["SCI", "Q4"]
  },
  {
    id: "pub-2018-6",
    title: "Preliminary assessment on exposure of four typical populations to potentially toxic metals by means of skinwipes under the influence of haze pollution",
    authors: "Cao Z, Wang M, Chen Q, Zhang Y, Dong W, Yang T, Yan G, Zhang X, Pi Y, Xi B*, Bu Q*",
    journal: "Science of the Total Environment",
    year: 2018,
    doi: "10.1016/j.scitotenv.2017.09.083",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2018-7",
    title: "Genetic structure and biogeographic divergence among Sapindus species: An inter-simple sequence repeat-based study of germplasms in China",
    authors: "Sun C, Wang L, Liu J, Zhao G, Gao S, Xi B, Duan J, Weng X, Jia L*",
    journal: "Industrial Crops and Products",
    year: 2018,
    doi: "10.1016/j.indcrop.2018.03.007",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2018-8",
    title: "Genetic diversity and association analyses of fruit traits with microsatellite ISSRs in Sapindus",
    authors: "Sun C, Jia L, Xi B, Liu J, Wang L, Weng X",
    journal: "Journal of Forestry Research",
    year: 2018,
    doi: "10.1007/s11676-017-0580-7",
    tags: ["SCI", "Q4"]
  },
  {
    id: "pub-2018-9",
    title: "修枝对8年生三倍体毛白杨生长及生理的短期影响",
    authors: "李广德, 张亚雄, 时海香, 王斐, 贾黎明, 席本野*",
    journal: "中南林业科技大学学报",
    year: 2018,
    tags: ["CSCD"]
  },
  {
    id: "pub-2018-10",
    title: "道路灰尘中重金属的污染特征及其与道路等级的关系",
    authors: "沈墨海, 董文静, 王梦蕾, 杨帅, 唐连峰, 任浩, 吴培培, 孙丽芳, 王世华, 曹治国*, 席本野*",
    journal: "环境化学",
    year: 2018,
    tags: ["CSCD"]
  },
  {
    id: "pub-2018-11",
    title: "宽窄行栽植下毛白杨不同方位树干液流的差异",
    authors: "刘洋, 王烨, 邸楠, 邓坦, 王斐, 于召斌, 席本野*, 李广德, 贾黎明",
    journal: "中南林业科技大学学报",
    year: 2018,
    tags: ["CSCD"]
  },
  {
    id: "pub-2018-12",
    title: "树木深层土壤水吸收利用特征与机制：对人工林培育的启示",
    authors: "席本野*, 邸楠, 贾黎明, 刘金强, 李豆豆, 王烨, 李广德, 张瑞娜, 曹治国",
    journal: "植物生态学报",
    year: 2018,
    tags: ["CSCD"]
  },
  {
    id: "pub-2018-13",
    title: "新乡市冬春季PM2.5中水溶性离子及重金属的污染特征及源解析",
    authors: "赵小宁, 席冬冬, 席本野等",
    journal: "环境科学学报",
    year: 2018,
    tags: ["CSCD"]
  },
  {
    id: "pub-2018-14",
    title: "地表滴灌水氮耦合对毛白杨幼林生长及土壤水氮分布的影响",
    authors: "贺曰林, 王烨, 张宏锦, 席本野, 戴腾飞, 李豆豆, 扈明媛, 贾黎明",
    journal: "农业工程学报",
    year: 2018,
    tags: ["EI"]
  },
  {
    id: "pub-2018-15",
    title: "毛白杨叶片膨压变化规律及其对气象因子的响应",
    authors: "李豆豆, 席本野, 贺曰林, 贾黎明",
    journal: "植物生态学报",
    year: 2018,
    tags: ["CSCD"]
  },
  {
    id: "pub-2018-16",
    title: "砂壤土下滴灌毛白杨林地土壤水分运移规律与模拟",
    authors: "李豆豆, 席本野, 贾黎明, 贺曰林, 张亚雄, 刘龙龙",
    journal: "林业科学",
    year: 2018,
    tags: ["EI"]
  },
  {
    id: "pub-2018-17",
    title: "道路绿地对PM2.5等颗粒物的作用效果及影响机制",
    authors: "丁文, 贾忠奎, 席本野, 施侃侃, 施小灯",
    journal: "福建农林大学学报(自然科学版)",
    year: 2018,
    tags: ["CSCD"]
  },
  {
    id: "pub-2017-1",
    title: "Modeling stand water use response to soil water availability and groundwater level for a mature Populus tomentosa plantation located on the North China Plain",
    authors: "Xi B, Di N, Wang Y, Duan J, Jia L",
    journal: "Forest Ecology and Management",
    year: 2017,
    doi: "10.1016/j.foreco.2017.01.025",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2017-2",
    title: "滴灌施肥下施氮量和施氮频率对毛白杨生物量及氮吸收的影响",
    authors: "席本野, 王烨, 贾黎明",
    journal: "林业科学",
    year: 2017,
    tags: ["EI"]
  },
  {
    id: "pub-2017-3",
    title: "Natural variation in fatty acid composition of Sapindus spp. Seed oils",
    authors: "Sun C, Jia L, Xi B, Wang L, Weng X",
    journal: "Industrial Crops and Products",
    year: 2017,
    doi: "10.1016/j.indcrop.2017.01.040",
    tags: ["SCI", "Q1 TOP"]
  },
  {
    id: "pub-2016-1",
    title: "Modeling growth response to soil water availability simulated by HYDRUS for a mature triploid Populus tomentosa plantation located on the North China Plain",
    authors: "Xi B, Bloomberg M, Watt M, Wang Y, Jia L",
    journal: "Agricultural Water Management",
    year: 2016,
    doi: "10.1016/j.agwat.2016.06.017",
    tags: ["SCI", "Q2"]
  },
  {
    id: "pub-2016-2",
    title: "基于超声清洗的植物叶片吸滞大气颗粒物定量评估研究——以银杏为例",
    authors: "刘欢欢, 曹治国, 贾黎明, 席本野*",
    journal: "林业科学",
    year: 2016,
    tags: ["EI"]
  },
  {
    id: "pub-2016-3",
    title: "基于超声清洗的树木叶面颗粒物粒径分布与吸滞效率研究——以银杏和油松为例",
    authors: "刘金强, 曹治国, 刘欢欢, 张少伟, 贾忠奎, 席本野*",
    journal: "植物生态学报",
    year: 2016,
    tags: ["CSCD"]
  },
  {
    id: "pub-2016-4",
    title: "冬季若干典型城市大气污染模式及跨区域传输",
    authors: "曹治国, 沈墨海, 李田田, 席本野*",
    journal: "环境科学与技术",
    year: 2016,
    tags: ["CSCD"]
  },
  {
    id: "pub-2016-5",
    title: "基于热扩散技术的三倍体毛白杨单木及林分蒸腾耗水研究",
    authors: "李广德, 富丰珍, 席本野, 王烨, 贾黎明",
    journal: "生态学报",
    year: 2016,
    tags: ["CSCD"]
  },
  {
    id: "pub-2015-1",
    title: "Response of diameter growth, biomass allocation and N uptake to N fertigation in a triploid Populus tomentosa plantation in the North China Plain: Ontogenetic shift does not exclude plasticity",
    authors: "Wang Y, Xi B et al.",
    journal: "European Journal of Forest Research",
    year: 2015,
    doi: "10.1007/s10342-015-0898-0",
    tags: ["SCI", "Q2"]
  },
  {
    id: "pub-2015-2",
    title: "Response of sap flow to flooding in plantations of irrigated and non-irrigated triploid poplar",
    authors: "Yan X, Xi B et al.",
    journal: "Journal of Forestry Research",
    year: 2015,
    doi: "10.1007/s11676-015-0068-3",
    tags: ["SCI", "Q4"]
  },
  {
    id: "pub-2015-3",
    title: "施肥方式和施氮量对欧美108杨人工林土壤氮素垂向运移的影响",
    authors: "戴腾飞, 席本野等",
    journal: "应用生态学报",
    year: 2015,
    tags: ["CSCD"]
  },
  {
    id: "pub-2015-4",
    title: "Integrated evaluation and scenarios simulation for forest ecological security of Beijing based on system dynamics model",
    authors: "Li F, Lu S, Sun Y, Li X, Xi B, Liu W",
    journal: "Sustainability",
    year: 2015,
    doi: "10.3390/su71013631",
    tags: ["SCI", "Q4"]
  },
  {
    id: "pub-2014-1",
    title: "The effects of subsurface irrigation at different soil water potential thresholds on the growth and transpiration of Populus tomentosa in the North China Plain",
    authors: "Xi B, Li G et al.",
    journal: "Australian Forestry",
    year: 2014,
    doi: "10.1080/00049158.2014.976987",
    tags: ["SCI", "Q4"]
  },
  {
    id: "pub-2014-2",
    title: "植物叶片吸滞PM2.5等大气颗粒物定量研究方法初探——以毛白杨为例",
    authors: "张志丹, 席本野等",
    journal: "应用生态学报",
    year: 2014,
    tags: ["CSCD"]
  },
  {
    id: "pub-2013-1",
    title: "Characteristics of fine root system and water uptake in a triploid Populus tomentosa plantation in the North China Plain: Implications for irrigation water management",
    authors: "Xi B, Wang Y et al.",
    journal: "Agricultural Water Management",
    year: 2013,
    doi: "10.1016/j.agwat.2012.11.006",
    tags: ["SCI", "Q2"]
  },
  {
    id: "pub-2013-2",
    title: "Optimal coupling combinations among discharge rate, lateral depth and irrigation frequency for subsurface drip-irrigated triploid Populus tomentosa pulp plantation",
    authors: "Xi B, Wang P et al.",
    journal: "Life Science Journal",
    year: 2013,
    tags: ["SCI"]
  },
  {
    id: "pub-2013-3",
    title: "宽窄行栽植下三倍体毛白杨根系生物量分布及其对土壤养分因子的响应",
    authors: "邸楠, 席本野等",
    journal: "植物生态学报",
    year: 2013,
    tags: ["CSCD"]
  },
  {
    id: "pub-2013-4",
    title: "造纸废水灌溉对毛白杨苗木生长及养分状况的影响",
    authors: "王烨, 席本野等",
    journal: "生态学报",
    year: 2013,
    tags: ["CSCD"]
  },
  {
    id: "pub-2013-5",
    title: "基于树干直径变化的树体水分亏缺诊断指标研究进展",
    authors: "高园园, 贾黎明, 席本野, 黄祥丰, 刘诗琦, 王烨",
    journal: "世界林业研究",
    year: 2013,
    tags: ["CSCD"]
  },
  {
    id: "pub-2013-6",
    title: "三倍体毛白杨人工林浅层土壤细根对地下滴灌不同水分处理的响应",
    authors: "张龙宁, 向地奎, 席本野, 贾黎明",
    journal: "东北林业大学学报",
    year: 2013,
    tags: ["CSCD"]
  },
  {
    id: "pub-2013-7",
    title: "间作苜蓿对毛白杨纸浆林生长和地力的影响",
    authors: "黄祥丰, 向地奎, 贾黎明, 高园园, 席本野, 王烨",
    journal: "南京林业大学学报(自然科学版)",
    year: 2013,
    tags: ["CSCD"]
  },
  {
    id: "pub-2013-8",
    title: "充分灌溉下毛白杨树干直径变化对气象因子的响应",
    authors: "高园园, 贾黎明, 黄祥丰, 席本野",
    journal: "西北林学院学报",
    year: 2013,
    tags: ["CSCD"]
  },
  {
    id: "pub-2012-1",
    title: "地下滴灌下土壤水势对毛白杨纸浆林生长及生理特性的影响",
    authors: "席本野, 王烨等",
    journal: "生态学报",
    year: 2012,
    tags: ["CSCD"]
  },
  {
    id: "pub-2011-1",
    title: "宽窄行栽植模式下三倍体毛白杨根系分布特征及其与根系吸水的关系",
    authors: "席本野, 王烨等",
    journal: "生态学报",
    year: 2011,
    tags: ["CSCD"]
  },
  {
    id: "pub-2011-2",
    title: "地下滴灌条件下三倍体毛白杨根区土壤水分动态模拟",
    authors: "席本野, 贾黎明等",
    journal: "应用生态学报",
    year: 2011,
    tags: ["CSCD"]
  },
  {
    id: "pub-2010-1",
    title: "宽窄行栽植模式下三倍体毛白杨吸水根系的空间分布与模拟",
    authors: "席本野, 贾黎明等",
    journal: "浙江林学院学报",
    year: 2010,
    tags: ["CSCD"]
  },
  {
    id: "pub-2010-2",
    title: "三倍体毛白杨不同方位树干边材液流特征研究",
    authors: "李广德, 贾黎明, 富丰珍, 席本野, 王烨",
    journal: "西北植物学报",
    year: 2010,
    tags: ["CSCD"]
  },
  {
    id: "pub-2009-1",
    title: "农林业地下滴灌土壤水分运动数值模拟研究进展",
    authors: "席本野, 贾黎明等",
    journal: "西北林学院学报",
    year: 2009,
    tags: ["CSCD"]
  },
  {
    id: "pub-2009-2",
    title: "我国速生纸浆林经营管理研究概况",
    authors: "李广德, 贾黎明, 宋曰钦, 王烨, 席本野",
    journal: "中华纸业",
    year: 2009
  },
  {
    id: "pub-2026-2",
    title: "Spatial variation of sap flow in Populus tomentosa: water-regulated radial mechanisms and azimuthal pattern estimation errors",
    authors: "Zhao X, Wang K, Li X, Li X, Clothier B*, Xi B*",
    journal: "Agricultural and Forest Meteorology",
    year: 2026,
    tags: ["Under Review"]
  },
  {
    id: "pub-2026-3",
    title: "Long-term water supplementation alters organ-level nutrient allocation and stoichiometric balance in a fast-growing plantation forest",
    authors: "Wang K, Wang Y, Coleman M, Zhao D, Ji Z, Ding C, Wang Y, Xi B*, Li X*",
    journal: "Agricultural Water Management",
    year: 2026,
    tags: ["Under Review"]
  },
  {
    id: "pub-2026-4",
    title: "Dual compensatory mechanisms improve root water uptake modeling and reveal deep water utilization in forest trees",
    authors: "Liu Y, Xi B*",
    journal: "Plant, Cell & Environment",
    year: 2026,
    tags: ["Under Review"]
  },
  {
    id: "pub-2026-5",
    title: "Definition of maximum temperature difference in sap flow measurements with continuous linear heating: Part I",
    authors: "Nadezhdina N, Xi B*",
    journal: "Agricultural and Forest Meteorology",
    year: 2026,
    tags: ["Under Review"]
  },
  {
    id: "pub-2026-6",
    title: "Definition of maximum temperature difference in sap flow measurements with continuous linear heating: Part II",
    authors: "Nadezhdina N, Liu Y, Xi B*",
    journal: "Agricultural and Forest Meteorology",
    year: 2026,
    tags: ["Under Review"]
  },
  {
    id: "pub-2026-7",
    title: "Limited effects of physiological adjustments in facilitating drought and heat resistance under reduced precipitation across improved poplar varieties",
    authors: "Sun J, Yan J, Miao T, Huang R, Kong X, Yang W, Di N, Yang J, Xi B*, Li X, Tissue D",
    journal: "Tree Physiology",
    year: 2026,
    tags: ["Under Review"]
  },
  {
    id: "pub-2026-8",
    title: "Physiological tolerance to heat and drought are decoupled across common woody urban greening species in north China",
    authors: "Sun J, Huang R, Zhang Z, Yang Y, Luo R, Yang J, Xi B, Li X, Tissue D",
    journal: "Physiologia Plantarum",
    year: 2026,
    tags: ["Under Review"]
  },
  {
    id: "pub-2026-9",
    title: "Effect of Initial Spacing and Thinning Practices on Timber Quality of Broadleaf and Coniferous Species: A Weighted Meta-Analysis",
    authors: "Hagumubuzima F, Clothier B, Coleman M, Xu C, Hussain S, Xi B*",
    journal: "Forest Ecosystems",
    year: 2026,
    tags: ["Under Review"]
  },
  {
    id: "pub-2026-10",
    title: "Deep soil desiccation and poplar plantation responses on the North China Plain: nonlinear dynamics and thresholds",
    authors: "Yang W, Yu W, Wang K, Fan Y, Deepagoda C, Hu W, Clothier B, Xi B*",
    journal: "New Phytologist",
    year: 2026,
    tags: ["Under Review"]
  },
  {
    id: "pub-2026-11",
    title: "Divergent growth and water-use strategies of mature poplar plantations in response to repeated heatwaves across North China",
    authors: "Kong X, Wang A, Duan J, Hao G, Xi B*, Li X*",
    journal: "Agricultural and Forest Meteorology",
    year: 2026,
    tags: ["Under Review"]
  },
  {
    id: "pub-2026-12",
    title: "Impact of Planting Density and Pruning on Water Acquisition in Poplar-Wheat Agroforestry",
    authors: "Liu Z, Zhang Y, Liu Z, Wang X, Liu Y, Wu C, Li X, Xi B, Duan J",
    journal: "Agricultural Water Management",
    year: 2026,
    tags: ["Under Review"]
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
  { id: "g1", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_0165_cb8f1eb2.JPG", caption: { en: "Field observation and data collection", zh: "野外观测与数据采集" }, category: "fieldwork" },
  { id: "g2", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_0181_eab21028.JPG", caption: { en: "Experimental site measurement", zh: "实验样地测量" }, category: "fieldwork" },
  { id: "g3", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_0182_b75e11ca.JPG", caption: { en: "Forest monitoring equipment", zh: "森林监测设备" }, category: "fieldwork" },
  { id: "g4", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_0452_f053901d.JPG", caption: { en: "Plantation field research", zh: "人工林野外调查" }, category: "fieldwork" },
  { id: "g5", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_0523_54fd8122.JPG", caption: { en: "Sap flow sensor installation", zh: "液流传感器安装" }, category: "fieldwork" },
  { id: "g6", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_1057_27813754.JPG", caption: { en: "Soil sampling in the field", zh: "野外土壤取样" }, category: "fieldwork" },
  { id: "g7", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_1072_321251eb.JPG", caption: { en: "Tree measurement and survey", zh: "树木测量与调查" }, category: "fieldwork" },
  { id: "g8", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_1089_487d2da8.JPG", caption: { en: "Weather station maintenance", zh: "气象站维护" }, category: "fieldwork" },
  { id: "g9", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_1090_7b8fead8.JPG", caption: { en: "Root system observation", zh: "根系观测" }, category: "fieldwork" },
  { id: "g10", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_1109_9135040e.JPG", caption: { en: "Canopy measurement", zh: "冠层测量" }, category: "fieldwork" },
  { id: "g11", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_1111_c4aa740d.JPG", caption: { en: "Field experiment setup", zh: "野外实验布设" }, category: "fieldwork" },
  { id: "g12", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_2240_bbb29637.jpeg", caption: { en: "Water potential measurement", zh: "水势测量" }, category: "fieldwork" },
  { id: "g13", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_2252_c1e3ed20.jpeg", caption: { en: "Field observation and data collection", zh: "野外观测与数据采集" }, category: "fieldwork" },
  { id: "g14", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_2402_01d3f352.JPG", caption: { en: "Experimental site measurement", zh: "实验样地测量" }, category: "fieldwork" },
  { id: "g15", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_2403_fbb44afe.JPG", caption: { en: "Forest monitoring equipment", zh: "森林监测设备" }, category: "fieldwork" },
  { id: "g16", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_2608_7ffbfa60.jpeg", caption: { en: "Plantation field research", zh: "人工林野外调查" }, category: "fieldwork" },
  { id: "g17", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_2613_019b9bf9.jpeg", caption: { en: "Sap flow sensor installation", zh: "液流传感器安装" }, category: "fieldwork" },
  { id: "g18", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_2637_bb3f65b2.jpeg", caption: { en: "Soil sampling in the field", zh: "野外土壤取样" }, category: "fieldwork" },
  { id: "g19", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_3035_1b65ff64.jpeg", caption: { en: "Tree measurement and survey", zh: "树木测量与调查" }, category: "fieldwork" },
  { id: "g20", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_3402_6478cf56.JPG", caption: { en: "Weather station maintenance", zh: "气象站维护" }, category: "fieldwork" },
  { id: "g21", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_3431_e4734144.JPG", caption: { en: "Root system observation", zh: "根系观测" }, category: "fieldwork" },
  { id: "g22", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_3440_351e5772.JPG", caption: { en: "Canopy measurement", zh: "冠层测量" }, category: "fieldwork" },
  { id: "g23", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_3641_3cce2b19.jpeg", caption: { en: "Field experiment setup", zh: "野外实验布设" }, category: "fieldwork" },
  { id: "g24", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_3849_76c31d5f.jpeg", caption: { en: "Water potential measurement", zh: "水势测量" }, category: "fieldwork" },
  { id: "g25", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_3870_b8f82cf0.jpeg", caption: { en: "Field observation and data collection", zh: "野外观测与数据采集" }, category: "fieldwork" },
  { id: "g26", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_3871_54925729.jpeg", caption: { en: "Experimental site measurement", zh: "实验样地测量" }, category: "fieldwork" },
  { id: "g27", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_3915_40ce2e29.jpeg", caption: { en: "Forest monitoring equipment", zh: "森林监测设备" }, category: "fieldwork" },
  { id: "g28", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_3923_8a5682ab.jpeg", caption: { en: "Plantation field research", zh: "人工林野外调查" }, category: "fieldwork" },
  { id: "g29", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_3924_f08e787b.jpeg", caption: { en: "Sap flow sensor installation", zh: "液流传感器安装" }, category: "fieldwork" },
  { id: "g30", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_3943_a9bcdd0e.jpeg", caption: { en: "Soil sampling in the field", zh: "野外土壤取样" }, category: "fieldwork" },
  { id: "g31", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_3968_e512fb7e.JPG", caption: { en: "Tree measurement and survey", zh: "树木测量与调查" }, category: "fieldwork" },
  { id: "g32", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_4087_b5ecfbec.jpeg", caption: { en: "Weather station maintenance", zh: "气象站维护" }, category: "fieldwork" },
  { id: "g33", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_4481_9b78c80a.jpeg", caption: { en: "Root system observation", zh: "根系观测" }, category: "fieldwork" },
  { id: "g34", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_4487_b210a8ee.jpeg", caption: { en: "Canopy measurement", zh: "冠层测量" }, category: "fieldwork" },
  { id: "g35", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_4492_f63dd102.jpeg", caption: { en: "Field experiment setup", zh: "野外实验布设" }, category: "fieldwork" },
  { id: "g36", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_5338_63d6f9ab.JPG# Terminal Full Output", caption: { en: "Water potential measurement", zh: "水势测量" }, category: "fieldwork" },
  { id: "g37", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_5477_06d67fd4.JPG", caption: { en: "Field observation and data collection", zh: "野外观测与数据采集" }, category: "fieldwork" },
  { id: "g38", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_5752_ac9d75dd.jpeg", caption: { en: "Experimental site measurement", zh: "实验样地测量" }, category: "fieldwork" },
  { id: "g39", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_6115_83d157cc.JPG", caption: { en: "Forest monitoring equipment", zh: "森林监测设备" }, category: "fieldwork" },
  { id: "g40", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_6127_51a0bc7c.jpeg", caption: { en: "Plantation field research", zh: "人工林野外调查" }, category: "fieldwork" },
  { id: "g41", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_6172_c04aa88b.jpeg", caption: { en: "Sap flow sensor installation", zh: "液流传感器安装" }, category: "fieldwork" },
  { id: "g42", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_6173_c71c7385.jpeg", caption: { en: "Soil sampling in the field", zh: "野外土壤取样" }, category: "fieldwork" },
  { id: "g43", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_6174_d78621a1.jpeg", caption: { en: "Tree measurement and survey", zh: "树木测量与调查" }, category: "fieldwork" },
  { id: "g44", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_6176_7b6fb874.JPG", caption: { en: "Weather station maintenance", zh: "气象站维护" }, category: "fieldwork" },
  { id: "g45", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_6176_4bc6433d.jpeg", caption: { en: "Root system observation", zh: "根系观测" }, category: "fieldwork" },
  { id: "g46", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_6183_b20fcf41.jpeg", caption: { en: "Canopy measurement", zh: "冠层测量" }, category: "fieldwork" },
  { id: "g47", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_6381_e9839faa.JPG", caption: { en: "Field experiment setup", zh: "野外实验布设" }, category: "fieldwork" },
  { id: "g48", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_6390_ec0829cd.JPG", caption: { en: "Water potential measurement", zh: "水势测量" }, category: "fieldwork" },
  { id: "g49", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_6392_c016655d.JPG", caption: { en: "Field observation and data collection", zh: "野外观测与数据采集" }, category: "fieldwork" },
  { id: "g50", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_7302_cb0df52e.jpeg", caption: { en: "Experimental site measurement", zh: "实验样地测量" }, category: "fieldwork" },
  { id: "g51", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_7313_227cc1d9.JPG", caption: { en: "Forest monitoring equipment", zh: "森林监测设备" }, category: "fieldwork" },
  { id: "g52", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_7344_0dbe67a1.jpeg", caption: { en: "Plantation field research", zh: "人工林野外调查" }, category: "fieldwork" },
  { id: "g53", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_7346_b0b910ae.jpeg", caption: { en: "Sap flow sensor installation", zh: "液流传感器安装" }, category: "fieldwork" },
  { id: "g54", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_7347_fd18a4cf.jpeg", caption: { en: "Soil sampling in the field", zh: "野外土壤取样" }, category: "fieldwork" },
  { id: "g55", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_7348_af73cdb7.jpeg", caption: { en: "Tree measurement and survey", zh: "树木测量与调查" }, category: "fieldwork" },
  { id: "g56", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_7490_36da1073.jpeg", caption: { en: "Weather station maintenance", zh: "气象站维护" }, category: "fieldwork" },
  { id: "g57", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_7741_7f7c2503.jpeg", caption: { en: "Root system observation", zh: "根系观测" }, category: "fieldwork" },
  { id: "g58", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_7742_17b0ce45.jpeg", caption: { en: "Canopy measurement", zh: "冠层测量" }, category: "fieldwork" },
  { id: "g59", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_8186_5a838c0e.jpeg", caption: { en: "Field experiment setup", zh: "野外实验布设" }, category: "fieldwork" },
  { id: "g60", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_8803_45cf8be3.JPG", caption: { en: "Water potential measurement", zh: "水势测量" }, category: "fieldwork" },
  { id: "g61", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_8870_966f10e1.jpeg", caption: { en: "Field observation and data collection", zh: "野外观测与数据采集" }, category: "fieldwork" },
  { id: "g62", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_8873_1aeb0407.jpeg", caption: { en: "Experimental site measurement", zh: "实验样地测量" }, category: "fieldwork" },
  { id: "g63", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_8877_a85e7987.jpeg", caption: { en: "Forest monitoring equipment", zh: "森林监测设备" }, category: "fieldwork" },
  { id: "g64", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_8884 2_2691c9bc.jpeg", caption: { en: "Plantation field research", zh: "人工林野外调查" }, category: "fieldwork" },
  { id: "g65", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_8884_e953498f.jpeg", caption: { en: "Sap flow sensor installation", zh: "液流传感器安装" }, category: "fieldwork" },
  { id: "g66", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_9071_155e4c9d.jpeg", caption: { en: "Soil sampling in the field", zh: "野外土壤取样" }, category: "fieldwork" },
  { id: "g67", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_9074_9d94e688.jpeg", caption: { en: "Tree measurement and survey", zh: "树木测量与调查" }, category: "fieldwork" },
  { id: "g68", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_9199_44637dd7.jpeg", caption: { en: "Weather station maintenance", zh: "气象站维护" }, category: "fieldwork" },
  { id: "g69", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_9200_7f19a603.jpeg", caption: { en: "Root system observation", zh: "根系观测" }, category: "fieldwork" },
  { id: "g70", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_9587_79088631.jpeg", caption: { en: "Canopy measurement", zh: "冠层测量" }, category: "fieldwork" },
  { id: "g71", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_9595_dc2528bb.jpeg", caption: { en: "Field experiment setup", zh: "野外实验布设" }, category: "fieldwork" },
  { id: "g72", src: "[01;31mhttps://[md2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_9813_9f8514f0.JPG", caption: { en: "Water potential measurement", zh: "水势测量" }, category: "fieldwork" },
  { id: "g73", src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_5757_6453e52e.jpeg", caption: { en: "Laboratory sample analysis", zh: "实验室样品分析" }, category: "lab" },
  { id: "g74", src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_7536_80c8c1f2.jpeg", caption: { en: "Stable isotope measurement", zh: "稳定同位素测量" }, category: "lab" },
  { id: "g75", src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_3942_7b8347b5.jpeg", caption: { en: "Team outdoor activities", zh: "团队户外活动" }, category: "team" },
  { id: "g76", src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_4080_48b281d5.jpeg", caption: { en: "Team building and bonding", zh: "团队建设" }, category: "team" },
  { id: "g77", src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_6937_39beacf4.jpeg", caption: { en: "Group celebration", zh: "团队庆祝" }, category: "team" },
  { id: "g78", src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_7476_f9ac1216.jpeg", caption: { en: "Team gathering", zh: "团队聚会" }, category: "team" },
  { id: "g79", src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_7497_468354f7.jpeg", caption: { en: "Lab social event", zh: "实验室社交活动" }, category: "team" },
  { id: "g80", src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_7748_ec1ed68f.jpeg", caption: { en: "Team photo", zh: "团队合影" }, category: "team" },
  { id: "g81", src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/IMG_1106_f8f04d90.JPG", caption: { en: "Group outing", zh: "集体出游" }, category: "team" },
];

export { IMAGES };
