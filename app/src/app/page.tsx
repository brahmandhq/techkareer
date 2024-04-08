import LandingPage from "@/components/LandingPage";
import { Metadata,} from "next";

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: "https://localhost:3000/app/og",
        width: 1200,
        height: 630,
        alt: "Techkareer",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="bg-slate-950">
      <LandingPage />
    </main>
  );
}
