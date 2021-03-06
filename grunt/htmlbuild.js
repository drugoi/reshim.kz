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
					faq: 'app/templates/faq.html',
					wish: 'app/templates/wish.html',
					'howitworks': 'app/templates/howitworks.html'
				}
			}
		}
	}
};