// var app = require('./../app.js');


// // var csvData = {
// // 	exampleTable: 'project id,title,sector name,sector code\r\n1,Example Project 1,Agriculture,A\r\n1,Example Project 1,Food Production,FP\r\n2,Example Project 2,Noise,N'
// // }

// var csvData = {};



// var tables = {
// 	exampleTable: {
// 		primaryKey:'project_ID',
// 		mapping: {
// 			'project_ID': ['iati-activity','iati-identifier','#'],
// 			'transaction_values': ['iati-activity','transaction','value','#'],
// 			'transaction_type_code': ['iati-activity','transaction','transaction-type','@','code'],
// 			'transaction_type_name': ['iati-activity','transaction','transaction-type','#'],
// 			'transaction_date': ['iati-activity','transaction','transaction-date','#'],
// 			'project_title': ['iati-activity','title','#'],
// 			'ad_sector_name': ['iati-activity','sector','#'],
// 			'ad_sector_code': ['iati-activity','sector','@','code'],
// 			'precision_code': ['iati-activity','location','coordinates','@','precision'],
// 			'geoname_ID': ['iati-activity','location','gazetteer-entry','@','gazetteer-ref'],
// 			'location_type': ['iati-activity','location','location-type','#'],
// 			'location_code': ['iati-activity','location','location-type','@','code'],
// 			'latitude': ['iati-activity','location','coordinates','@','latitude'],
// 			'longitude': ['iati-activity','location','coordinates','@','longitude'],
// 			'placename': ['iati-activity','location','name','#'],
// 			'donors': ['iati-activity','participating-org','#'],
// 			'iati_donor_codes': ['iati-activity','participating-org','@','ref'],
// 			'status': ['iati-activity','activity-status','#']

// 		}
// 	}
// }

// var fs = require('fs');

// // csvData.exampleTable = fs.readFileSync('./test/data/np_join_split_huge.csv').toString();

// // app(csvData, tables, function(err, res) {

// // 	fs.writeFileSync('./result.xml', res)
// // })

// app(csvData, tables);


// var output = fs.createWriteStream('./result.xml');
// var input = fs.createReadStream('./test/data/np_join_split_noduplicates.csv');



// var duplex1 = duplexer(through1, through2);

var fs = require('fs'), 
	file = fs.createReadStream('./test/data/np_join_split_noduplicates.csv'),
	WritableStream = require('stream').Writable;


var group = WritableStream();

var mapFields = WritableStream();

mapFields._write = function(chunk, enc, next) {
	console.log('woooh', chunk);
}

group._write = function(chunk, enc, next) {
	mapFields.write(chunk, enc);
	next();
}



file.on('error', function(err) {console.log(err)})

file.pipe(group)


//input.pipe(parser).pipe(group).pipe(mapFields).pipe(toXML).pipe(output);