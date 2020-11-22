<template>
  <header>
    <nav class="bg-gray-500 px-4">
      <ul class="flex justify-end text-green-400">
        <li class="flex">
          <router-link
            exact-active-class="bg-green-700"
            class="bg-gray-700 py-8 px-10 hover:bg-green-700"
            to="/"
          >
            Home
          </router-link>
        </li>
        <li class="flex">
          <router-link
            exact-active-class="bg-green-700"
            class="bg-gray-700 py-8 px-10 hover:bg-green-700"
            to="/music"
          >
            Music
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
