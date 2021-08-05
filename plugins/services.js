import allServices from "../services"

export default (ctx, inject) => {
  inject('services', allServices())
}