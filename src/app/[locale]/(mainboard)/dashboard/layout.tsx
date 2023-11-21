import { DashboardMenu } from "~/components/dashboard-menu";

export default async function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <p>DASHBOARD</p>
      <div>
        <DashboardMenu />
      </div>
      <div className="h-[200px]">{children}</div>
    </div>
  );
}
