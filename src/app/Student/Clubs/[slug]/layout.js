import { notFound } from "next/navigation";
import ClubSidebar from "./ClubSidebar";
import ClubProvider from "./ClubProvider";
import { getClub } from "../services/clubService";

const Layout = async ({ children, params }) => {
  const { slug } = await params;
  console.log("[DEBUG] Layout called with slug:", slug);
  const club = await getClub(slug);
  console.log("[DEBUG] Layout club result:", club ? `Success: ${club.name} (id: ${club.id})` : "Failed: null");

  if (!club?.id) {
    console.log("[DEBUG] Club not found, calling notFound()");
    notFound();
  }

  return (
    <ClubProvider club={club}>
      <div className="mx-auto w-[min(1200px,calc(100%_-_32px))] bg-white/70 backdrop-blur-md rounded-2xl border border-red-100 p-5 md:p-8 my-6 md:my-10 shadow-md flex flex-col md:flex-row gap-6 md:gap-8 items-start min-h-[80vh] font-sans antialiased">
        <aside className="w-full md:w-60 lg:w-64 shrink-0 md:sticky md:top-24 z-10">
          <ClubSidebar />
        </aside>

        <main className="min-w-0 w-full flex-1">
          {children}
        </main>
      </div>
    </ClubProvider>
  );
};

export default Layout;