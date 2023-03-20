function submitForm() {
  var streetNumber = $('#street-number').val();
  var streetName = $('#street-name').val();
  console.log('Submitting form with streetNumber:', streetNumber, 'and streetName:', streetName);
  $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/https://braintree.patriotproperties.com/search-middle-ns.asp',
    method: 'POST',
    data: {
      'SearchStreetNumber': streetNumber,
      'SearchStreetName': streetName
    },
    dataType: 'html'
  }).done(function(response) {
    var propertyValue = $(response).find('td:contains("$")').text().trim();
    console.log('Response received:', response);
    console.log('Property value extracted:', propertyValue);
    $('#result').text('The property value is ' + propertyValue);
  }).fail(function(jqXHR, textStatus, errorThrown) {
    console.error('Error occurred during AJAX request:', errorThrown);
    $('#result').text('Error: ' + errorThrown);
  });
}
