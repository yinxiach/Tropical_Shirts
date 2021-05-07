<?php
   header("content-type:text/html;charset=utf-8");


    $servername = "oceanus.cse.buffalo.edu:3306"; 
    $db_username = "xleng"; 
    $db_password = "50213575";
   
    
    $connect = mysqli_connect($servername, $db_username, $db_password); 
  
    $db=mysqli_select_db($connect,'cse442_2021_spring_team_i_db');  

    $username=$_POST['username'];
    $password=$_POST['password']; 

    $query="select * from User where UserName='$username'";
    $res=mysqli_query($connect,$query);
    $row_num=mysqli_num_rows($res);
    if ($row_num!=0){
        echo '<script> alert("Error: The username exists!") </script>';
    }
    else{
     
        $userNum_q="select * from User";
	    $userNum_res=mysqli_query($connect,$userNum_q);
    	$userNum_row_num=mysqli_num_rows($userNum_res);
        $userNum= $userNum_row_num+1;
        // insert new user_id, username and password into database
        $query="insert into User(User_id,UserName,Password) values('{$userNum}','{$username}','{$password}')";
        $res=mysqli_query($connect,$query);
        if ($res) {
            echo '<script> alert("Account created successfully!") </script>';}
        else {echo '<script> alert("Error: Account created failed!") </script>';}
    }
    mysqli_close($connect);

    echo '<script> location.replace("Login.html"); </script>';

?>

