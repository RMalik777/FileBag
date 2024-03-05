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
        Schema::create('file_details', function (Blueprint $table) {
            $table->id('file_detail_id');
            $table->unsignedBigInteger('file_header_id');`
            $table->foreignId('file_header_id')->constrained('file_headers')->onUpdate('cascade');
            $table->string('file_name', 255);
            $table->float('file_size');
            $table->string('file_path', 255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('file_details');
    }
};
