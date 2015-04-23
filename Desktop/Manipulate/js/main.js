(function(){

	/*

	url,name,line
	http://www.mta.info/nyct/service/,Smith St & Bergen St At Ne Corner (To Manhattan And Queens Only),F-G
	http://www.mta.info/nyct/service/,Court St & Montague St At Sw Corner,2-3-4-5-N-R
	http://www.mta.info/nyct/service/,Court St & Montague St At Sw Corner,2-3-4-5-N-R

	*/

	// An alternative to usind d3 would be to convert our csv to json and use jQuery's $.getJSON function.
	d3.csv('data/data.csv', function(error, subwayStations){
		if (error){
			console.log(error);
		}
		// console.log(error, subwayData);
		subwayStations.forEach(function(subwayStation){
			var delimiter = '(';
			var subway_station_name_parts = subwayStation.name.split(delimiter);
			var subway_direction = subway_station_name_parts[1];

			if (subway_direction){
				subway_direction = subway_direction.replace(/\)/g, '');
				subwayStation.direction = subway_direction;
			}

			subwayStation.name = subway_station_name_parts[0].trim(); 

			subwayStation.lineList = subwayStation.line.split('-');

		});


			var oneLineStops = subwayStations.filter(function(subwayStation){
				return _.contains(subwayStation.lineList, '1');
			});
			
			var twoLineStops = subwayStations.filter(function(subwayStation){
				return _.contains(subwayStation.lineList, '2');
			});
			
			var threeLineStops = subwayStations.filter(function(subwayStation){
				return _.contains(subwayStation.lineList, '3');
			});
			
			function showOne() {
				oneLineStops.forEach(function(subwayStation){
				$('#canvas').append(
				'<div class="resultsList">' + subwayStation.name + ', ' + subwayStation.direction + ' ' + subwayStation.lineList.join(' - ') + '</div>')
			});
			}
			
			function showTwo() {
				twoLineStops.forEach(function(subwayStation){
				$('#canvas').append(
				'<div class="resultsList">' + subwayStation.name + ', ' + subwayStation.direction + ' ' + subwayStation.lineList.join(' - ') + '</div>')
			});
			}
			
			function showThree() {
				threeLineStops.forEach(function(subwayStation){
				$('#canvas').append(
				'<div class="resultsList">' + subwayStation.name + ', ' + subwayStation.direction + ' ' + subwayStation.lineList.join(' - ') + '</div>')
			});
			}

			
				$('#oneLine').click(function(){
				$('.lineInfo').html('Slowest train ever.')
				$('#canvas').empty();
				showOne();
				});

				$('#twoLine').click(function(){
				$('.lineInfo').html('The 2 is better')
				$('#canvas').empty();
				showTwo();
				});
				
				$('#threeLine').click(function(){
				$('.lineInfo').html('So is the three')
				$('#canvas').empty();
				showThree();
				});

		// function showEntrancesByLine(lineName){
		// 	$('#lines').html('');
	

		// var filtered_entrances = subwayStations.filter(function(subwayStation){
		// 	return _.contains(subwayStation.lineList, '2') && _.contains(subwayStation.lineList, '3') || _.contains(subwayStation.lineList, 'A') && _.contains(subwayStation.lineList, 'C');
		// // });

		}



		// console.log(filtered_entrances);
		// console.log(subwayStations.length);


		
	)});

}).call(this);