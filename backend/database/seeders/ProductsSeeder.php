<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Products;
use Faker\Factory as Faker;

class ProductsSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        foreach (range(1, 20) as $index) {
            Products::create([
                'name' => $faker->word,
                'description' => $faker->sentence(10),
                'price' => $faker->randomFloat(2, 10, 100),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
