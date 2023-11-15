import { api } from "~/trpc/server";

export default async function Home() {
  return (
    <div className="flex flex-col">
      <p>Hello</p>
    </div>
  );
}
