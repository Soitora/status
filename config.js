module.exports = {
	title: "Tachiyomi",
	description: "Tachiyomi is an open-source Android app that lets you read any manga from your smartphone - faster and easier than ever.",
	baseUrl: "https://tachiyomi-status.netlify.app",
	theme: {
		links: {
			en: {
				contact: "mailto:contact@tachiyomi.org",
				support: "https://discord.gg/tachiyomi",
				home: "https://tachiyomi.org/",
			},
		}
	},
	analytics: {
		ga: "UA-148212082-3",
	},
	notifications: {
		feeds: true,
		twitter: {
			en: "tachiyomiorg",
		},
		support: {
			en: "https://discord.gg/tachiyomi",
		},
	},
	defaultLocale: "en",
	locales: [
		{ code: "en", iso: "en-US", name: "English", file: "en.json" },
	],
	content: {
		frontMatterFormat: "json",
		systems: [
			"github",
			"cloudflare",
			"google",
		]
	},
}