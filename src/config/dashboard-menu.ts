import { DashboardMenuConfig } from "~/types";

const dashboardMenuHref: string = "/dashboard";

export const dashboardMenuConfig: DashboardMenuConfig = {
  dashboardMenu: [
    {
      title: "Getting-started",
      href: dashboardMenuHref,
    },
    {
      title: "Organizations",
      href: dashboardMenuHref + "/organizations",
    },
  ],
};
