import { BACKBLAZE_BUCKET_ENDPOINT } from '$env/static/private';

export async function GET({ params }) {
	const filePath = params.file;
	const url = `${BACKBLAZE_BUCKET_ENDPOINT}/${filePath}`;

	try {
		const response = await fetch(url);

		if (!response.ok) {
			console.error(
				`Error fetching file. Status: ${response.status}, StatusText: ${response.statusText}`
			);
			return new Response(`File not found. Status: ${response.status}`, {
				status: response.status
			});
		}

		const contentType = response.headers.get('content-type');

		return new Response(response.body, {
			headers: {
				'Content-Type': contentType,
				'Cache-Control': 'public, max-age=31536000'
			} as Record<string, string>
		});
	} catch (error: Error | any) {
		console.error('Error fetching file:', error);
		return new Response(`Internal Server Error: ${error.message}`, { status: 500 });
	}
}
