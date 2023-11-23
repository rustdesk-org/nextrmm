import { DashboardMenu } from "./_components/dashboard-menu";

export default async function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <p className="font-bold">Dashboard</p>
      <DashboardMenu />
      {children}
    </div>
  );
}
