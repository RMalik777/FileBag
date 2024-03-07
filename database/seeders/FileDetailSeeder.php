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
                'file_path' => './storage/SOP MANAGEMENT.pdf'
            ],
            [
                'file_name' => 'SOP_IT_2024',
                'file_size' => 1.5,
                'file_path' => './storage/SOP IT.pdf'
            ],
            [
                'file_name' => 'SOP_HR_2024',
                'file_size' => 0.5,
                'file_path' => './storage/SOP HR.pdf'
            ],
            [
                'file_name' => 'SOP_LnD_2024',
                'file_size' => 1.2,
                'file_path' => './storage/SOP LND.pdf'
            ],
            [
                'file_name' => 'SOP_Finance_2024',
                'file_size' => 1.8,
                'file_path' => './storage/SOP FINANCE.pdf'
            ],
            [
                'file_name' => 'SOP_Sales_2024',
                'file_size' => 1.3,
                'file_path' => './storage/SOP SALES.pdf'
            ],
            [
                'file_name' => 'SOP_Marketing_2024',
                'file_size' => 1.7,
                'file_path' => './storage/SOP MARKETING.pdf'
            ],
            [
                'file_name' => 'SOP_Production_2024',
                'file_size' => 1.9,
                'file_path' => './storage/SOP PRODUCTION.pdf'
            ],
            [
                'file_name' => 'SOP_Quality_2024',
                'file_size' => 1.6,
                'file_path' => './storage/SOP QUALITY.pdf'
            ],
            [
                'file_name' => 'SOP_R&D_2024',
                'file_size' => 1.4,
                'file_path' => './storage/SOP R&D.pdf'
            ],
            [
                'file_name' => 'SOP_Purchase_2024',
                'file_size' => 1.1,
                'file_path' => './storage/SOP PURCHASE.pdf'
            ],
            [
                'file_name' => 'SOP_Stores_2024',
                'file_size' => 1.0,
                'file_path' => './storage/SOP STORES.pdf'
            ],
            [
                'file_name' => 'SOP_Logistics_2024',
                'file_size' => 1.2,
                'file_path' => './storage/SOP LOGISTICS.pdf'
            ],
            [
                'file_name' => 'SOP_Security_2024',
                'file_size' => 1.3,
                'file_path' => './storage/SOP SECURITY.pdf'
            ],
            [
                'file_name' => 'SOP_Admin_2024',
                'file_size' => 1.4,
                'file_path' => './storage/SOP ADMIN.pdf'
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
