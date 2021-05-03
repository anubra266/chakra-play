<?php

use Illuminate\Support\Facades\Route;

$router->inertia('/', 'index')->name('home');

Route::get('/about', function () {
    sleep(1); //To see progress bar
    return inertia('about');
})->name('about');
