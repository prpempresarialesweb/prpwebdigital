import React from 'react'

declare global {
	interface Window {
		chatwootSettings?: any
		chatwootSDK?: any
	}
}

class ChatwootWidget extends React.Component {
	componentDidMount() {
		// Add Chatwoot Settings
		window.chatwootSettings = {
			hideMessageBubble: false,
			launcherTitle: 'Chat with us',
			position: 'right', // This can be left or right
			locale: 'es', // Language to be set
			type: 'standard', // [standard, expanded_bubble]
		}

		// Paste the script from inbox settings except the <script> tag
		;(function (d, t) {
			var BASE_URL = 'https://app.chatwoot.com'
			var g = d.createElement(t),
				s = d.getElementsByTagName(t)[0]
			// @ts-expect-error: Let's ignore a compile error like this unreachable code
			g.src = BASE_URL + '/packs/js/sdk.js'
			s.parentNode?.insertBefore(g, s)
			// @ts-expect-error: Let's ignore a compile error like this unreachable code
			g.async = !0
			g.onload = function () {
				window.chatwootSDK.run({
					websiteToken: 'qFbP2ZsPHvFg9zHaLNVcCfS2',
					baseUrl: BASE_URL,
				})
			}
		})(document, 'script')
	}

	render() {
		return null
	}
}

export default ChatwootWidget
