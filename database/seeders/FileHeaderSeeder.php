<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class FileHeaderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $file_headers = [
            [
                'version' => 1.0,
                'file_date' => '2023-12-12',
                'file_detail_id' => 1,
                'employee_id' => 1,
                'category_id' => 1
            ],
            [
                'version' => 2.0,
                'file_date' => '2023-10-08',
                'file_detail_id' => 2,
                'employee_id' => 2,
                'category_id' => 2
            ],
            [
                'version' => 4.0,
                'file_date' => '2024-01-04',
                'file_detail_id' => 3,
                'employee_id' => 3,
                'category_id' => 3
            ],
            [
                'version' => 3.0,
                'file_date' => '2023-11-22',
                'file_detail_id' => 4,
                'employee_id' => 4,
                'category_id' => 4
            ]
        ];
        DB::table('file_headers')->insert($file_headers);
    }
}
