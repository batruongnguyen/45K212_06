 <?php
    $link =  mysqli_connect("192.18.142.21:3306","team","Team12345678@") or die ("an error has been found: ".mysqli_error());
    $db_selected = mysqli_select_db($link,'beautyspa');
    $sql1 = "SELECT * FROM Web_review WHERE star > 3 Order by ID DESC LIMIT 10;";
    $fetch = mysqli_query($link,$sql1);
    $result = mysqli_fetch_all($fetch);
    foreach($result as $key => &$record){
        // echo json_encode($record[1]);
        $sql2 = "SELECT * FROM Users where user_id='".$record[1]."'";
        $fetch2 = mysqli_query($link,$sql2);
        array_push($record, mysqli_fetch_array($fetch2));
    }
    echo json_encode($result);
    mysqli_free_result($fetch);
    mysqli_close($link);
    header('Content-Type: application/json; charset=utf-8');
    exit();
?>