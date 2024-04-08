import { ImageResponse } from "@vercel/og";

export const runtime = "edge"

export async function GET(request: Request){
    try {

    const { searchParams } = new URL(request.url)

    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title")?.slice(0, 100) 
    : "Techkareer";


    return new ImageResponse
    (
    <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="bg-gray-50 flex w-full">
          <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
            <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
              <span style={{ fontFamily: "Inter"}}>Hire Tech Talent 10x faster</span>
              <span tw="text-indigo-600">Sourcing candidates made 10x faster</span>
            </h2>
            <div tw="mt-8 flex md:mt-0">
              <div tw="flex rounded-md shadow">
                <a tw="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white">Get started</a>
              </div>
              <div tw="ml-3 flex rounded-md shadow">
                <a tw="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600">Scout Talent</a>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
    } catch (e: any) {
        return new Response("Failed to generate OG Image", { status: 500});
    }
}