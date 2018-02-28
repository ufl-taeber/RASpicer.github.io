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
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1a096jlzbAwTxUdvTtJB2bwfkBRdDcMKrkywS8YZf344');
    query.setQuery('SELECT A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W label A "Software", B "Description", C "Functionality Category(-ies)", D "Functionality Sub-Category", E "Instrument Data Type", F "Instrument Data Type Sub-Category", G "Approaches", H "Computer Skills", I "Software Type", J "Interface", K "Operating System (OS)", L "Language", M "Version", N "Dependencies", O "Input Formats - Open", P "Input Formats - Proprietary", Q "Published", R "Last Updated", S "License", T "Website", U "Paper", V "PMID" W "Test" ');
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
