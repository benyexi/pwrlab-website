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
