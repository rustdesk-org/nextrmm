import { redirect } from "next/navigation";
import { BodyLayout } from "~/components/body-layout";
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
      <BodyLayout user={session.user}>{children}</BodyLayout>
    </>
  );
}
