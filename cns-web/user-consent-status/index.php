		        <form action="" method="post">
              
              
<p>
                <label for="cust_name">Email</label>
                <input type="text" name="cust_name" id="cust_name">
            </p>
    
            
           
            
            
  
              
            <input type="submit" value="Search">
                    </form>
		
		<?php
		if(isset($_REQUEST['cust_name']))
		{
		  $cust_name = trim($_REQUEST['cust_name']);
$conn = mysqli_connect("localhost", "cnsweb_ndnccheck", "+VqFix;}]?Q7", "cnsweb_ndnccheck");
 $sql="SELECT * FROM `userdetails` where cust_emailid='".$cust_name."'";
$queryl=mysqli_query($conn, $sql);
	?>
	


	<table border="1">
	    <tr>
	    <th>ID</th>
	    	    <th>cust_name</th>
	    <th>cust_phone</th>
	    <th>cust_address</th>
	    <th>cust_emailid</th>
	    <th>cust_domain</th>
	    <th>reg_date</th>
	    <th>enq_date</th>
	    <th>service</th>
	    <th>markettingcall</th>
	    <th>markettingemail</th>

	    </tr>
	    
		<?php
while($row=mysqli_fetch_array( $queryl))
{
?><tr>
	    <td><?php echo $row['id']; ?></td>
	    	    <td><?php echo $row['cust_name']; ?></td>
	    <td><?php echo $row['cust_phone']; ?></td>
	    <td><?php echo $row['cust_address']; ?></td>
	    <td><?php echo $row['cust_emailid']; ?></td>
	    <td><?php echo $row['cust_domain']; ?></td>
	    <td><?php echo $row['reg_date']; ?></td>
	    <td><?php echo $row['enq_date']; ?></td>
	    <td><?php echo $row['service']; ?></td>
	    	    <td><?php echo $row['markettingcall']; ?></td>
	    <td><?php echo $row['markettingemail']; ?></td>


</tr>
		<?php
		
}
}
		?>
</table>