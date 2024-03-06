<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $employees = [
            [
                'username' => 'Rafli',
                'password' => bcrypt('rafli123')
            ],
            [
                'username' => 'Calvin',
                'password' => bcrypt('calvin888')
            ],
            [
                'username' => 'Vincent',
                'password' => bcrypt('vincentuhuy')
            ],
            [
                'username' => 'Hans',
                'password' => bcrypt('hansen')
            ]
        ];
        DB::table('employees')->insert($employees);
    }
}
