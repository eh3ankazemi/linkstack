export interface LinkItem {
  href: string;
  icon: string;
  name: string;
  description: string;
  colorClass?: string;
  hoverClass?: string;
  delay: string;
}

let time = 0.1;

export const links: LinkItem[] = [
  {
    href: "https://daramet.com/eh3ankazemi",
    icon: "💸",
    name: "Donate",
    description: "Support my work via daramet.com/eh3ankazemi",
    colorClass: "bg-green-50 border-green-200 text-green-500",
    hoverClass: "hover:border-green-500 group-hover:text-green-700",
    delay: `${time}s`,
  },
  // {
  //   href: "https://github.com/sponsors/",
  //   icon: "❤️",
  //   name: "Sponsor",
  //   description: "Support me on GitHub Sponsors",
  //   colorClass: "bg-white border-gray-100 text-blue-500",
  //   hoverClass: "hover:border-blue-500 group-hover:text-blue-700",
  //   delay: `${time+1.5}s`,
  // },
  {
    href: "https://ehsan-kazemi.ir",
    icon: "🌐",
    name: "Personal Site",
    description: "Visit my main website",
    colorClass: "bg-white border-gray-100 text-blue-500",
    hoverClass: "hover:border-blue-500 group-hover:text-blue-700",
    delay: `${(time += 0.15)}s`,
  },
  {
    href: "https://portfolio.ehsan-kazemi.ir/",
    icon: "🚀",
    name: "Portfolio",
    description:
      "Explore what I did, and what I knew about, and more.",
    colorClass: "bg-white border-gray-100 text-yellow-500",
    hoverClass: "hover:border-yellow-500 group-hover:text-amber-800",
    delay: `${(time += 0.15)}s`,
  },
  {
    href: "https://github.com/eh3ankazemi/",
    icon: "🐙",
    name: "GitHub",
    description: "Open source projects & contributions",
    colorClass: "bg-white border-gray-100 text-purple-600",
    hoverClass: "hover:border-purple-600 group-hover:text-purple-800",
    delay: `${(time += 0.15)}s`,
  },
  {
    href: "https://www.linkedin.com/in/eh3ankazemi",
    icon: "🔗",
    name: "LinkedIn",
    description: "Connect with me professionally",
    colorClass: "bg-white border-gray-100 text-blue-400",
    hoverClass: "hover:border-blue-400 group-hover:text-blue-700",
    delay: `${(time += 0.15)}s`,
  },
  // {
  //   href: "https://wakatime.com/",
  //   icon: "⏰",
  //   name: "WakaTime",
  //   description: "My coding activity stats",
  //   colorClass: "bg-white border-gray-100 text-gray-500",
  //   hoverClass: "hover:border-gray-400 group-hover:text-black",
  //   delay: `${time+=.15}s`
  // },
  // {
  //   href: "https://dribbble.com/",
  //   icon: "🏀",
  //   name: "Dribbble",
  //   description: "My design shots",
  //   colorClass: "bg-white border-gray-100 text-pink-400",
  //   hoverClass: "hover:border-pink-400 group-hover:text-pink-600",
  //   delay: `${time+=.15}s`
  // },
  {
    href: "mailto:eh3ankazemii@gmail.com",
    icon: "✉️",
    name: "Contact Me",
    description: "Get in touch via email",
    colorClass: "bg-white border-gray-100 text-red-400",
    hoverClass: "hover:border-red-400 group-hover:text-red-600",
    delay: `${(time += 0.15)}s`,
  },
  {
    href: "tel:+989212154476",
    icon: "📞",
    name: "Call with Me",
    description: "Get in touch via phone",
    colorClass: "bg-white border-gray-100 text-green-600",
    hoverClass: "hover:border-green-600 group-hover:text-green-800",
    delay: `${(time += 0.15)}s`,
  },
  //   {
  //     href: "https://dly.to/",
  //     icon: "📰",
  //     name: "daily.dev Community",
  // description: "Discover new AI tools, AI resources, and empowering developers with the latest technology updates.",
  //     colorClass: "bg-white border-gray-100 text-indigo-500",
  //     hoverClass: "hover:border-indigo-500 group-hover:text-indigo-700",
  //     delay: `${time+=.15}s`
  //   },
  // {
  //   href: "https://app.daily.dev/",
  //   icon: "🌟",
  //   name: "daily.dev Profile",
  //   description: "My daily.dev developer profile",
  //   colorClass: "bg-white border-gray-100 text-blue-600",
  //   hoverClass: "hover:border-blue-600 group-hover:text-blue-800",
  //   delay:`${time+=.15}s`
  // },
  {
    href: "https://www.instagram.com/eh3ankazemi/",
    icon: "📸",
    name: "Instagram",
    description: "Follow my creator updates",
    colorClass: "bg-white border-gray-100 text-pink-500",
    hoverClass: "hover:border-pink-500 group-hover:text-pink-600",
    delay: `${(time += 0.15)}s`,
  },
  {
    href: "https://x.com/eh3ankazemi",
    icon: "🐦",
    name: "Twitter (X)",
    description: "Follow me for updates",
    colorClass: "bg-white border-gray-100 text-blue-400",
    hoverClass: "hover:border-blue-400 group-hover:text-blue-700",
    delay: `${(time += 0.15)}s`,
  },
  {
    href: "https://www.youtube.com/@eh3ankazemi",
    icon: "📺",
    name: "YouTube",
    description: "Subscribe for videos and updates, it's not active yet",
    colorClass: "bg-white border-gray-100 text-red-500",
    hoverClass: "hover:border-red-500 group-hover:text-red-600",
    delay: `${(time += 0.15)}s`,
  },
];
