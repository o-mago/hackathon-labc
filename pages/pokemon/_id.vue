<template>
  <div class="flex flex-col justify-center">
    <v-card>
      <v-img
        height="50"
        contain
        :src="`/pokemon/${pokemonId}.svg`"
      ></v-img>
      <v-card-title class="sm:text-indigo-500 lg:text-red-500 justify-center"> {{ pokemonName }} </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemonName: ""
    }
  },
  async fetch() {
    this.pokemonName = this.getName()
  },
  methods: {
    getName () {
      return this.$services.getPokemon(this.pokemonId)
    }
  },
  computed: {
    pokemonId () {
      return this.$route.params.id
    }
  }
}
</script>