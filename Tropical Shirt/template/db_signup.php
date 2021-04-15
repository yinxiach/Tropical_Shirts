<?php
   header("content-type:text/html;charset=utf-8");

  // echo 'Hello';
   
   //$username=$_POST['username'];
   //$password=$_POST['password']; 

   //connect database
    $servername = "oceanus.cse.buffalo.edu:3306"; 
    $db_username = "xleng"; 
    $db_password = "50213575";
   
    
     $connect = mysqli_connect($servername, $db_username, $db_password); 
   
   /* if($connect) {
        echo "database connect success"; 
    } 
    else {
        die("Error:". mysqli_connect_error()); 
    } */
    $db=mysqli_select_db($connect,'cse442_2021_spring_team_i_db');  

    //get username and password from html form
    $username=$_POST['username'];
    $password=$_POST['password']; 

    //check if the username exists
    $query="select * from User where UserName='$username'";
    $res=mysqli_query($connect,$query);
    $row_num=mysqli_num_rows($res);
    if ($row_num!=0){
        echo '<script> alert("Error: The username exists!") </script>';
    }
    else{
        // username doesn't exists

        //create user_id for new user
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
    echo '<script> location.replace("login.html"); </script>';
?>