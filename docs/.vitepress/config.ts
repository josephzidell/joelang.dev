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
			{ text: 'Get Started', link: '/get-started' },
			{
				text: 'Learn',
				activeMatch: '/learn/',
				items: [
					{ text: 'Types', link: '/learn/types/overview' },
					{ text: 'Variables', link: '/learn/variables' },
					{ text: 'Functions', link: '/learn/functions/overview' },
					{ text: 'Conditionals', link: '/learn/conditionals'},
					{ text: 'Whens', link: '/learn/when/overview'},
				],
			},
		],
		sidebar: [
			{
				text: 'Welcome',
				collapsed: false,
				items: [
					{ text: 'Introduction', link: '/introduction' },
					{ text: 'Get Started', link: '/get-started' },
				],
			},
			{
				text: 'Learn',
				collapsed: false,
				items: [
					{
						text: 'Types',
						collapsed: false,
						items: [
							{ text: 'Types Overview', link: '/learn/types/index' },
							{ text: 'Number', link: '/learn/types/number' },
							{ text: 'String', link: '/learn/types/string' },
							{ text: 'Bool', link: '/learn/types/bool' },
							{ text: 'Path', link: '/learn/types/path' },
							{ text: 'Regular Expression (Regex)', link: '/learn/types/regex' },
							{ text: 'Array', link: '/learn/types/array' },
							{ text: 'Tuple', link: '/learn/types/tuple' },
							{ text: 'Object (POJO)', link: '/learn/types/object' },
							{ text: 'Type Inference', link: '/learn/types/inference' },
							{ text: 'Access', link: '/learn/types/access' },
						],
					},
					{
						text: 'Control Flow',
						collapsed: true,
						items: [
							{ text: 'Conditionals', link: '/learn/conditionals'},
							{
								text: 'When',
								collapsed: true,
								items: [
									{ text: 'When Overview', link: '/learn/when/overview'},
									{ text: 'Return', link: '/learn/when/return'},
									{
										text: 'Case',
										collapsed: true,
										items: [
											{ text: 'Single Value', link: '/learn/when/case/single'},
											{ text: 'Multiple Values', link: '/learn/when/case/multiple'},
											{ text: 'Number Range', link: '/learn/when/case/range'},
											{ text: 'Anything Else', link: '/learn/when/case/anything-else'},
											{ text: 'Complex Case', link: '/learn/when/case/complex'},
										],
									},
								],
							},
							{ text: 'For Loops', link: '/learn/for-loops' },
							{ text: 'Loops', link: '/learn/loops' },
						],
					},
					{ text: 'Variables', link: '/learn/variables' },
					{
						text: 'Functions',
						collapsed: true,
						items: [
							{ text: 'Functions Overview', link: '/learn/functions/overview' },
							{ text: 'Special Functions', link: '/learn/functions/special' },
						],
					},
					{
						text: 'Classes',
						collapsed: true,
						items: [
							{ text: 'Concrete Classes', link: '/learn/classes/concrete' },
							{ text: 'Abstract Classes', link: '/learn/classes/abstract' },
							{ text: 'Interfaces', link: '/learn/classes/interfaces' },
						],
					},
					{ text: 'Importing', link: '/learn/importing' },
				],
			},
			{
				text: 'Design',
				collapsed: true,
				items: [
					{ text: 'Why?', link: '/why' },
				],
			},
		],
	},
});
