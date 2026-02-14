export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const target = searchParams.get("url");

    if (!target) {
        return new Response("Missing URL", { status: 400 });
    }

    try {
        const response = await fetch(target, {
            headers: {
                "User-Agent": "Mozilla/5.0",
                "Referer": "https://www.jiotv.com/"
            }
        });

        const data = await response.arrayBuffer();

        return new Response(data, {
            status: 200,
            headers: {
                "Content-Type": response.headers.get("content-type") || "application/octet-stream",
                "Access-Control-Allow-Origin": "*"
            }
        });

    } catch (error) {
        return new Response("Proxy failed", { status: 500 });
    }
}
