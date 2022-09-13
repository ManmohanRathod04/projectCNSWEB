<?php
$servername = "localhost";
$username = "cnsweb_ndnccheck";
$password = "+VqFix;}]?Q7";
$dbname = "cnsweb_ndnccheck";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO userdetails (cust_name, cust_phone,cust_emailid, cust_address,cust_domain,reg_date,enq_date,service_opt,opted_marketing,promotional_calls)
VALUES ('John', '7838808080','chandan_988@yahoo.com', 'delhi','cns.com','43/2/2020','2/2/2021','yes','yes','yes')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>