export type INavChildrenItem = {
  id: number;
  title: string;
  link: string;
  icon?: string; // Optional icon property
};

interface INav {
  id: number;
  title: string;
  link: string;
  icon?: string;
  children?: INavChildrenItem[];
}

interface INAVList {
  id: number;
  title: string;
  link: string;
  icon?: string;
}

export const NAV_LIST: INAVList[] = [
  {
    id: 1,
    title: "about_us",
    link: "/about-us",
  },
  {
    id: 2,
    title: "projects",
    link: "/projects",
  },
];

export const getCurrentNav = (id: number): INAVList | undefined => {
  return NAV_LIST.find((item) => item.id === id);
};

export const FOOTER_LIST: INav[] = [
  {
    id: 1,
    title: "about_us",
    link: "/about-us",
  },
  {
    id: 2,
    title: "projects",
    link: "/projects",
  },
  // {
  //   id: 3,
  //   title: "partners",
  //   link: "/partners",
  // },
  {
    id: 4,
    title: "gallery",
    link: "/gallery",
  },
  // {
  //   id: 5,
  //   title: "contact_us",
  //   link: "/contact-us",
  // },
];
