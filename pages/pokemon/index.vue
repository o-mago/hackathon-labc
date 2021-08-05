<template>
  <div class="flex flex-col justify-center">
    <v-card class="mt-8" v-for="(pokemon, index) in pokemonNames" :key="pokemon">
      <v-img
        height="50"
        contain
        :src="`/pokemon/${index+1}.svg`"
      ></v-img>
      <v-card-title class="sm:text-indigo-500 lg:text-red-500 justify-center"> {{ pokemon }} </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemonNames: []
    }
  },
  async fetch() {
    this.pokemonNames = this.getAllPokemonNames()
  },
  methods: {
    getAllPokemonNames () {
      return this.$services.getAllPokemon()
    }
  }
}
</script>