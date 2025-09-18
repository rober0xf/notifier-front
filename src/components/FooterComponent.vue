<script setup lang="ts"></script>

<template>
  <footer class="bg-[#333] px-4 py-6 md:px-16 lg:px-28">
    <!-- about me-->
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div class="footer-item">
        <h2 class="mb-3 text-lg font-medium text-gray-400">About me</h2>
        <p class="text-gray-300">Backend developer who likes<br />building in Go and Rust.</p>
      </div>

      <!-- links -->
      <div class="text-center">
        <h2 class="mb-3 text-lg font-medium text-gray-400">Links</h2>
        <ul>
          <li>
            <a class="text-gray-300 hover:underline" href="/" target="_blank" rel="noopener noreferrer"> Home </a>
          </li>
          <li>
            <a class="text-gray-300 hover:underline" href="/about" target="_blank" rel="noopener noreferrer"> About </a>
          </li>
          <li>
            <a class="text-gray-300 hover:underline" href="https://github.com/rober0xf/notifier" target="_blank" rel="noopener noreferrer">
              Development
            </a>
          </li>
          <li>
            <a class="text-gray-300 hover:underline" href="https://github.com/rober0xf/notifier/releases" target="_blank" rel="noopener noreferrer">
              Releases
            </a>
          </li>
        </ul>
      </div>

      <!-- socials -->
      <div class="text-center">
        <h2 class="mb-3 text-xl font-medium text-gray-400">Socials</h2>
        <ul class="mt-6 flex justify-center gap-6">
          <a href="https://github.com/rober0xf" target="_blank" rel="noopener noreferrer">
            <i class="pi pi-github text-gray-400 transition-colors duration-300 hover:text-yellow-400" style="font-size: 1.5rem"></i>
          </a>
          <a href="https://linkedin.com/rober0xf" target="_blank" rel="noopener noreferrer">
            <i class="pi pi-linkedin text-gray-400 transition-colors duration-300 hover:text-yellow-400" style="font-size: 1.5rem"></i>
          </a>
          <a href="https://twitter.com/rober0xf" target="_blank" rel="noopener noreferrer">
            <i class="pi pi-twitter text-gray-400 transition-colors duration-300 hover:text-yellow-400" style="font-size: 1.5rem"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i class="pi pi-bitcoin text-gray-400 transition-colors duration-300 hover:text-yellow-400" style="font-size: 1.5rem"></i>
          </a>
        </ul>
      </div>
    </div>
    <div class="mt-6 border-t p-4 pt-6 text-center font-bold text-gray-500 select-none">
      <p>© 2025 rober0xf. feel free to use this code.</p>
    </div>
  </footer>
</template>
