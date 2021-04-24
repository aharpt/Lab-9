<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <?php
      // process the purchase
      $apples = $_POST["apples"];
      $bananas = $_POST["bananas"];
      $pears = $_POST["pears"];
      $shipping = $_POST["shipping"];

      $appleCost = "$" . $apples * 2;
      $bananaCost = "$" . $bananas * 1;
      $pearCost = "$" . $pears * 1.5;
      $shippingCost = 0.00;


      // prints username/password
      $username = $_POST["username"];
      $password = $_POST["password"];

      echo "<h3>Welcome, " . $username . "!</h3>";
      echo "<h3>Password: " . $password . "</h3>";

      // print receipt

      echo "<table>";
      // 1st row
      echo "<tr>";
      echo "<td></td>";
      echo "<td>Quantity</td>";
      echo "<td>Cost Per Item</td>";
      echo "<td>Sub Total</td>";
      echo "</tr>";

      // 2nd row
      echo "<tr>";
      echo "<td>Apples: </td>";
      echo "<td>" . $apples . "</td>";
      echo "<td>$2.00</td>";
      echo "<td>" . $appleCost . "</td>";
      echo "</tr>";

      // 3rd row
      echo "<tr>";
      echo "<td>Bananas: </td>";
      echo "<td>" . $bananas . "</td>";
      echo "<td>$1.00</td>";
      echo "<td>" . $bananaCost . "</td>";
      echo "</tr>";

      // 4th row
      echo "<tr>";
      echo "<td>Pears: </td>";
      echo "<td>" . $pears . "</td>";
      echo "<td>$1.50</td>";
      echo "<td>" . $pearCost . "</td>";
      echo "</tr>";

      // 5th row
      echo "<tr>";
      echo "<td>Shipping: </td>";
      echo "<td colspan='2'>" . $shipping . "</td>";
      // echo "<td></td>";
      echo "<td>";
      if ($shipping == "7 Day") {
            echo "Free";
      } else if ($shipping == "3 Day") {
        $shippingCost = 5.00;
        echo "$5.00";
      } else if ($shipping == "Overnight") {
        $shippingCost = 50.00;
        echo "$50.00";
      }

      echo "</td>";
      echo "</tr>";

      // 6th row
      $totalCost = ($apples * 2) + ($bananas * 1) + ($pears * 1.5) + $shippingCost;
      echo "<tr>";
      echo "<td colspan='3'>Total Cost: </td>";
      echo "<td> $" . $totalCost . "</td>";
      echo "</tr>";

      echo "</table>";
    ?>

  </body>
</html>
