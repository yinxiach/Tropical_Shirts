<?php
    
    header("content-type:text/html;charset=utf-8");

    $servername ="oceanus.cse.buffalo.edu:3306";

    $db_username ="zhang77"; 

    $db_password ="50221201";

    $connect = mysqli_connect($servername, $db_username, $db_password);

    $db=mysqli_select_db($connect,'cse442_2021_spring_team_i_db');

    $username = $_POST['username'];   

    $password = $_POST['password'];


    $query="select * from User where UserName = '$username' AND Password = '$password'";

    $res=mysqli_query($connect,$query);

    $row_num=mysqli_num_rows($res);

    if($row_num == 1 ) {
        echo'<script> alert ("Login Successfully. Welcome come back") </script>';
        echo'<script> location.replace("index.html");</script>';
    }
    else{
     echo'<script> alert ("Please Create An Account First") </script>';
     echo'<script> location.replace("index.html");</script>';

    }
    

?>