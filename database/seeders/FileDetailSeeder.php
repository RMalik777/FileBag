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
            // [
            //     'file_header_id' => 1,
            //     'file_name' => 'SOP_Management',
            //     'file_size' => 2.2,
            //     'file_path' => 'C:/Public/Management'
            // ],
            // [
            //     'file_header_id' => 2,
            //     'file_name' => 'SOP_IT',
            //     'file_size' => 1.5,
            //     'file_path' => 'C:/Public/IT'
            // ],
            // [
            //     'file_header_id' => 3,
            //     'file_name' => 'SOP_HR',
            //     'file_size' => 0.5,
            //     'file_path' => 'C:/Public/HR'
            // ],
            // [
            //     'file_header_id' => 4,
            //     'file_name' => 'SOP_LnT',
            //     'file_size' => 1.2,
            //     'file_path' => 'C:/Public/LnT'
            // ]
        ];
        DB::table('file_details')->insert($file_details);
    }
}
