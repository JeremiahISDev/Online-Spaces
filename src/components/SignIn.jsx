import { LockClosedIcon } from '@heroicons/react/solid'

export default function Example() {
return (
<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <script>
    $(document).ready(function(){
      $("#form").submit(function (event) {
        event.preventDefault();
          $.ajax({
          type: 'POST',
          url: '/SignIn',
          data: $('#form').serialize(),
          dataType: "json",
          success: function (response) {
            //alert("a");
            //console.log(response.Success);
            $('#form')[0].reset();
            document.getElementById("check").innerHTML = response.Success;
            //ADD THIS CODE
            setTimeout(function () {
              document.getElementById("check").innerHTML = "";
            }, 3000);
            if (response.Success == "Success!") {
              document.getElementById("aa").click();
            };
          },
          error: function () {
          }
          })
      })};
    {});
  </script>
  <div className="max-w-md w-full space-y-8">
    <div>
      <img
      className="mx-auto h-44 w-auto"
      src="../assets/Logo.png"
      alt="Online Spaces"
    />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign In</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
      Or{' '}
        <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
        Create An Account
      </a>
      </p>
  </div>
  <form className="mt-8 space-y-6" id="form" method="POST">
    <input type="hidden" name="remember" defaultValue="true" />
    <div className="rounded-md shadow-sm -space-y-px">
      <div>
        <label htmlFor="username" className="sr-only">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="username"
          autoComplete="username"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Username"
        />
      </div>
      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Password"
        />
      </div>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
          Remember me
        </label>
      </div>
    </div>

    <div>
      <button
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <LockClosedIcon className="h-5 w-5 text-500 group-hover:text-400" aria-hidden="true" />
        </span>
        Sign In
      </button>
    </div>
  </form>
  <div class="mssg bg-danger">
<span id="check"></span>
</div>
<div id="LangTable"><a href="/dashboard" id="aa"></a>
</div>
</div>
</div>
)
}