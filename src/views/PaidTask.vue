<template>
        <div class="mx-16 bg-white shadow-md rounded-md">
      <SearchAll @input="onSearch"/>
      <div class="thead">
      <table>
          <thead class="bg-gray-200">
          <tr>
            <input type="checkbox" class="flex mt-4 absolute left-20"/>
            <font-awesome-icon icon="fa-solid fa-chevron-circle-down" class="text-[#8B83BA] absolute left-28 mt-4" />
            <th
            v-for="(column, index) in columns"
            v-bind:key="index"
            class="w-full py-3 text-[#6E6893]"
            >
              {{column}}    
          </th>
          <!-- <span class="front-bold">:</span> -->
          </tr>
        </thead>
        <tbody>
          <tr 
          v-for="(row, index) in rows"
            v-bind:key="index">
          <input type="checkbox" class="flex mt-4 absolute left-20"/>
          <font-awesome-icon icon="fa-solid fa-chevron-circle-down" class="text-[#8B83BA] absolute left-28 mt-4" />
            <td
            v-for="(rowItem, itemindex) in row"
            v-bind:key="itemindex"
            class="px-20 border-b-2"
            >{{rowItem}}
          </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </template>

<script>
import SearchAll from '../components/SearchAll.vue';

const performSearch = (rows, term) => {
  const results = rows.filter(
    row => row.join("").includes(term)
  )

  return results;
}

export default {
  name: "PaidTask",
  components: { SearchAll },
  data () {
    return{
        Rawrows:[
            [
                "Chinonso Emeka chinonso@gmail.com", "Active", "Paid", "$200USD", "View More",
            ],
            [
                "Gabriel somto gabriel@gmail.com", "Active", "Paid", "$250USD", "View More",
            ],
            [
                "Daniel luiz daniel@gmail.com", "Inactive", "Paid", "$200USD", "View More",
            ],
            [
                "luiz sancho luiz@gmail.com", "Inactive", "Paid", "$750USD", "View More", 
            ],
            [
                "chri pavel chris@gmail.com", "Active", "Paid", "$370USD", "View More",
            ],
            [
                "chinoye sandra sandra@gmail.com", "Inactive", "Paid", "$150USD", "View More",
            ],
        ],
        rows:[
        [
                "Chinonso Emeka chinonso@gmail.com", "Active", "Paid", "$200USD", "View More", ":"
            ],
            [
                "Gabriel somto gabriel@gmail.com", "Active", "Paid", "$250USD", "View More",
            ],
            [
                "Daniel luiz daniel@gmail.com", "Inactive", "Paid", "$200USD", "View More",
            ],
            [
                "luiz sancho luiz@gmail.com", "Inactive", "Paid", "$750USD", "View More", 
            ],
            [
                "chri pavel chris@gmail.com", "Active", "Paid", "$370USD", "View More",
            ],
            [
                "chinoye sandra sandra@gmail.com", "Inactive", "Paid", "$150USD", "View More",
            ],
        ],
        columns:[
            'name',
            'User Status',
            'Payment Status',
            'Amounts',
            '',
            ''
            
            
        ]
    }
  },
  methods:{
    onSearch (e) {
      const term = e.target.value;

      this.rows =  performSearch(this.Rawrows, term);
    }
  },
  mounted () {
    this.rows = this.Rawrows
  }
};

</script>

<style scoped>
.thead{
    padding-top: 50px;
}

</style>