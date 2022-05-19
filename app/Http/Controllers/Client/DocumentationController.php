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
use App\Models\Owneraplication;
use App\Models\Ownerapplication;

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

    // send owner application to db
    public function sendapplication(Request $request)
    {
        $ownwerapplciation = Ownerapplication::create(
            $request->only(
                'name_of_ship',
                'ex_names',
                'imo_no',
                'type',
                'existing_flag',
                'call_sign',
                'grt',
                'nrt',
                'dwt',
                'date_keel_laid',
                'build',
                'framing_system',
                'builders',
                'loa',
                'lpp',
                'breath',
                'depth',
                'main_engine_builders',
                'type2',
                'bhp',
                'number_and_type_of_generators',
                'cargogear',
                'owning_company',
                'managing_company',
                'place_date',
                'name_of_applicant',
                'hull_machinery',
                'cargo_gear',
                'load_line',
                'safety_constructor',
                'safety_equipment',
                'passenger_safety',
                'safety_radio',
                'marpol_annexi',
                'marpol_annexii',
                'marpol_annexiii',
                'marpol_annexv',
                'marpol_annex_vi',
                'energy_efficiency',
                'engine_iopc',
                'fishing_vessel',
                'tonnage_certificate',
                'solid_bulk_cards',
                'dangerous_goods',
                'doc',
                'smc',
                'isps_on_board_verification',
                'mlc_2006',
                'ballast_water',
                'antifouling_survey',
                'exemption',
                'cargo_ship_safety_under_500_grt',
                'seaworthiness',
                'hsc_dsc_safety',
                // 'manual_approval',
            )
        );
        return redirect(route('client.services.ownerapplication', app()->getLocale()))->with('success', 'warmatebit');
    }
}
