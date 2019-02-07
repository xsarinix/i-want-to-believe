// from data.js
var sightings = data;

// Select the submit button
var submit = d3.select("#filter-btn");

// Select the tbody
var tbody = d3.select("tbody");

// // Form Version
// submit.on("click", function() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();

//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(sightings);

//   var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);

//   console.log(filteredData);

//   filteredData.forEach(function(sighting) {
//     console.log(sighting);
//     var row = tbody.append("tr");
//     Object.entries(sighting).forEach(function([key, value]) {
//       console.log(key, value);
//       // Append a cell to the row for each value
//       // in the weather report object
//       var cell = tbody.append("td");
//       cell.text(value);
//     });
//   });
// });

// Dropdown options setup

var dates = sightings.map(sighting => sighting.datetime);
console.log(dates);

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
var uniqueDates = dates.filter(onlyUnique);
console.log(uniqueDates);

var dropdownBox = d3.select("#filters");
uniqueDates.forEach(date => dropdownBox.append("option").text(date));

// Dropdown Version
submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(sightings);

    var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach(function(sighting) {
        console.log(sighting);
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            // in the weather report object
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});

//   // BONUS: Calculate summary statistics for the age field of the filtered data

//   // First, create an array with just the age values
//   var ages = filteredData.map(person => person.age);

//   // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
//   var mean = math.mean(ages);
//   var median = math.median(ages);
//   var mode = math.mode(ages);
//   var variance = math.var(ages);
//   var standardDeviation = math.std(ages);

//   // Finally, add the summary stats to the `ul` tag
//   d3.select(".summary")
//     .append("li").text(`Mean: ${mean}`)
//     .append("li").text(`Median: ${median}`)
//     .append("li").text(`Mode: ${mode}`)
//     .append("li").text(`Variance: ${variance}`)
//     .append("li").text(`Standard Deviation: ${standardDeviation}`);
// });
