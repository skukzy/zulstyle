<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Products</h1>
        <div class="row">
          <div v-if="loading" class="col-md-12">
            <img src="../assets/loading3.gif" width="500px">
          </div>
          <div v-for="produk in products" :key="produk.id" class="col-md-4">
            <div class="card mb-5">
              <div class="card-header">
                <img :src="produk.foto" width="100%" class="img-thumb">
              </div>
              <div class="card-body">
                <h4>{{ produk.nama }}</h4>
                <h4>Rp{{ produk.harga }}</h4>
                <a :href="produk.link_eksternal" target="_blank" class="btn btn-success btn-lg btn-block">Pesan via WA</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: '',
      loading: true,
    }
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      let {data, error} = await this.$supabase
        .from('tb_produk')
        .select()
      if(data) {
        this.products = data
        this.loading = false
      }
      if(error) console.error(error)
    }
  }
}
</script>
