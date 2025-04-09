import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  abosayyah,
  abosayyahexpress,
  alsayyah1,
  alsayyah180,
  alsayyah2,
  alsayyah3,
  althamara,
  bayhomes,
  blueb,
  butterfly,
  estekana,
  feddah,
  fullcrircle,
  parkmycar,
  sahalnoom,
  thekeytower,
  branding,
  ContentCreation,
  GraphicDesign,
  MediaProduction,
  SEO,
  SocialMediaManagement,
  WebDevelopment,
  PaidAdvertising
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Who are we?",
    url: "/about",
  },
  {
    id: "1",
    title: "SERVICES",
    url: "/services",
  },
  {
    id: "2",
    title: "Our Clients",
    url: "/our_clients",
  },
  {
    id: "3",
    title: "The Minds behind the Magic",
    url: "/behind_the_magic",
  },
 
 
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];


export const brainwaveServices = [
  "Empower businesses.",
  "Impactful marketing strategies.",
  "Target Audience Engagement",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Content creation",
    text: "Crafting engaging and tailored content that captures your brand’s voice and connects with your audience.",
    status: "done",
    imageUrl: ContentCreation,
    colorful: true,
  },
  {
    id: "1",
    title: "Branding",
    text: "Building a unique identity that makes your business memorable, recognizable, and trusted.",
    status: "progress",
    imageUrl: branding,
  },
  {
    id: "2",
    title: "Graphic design",
    text: "Designing eye-catching visuals that enhance your brand and communicate your message effectively.",
    status: "done",
    imageUrl: GraphicDesign,
  },
  {
    id: "3",
    title: "Photography",
    text: "Producing high-quality images that bring your products, services, and story to life.",
    status: "progress",
    imageUrl: MediaProduction,
  },
  {
    id: "4",
    title: "Videography & video editing",
    text: "Creating dynamic videos that captivate viewers and showcase your brand in motion.",
    status: "progress",
    imageUrl: MediaProduction,
  },
  {
    id: "5",
    title: "SEO",
    text: "Optimizing your website to rank higher on search engines, driving organic traffic and increasing visibility.",
    status: "done",
    imageUrl: SEO,
  },  {
    id: "6",
    title: "Social media management",
    text: "Managing your social platforms with strategy and creativity to grow your audience and engagement.",
    status: "progress",
    imageUrl: SocialMediaManagement,
  },  {
    id: "7",
    title: "Google Ads",
    text: "Running targeted ad campaigns that get your business in front of the right people at the right time.",
    status: "progress",
    imageUrl: PaidAdvertising,
  }
];

export const collabText =
  "We dive deep into understanding your target audience, industry trends, and competitors. By analyzing your market landscape, we ensure we’re building on insights that are directly relevant to your business";

  export const analyzeText =
  "Data-driven insights guide our decisions. We assess everything from campaign performance to customer behavior, to make sure our strategies are grounded in facts.";
  export const monitorText =
  "We continuously track performance and refine efforts along the way. Regular reports keep you updated, highlight key wins, and provide transparency in how we’re progressing.";

export const collabContent = [
  {
    id: "0",
    title: "Research",
    text: collabText,
  },
  {
    id: "1",
    title: "Analyze",
    text: analyzeText
  },
  {
    id: "2",
    title: "Innovate",
  },
  {
    id: "3",
    title: "Monitor and Report",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Research",
    text: "We dive deep into understanding your target audience, industry trends,and competitors. By analyzing your market landscape, we ensure we’re building on insights that are directly relevant to your business.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Analyze",
    text: "Data-driven insights guide our decisions. We assess everything from campaign performance to customer behavior, to make sure our strategies are grounded in facts.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Innovate",
    text: "We bring fresh ideas and creative solutions to the table, constantly looking for new opportunities to enhance your social media presence and stay ahead of trends.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Monitor and Report",
    text: "We continuously track performance and refine efforts along the way. Regular reports keep you updated, highlight key wins, and provide transparency in how we’re progressing.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];


export const companyLogos = [
  { name: "Abosayyah", icon: abosayyah },
  { name: "Butterfly", icon: butterfly },
  { name: "Alsayyah 180", icon: alsayyah180 },
  { name: "Abosayyah Express", icon: abosayyahexpress },
  { name: "Bay Homes", icon: bayhomes },
  { name: "Alsayyah 1", icon: alsayyah1 },
  { name: "The Key Tower", icon: thekeytower },
  { name: "Sahal Noom", icon: sahalnoom },
  { name: "Alsayyah 2", icon: alsayyah2 },
  { name: "Feddah", icon: feddah },
  { name: "Alsayyah 3", icon: alsayyah3 },
  { name: "Full Circle", icon: fullcrircle },
  { name: "Althamara", icon: althamara },
  { name: "Blue B", icon: blueb },
  { name: "Estekana", icon: estekana },
  { name: "Park My Car", icon: parkmycar },
];


export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/planet-01.jpg',
    title: 'BRANDING',
  },
  {
    id: 'world-2',
    imgUrl: '/planet-02.jpg',
    title: 'DIGITAL MARKETING & SOCIAL MEDIA MANAGEMENT',
  },
  {
    id: 'world-3',
    imgUrl: '/planet-03.jpg',
    title: ' SEARCH ENGINE OPTIMIZATION',
  },
  {
    id: 'world-4',
    imgUrl: '/planet-04.jpg',
    title: ' CREATIVE DESIGN',
  },

];

