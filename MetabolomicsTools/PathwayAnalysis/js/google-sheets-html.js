/*!
 * 
 * Google Sheets To HTML v0.9a
 * 
 * To use, simply replace the "tq?key=" value in the
 * URL below with your own unique Google document ID
 * 
 * The Google document's sharing must be set to public
 * 
 */

google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1bEO9_SYznC9rrtzJdHtpjdKL-AEPYkLANBgQDpx52tI');
    query.setQuery('SELECT U, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, V, W, T label U "Software", B "Description", C "Functionality", D "Instrument Data Type", E "Approaches", F "Computer Skills", G "Software Type", H "Interface", I "Operating System (OS)", J "Language", K "Version", L "Dependencies", M "Input Formats - Open", N "Input Formats - Proprietary", O "Published", P "Last Updated", Q "License", V "Website", W "Paper", T "PMID" ');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);
