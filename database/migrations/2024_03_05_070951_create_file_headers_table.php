<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('file_headers', function (Blueprint $table) {
            $table->id('file_header_id');
            $table->float('version');
            $table->date('file_date')->useCurrent();
            $table->unsignedBigInteger('employee_id');
            $table->unsignedBigInteger('category_id');
            $table->foreignId('employee_id')->constrained('employees')->onUpdate('cascade');
            $table->foreignId('category_id')->constrained('categories')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('file_headers');
    }
};
