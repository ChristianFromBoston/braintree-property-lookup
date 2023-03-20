$(document).ready(function() {
  // listen for the form submission event
  $('#property-form').submit(function(event) {
    // prevent the default form submission behavior
    event.preventDefault();
    // get the user input values from the form
    var streetNumber = $('#street-number').val();
    var streetName = $('#street-name').val();
    // send an AJAX POST request to the server
    $.ajax({
      url: 'https://cors-anywhere.herokuapp.com/https://braintree.patriotproperties.com/search-middle-ns.asp',
      method: 'POST',
      data: {
        'SearchStreetNumber': streetNumber,
        'SearchStreetName': streetName
      },
      dataType: 'html'
    }).done(function(response) {
      // parse the HTML response and extract the property value
      var propertyValue = $(response).find('td:contains("$")').text().trim();
      // display the property value to the user
      $('#result').text('The property value is ' + propertyValue);
    }).fail(function(jqXHR, textStatus, errorThrown) {
      // display an error message if the request fails
      $('#result').text('Error: ' + errorThrown);
    });
  });
});
