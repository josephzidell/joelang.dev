import { defineConfig } from 'vitepress'

export default defineConfig({
	title: 'joelang - Docs',
	description: 'Documentation for joelang',
	themeConfig: {
		siteTitle: 'Documentation',
		logo: '/logo.svg',
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/josephzidell/joelang' },
			{ icon: 'twitter', link: 'https://twitter.com/_joelang' },
		],
		editLink: {
			pattern: 'https://github.com/josephzidell/joelang.dev/edit/main/docs/:path',
			text: 'Edit this page on GitHub'
		},
		nav: [
			{ text: 'Why?', link: '/why' },
			{ text: 'Getting Started', link: '/getting-started' },
			{
				text: 'Guide',
				activeMatch: '/guide/',
				items: [
					{ text: 'Types', link: '/guide/types/overview' },
					{ text: 'Variables', link: '/guide/variables' },
					{ text: 'Functions', link: '/guide/functions/overview' },
					{ text: 'Conditionals', link: '/guide/conditionals'},
					{ text: 'Whens', link: '/guide/when/overview'},
				],
			},
		],
		sidebar: [
			{
				text: 'Welcome',
				collapsible: true,
				items: [
					{ text: 'Introduction', link: '/introduction' },
					{ text: 'Getting Started', link: '/getting-started' },
				],
			},
			{
				text: 'Guide',
				collapsible: true,
				items: [
					{
						text: 'Types',
						items: [
							{ text: 'Overview', link: '/guide/types/overview' },
							{ text: 'Type Inference', link: '/guide/types/inference' },
						],
					},
					{ text: 'Variables', link: '/guide/variables' },
					{
						text: 'Functions',
						items: [
							{ text: 'Overview', link: '/guide/functions/overview' },
							{ text: 'Special Functions', link: '/guide/functions/special' },
						],
					},
					{ text: 'Conditionals', link: '/guide/conditionals'},
					{
						text: 'When',
						items: [
							{ text: 'Overview', link: '/guide/when/overview'},
							{ text: 'Return', link: '/guide/when/return'},
							{
								text: 'When',
								items: [
									{ text: 'Single Value', link: '/guide/when/case/single'},
									{ text: 'Multiple Values', link: '/guide/when/case/multiple'},
									{ text: 'Array of values', link: '/guide/when/case/array'},
									{ text: 'Number Range', link: '/guide/when/case/range'},
									{ text: 'Anything Else', link: '/guide/when/case/anything-else'},
								],
							},
						],
					},
				],
			},
			{
				text: 'Design',
				collapsible: true,
				items: [
					{ text: 'Why?', link: '/why' },
				],
			},
		],
	},
});
