<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Rateservices extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('rateservices', function (Blueprint $table) {
            $table->id();
            $table->string('company_name');
            $table->date('created_at');
            $table->double('satisfied_dissatisfied', 8, 2);
            $table->string('recomendations');
            $table->string('repurchases');
            $table->string('rate_quality');
            $table->string('satisfied');
            $table->string('satisfied_service');
            $table->string('satisfied_price');
            $table->string('satisfied_value');
            // $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('rateservices');
    }
}
