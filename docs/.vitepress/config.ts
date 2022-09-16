import { defineConfig } from 'vitepress'

export default defineConfig({
	title: 'joelang - Docs',
	description: 'Documentation for joelang',
	head: [
		// ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
		// ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
		// ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
		// ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
		// ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
		['link', { rel: "shortcut icon", href: "/favicons/favicon.ico"}],
		// ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
		// ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
		// ['meta', { name: "theme-color", content: "#ffffff"}],
	],
	themeConfig: {
		siteTitle: false,
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
						link: '/guide/types/index',
						items: [
							{ text: 'Number', link: '/guide/types/number' },
							{ text: 'String', link: '/guide/types/string' },
							{ text: 'Bool', link: '/guide/types/bool' },
							{ text: 'Path', link: '/guide/types/path' },
							{ text: 'Regular Expression (Regex)', link: '/guide/types/regex' },
							{ text: 'Array', link: '/guide/types/array' },
							{ text: 'Tuple', link: '/guide/types/tuple' },
							{ text: 'Object (POJO)', link: '/guide/types/object' },
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
								text: 'Case',
								items: [
									{ text: 'Single Value', link: '/guide/when/case/single'},
									{ text: 'Multiple Values', link: '/guide/when/case/multiple'},
									{ text: 'Array of values', link: '/guide/when/case/array'},
									{ text: 'Number Range', link: '/guide/when/case/range'},
									{ text: 'Anything Else', link: '/guide/when/case/anything-else'},
									{ text: 'Complex Case', link: '/guide/when/case/complex'},
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
