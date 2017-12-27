let Loader = {}
Loader.install = function(Vue, options) {
  let LoaderTpl = Vue.extend({
    template: `<div id="loader" class="loader">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>`
  })
  let tpl = new LoaderTpl().$mount().$el
  Vue.prototype.$showLoader = (tips) => {
    if (!document.getElementById('loader')) document.body.appendChild(tpl)
  }
  Vue.prototype.$closeLoader = (tips) => {
    tpl.classList.add('fadeOut')
    if (document.getElementById('loader')) document.body.removeChild(tpl)
  }
}

module.exports = Loader
