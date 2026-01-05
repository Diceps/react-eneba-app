<?php

// Return JSON
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: https://diceps.github.io");

// Database Config
require_once('../../private_html/db-config.php');

try { 

    $search_query = isset($_GET['search']) ? $_GET['search'] : null;

    // Prepare and execute query
    if($search_query) {
        $stmt = $pdo->prepare("SELECT * FROM game_keys WHERE MATCH(name) AGAINST(:search_query IN NATURAL LANGUAGE MODE)");
        $stmt->bindParam(":search_query", $search_query);
        $stmt->execute();
    }
    else {
        $stmt = $pdo->prepare("SELECT * FROM game_keys");
        $stmt->execute();
    }

    $results = $stmt->fetchAll();

    // Send JSON response
    echo json_encode([
        "status"    => "success",
        "count"     => count($results),
        "results"   => $results
    ]);

} 
catch (PDOException $e) {

    http_response_code(500);
    echo json_encode([
        "status"    => "error",
        "message"   => "Database error",
        "details"   => $e->getMessage()
    ]);

}
