import type { Locale } from "~/i18n-config";
import { getDictionary } from "~/lib/dictionary";
import { DashboardMenu } from "./_components/dashboard-menu";

type Props = {
  children: React.ReactNode;
  params: { locale: Locale };
};

export default async function DashBoardLayout({
  children,
  params: { locale },
}: Props) {
  const d = await getDictionary(locale);
  return (
    <div className="flex flex-col">
      <DashboardMenu dict={d.dashboard["menu"]} />
      {children}
    </div>
  );
}
