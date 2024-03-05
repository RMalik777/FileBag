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
                'password' => 'rafli123'
            ],
            [
                'username' => 'Calvin',
                'password' => 'calvin888'
            ],
            [
                'username' => 'Vincent',
                'password' => 'vincentuhuy'
            ],
            [
                'username' => 'Hans',
                'password' => 'hansen'
            ]
        ];
        DB::table('employees')->insert($employees);
    }
}
