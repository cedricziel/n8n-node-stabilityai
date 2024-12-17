import {
	type IExecuteFunctions,
	type IHttpRequestOptions,
	type INodeExecutionData,
	type JsonObject,
	NodeApiError,
} from 'n8n-workflow';

import FormData from 'form-data';

function sharedHeaders() {
	return {
		'stability-client-id': 'n8n-nodes-stabilityai',
	};
}

interface StabilityAICredentials {
	token: string;
	baseURL: string;
}

export async function stabilityGenerateUltraRequest(
	this: IExecuteFunctions | IExecuteFunctions,
	index: number,
	request: StableImageUltraRequest,
): Promise<INodeExecutionData[]> {
	const items = this.getInputData();

	const credentials = await this.getCredentials<StabilityAICredentials>('stabilityAiApi');
	const body: FormData = new FormData();
	const output: string = this.getNodeParameter('output', index) as string;

	body.append('prompt', request.prompt);
	if (request.output_format && request.output_format.length > 0) {
		body.append('output_format', request.output_format);
	}
	if (request.image && request.image !== undefined) {
		body.append('image', request.image);
	}
	if (request.strength && request.image !== undefined && request.strength > 0) {
		body.append('strength', request.strength.toString());
	}
	if (request.aspect_ratio && request.aspect_ratio !== '1:1') {
		body.append('aspect_ratio', request.aspect_ratio);
	}
	if (request.negative_prompt && request.negative_prompt !== undefined) {
		body.append('negative_prompt', request.negative_prompt);
	}
	if (request.seed && request.seed !== undefined) {
		body.append('seed', request.seed.toString());
	}

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${credentials.baseURL}/v2beta/stable-image/generate/ultra`,
		headers: {
			accept: 'image/*',
			'content-type': 'multipart/form-data',
			...sharedHeaders(),
		},
		json: false,
		body: request,
		returnFullResponse: true,
		encoding: 'arraybuffer',
	};

	try {
		const response = await this.helpers.httpRequestWithAuthentication.call(
			this,
			'stabilityAiApi',
			options,
		);

		let mimeType = response.headers['content-type'] as string | undefined;
		mimeType = mimeType ? mimeType.split(';').find((value) => value.includes('/')) : undefined;
		const contentDisposition = response.headers['content-disposition'];
		const fileNameRegex = /(?<=filename=").*\b/;
		const match = fileNameRegex.exec(contentDisposition as string);
		let fileName = '';

		// file name was found
		if (match !== null) {
			fileName = match[0];
		}

		const newItem: INodeExecutionData = {
			json: items[index].json,
			binary: {},
		};

		if (items[index].binary !== undefined && newItem.binary) {
			// Create a shallow copy of the binary data so that the old
			// data references which do not get changed still stay behind
			// but the incoming data does not get changed.
			Object.assign(newItem.binary, items[index].binary);
		}

		newItem.binary = {
			[output]: await this.helpers.prepareBinaryData(
				response.body as unknown as Buffer,
				fileName,
				mimeType,
			),
		};

		return newItem ? [newItem] : [];
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

export async function stabilityGenerateCoreRequest(
	this: IExecuteFunctions | IExecuteFunctions,
	index: number,
	request: StableImageCoreRequest,
): Promise<INodeExecutionData[]> {
	const items = this.getInputData();

	const credentials = await this.getCredentials<StabilityAICredentials>('stabilityAiApi');
	const body: FormData = new FormData();
	const output: string = this.getNodeParameter('output', index) as string;

	body.append('prompt', request.prompt);
	if (request.output_format && request.output_format.length > 0) {
		body.append('output_format', request.output_format);
	}
	if (request.style_preset && request.style_preset !== undefined) {
		body.append('style_preset', request.style_preset);
	}
	if (request.aspect_ratio && request.aspect_ratio !== '1:1') {
		body.append('aspect_ratio', request.aspect_ratio);
	}
	if (request.negative_prompt && request.negative_prompt !== undefined) {
		body.append('negative_prompt', request.negative_prompt);
	}
	if (request.seed && request.seed !== undefined) {
		body.append('seed', request.seed.toString());
	}

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${credentials.baseURL}/v2beta/stable-image/generate/ultra`,
		headers: {
			accept: 'image/*',
			'content-type': 'multipart/form-data',
			...sharedHeaders(),
		},
		json: false,
		body: request,
		returnFullResponse: true,
		encoding: 'arraybuffer',
	};

	try {
		const response = await this.helpers.httpRequestWithAuthentication.call(
			this,
			'stabilityAiApi',
			options,
		);

		let mimeType = response.headers['content-type'] as string | undefined;
		mimeType = mimeType ? mimeType.split(';').find((value) => value.includes('/')) : undefined;
		const contentDisposition = response.headers['content-disposition'];
		const fileNameRegex = /(?<=filename=").*\b/;
		const match = fileNameRegex.exec(contentDisposition as string);
		let fileName = '';

		// file name was found
		if (match !== null) {
			fileName = match[0];
		}

		const newItem: INodeExecutionData = {
			json: items[index].json,
			binary: {},
		};

		if (items[index].binary !== undefined && newItem.binary) {
			// Create a shallow copy of the binary data so that the old
			// data references which do not get changed still stay behind
			// but the incoming data does not get changed.
			Object.assign(newItem.binary, items[index].binary);
		}

		newItem.binary = {
			[output]: await this.helpers.prepareBinaryData(
				response.body as unknown as Buffer,
				fileName,
				mimeType,
			),
		};

		return newItem ? [newItem] : [];
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

export async function stabilityGenerateSd3Request(
	this: IExecuteFunctions | IExecuteFunctions,
	index: number,
	request: StableImageSd3Request,
): Promise<INodeExecutionData[]> {
	const items = this.getInputData();

	const credentials = await this.getCredentials<StabilityAICredentials>('stabilityAiApi');
	const body: FormData = new FormData();
	const output: string = this.getNodeParameter('output', index) as string;

	body.append('prompt', request.prompt);
	if (request.output_format && request.output_format.length > 0) {
		body.append('output_format', request.output_format);
	}
	if (request.aspect_ratio && request.aspect_ratio !== '1:1') {
		body.append('aspect_ratio', request.aspect_ratio);
	}
	if (request.negative_prompt && request.negative_prompt !== undefined) {
		body.append('negative_prompt', request.negative_prompt);
	}
	if (request.seed && request.seed !== undefined) {
		body.append('seed', request.seed.toString());
	}
	if (request.model && request.model !== '') {
		body.append('model', request.model);
	}
	if (request.cfg_scale && request.cfg_scale !== undefined) {
		body.append('cfg_scale', request.cfg_scale.toString());
	}
	if (request.mode && request.mode !== '') {
		body.append('mode', request.mode);
	}

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: `${credentials.baseURL}/v2beta/stable-image/generate/ultra`,
		headers: {
			accept: 'image/*',
			'content-type': 'multipart/form-data',
			...sharedHeaders(),
		},
		json: false,
		body: request,
		returnFullResponse: true,
		encoding: 'arraybuffer',
	};

	try {
		const response = await this.helpers.httpRequestWithAuthentication.call(
			this,
			'stabilityAiApi',
			options,
		);

		let mimeType = response.headers['content-type'] as string | undefined;
		mimeType = mimeType ? mimeType.split(';').find((value) => value.includes('/')) : undefined;
		const contentDisposition = response.headers['content-disposition'];
		const fileNameRegex = /(?<=filename=").*\b/;
		const match = fileNameRegex.exec(contentDisposition as string);
		let fileName = '';

		// file name was found
		if (match !== null) {
			fileName = match[0];
		}

		const newItem: INodeExecutionData = {
			json: items[index].json,
			binary: {},
		};

		if (items[index].binary !== undefined && newItem.binary) {
			// Create a shallow copy of the binary data so that the old
			// data references which do not get changed still stay behind
			// but the incoming data does not get changed.
			Object.assign(newItem.binary, items[index].binary);
		}

		newItem.binary = {
			[output]: await this.helpers.prepareBinaryData(
				response.body as unknown as Buffer,
				fileName,
				mimeType,
			),
		};

		return newItem ? [newItem] : [];
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

export enum OutputFormat {
	PNG = 'png',
	JPEG = 'jpeg',
	WEBP = 'webp',
}

export enum AspectRatio {
	'1:1' = '1:1',
	'16:9' = '16:9',
	'21:9' = '21:9',
	'2:3' = '2:3',
	'3:2' = '3:2',
	'4:5' = '4:5',
	'5:4' = '5:4',
	'9:16' = '9:16',
	'9:21' = '9:21',
}

export type StableImageUltraRequest = {
	prompt: string;

	output_format?: OutputFormat;
	image?: Buffer;
	strength?: number;
	aspect_ratio?: AspectRatio;
	negative_prompt?: string;
	seed?: number;
};

export type StableImageCoreRequest = {
	prompt: string;

	output_format?: OutputFormat;
	aspect_ratio?: AspectRatio;
	negative_prompt?: string;
	seed?: number;
	style_preset?: string;
};

export type StableImageSd3Request = {
	prompt: string;
	mode: string;
	model: string;

	output_format?: OutputFormat;
	aspect_ratio?: AspectRatio;
	negative_prompt?: string;
	seed?: number;
	cfg_scale?: number;
};
