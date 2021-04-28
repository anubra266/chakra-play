<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        $response = parent::render($request, $exception);
        if (
            //show user friendly error pages in production
            !app()->environment('local')
            && in_array($response->status(), [500, 503, 404, 403])
        ) {
            return inertia('error', ['status' => $response->status()])
                ->toResponse($request)
                ->setStatusCode($response->status());
        }
        if ($response->status() === 419) {
            return back()->with([
                'warning' => 'The page expired, please try again.',
            ]);
        }
        return $response;
    }
}
