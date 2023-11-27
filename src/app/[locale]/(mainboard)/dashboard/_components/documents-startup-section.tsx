"use-client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

export function DocumentsStartupSection() {
  return (
    <div>
      <h2 className="my-4 text-xl font-bold">Documents</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4 rounded-lg border p-4 shadow ">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium leading-6">New to NextRMM</h3>
            <Button className="mr-2">See All</Button>
          </div>
          <div className="mt-2">
            <ul className="list-disc space-y-1 pl-5 text-primary">
              <li>
                <Link href="/dashboard">NextRMM Onboarding Guide</Link>
              </li>
              <li>
                <Link href="/dashboard">
                  How to install NextRMM on a Windows device
                </Link>
              </li>
              <li>
                <Link href="/dashboard">
                  Mass deployment of NextRMM installer
                </Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboards</Link>
              </li>
              <li>
                <Link href="/dashboard">Activity Logs</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-4 rounded-lg border p-4 shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium leading-6">
              Core NextRMM Features
            </h3>
            <Button className="mr-2">See All</Button>
          </div>
          <div className="mt-2">
            <ul className="list-disc space-y-1 pl-5 text-primary">
              <li>
                <Link href="/dashboard">NMS: Setup</Link>
              </li>
              <li>
                <Link href="/dashboard">Policies: Patch Management</Link>
              </li>
              <li>
                <Link href="/dashboard">Scheduled Tasks</Link>
              </li>
              <li>
                <Link href="/dashboard">Script Library</Link>
              </li>
              <li>
                <Link href="/dashboard">Search and Grouping</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
