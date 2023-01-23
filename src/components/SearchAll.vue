<template>
  <div class="h-4">
    <form>

      <div class="relative">
        <label for="" class="relative block">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3 pr-8">
            <font-awesome-icon icon="fa-solid fa-filter" class="text-[#8B83BA]" />
          </span>
          <button
          class="flex-shrink-0 z-10 inline-flex items-center 
          px-7 py-3 text-sm font-medium text-center  m-2
           bg-gray-200 shadow-sm border rounded hover:bg-gray-200 text-[#25213B]"
          type="button"
        > Filter
        </button>
        </label>
        
      </div>
      <div class="absolute left-60 top-40 mt-1">
        <label for="" class="relative block">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3 pr-8">
            <font-awesome-icon icon="fa-solid fa-search" class="text-[#8B83BA]" />
          </span>
          <input
          type="search"
          class="placeholder:italic placeholder:text-[#6E6893] block bg-gray-200
          w-[90vh] border-slate-300 rounded-md py-3 pl-12 pr-3 shadow-sm"
          placeholder="Search Users by name, Email or Date"
          required
          
        />
        </label>
        
      </div>
      <button
        type="submit"
        class="text-white absolute right-20 top-40 mt-3 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600"
      >
        Pay Dues
      </button>
    </form>
  </div>
</template>

<script>
</script>
