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
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1bEO9_SYznC9rrtzJdHtpjdKL-AEPYkLANBgQDpx52tI&output=html&gid=1628218297');
    query.setQuery('SELECT A, C, D, E, G, H, I, J, P, R label A "Software", C "Functionality", D "Instrument Data Type", E "Approaches", G "Software Type", H "Interface", I "Operating System (OS)", J "Language", P "Last Updated", R "Website"');
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
