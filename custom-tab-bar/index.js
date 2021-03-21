Component({
  data: {
  active: null,
  list:[
    { 
      "url":"/pages/home/home",
      "icon":"home-o",
      "text":"首页",
    },
    {
      "url":"/pages/data/data",
      "icon":"records",
      "text":"数据",
    },
    {
      "url":"/pages/permana/permana",
      "icon":"contact",
      "text":"我的",
    },
  ]
  },
  methods: {
    onChange(e) {
       console.log(e,'e')
       this.setData({ active: e.detail });
       wx.switchTab({
         url: this.data.list[e.detail].url
       });
    },
    init() {
        const page = getCurrentPages().pop();
        this.setData({
       　  active: this.data.list.findIndex(item => item.url === `/${page.route}`)
        });
       }
    }
});