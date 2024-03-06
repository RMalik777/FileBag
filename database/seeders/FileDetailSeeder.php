<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class FileDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $file_details = [
            [
                'file_name' => 'SOP_Management_2024',
                'file_size' => 2.2,
                'file_path' => 'C:/Public/Management'
            ],
            [
                'file_name' => 'SOP_IT_2024',
                'file_size' => 1.5,
                'file_path' => 'C:/Public/IT'
            ],
            [
                'file_name' => 'SOP_HR_2024',
                'file_size' => 0.5,
                'file_path' => 'C:/Public/HR'
            ],
            [
                'file_name' => 'SOP_LnT_2024',
                'file_size' => 1.2,
                'file_path' => 'C:/Public/LnT'
            ],
        ];
        DB::table('file_details')->insert($file_details);

        // $file_headers = [
        //     [
        //         'version' => '1.00',
        //         'file_date' => '2023-12-12',
        //     ],
        //     [
        //         'version' => '2.00',
        //         'file_date' => '2023-10-08',
        //     ],
        //     [
        //         'version' => '4.00',
        //         'file_date' => '2024-01-04',
        //     ],
        //     [
        //         'version' => '3.00',
        //         'file_date' => '2023-12-22',
        //     ],
        //     [
        //         'version' => '1.00',
        //         'file_date' => '2023-01-08',
        //     ],
        //     [
        //         'version' => '2.00',
        //         'file_date' => '2023-02-10',
        //     ],
        // ];
        // DB::table('file_headers')->insert($file_headers);
    }
}
