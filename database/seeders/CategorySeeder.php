<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'category_name' => 'Management'
            ],
            [
                'category_name' => 'IT'
            ],
            [
                'category_name' => 'HR'
            ],
            [
                'category_name' => 'LnT'
            ]
        ];
        DB::table('categories')->insert($categories);
    }
}
