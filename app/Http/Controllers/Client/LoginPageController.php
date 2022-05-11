<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Models\Slider;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;
use App\Repositories\Eloquent\ProductRepository;


class LoginPageController extends Controller
{
    public function Login()
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

        return Inertia::render('Login/Login', ["sliders" => $sliders->get(), "page" => $page, "seo" => [
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

    public function purpose()
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

        return Inertia::render('AboutUs/Purpose', ["sliders" => $sliders->get(), "page" => $page, "seo" => [
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

    public function ethics()
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

        return Inertia::render('AboutUs/Ethics', ["sliders" => $sliders->get(), "page" => $page, "seo" => [
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

    public function politics()
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

        return Inertia::render('AboutUs/Politics', ["sliders" => $sliders->get(), "page" => $page, "seo" => [
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

    public function management()
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

        return Inertia::render('AboutUs/Management', ["sliders" => $sliders->get(), "page" => $page, "seo" => [
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
    public function recognition()
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

        return Inertia::render('AboutUs/Recognition', ["sliders" => $sliders->get(), "page" => $page, "seo" => [
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
}
