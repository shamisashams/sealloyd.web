<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Models\Slider;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;
use App\Repositories\Eloquent\ProductRepository;
use Illuminate\Http\Request;
use App\Models\rateservice;


class DocumentationController extends Controller
{
    public function index()
    {


        $page = Page::where('key', 'services')->firstOrFail();

        $images = [];
        foreach ($page->sections as $sections) {
            if ($sections->file) {
                $images[] = asset($sections->file->getFileUrlAttribute());
            } else {
                $images[] = null;
            }
        }

        $sliders = Slider::query()->where("status", 1)->with(['file', 'translations']);
        //        dd($page->file);
        //        dd(App::getLocale());
        $products = app(ProductRepository::class)->getPopularProducts();


        //dd($products);

        return Inertia::render('Documents/OwnerApplication', ["sliders" => $sliders->get(), "page" => $page, "seo" => [
            "title" => $page->meta_title,
            "description" => $page->meta_description,
            "keywords" => $page->meta_keyword,
            "og_title" => $page->meta_og_title,
            "og_description" => $page->meta_og_description,

            //            "image" => "imgg",
            //            "locale" => App::getLocale()
        ], 'popular_products' => $products, 'images' => $images])->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }

    public function evaluation(Request $request)
    {


        $page = Page::where('key', 'services')->firstOrFail();

        $images = [];
        foreach ($page->sections as $sections) {
            if ($sections->file) {
                $images[] = asset($sections->file->getFileUrlAttribute());
            } else {
                $images[] = null;
            }
        }

        $sliders = Slider::query()->where("status", 1)->with(['file', 'translations']);
        //        dd($page->file);
        //        dd(App::getLocale());
        $products = app(ProductRepository::class)->getPopularProducts();


        //dd($products);

        return Inertia::render('Documents/Evaluation', ['success' => $request->session()->get('success'), "sliders" => $sliders->get(), "page" => $page, "seo" => [
            "title" => $page->meta_title,
            "description" => $page->meta_description,
            "keywords" => $page->meta_keyword,
            "og_title" => $page->meta_og_title,
            "og_description" => $page->meta_og_description,

            //            "image" => "imgg",
            //            "locale" => App::getLocale()
        ], 'popular_products' => $products, 'images' => $images])->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }

    public function circulars()
    {


        $page = Page::where('key', 'services')->firstOrFail();

        $images = [];
        foreach ($page->sections as $sections) {
            if ($sections->file) {
                $images[] = asset($sections->file->getFileUrlAttribute());
            } else {
                $images[] = null;
            }
        }

        $sliders = Slider::query()->where("status", 1)->with(['file', 'translations']);
        //        dd($page->file);
        //        dd(App::getLocale());
        $products = app(ProductRepository::class)->getPopularProducts();


        //dd($products);

        return Inertia::render('Documents/Circulars', ["sliders" => $sliders->get(), "page" => $page, "seo" => [
            "title" => $page->meta_title,
            "description" => $page->meta_description,
            "keywords" => $page->meta_keyword,
            "og_title" => $page->meta_og_title,
            "og_description" => $page->meta_og_description,

            //            "image" => "imgg",
            //            "locale" => App::getLocale()
        ], 'popular_products' => $products, 'images' => $images])->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }

    // add rateservices to db
    public function add_rateservices(Request $request)
    {
        $rateservices = rateservice::create(
            $request->only(
                'company_name',
                'created_at',
                'satisfied_dissatisfied',
                'recomendations',
                'repurchases',
                'rate_quality',
                'satisfied',
                'satisfied_service',
                'satisfied_price',
                'satisfied_value',
            )
        );
        return redirect(route('client.services.evaluation', app()->getLocale()))->with('success', 'warmatebit');
        // dd($request->post());

    }
}
