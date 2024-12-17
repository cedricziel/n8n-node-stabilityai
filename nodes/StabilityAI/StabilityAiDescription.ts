import type { INodeProperties } from 'n8n-workflow';

export const imageServiceOperations: INodeProperties[] = [
	{
		displayName: 'Image Service',
		name: 'imageService',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['generate'],
			},
		},
		options: [
			{
				name: 'Stable Image Core',
				value: 'stable-image-core',
				description:
					'Our primary service for text-to-image generation, Stable Image Core represents the best quality achievable at high speed',
			},
			{
				name: 'Stable Image Ultra',
				value: 'stable-image-ultra',
				description:
					'Our most advanced text to image generation service, Stable Image Ultra creates the highest quality images with unprecedented prompt understanding',
			},
			{
				name: 'Stable Diffusion 3.0 & 3.5',
				value: 'sd3',
				description: 'Generate using Stable Diffusion 3.5 models',
			},
		],
		default: 'stable-image-core',
	},
	{
		displayName: 'Prompt',
		name: 'prompt',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['generate'],
			},
		},
	},
	{
		displayName: 'Output Format',
		name: 'output_format',
		type: 'options',
		options: [
			{
				name: 'PNG',
				value: 'png',
			},
			{
				name: 'JPEG',
				value: 'jpeg',
			},
			{
				name: 'WebP',
				value: 'webp',
			},
		],
		default: 'png',
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['generate'],
			},
		},
	},
	{
		displayName: 'Source Image',
		name: 'image',
		type: 'string',
		default: undefined,
		required: false,
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['generate'],
			},
		},
	},
	{
		displayName: 'Strength',
		name: 'strength',
		type: 'number',
		default: undefined,
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['generate'],
			},
		},
	},
	{
		displayName: 'Aspect Ratio',
		name: 'aspect_ratio',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: '1:1',
				value: '1:1',
			},
			{
				name: '16:9',
				value: '16:9',
			},
			{
				name: '21:9',
				value: '21:9',
			},
			{
				name: '2:3',
				value: '2:3',
			},
			{
				name: '3:2',
				value: '3:2',
			},
			{
				name: '4:5',
				value: '4:5',
			},
			{
				name: '5:4',
				value: '5:4',
			},
			{
				name: '9:16',
				value: '9:16',
			},
			{
				name: '9:21',
				value: '9:21',
			},
		],
		required: true,
		default: '1:1',
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['generate'],
			},
		},
	},
	{
		displayName: 'Negative Prompt',
		name: 'negative_prompt',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['generate'],
			},
		},
	},
	{
		displayName: 'Seed',
		name: 'seed',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['generate'],
			},
		},
	},
	{
		displayName: 'Put Output In Field',
		name: 'output',
		type: 'string',
		default: 'data',
		required: true,
		description: 'The name of the output field to put the binary file data in',
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['generate'],
			},
		},
	},
	{
		displayName: 'SD3 Model',
		name: 'sd3model',
		type: 'options',
		default: 'sd3.5-large',
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['generate'],
				imageService: ['sd3'],
			},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Stable Diffusion 3.5 Large',
				value: 'sd3.5-large',
			},
			{
				name: 'Stable Diffusion 3.0 Large Turbo',
				value: 'sd3-large-turbo',
			},
			{
				name: 'Stable Diffusion 3.0 Medium',
				value: 'sd3-medium',
			},
			{
				name: 'Stable Diffusion 3.5 Large Turbo',
				value: 'sd3.5-large-turbo',
			},
			{
				name: 'Stable Diffusion 3.5 Medium',
				value: 'sd3.5-medium',
			},
		],
	},
	{
		displayName: 'Style Preset',
		name: 'style_preset',
		type: 'options',
		default: 'anime',
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['generate'],
				imageService: ['stable-image-core'],
			},
		},
		options: [
			{
				name: '3D Model',
				value: '3d-model',
			},
			{
				name: 'Analog Film',
				value: 'analog-film',
			},
			{
				name: 'Anime',
				value: 'anime',
			},
			{
				name: 'Cinematic',
				value: 'cinematic',
			},
			{
				name: 'Comic Book',
				value: 'comic-book',
			},
			{
				name: 'Digital Art',
				value: 'digital-art',
			},
			{
				name: 'Enhance',
				value: 'enhance',
			},
			{
				name: 'Fantasy Art',
				value: 'fantasy-art',
			},
			{
				name: 'Isometric',
				value: 'isometric',
			},
			{
				name: 'Line Art',
				value: 'line-art',
			},
			{
				name: 'Low Poly',
				value: 'low-poly',
			},
			{
				name: 'Modeling Compound',
				value: 'modeling-compound',
			},
			{
				name: 'Neon Punk',
				value: 'neon-punk',
			},
			{
				name: 'Origami',
				value: 'origami',
			},
			{
				name: 'Photographic',
				value: 'photographic',
			},
			{
				name: 'Pixel Art',
				value: 'pixel-art',
			},
			{
				name: 'Tile Texture',
				value: 'tile-texture',
			},
		],
	},
];

