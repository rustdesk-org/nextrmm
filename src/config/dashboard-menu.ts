import { DashboardMenuConfig } from "~/types";

const dashboardMenuHref: string = "/dashboard";

export const dashboardMenuConfig: DashboardMenuConfig = {
  dashboardMenu: [
    {
      title: "getting-started",
      href: dashboardMenuHref,
    },
    {
      title: "organizations",
      href: dashboardMenuHref + "/organizations",
    },
  ],
};
