import { BodyLayout } from "~/components/body-layout";
import { SiteFooter } from "~/components/site-footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BodyLayout>{children}</BodyLayout>
      <SiteFooter className="border-t" />
    </>
  );
}
