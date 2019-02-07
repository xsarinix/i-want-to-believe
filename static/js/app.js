// from data.js
var sightings = data;

// Select the submit button
var submit = d3.select("#filters");

// Select the tbody
var tbody = d3.select("tbody");

// Map dates & eliminate duplicates
var dates = sightings.map(sighting => sighting.datetime);
console.log(dates);
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
var uniqueDates = dates.filter(onlyUnique);
console.log(uniqueDates);

// Add unique dates to select dropdown
var dropdownBox = d3.select("#filters");
uniqueDates.forEach(date => dropdownBox.append("option").text(date));

// Dropdown Filter
submit.on("change", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value of the selection
    var inputValue = submit.property("value");

    console.log(inputValue);
    console.log(sightings);

    // Filter data by selected date
    var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    // Clear any rows from previous filters
    tbody.html("");

    // Add rows to table
    filteredData.forEach(function(sighting) {
        console.log(sighting);
        var row = tbody.append("tr");

        // Add cells to rows
        Object.entries(sighting).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});