var client = ShopifyBuy.buildClient({
  apiKey: '643caf3f190864a023d11fbc67cb6125',
  domain: 'layla-kewis.myshopify.com',
  appId: '6'
});

var ui = ShopifyBuy.UI.init(client);
var buttonStyles = {'background-color' : 'navy',
          ':hover':{
            'background-color':'white'
  }};
