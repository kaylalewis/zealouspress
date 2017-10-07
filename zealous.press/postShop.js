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

var productId = document.getElementById("postId").innerHTML;


ui.createComponent('product', {
  id: productId,
  node: document.getElementById('postButton'),
  options:{
      product: {
        text:{
          button:'ADD TO CART'
        },
        styles: {
            product:{
              'margin-top':'-20px',
              'padding':'0',
              'width':'100%'
            },
            img:{
              'display':'none'
            },
            price:{
              'display':'none'
            },
            title:{
              'display':'none'
            },
            button:{
              'background-color':'#82bbc0',
              'width':'100%',
              'font-weight':'bold',
              ':hover':{'background-color':'#501700'}

            }
          }
      },
      toggle:{
        styles:{
          toggle:{
            'background-color':'#501700',
            ':hover':{'background-color':'#82bbc0'}
          }
        }
      },
      cart:{
        text:{
          title: 'My Cart'
        },
        styles:{
          button: {
            'font-size':'14px',
            'text-transform': 'uppercase',
            'font-family':'Arial',
            'font-weight':'bold',
            'background-color':'#82bbc0',
            ':hover':{
              'background-color':'#501700'
            }
          },
          title:{'font-size':'18px',
            'color':'#501700',
            'font-family':'Arial',
            'font-weight':'bold'

          }
        }
      }
    }
  });
