(function(){

	var regions = [
		{
			name: 'south',
			population: 3500
		},
		{
			name: 'west',
			population: 6500
		},
		{
			name: 'midwest',
			population: 2500
		},
		{
			name: 'east',
			population:7500
		},
	];


	regions.forEach(function(regions){
		var pop = regions.population;
		if (pop > 7000){
			hex = '#2171b5'
		} else if (pop > 6000){
			hex = '#6baed6'
		} else if (pop > 3000){
			hex = '#bdd7e7'
		} else {
			hex = '#eff3ff'
		}

		$('g[data-which="'+regions.name+'"] path').css('fill', hex);
	});

}).call(this);