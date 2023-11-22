import type { Locale } from "~/i18n-config";
import { getDictionary } from "~/lib/dictionary";
import { getServerAuthSession } from "~/server/auth";
import { CreateOrganizationDialog } from "./_components/create-organization-dialog";

type Props = {
  params: { locale: Locale };
};

export default async function DashBoard({ params: { locale } }: Props) {
  const session = await getServerAuthSession();
  const d = await getDictionary(locale);

  return (
    <div className="flex">
      <div>
        <p>Quick Link</p>
        <CreateOrganizationDialog
          dictionary={d.dashboard["create-organization"]}
          id={session!.user.id}
        />
      </div>
    </div>
  );
}
