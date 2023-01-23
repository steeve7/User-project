<template>
  
  <div class="w-full m-auto my-10">
    <h1 class="px-16 py-3 uppercase text-[#6E6893]">Table Heading</h1>
    <div id="nav" class="py-3 px-14 flex justify-beween">
    <router-link to="/" class="px-3 text-[#25213B]">All</router-link>
    <router-link to="/paid" class="px-3 text-[#25213B]">Paid</router-link>
    <router-link to="/unpaid" class="px-3 text-[#25213B]">Unpaid</router-link>
    <router-link to="/overdue" class="px-3 text-[#25213B]">Overdue</router-link>
    <div class="right-16 absolute">
    <p class="text-[#6E6893]">Total payable amount:<b class="text-[#6D5BD0]">$900.00</b>USD</p>
  </div>
  </div>
  <div class="border-1 w-[90%] mx-16 mb-3 bg-black h-1"></div>
 <router-view/> 
  </div>
</template>

<script>

export default {
    name: "AllPage",
}
</script>

