
// function buildMetadata(sample) {

// Read in samples.json

    // d3.json("samples.json").then((data) => {
    //   var metadata = data.metadata;
    //   metadata.html("");

// Filter data for sample number
var Array = metadata.filter(sampleObj => sampleObj.id == sample);
var data = Array[0];

// Add data to panel
Object.entries(data).forEach(([key, value]) => {
    metadata.append("h6").text(`${key.toUpperCase()}: ${value}`);
  });


function buildCharts(sample) {
    d3.json("samples.json").then((data) => {
    var samples = data.samples;
    var Array = samples.filter(sampleObj => sampleObj.id == sample);
    var data = Array[0];
  
    var otu_ids = data.otu_ids;
    var otu_labels = data.otu_labels;
    var sample_values = data.sample_values;
  
// Initialize the dashboard
init();