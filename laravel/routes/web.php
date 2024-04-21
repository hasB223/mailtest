<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use App\Mail\TestMail;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/send-mail', function () {

    // Record the start time
    $startTime = microtime(true);

    // Send the email
    Mail::to('hasbullah.work@gmail.com')->send(new TestMail());

    // Calculate the elapsed time
    $endTime = microtime(true);
    $elapsedTimeSeconds = $endTime - $startTime;

    // Format the elapsed time to remove decimal points
    $elapsedTimeSecondsFormatted = number_format($elapsedTimeSeconds, 0);

    return 'Test email sent! Email delivery time: ' . $elapsedTimeSecondsFormatted . ' seconds';
});
