@extends('admin.nowa.views.layouts.app')

@section('styles')

    <!--- Internal Select2 css-->
    <link href="{{asset('assets/plugins/select2/css/select2.min.css')}}" rel="stylesheet">

    <!---Internal Fileupload css-->
    <link href="{{asset('assets/plugins/fileuploads/css/fileupload.css')}}" rel="stylesheet" type="text/css"/>

    <!---Internal Fancy uploader css-->
    <link href="{{asset('assets/plugins/fancyuploder/fancy_fileupload.css')}}" rel="stylesheet" />

    <!--Internal Sumoselect css-->
    <link rel="stylesheet" href="{{asset('assets/plugins/sumoselect/sumoselect.css')}}">

    <!--Internal  TelephoneInput css-->
    <link rel="stylesheet" href="{{asset('assets/plugins/telephoneinput/telephoneinput.css')}}">

    <link rel="stylesheet" href="{{asset('uploader/image-uploader.css')}}">
    <script src="https://kit.fontawesome.com/14fa96d7be.js" crossorigin="anonymous"></script>


@endsection

@section('content')

    <!-- breadcrumb -->


  @php
  $link = route('staff.index');
  @endphp

<div class="container-fluid bg-white p-1" >
    <form class='mt-5 shadow p-3 mb-5 rounded' action="{{route('staff.addstaff')}}" method="POST">
        @csrf
        <div class="form-group">
          <label for="exampleInputEmail1">სახელი გვარი</label>
          <input type="text" name='name'  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name-lastname">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">პოზიცია</label>
          <input type="text" name='position' class="form-control" id="exampleInputPassword1" placeholder="position">
        </div>
        <button type="submit" class="btn btn-primary">დამატება</button>
      </form>

    <table class="table text-center">
        <thead class="table-white">
            <th scope="col">#</th>
            <th scope="col">სახელი გვარი</th>
            <th scope="col">პოზიცია</th>
            <th scope="col">წაშლა</th>
            <th scope="col">ჩასწორება</th>
        </thead>
        <tbody>
            <tr>
            @foreach ($staff as $k=>$v)

            <td>{{++$k}}</td>
            <form action="{{route('staff.editstaff')}}" method="POST">
                @csrf
            <td><input name='name' type="text" value='{{$v['name']}}' class="form-control"></td>
            <input name='id' type="hidden" value='{{$v['id']}}' class="form-control">
            <td><input name='position' type="text" value='{{$v['position']}}' class="form-control"></td>
            <td><i style='cursor:pointer' class="fas fa-times-circle fa-2x text-danger" onclick="location.href='{{$link}}'+'?id='+{{$v['id']}} "></i></td>
            {{-- <td><i class="fas fa-edit fa-2x text-info" style='cursor:pointer'></i></td> --}}
            <td><button type="submit" class='btn'><i class="fas fa-edit fa-2x text-info" style='cursor:pointer'></i></button></td>
        </form>

           </tr>
          @endforeach

        </tbody>
      </table>
</div>


@endsection

@section('scripts')

    <!--Internal  Datepicker js -->
    <script src="{{asset('assets/plugins/jquery-ui/ui/widgets/datepicker.js')}}"></script>

    <!-- Internal Select2 js-->
    <script src="{{asset('assets/plugins/select2/js/select2.min.js')}}"></script>

    <!--Internal Fileuploads js-->
    <script src="{{asset('assets/plugins/fileuploads/js/fileupload.js')}}"></script>
    <script src="{{asset('assets/plugins/fileuploads/js/file-upload.js')}}"></script>

    <!--Internal Fancy uploader js-->
    <script src="{{asset('assets/plugins/fancyuploder/jquery.ui.widget.js')}}"></script>
    <script src="{{asset('assets/plugins/fancyuploder/jquery.fileupload.js')}}"></script>
    <script src="{{asset('assets/plugins/fancyuploder/jquery.iframe-transport.js')}}"></script>
    <script src="{{asset('assets/plugins/fancyuploder/jquery.fancy-fileupload.js')}}"></script>
    <script src="{{asset('assets/plugins/fancyuploder/fancy-uploader.js')}}"></script>

    <!--Internal  Form-elements js-->
    <script src="{{asset('assets/js/advanced-form-elements.js')}}"></script>
    <script src="{{asset('assets/js/select2.js')}}"></script>

    <!--Internal Sumoselect js-->
    <script src="{{asset('assets/plugins/sumoselect/jquery.sumoselect.js')}}"></script>

    <!-- Internal TelephoneInput js-->
    <script src="{{asset('assets/plugins/telephoneinput/telephoneinput.js')}}"></script>
    <script src="{{asset('assets/plugins/telephoneinput/inttelephoneinput.js')}}"></script>

    <script src="{{asset('uploader/image-uploader.js')}}"></script>



@endsection

























