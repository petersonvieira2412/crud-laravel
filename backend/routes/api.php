<?php

use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/products', function (Request $request) {
    $products = Products::select('name', 'image', 'price', 'stock')->get();
    return response()->json($products);
});
