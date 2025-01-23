<script setup lang="ts">

</script>
<template>
  <!-- <button className="rounded px-5 py-2.5 overflow-hidden group bg-cyan-500 relative hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400 transition-all ease-out duration-300">
    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40"></span>
    <span className="relative"><slot/></span>
  </button> -->
  <button className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-[5px]">
    <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
    <span className="relative w-full px-3 py-2 transition-all ease-out bg-white rounded-[3px] group-hover:bg-opacity-0 duration-400">
      <span className="relative group-hover:text-white text-[#ff5478]">
        <slot/>
      </span>
    </span>
  </button>
</template>
