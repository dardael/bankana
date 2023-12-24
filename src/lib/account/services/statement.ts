export async function POST(request: Request): Promise<Response> {
    const file = await request.blob();

    console.log(file);

    return new Response();
}
