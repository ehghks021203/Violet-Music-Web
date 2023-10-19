<?php               
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
    header('Content-Type: application/json');


    if(isset($_POST) && $_SERVER['REQUEST_METHOD'] == "POST") {     // 비정상 접속을 막기 위함 (POST로 접속 시 데이터 전송)
        $_POST = json_decode(file_get_contents("php://input"),true); 
        @extract($_POST); // $_POST['loginID'] 라고 쓰지 않고, $loginID 라고 써도 인식되게 함
        $host = 'localhost';
        $user = 'violet';
        $pw = 'violet123';
        $dbName = 'music';

        $conn = mysqli_connect($host, $user, $pw, $dbName);
        if(!$conn){
            die("접속 실패: ". $conn->connect_error);
        }

        $sql = "SELECT * FROM user WHERE email = '$email'";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_array($result);

        if($row != null){
            if (password_verify($password, $row['pwd'])) {
                $result_response = json_encode(["status" => "login", "message" => $row, 'response' => 200]);
            }
            else{
                $result_response = json_encode(["status" => "pwfail", "message" => "fail", 'response' => 400]);
            }
        }else{
            $result_response = json_encode(["status" => "emfail", "message" => "fail", 'response' => 400]);
        }
        echo $result_response;
    }
?>