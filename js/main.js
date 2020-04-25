//get today's date  --useless
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}
today = dd + ' / ' + mm + ' / ' + yyyy; // ex. 2020-4-1  - getting data to show it only.

currantDate = `<h4>` + today + `</h4>`;

document.getElementById("date").innerHTML = currantDate;
//................finished




//get global counter


var req = new XMLHttpRequest();

var All = [];
req.open("GET", "https://covidapi.info/api/v1/global") //open connection
req.send();
req.onreadystatechange = function() {


    if (req.readyState == 4 && req.status == 200) {

        data = JSON.parse(req.response);

        ShowAll();
    }
}

//Put Comma Values in Numbers


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


//..............finished

function ShowAll() {

    var Temp = `
	<h2> ` + numberWithCommas(data.result.confirmed) + ` </h2>
	
	 <span class="badge badge-danger"> increased </span> `;

    document.getElementById("global-id").innerHTML = Temp;



    var Temp1 = `
	<h2> ` + numberWithCommas(data.result.recovered) + ` </h2>
	
	 <span class="badge badge-danger"> increased </span> `;

    document.getElementById("recovered-id").innerHTML = Temp1;


    var Temp2 = `
	<h2> ` + numberWithCommas(data.result.deaths) + ` </h2>
	
	 <span class="badge badge-danger"> increased </span> `;

    document.getElementById("Deathes-id").innerHTML = Temp2;


}


//start showing table  

var CountryCode = ["USA", "IRQ", "OMN"]; //intial
//var CountryCode = sports; //....disabled

for (var i = 0; i < CountryCode.length; i++) {

    var req = [];
    req[i] = new XMLHttpRequest();
    req.open("GET", " https://covidapi.info/api/v1/country/" + CountryCode[i] + "") //open connection
    req[i].onreadystatechange = function() {

        if (req[i].readyState === 4 && req[i].status === 200) {
            console.log('Response from request ' + i + ' [ ' + req[i].responseText + ']');
        }
    };
    req[i].send();


    var object = data.result;

    //get obj size
    Object.size = function(obj) {
        var size = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };


    // Get the size of an object
    var size = Object.size(object);
    //........................ finished


    finalObj = object[Object.keys(object)[size - 1]];



    var Temp = ` <tr class="row100">
        <td class="column100 column1" data-column="column1"> sudan</td>
        <td class="column100 column2" data-column="column2">` + finalObj.confirmed + `</td>
        <td class="column100 column3" data-column="column3">` + finalObj.deaths + `</td>
        <td class="column100 column4" data-column="column4">` + finalObj.recovered + `</td>
        <td class="column100 column5" data-column="column5">8:00 AM</td>
        <td class="column100 column6" data-column="column6">--</td>
        <td class="column100 column7" data-column="column7">5:00 PM</td>
        <td class="column100 column8" data-column="column8">8:00 AM</td>
    </tr>`;


    document.getElementById("tbody").innerHTML = Temp;



}




for (var i = 0; i < CountryCode.length; i++) {



    httpreq.open("GET", " https://covidapi.info/api/v1/country/" + CountryCode + " ") //open connection
    httpreq.send();

    httpreq.onreadystatechange = function() {


        if (httpreq.readyState == 4 && httpreq.status == 200) {

            data = JSON.parse(httpreq.response);

            ShowTable();

        }
    }
}



/* 


var object = data.result;

    //get obj size
    Object.size = function(obj) {
        var size = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };


    // Get the size of an object
    var size = Object.size(object);
    //........................ finished


    finalObj = object[Object.keys(object)[size - 1]];



    var Temp = ` <tr class="row100">
        <td class="column100 column1" data-column="column1"> sudan</td>
        <td class="column100 column2" data-column="column2">` + finalObj.confirmed + `</td>
        <td class="column100 column3" data-column="column3">` + finalObj.deaths + `</td>
        <td class="column100 column4" data-column="column4">` + finalObj.recovered + `</td>
        <td class="column100 column5" data-column="column5">8:00 AM</td>
        <td class="column100 column6" data-column="column6">--</td>
        <td class="column100 column7" data-column="column7">5:00 PM</td>
        <td class="column100 column8" data-column="column8">8:00 AM</td>
    </tr>`;


    document.getElementById("tbody").innerHTML = Temp;





function getstreams() {

    let url = ["usa", "irq"];

    function makerequest() {
        url.forEach(function(e) {
            let httpreq = new XMLHttpRequest();
            
            httpreq.onreadystatechange = streams;
            httpreq.open("GET", " https://covidapi.info/api/v1/country/" + e + " ");
            httpreq.send();

        })

    }

    function streams() {

        if (this.readyState == 4 && this.status == 200) {
            let data = json.parse(this.response);
            console.log(data);

        } else {

            console.log("bazet khales");
        }
    }
    makerequest();
}
*/