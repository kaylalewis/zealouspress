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

var display = 'none';

function change(){
  display = 'block';
}

change();

ui.createComponent('collection', {
  id: 407683345,
  options:{
    product: {
      buttonDestination: 'modal',
      contents: {

      },
      text: {
        button: 'BUY ME',

      },
      styles: {
        product:{
          'display':display,
          'min-width':'350px'
        },
        price: {
          'color': 'navy'
        },
         title: {
          'font-weight':'normal'
        },
        button: Object.assign({}, buttonStyles, {
          'width':'90%'
        })
        }
    },
    toggle:{
      styles:{
        toggle:buttonStyles
      }
    },
    cart:{
      styles:{
        button: buttonStyles
      }
    }
  }
});
