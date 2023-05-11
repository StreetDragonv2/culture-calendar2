import './css/font.css'
import './css/globals.css'

export default function RootLayout({ children }) {
	return (
		<html lang='ko'>
			<head>
				<meta name='theme-color' content='#8DDCFF'/>
				<link rel='manifest' href='/manifest.json'/>
			</head>
			<body>
				<div className='wrapper'>
					<div id='header' className='header'>

					</div>
					<div id='main'>
						<div className='size'>
							{children}
						</div>
					</div>
				</div>
			</body>
		</html>
	)
}
