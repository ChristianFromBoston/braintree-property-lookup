$.ajax({
    url: 'https://cors-anywhere.herokuapp.com/https://braintree.patriotproperties.com/search-middle-ns.asp',
    method: 'POST',
    data: {
        'SearchStreetNumber': streetNumber,
        'SearchStreetName': streetName
    },
    dataType: 'html',
    timeout: 5000 // set timeout to 5 seconds
}).done(function(response) {
    var propertyValue = $(response).find('td:contains("$")').text().trim();
    $('#result').text('The property value is ' + propertyValue);
}).fail(function(jqXHR, textStatus, errorThrown) {
    $('#result').text('Error: ' + errorThrown);
});
