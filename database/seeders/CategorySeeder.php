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
            ],
            [
                'category_name' => 'Finance'],
            [
                'category_name' => 'Sales'
            ],
            [
                'category_name' => 'Marketing'
            ],
            [
                'category_name' => 'Production'
            ],
            [
                'category_name' => 'Quality'
            ],
            [
                'category_name' => 'R&D'
            ],
            [
                'category_name' => 'Purchase'
            ],
            [
                'category_name' => 'Stores'
            ],
            [
                'category_name' => 'Logistics'
            ],
            [
                'category_name' => 'Security'
            ],
            [
                'category_name' => 'Admin'
            ],
            [
                'category_name' => 'Legal'
            ],
        ];
        DB::table('categories')->insert($categories);
    }
}
