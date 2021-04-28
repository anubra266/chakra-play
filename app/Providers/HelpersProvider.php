<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class HelpersProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        require_once app_path('Helpers/AuthUser.php');
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
