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
            $table->id();
            $table->float('version')->unique();
            $table->date('file_date')->useCurrent();
            $table->foreignId('employee_id')->constrained()->onUpdate('cascade');
            $table->foreignId('category_id')->constrained()->onUpdate('cascade');
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
