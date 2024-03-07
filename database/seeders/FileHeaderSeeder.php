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
            'user_id' => 1,
            'category_id' => 1
          ],
          [
            'version' => 1.0,
            'file_date' => '2023-10-08',
            'file_detail_id' => 2,
            'user_id' => 2,
            'category_id' => 2
          ],
          [
            'version' => 1.0,
            'file_date' => '2024-01-04',
            'file_detail_id' => 3,
            'user_id' => 3,
            'category_id' => 3
          ],
          [
            'version' => 1.0,
            'file_date' => '2023-11-22',
            'file_detail_id' => 4,
            'user_id' => 4,
            'category_id' => 4
          ],
          [
            'version' => 1.0,
            'file_date' => '2023-12-12',
            'file_detail_id' => 1,
            'user_id' => 1,
            'category_id' => 5
          ],
          [
            'version' => 1.0,
            'file_date' => '2023-10-08',
            'file_detail_id' => 6,
            'user_id' => 1,
            'category_id' => 6
          ],
          [
            'version' => 1.0,
            'file_date' => '2024-01-04',
            'file_detail_id' => 7,
            'user_id' => 2,
            'category_id' => 7
          ],
          [
            'version' => 1.0,
            'file_date' => '2023-11-22',
            'file_detail_id' => 8,
            'user_id' => 3,
            'category_id' => 8
          ],
          [
            'version' => 1.0,
            'file_date' => '2023-12-12',
            'file_detail_id' => 9,
            'user_id' => 4,
            'category_id' => 9
          ],
          [
            'version' => 1.0,
            'file_date' => '2023-10-08',
            'file_detail_id' => 10,
            'user_id' => 1,
            'category_id' => 10
          ],
          [
            'version' => 1.0,
            'file_date' => '2024-01-04',
            'file_detail_id' => 11,
            'user_id' => 1,
            'category_id' => 11
          ],
          [
            'version' => 1.0,
            'file_date' => '2023-11-22',
            'file_detail_id' => 12,
            'user_id' => 2,
            'category_id' => 12
          ],
          [
            'version' => 1.0,
            'file_date' => '2023-12-12',
            'file_detail_id' => 13,
            'user_id' => 3,
            'category_id' => 13
          ]
        ];
        DB::table('file_headers')->insert($file_headers);
    }
}
