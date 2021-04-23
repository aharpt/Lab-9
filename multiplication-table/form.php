<?php
echo "<table>";
echo "<tr>";

for ($i=0; $i <= 100; $i++) {
  if ($i == 0) {
    echo "<td></td>";
  } else {
    echo "<td>" . $i . "</td>";
  }
}

echo "</tr>";


for ($i=1; $i <= 100; $i++) {
  $j = 1;
  echo "<tr>";
  echo "<td>" . $i . "</td>";

  while ($j <= 100) {
    echo "<td>" . ($i * $j) . "</td>";
    $j++;
  }

  echo "</tr>";
}

echo "</table>";
?>
