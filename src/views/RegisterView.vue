<template>
  <body>
    <div class="min-h-screen py-40" style="background-image: linear-gradient(115deg, #000000, #0f3d0f)">
      <div class="container mx-auto">
        <div class="mx-auto flex w-10/12 flex-col overflow-hidden rounded-xl shadow-lg lg:w-8/12 lg:flex-row" style="background-color: #111111">
          <div
            class="flex w-full flex-col items-center bg-cover bg-center bg-no-repeat p-12 lg:w-1/2"
            style="background-image: url('/src/images/registration.jpg')"
          >
            <h1 class="mb-3 text-3xl text-gray-400">Welcome</h1>
            <div>
              <p class="mt-4 font-medium text-gray-400">Register if you want to keep an eye on your upcoming payments.</p>
            </div>
          </div>
          <div class="w-full px-12 py-16 lg:w-1/2">
            <h2 class="-mt-4 mb-3 text-center text-3xl text-gray-400">Register</h2>
            <p class="mb-4 font-medium text-gray-400">Please fill out the form below to register.</p>
            <form action="/#" method="POST">
              <div class="gap-5">
                <input
                  placeholder="Username"
                  type="text"
                  id="username"
                  name="username"
                  class="border border-gray-400 px-2 py-1 font-medium text-white"
                  required
                />
              </div>
              <div class="mt-5">
                <input
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  class="border border-gray-400 px-2 py-1 font-medium text-white"
                  required
                />
              </div>
              <div class="mt-5">
                <input
                  placeholder="Password"
                  type="password"
                  id="password"
                  name="password"
                  class="border border-gray-400 px-2 py-1 font-medium text-white"
                  required
                />
              </div>
              <div class="mt-5">
                <input
                  placeholder="Confirm Password"
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  class="border border-gray-400 px-2 py-1 font-medium text-white"
                  required
                />
              </div>
              <div class="mt-5 flex items-center">
                <input type="checkbox" class="border border-gray-400" required />
                <span class="ml-2 font-medium text-white">
                  I accept the <a href="/terms" class="font-bold text-green-600">Terms of Use</a> and
                  <a href="/conditions" class="font-bold text-green-600">Privacy Policy</a>
                </span>
              </div>
              <div class="mt-5">
                <button type="submit" class="w-full cursor-pointer bg-green-800 py-3 text-center text-lg font-medium text-gray-200">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');

body {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  line-height: 1.3;
  font-weight: 300;
}
</style>
