<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Property Value Search</title>
	<!-- include jQuery library from a CDN -->
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<!-- include your script.js file -->
	<script src="script.js"></script>
</head>
<body>
	<h1>Property Value Search</h1>
	<form id="property-value-form">
		<label for="street-number-input">Street Number:</label>
		<input type="text" id="street-number-input" name="street-number">
		<label for="street-name-input">Street Name:</label>
		<input type="text" id="street-name-input" name="street-name">
		<button type="submit" id="submit-button">Search</button>
	</form>
	<div id="result"></div>
</body>
</html>
