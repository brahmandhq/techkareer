// app/opportunities/page.tsx
import { BottomBar, Navbar, PostedJobsList } from "@/components/components";
import { db } from '@/lib/db'

async function getOpportunities() {
  const opportunities = await db.opportunity.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return opportunities
}

export default async function PostedJobsListPage() {
  const initialOpportunities = await getOpportunities()

  return (
    <>
      <Navbar>
        <h1 className="text-2xl font-semibold px-4 sm:px-0">Opportunities</h1>
      </Navbar>
      <div className="scrollable-content-wrapper max-sm:h-[80vh] h-[90vh] w-full px-4 sm:px-0">
        <PostedJobsList initialOpportunities={initialOpportunities} />
      </div>
      <BottomBar></BottomBar>
    </>
  );
}