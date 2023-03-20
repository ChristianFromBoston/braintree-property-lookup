import requests
from bs4 import BeautifulSoup

street_number = input("Please enter the street number: ")
street_name = input("Please enter the street name: ")

url = "https://braintree.patriotproperties.com/search-middle-ns.asp"

# send a GET request to the search page
response = requests.get(url)

# parse the HTML content of the search page with BeautifulSoup
soup = BeautifulSoup(response.content, "html.parser")

# find the form element and get its action URL
form = soup.find("form", {"name": "frmSearch"})
action_url = "https://braintree.patriotproperties.com/" + form.get("action")

# find the street number input field and enter the user input value
street_number_input = soup.find("input", {"id": "SearchStreetNumber"})
street_number_input["value"] = street_number

# find the street name input field and enter the user input value
street_name_input = soup.find("input", {"id": "SearchStreetName"})
street_name_input["value"] = street_name

# submit the form with the entered data
form_data = {
    "SearchStreetNumber": street_number,
    "SearchStreetName": street_name
}
response = requests.post(action_url, data=form_data)

# parse the HTML content of the result page with BeautifulSoup
soup = BeautifulSoup(response.content, "html.parser")

# find the value of the property by looking for the string "<TD align='right'>$x</TD>"
value_element = soup.find("td", string=lambda t: t and t.startswith('$'))
if value_element is not None:
    value = value_element.text.strip()
    print(f"The property value is {value}")
else:
    print("Value not found on page.")
