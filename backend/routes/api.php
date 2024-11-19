<?php

use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;

Route::get('/products', function (Request $request) {
    $products = Products::select('name', 'image', 'price', 'stock')->get();
    return response()->json($products);
});

Route::post('/products/add', function (Request $request) {
    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:255',
        'description' => 'required|string|max:255',
        'image' => 'required|string|max:255',
        'price' => 'required|numeric|min:0',
        'stock' => 'required|integer|min:0',
    ]);

    if ($validator->fails()) {
        return response()->json([
            'error' => $validator->errors()
        ], 400);
    }

    $product = Products::create([
        'name' => $request->input('name'),
        'description' => $request->input('description'),
        'image' => $request->input('image'),
        'price' => $request->input('price'),
        'stock' => $request->input('stock'),
    ]);

    return response()->json([
        'message' => 'Produto cadastrado com sucesso!',
        'product' => $product
    ], 201);
});
