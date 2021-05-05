<?php
/*
header("content-type:text/html;charset=utf-8");

    $servername ="oceanus.cse.buffalo.edu:3306";

    $db_username ="zhang77"; 

    $db_password ="50221201";

    $connect = mysqli_connect($servername, $db_username, $db_password);

    $db=mysqli_select_db($connect,'cse442_2021_spring_team_i_db');

    $jsonobj = file_get_contents('php://input'); 
    $obj = json_decode($jsonobj,true);
*/
    

    echo'<script> alert ("Checkout Successfully") </script>';
    echo'<script> location.replace("index.html"); </script>';

    
/*
    $key=true;
        while($key){
            $randomID=rand();
            $randomID=strval($randomID);
            $query="select * from OrderHistory where orderID = '$randomID' ";

            $res=mysqli_query($connect,$query);
            $row_num=mysqli_num_rows($res);

            if($row_num == 0 ) {
                echo'<script> alert ("Checkout Successfully. Your OrderID '.$randomID.' ") </script>';
                $key = false;
                foreach($obj as $key=>$value){

                    $name = $value['name'];
                    $tag = $value['tag'];
                    $price = $value['price'];
                    $quanity = $value['inCart'];

                    $query="insert into OrderHistory(orderId,name,price,quanity) VALUES('".$randomID."','".$name."','".$price."','".$quanity."')";
                    $res=mysqli_query($connect,$query);

                    if ($res) {
                        echo '<script> alert("load to database") </script>';}
                    else {echo '<script> alert("Error!") </script>';}

                }  
            } 
        }
    mysqli_close($connect);    
*/
?>