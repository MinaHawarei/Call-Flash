<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
use App\Http\Controllers\vocController;
use App\Http\Controllers\ActivityLogController;
use App\Exports\VocExport;
use Maatwebsite\Excel\Facades\Excel;



Route::post('/voc', [vocController::class, 'store']);


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('dashboard');
    })->name('home');

    Route::get('/logs', [vocController::class, 'index'])->name('logs');
    Route::get('/analysis', [vocController::class, 'analysis'])->name('analysis');
    Route::post('/voc-toggle', [vocController::class, 'toggleAutoSave']);
    Route::post('/voc-clear-all', [vocController::class, 'destroyAll']);

    Route::get('/voc-export', function () {return Excel::download(new VocExport, 'voc_logs.xlsx');
});


});



Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('Admin/dashboard');
    })->name('dashboard');

    Route::prefix('admin')->group(function () {
        // Dashboard
        // Users
        Route::get('/users', [UserController::class, 'index'])->name('admin-users');
        Route::put('/users/{id}', [UserController::class, 'update'])->name('admin-users-update');
        Route::delete('/users/{id}', [UserController::class, 'destroy'])->name('admin-users-destroy');


        Route::get('/activity-logs', [ActivityLogController::class, 'index'])->name('activity-logs');
    });
});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
