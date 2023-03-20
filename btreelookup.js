function submitForm() {
    var streetNumber = $('#street-number').val();
    var streetName = $('#street-name').val();
    console.log('Submitting form with street number:', streetNumber, 'and street name:', streetName);
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://braintree.patriotproperties.com/search-middle-ns.asp',
        method: 'POST',
        data: {
            'SearchStreetNumber': streetNumber,
            'SearchStreetName': streetName
        },
        dataType: 'html'
    }).done(function(response) {
        console.log('Received response:', response);
        var propertyValue = $(response).find('td:contains("$")').text().trim();
        console.log('Found property value:', propertyValue);
        $('#result').text('The property value is ' + propertyValue);
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error('Error:', errorThrown);
        $('#result').text('Error: ' + errorThrown);
    });
}
