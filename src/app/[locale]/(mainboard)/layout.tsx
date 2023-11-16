import { redirect } from "next/navigation";
import { BodyLayout } from "~/components/body-layout";
import { SiteFooter } from "~/components/site-footer";
import { getServerAuthSession } from "~/server/auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  //Check if user is logged in
  const session = await getServerAuthSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <BodyLayout>{children}</BodyLayout>
      <SiteFooter className="border-t" />
    </>
  );
}
