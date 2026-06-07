import { notFound } from "next/navigation";

import ClubSidebar from "./ClubSidebar";
import ClubProvider from "./ClubProvider";
import { getClubBySlug } from "../services/clubService";

const Layout = async ({ children, params }) => {
  const { slug } = await params;
  const club = await getClubBySlug(slug);

  if (!club?.slug) notFound();

  return (
    <ClubProvider club={club}>
      <div className="w-full">
        <div className="mx-auto w-full max-w-8xl px-4 py-8">
          <div className="grid gap-6 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
            <aside className="min-w-0">
              <ClubSidebar />
            </aside>

            <main className="min-w-0 overflow-hidden">
              {children}
            </main>
          </div>
        </div>
      </div>
    </ClubProvider>
  );
};

export default Layout;