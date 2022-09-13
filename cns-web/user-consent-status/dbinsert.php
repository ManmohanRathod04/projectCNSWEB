<!DOCTYPE html>
<html>

<head>
	<title>Insert Page page</title>
</head>

<body>
	<center>
		<?php

		// servername => localhost
		// username => root
		// password => empty
		// database name => staff
		$conn = mysqli_connect("localhost", "cnsweb_ndnccheck", "+VqFix;}]?Q7", "cnsweb_ndnccheck");
		
		// Check connection
		if($conn === false){
			die("ERROR: Could not connect. "
				. mysqli_connect_error());
		}
		
		// Taking all 5 values from the form data(input)
		$cust_name = $_REQUEST['cust_name'];
		$cust_phone = $_REQUEST['cust_phone'];
		$cust_emailid = $_REQUEST['cust_emailid'];
		$cust_domain = $_REQUEST['cust_domain'];
		$reg_date = $_REQUEST['reg_date'];
		$enq_date = $_REQUEST['enq_date'];
		$cust_address = $_REQUEST['cust_address'];
		$markettingcall = $_REQUEST['markettingcall'];
		$markettingemail = $_REQUEST['markettingemail'];
		$service = $_REQUEST['service'];

		// Performing insert query execution
		// here our table name is college
		$sql = "INSERT INTO userdetails VALUES ('$cust_name',
			'$cust_phone','$cust_address','$cust_emailid','$cust_domain','$reg_date','$enq_date,'Whois Databse','Yes','Yes')";
		$sql= "INSERT INTO `userdetails` (
		    `cust_name`, 
		    `cust_phone`,
		    `cust_address`,
		    `cust_emailid`,
		    `cust_domain`,
		    `reg_date`,
		    `enq_date`, 
		    `id`,
		    `service`,
		    `markettingcall`,
		    `markettingemail`) VALUES (
		        '".$cust_name."',
		        '".$cust_phone."', 
		        '".$cust_address."', 
		        '".$cust_emailid."', 
		        '".$cust_domain."',
		        '".$reg_date."',
		        '".$enq_date."', 
		        NULL, 
		        '".$service."',
		        '".$markettingcall."',
		        '".$markettingemail."')";
		if(mysqli_query($conn, $sql)){
			echo "<h3>data stored in a database successfully."
				. " Please browse your localhost php my admin"
				. " to view the updated data</h3>";

			echo nl2br("\n$first_name\n $last_name\n "
				. "$gender\n $address\n $email");
		} else{
			echo "ERROR: Hush! Sorry $sql. "
				. mysqli_error($conn);
		}
		
		// Close connection
		mysqli_close($conn);
		?>
	</center>
</body>

</html>
