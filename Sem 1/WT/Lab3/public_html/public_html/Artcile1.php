<?php
  include 'dbh.inc.php';
  date_default_timezone_set('Asia/Kolkata');
  include 'comments.inc.php';
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Article Layout</title>
        <meta http-equiv="Content-Type" content="text/html" charset="utf-8">
        <!--<link rel="stylesheet" href="styles.css">-->
        <link rel="stylesheet" href="styles2.css">
        <link rel="stylesheet" href="styles3.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css">
    </head>
    <body>
        <nav class="navbar fixed-top navbar-expand-lg navbar-light " style="background-color: bisque;padding-top: 10px;">
            <div class="container-fluid">
              <a class="navbar-brand" href="#tab1"><img src="logo4.1.png" style="background-size: contain;"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.htm">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="index.htm#tab2">Latest</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="HELP.html"><b>HELP!</b></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="prevart.html">Previous Articles</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="about.html">About</a>
                  </li>
                </ul>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn " style="background-color: #f5a70a;" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
          <br><br>
          <div id="textar"  class="container1 container-fluid align-content-center "style="padding-left: 0px; padding-right: 0px;" >
            <img class="img-fluid img-responsive" src="img1.1.jpg">
            <p>Excepteur eiusmod id adipisicing proident cupidatat do Lorem velit ut elit nulla minim. In Lorem excepteur velit nulla in minim mollit deserunt qui eiusmod nisi. Cupidatat veniam culpa cillum ut occaecat incididunt id aliquip Lorem excepteur fugiat labore. In eiusmod deserunt sit velit incididunt est culpa aliqua deserunt anim ullamco quis.

Lorem adipisicing tempor id laborum qui laboris reprehenderit consectetur Lorem in quis sint. Duis proident non eiusmod veniam do nisi exercitation fugiat esse ipsum cillum. Occaecat consequat culpa nisi id Lorem commodo cillum reprehenderit minim elit laboris amet mollit. Occaecat nisi reprehenderit enim cupidatat tempor deserunt officia laboris fugiat ut fugiat laborum non. Id incididunt excepteur in amet ex proident magna dolor proident aute duis magna. Qui qui deserunt quis reprehenderit tempor.

Aliqua exercitation laborum voluptate dolor consequat aliquip aliqua labore labore proident est. Consequat aliquip proident mollit anim in et veniam Lorem magna commodo. Tempor mollit magna sit deserunt Lorem Lorem consequat nisi culpa commodo aliqua nulla officia. Magna anim consectetur sit reprehenderit. Velit pariatur est Lorem aliqua qui dolor laboris eiusmod tempor excepteur est voluptate. Labore amet elit deserunt sunt nisi non voluptate occaecat officia ea.

Exercitation ad laboris cupidatat cupidatat culpa duis adipisicing magna. Occaecat fugiat proident laborum sunt. Irure exercitation duis non officia. Sunt eu velit consequat eiusmod ea ea et.

Laborum laborum in occaecat consectetur eiusmod sint. Velit dolore id duis ea ex laborum. Cillum cillum excepteur nisi labore quis. Dolor eu incididunt excepteur nisi amet.

Qui fugiat excepteur deserunt consectetur deserunt aute cupidatat tempor sunt minim ut adipisicing. Consequat cupidatat commodo id dolore. Proident minim irure mollit et amet occaecat. Pariatur anim aliqua dolor dolore.

Esse laboris mollit aute amet quis sunt in magna. Consectetur anim nisi labore velit deserunt anim reprehenderit est adipisicing tempor voluptate adipisicing. Ut nostrud minim mollit mollit cupidatat officia incididunt do in nulla incididunt consequat.

Cillum sunt dolore sit labore laborum nisi elit velit. Veniam sunt aute excepteur in nisi ut. Adipisicing eu quis in nisi anim nisi excepteur nisi excepteur excepteur et nisi cillum dolore. Labore voluptate est fugiat aute mollit. Mollit ad nisi enim quis consectetur labore excepteur Lorem. Sit eu elit ut laborum deserunt eu ad cillum adipisicing.

Deserunt aute fugiat dolor et eu enim consectetur reprehenderit. Labore irure qui enim ea eiusmod exercitation reprehenderit ex cupidatat irure pariatur anim. Minim occaecat laboris commodo irure duis nostrud eu. Excepteur tempor do qui consequat nulla ut mollit amet. Cillum ea magna aliqua sunt et in in esse.

Anim ut qui esse nulla non duis. Qui officia amet dolore aliquip sunt sit est quis proident ipsum. Fugiat quis enim proident laboris ut Lorem ullamco labore. Sit voluptate commodo fugiat sit deserunt quis. Pariatur quis veniam duis amet adipisicing quis adipisicing cupidatat. Nulla dolor quis commodo incididunt veniam mollit voluptate.</p>
          </div> 
            <?php
            echo "<form id='commform' method='POST' action='".setComments($conn)."' style='background-color: #ffeecc;'>
              <input type='hidden' name='uid' value='Anonymous'>
              <input type='hidden' name='date' value='".date('Y-m-d H:i:s')."'>
              <input type='hidden' name='pid' value='2'>
              <hr style='border: 6px solid ; color: #f5a70a;' >
              <h1 >Comment-Section</h1>
              <textarea required class='container-fluid' name='message' placeholder='Comment Here' rows=5 style='resize:none;'></textarea><br>
              <button class='bmar' type='submit' name='commentSubmit' style='background-color: #f5a70a;'>Comment</button>
            </form>";
            //getComments($conn)
             $sql = "SELECT * FROM comments where pid='2'";
                $result =  $conn->query($sql);
                while ($row = $result->fetch_assoc()) {
                    echo "<div class='comment-box container-fluid'><p>";
                        echo $row['uid']."<br>";
                        echo $row['date']."<br>";
                        echo nl2br($row['message']);
                    echo "</p></div>";
                }
            ?>
          <script>
            if ( window.history.replaceState ) {
                    window.history.replaceState( null, null, window.location.href );
                }
          </script>
          <br>
          <hr style='border: 6px solid ; color: #f5a70a;' >
          <br>
          <div class="container-fluid" style="padding: 0%;">
              <footer class="text-center text-lg-start" style="background-color: #ffc34d;">
                <div class="container d-flex justify-content-center py-5">
                  <button type="button" class="btn btn-primary btn-lg btn-floating mx-2 border-0 shadow-lg" style="background-color: #ffa600;">
                    <a></a><i class="bi bi-instagram"></i></a>
                  </button>
                  <button type="button" class="btn btn-primary btn-lg btn-floating mx-2 border-0 shadow-lg" style="background-color: #ffa600;">
                    <i class="bi bi-google"></i>
                  </button>
                  <button type="button" class="btn btn-primary btn-lg btn-floating mx-2 border-0 shadow-lg" style="background-color: #ffa600;">
                    <i class="bi bi-twitter"></i>
                  </button>
                  <button type="button" class="btn btn-primary btn-lg btn-floating mx-2 border-0 shadow-lg" style="background-color: #ffa600;">
                    <i class="bi bi-linkedin"></i>
                  </button>
                </div>
                <div class="text-center text-white p-3 " style="background-color: rgba(0, 0, 0, 0.2);">
                  © 2020 Copyright: 
                  <a class="text-white" style="text-decoration: none;" href="index.htm#tab1">FeeltheFeeling</a>
                </div>
              </footer>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-W8fXfP3gkOKtndU4JGtKDvXbO53Wy8SZCQHczT5FMiiqmQfUpWbYdTil/SxwZgAN" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>
        </body>
</html>