// When the resource `httpVerb` is selected, this `operation` parameter will be shown.
export const httpVerbOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['httpVerb'],
			},
		},
		options: [
			{
				name: 'GET',
				value: 'get',
				description: 'Perform a GET request',
				routing: {
					request: {
						method: 'GET',
						url: '/get',
					},
				},
				action: 'Get a http verb',
			},
			{
				name: 'DELETE',
				value: 'delete',
				description: 'Perform a DELETE request',
				routing: {
					request: {
						method: 'DELETE',
						url: '/delete',
					},
				},
				action: 'Delete a http verb',
			},
		],
		default: 'get',
	},
];

// Here we define what to show when the `get` operation is selected.
// We do that by adding `operation: ["get"]` to `displayOptions.show`
const getOperation: INodeProperties[] = [
	{
		displayName: 'Type of Data',
		name: 'typeofData',
		default: 'queryParameter',
		description: 'Select type of data to send [Query Parameters]',
		displayOptions: {
			show: {
				resource: ['httpVerb'],
				operation: ['get'],
			},
		},
		type: 'options',
		options: [
			{
				name: 'Query',
				value: 'queryParameter',
			},
		],
		required: true,
	},
	{
		displayName: 'Query Parameters',
		name: 'arguments',
		default: {},
		description: "The request's query parameters",
		displayOptions: {
			show: {
				resource: ['httpVerb'],
				operation: ['get'],
			},
		},
		options: [
			{
				name: 'keyvalue',
				displayName: 'Key:Value',
				values: [
					{
						displayName: 'Key',
						name: 'key',
						type: 'string',
						default: '',
						required: true,
						description: 'Key of query parameter',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						routing: {
							send: {
								property: '={{$parent.key}}',
								type: 'query',
							},
						},
						required: true,
						description: 'Value of query parameter',
					},
				],
			},
		],
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
	},
];

// Here we define what to show when the DELETE Operation is selected.
// We do that by adding `operation: ["delete"]` to `displayOptions.show`
const deleteOperation: INodeProperties[] = [
	{
		displayName: 'Type of Data',
		name: 'typeofData',
		default: 'queryParameter',
		description: 'Select type of data to send [Query Parameter Arguments, JSON-Body]',
		displayOptions: {
			show: {
				resource: ['httpVerb'],
				operation: ['delete'],
			},
		},
		options: [
			{
				name: 'Query',
				value: 'queryParameter',
			},
			{
				name: 'JSON',
				value: 'jsonData',
			},
		],
		required: true,
		type: 'options',
	},
	{
		displayName: 'Query Parameters',
		name: 'arguments',
		default: {},
		description: "The request's query parameters",
		displayOptions: {
			show: {
				resource: ['httpVerb'],
				operation: ['delete'],
				typeofData: ['queryParameter'],
			},
		},
		options: [
			{
				name: 'keyvalue',
				displayName: 'Key:Value',
				values: [
					{
						displayName: 'Key',
						name: 'key',
						type: 'string',
						default: '',
						required: true,
						description: 'Key of query parameter',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						routing: {
							send: {
								property: '={{$parent.key}}',
								type: 'query',
							},
						},
						required: true,
						description: 'Value of query parameter',
					},
				],
			},
		],
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
	},
	{
		displayName: 'JSON Object',
		name: 'arguments',
		default: {},
		description: "The request's JSON properties",
		displayOptions: {
			show: {
				resource: ['httpVerb'],
				operation: ['delete'],
				typeofData: ['jsonData'],
			},
		},
		options: [
			{
				name: 'keyvalue',
				displayName: 'Key:Value',
				values: [
					{
						displayName: 'Key',
						name: 'key',
						type: 'string',
						default: '',
						required: true,
						description: 'Key of JSON property',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						routing: {
							send: {
								property: '={{$parent.key}}',
								type: 'body',
							},
						},
						required: true,
						description: 'Value of JSON property',
					},
				],
			},
		],
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
	},
];

export const httpVerbFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                httpVerb:get                                */
	/* -------------------------------------------------------------------------- */
	...getOperation,

	/* -------------------------------------------------------------------------- */
	/*                              httpVerb:delete                               */
	/* -------------------------------------------------------------------------- */
	...deleteOperation,
];
