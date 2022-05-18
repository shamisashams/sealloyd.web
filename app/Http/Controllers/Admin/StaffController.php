<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SettingRequest;
use App\Models\Setting;
use App\Rules\MatchOldPassword;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Arr;
use App\Models\User;
use App\Models\Staff;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class StaffController extends Controller
{
    /**
     * @var SettingRepositoryInterface
     */


    /**
     * @param SettingRepositoryInterface $settingRepository
     */
    public function __construct()
    {
    }


    /**
     * @param SettingRequest $request
     * @return Application|Factory|View
     */
    public function index(Request $request)
    {
        /*return view('admin.pages.setting.index', [
            'settings' => $this->settingRepository->getData($request, ['translations'])
        ]);*/
        if ($request->input('id')) {
            echo $request->input('id');
            $deleted = DB::delete('delete from staffs where id = ?', [$request->input('id')]);
            if ($deleted) {
                return redirect(route('staff.index'));
            } else {
                return redirect(route('staff.index'));
            }
        }

        $staff = Staff::all();
        return view('admin.nowa.views.staff.index', compact('staff'));
    }
    public function addStaff(Request $request)
    {
        // dd($request->post());
        $staff = Staff::create(
            $request->only(
                'name',
                'position',
            )
        );
        // return redirect(route('client.services.evaluation', app()->getLocale()))->with('success', 'warmatebit');
        if ($staff) {
            return redirect(route('staff.index'));
        }
    }
    public function editstaff(Request $request)
    {
        $update = Staff::where('id', $request->id)->update(array(
            'name' => $request->name,
            'position' => $request->position,
        ));
        if ($update) {
            return redirect(route('staff.index'));
        }
        // dd($request->post());
    }

    /**
     * @param string $locale
     * @param Setting $setting
     * @return Application|Factory|View
     */
    public function show(string $locale, Setting $setting)
    {
        return view('admin.pages.setting.show', [
            'setting' => $setting,
        ]);
    }


    /**
     * @param string $locale
     * @param Setting $setting
     * @return Application|Factory|View
     */
    public function edit(string $locale, Setting $setting)
    {
        $url = locale_route('setting.update', $setting->id, false);
        $method = 'PUT';

        /*return view('admin.pages.setting.form', [
            'setting' => $setting,
            'url' => $url,
            'method' => $method,
        ]);*/

        return view('admin.nowa.views.setting.form', [
            'setting' => $setting,
            'url' => $url,
            'method' => $method,
        ]);
    }


    /**
     * @param SettingRequest $request
     * @param string $locale
     * @param Setting $setting
     * @return Application|RedirectResponse|Redirector
     */
    public function update(\Illuminate\Http\Request $request)
    {

        $request->validate([
            'c_pass' => ['required', new MatchOldPassword()],
            'n_pass' => ['required', 'min:5'],
            'r_pass' => ['same:n_pass']
        ]);
        //dd($request->all());

        User::find(auth()->user()->id)->update(['password' => Hash::make($request->n_pass)]);


        return redirect(locale_route('password.index'))->with('success', __('admin.update_successfully'));
    }
}
