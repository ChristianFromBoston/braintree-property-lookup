function submitForm() {
    var streetNumber = $('#street-number').val();
    var streetName = $('#street-name').val();
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://braintree.patriotproperties.com/search-middle-ns.asp',
        method: 'POST',
        data: {
            'SearchStreetNumber': streetNumber,
            'SearchStreetName': streetName
        },
        dataType: 'html'
    }).done(function(response) {
        console.log('Response:', response); // add this line to log the response
        var propertyValue = $(response).find('td:contains("$")').text().trim();
        $('#result').text('The property value is ' + propertyValue);
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.log('Error:', errorThrown); // add this line to log the error
        $('#result').text('Error: ' + errorThrown);
    });
}
