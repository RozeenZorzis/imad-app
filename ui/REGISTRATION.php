<?php
$db = pg_connect("host=localhost port=5432 dbname=rozeenzorzis user=rozeenzorzis password=db-rozeenzorzis-27743
");
$query = "INSERT INTO registration VALUES ('$_POST[Name]','$_POST[Age]',
'$_POST[Contact_No]','$_POST[DOB]','$_POST[Sex]','$_POST[City]')";
$result = pg_query($query); 
?>
