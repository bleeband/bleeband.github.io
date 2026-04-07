<?php
// Simule un envoi réussi
$succes = true;
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Test succès</title>
    <style>
        .success {
            background: #d4edda;
            color: #155724;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #c3e6cb;
            width: 300px;
            margin: 20px auto;
            text-align: center;
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>

<?php if ($succes): ?>
    <div class="success">
        ✅ Message envoyé avec succès !
    </div>
<?php endif; ?>

</body>
</html>