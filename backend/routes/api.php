<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/info', function (Request $request) {
    return response()->json([
        'name' => 'Plataforma Online Método Queimar',
        'description' => 'Uma plataforma de emagrecimento focada em mulheres',
        'price' => 59.99
    ]);
});
