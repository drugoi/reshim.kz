/*
var getTemplateFiles = function() {
  var walk = require('walk');
  var files = [];
  
  var walker  = walk.walk('./app/templates/', { followLinks: false });
  
  walker.on('file', function(root, stat, next) {
    var name = stat.name.replace('.html', '').replace('.mustache', '');
    var file = {};
    file[name] = 'app/templates/' + stat.name;
    files.push(file);
    next();
  });
  
  walker.on('end', function() {
    return files;
  }); 
}
*/

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
					counter: 'app/templates/counter.html',
					partners: 'app/templates/partners.html',
					'partners-media': 'app/templates/partners-media.html',
					thanks: 'app/templates/thanks.html',
					title: 'app/templates/title.html',
					'heroes': 'app/templates/heroes.html',
					'history': 'app/templates/history.html',
					'heroes-top': 'app/templates/heroes-top.html',
					'history-navigation': 'app/templates/heroes-navigation.html',
					'heroes-pagination': 'app/templates/heroes-pagination.html',
					'heroes-modal': 'app/templates/heroes-modal.html',
					'veterans': 'app/templates/veterans.html',
					'veterans-top': 'app/templates/veterans-top.html',
					'veterans-modal': 'app/templates/veterans-modal.html',
					'about-sidebar': 'app/templates/about-sidebar.html',
					'life-line': 'app/templates/life-line.html',
					related: 'app/templates/related.html',
					'timeline': 'app/templates/timeline/timeline.html',
					'timeline-navigation': 'app/templates/timeline-navigation.html',
					'infographic': 'app/templates/infographic.html',
					'infographics-modal': 'app/templates/infographics-modal.html',
					'search': 'app/templates/search.html',
					'chronology': 'app/templates/chronology.html',
					'404': 'app/templates/404.html',
					'included': 'app/templates/included.html',
					'news-sidebar': 'app/templates/news-sidebar.html',
					'social-links': 'app/templates/social-links.html',
					'pagination': 'app/templates/pagination.html',
					'social-links-dark': 'app/templates/social-links_dark.html',
					'video-slider': 'app/templates/video-slider.html',
					'kcell': 'app/templates/kcell.html',
					'rear': 'app/templates/rear.html',
					'rear-navigation': 'app/templates/rear-navigation.html',
					'rear-items': 'app/templates/rear-items.html',
					'rear-modal': 'app/templates/rear-modal.html',
					'map': 'app/templates/map.html',
					'map-states': 'app/templates/map-states.html'
				}
			}
		}
	},
	prod: {
		src: 'app/pages/**/*.html',
		dest: 'dist/pages/',
		options: {
			beautify: true,
			logOptions: true,
			sections: {
				layout: {
					header: 'app/templates/header.html',
					footer: 'app/templates/footer.html',
					counter: 'app/templates/counter.html',
					partners: 'app/templates/partners.html',
					thanks: 'app/templates/thanks.html',
					title: 'app/templates/title.html',
					'about-sidebar': 'app/templates/about-sidebar.html',
					'life-line': 'app/templates/life-line.html',
					related: 'app/templates/related.html',
					'news-sidebar': 'app/templates/news-sidebar.html'
				}
			}
		}
	}
};