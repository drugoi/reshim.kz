module.exports = {
	dev: {
		src: 'app/pages/**/*.html',
		dest: 'app/pages_c/',
		options: {
			beautify: true,
			logOptions: true,
			sections: {
				layout: {
					header: 'app/templates/header.html',
					footer: 'app/templates/footer.html',
          wish: 'app/templates/wish.html'
				}
			}
		}
	}
};