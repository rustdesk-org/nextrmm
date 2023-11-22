import { Icons } from "~/components/icons";

export enum AuthFormType {
  SignIn,
  Register,
}

export type SiteConfig = {
  name: string;
  description: string;
  links: {
    github: string;
  };
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type HeadNavItem = NavItem;

export type SideNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type SideNavPopoverItem = {
  title: string;
  content: string;
  icon?: keyof typeof Icons;
};

export type ControlBoardConfig = {
  sidebarUpNav: SideNavItem[];
  sidebarDownNav: SideNavPopoverItem[];
};

export type DashboardMenuItem = {
  title: string;
  href: string;
};

export type DashboardMenuConfig = {
  dashboardMenu: DashboardMenuItem[];
};

export type DashboardOrganizationCreateDict = {
  title: string;
  name: string;
  description: string;
  create: string;
  wait: string;
  successToast: string;
  errorToast: string;
};

export type DashboardLocationCreateDict = {
  title: string;
  "organization-name": string;
  "organization-select": string;
  "organization-input-placeholder": string;
  "organization-empty-placeholder": string;
  "organization-fetch-loading": string;
  "organization-fetch-error": string;
  "location-name": string;
  description: string;
  create: string;
  wait: string;
  successToast: string;
  errorToast: string;
};
