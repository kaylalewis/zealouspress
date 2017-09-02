---
layout: post
title: Oops, Burned Another Church!
description: Sticker
category: Sticker
author: Sad Girl
date: May 2017
image: ../img/church.jpg
excerpt: Dammit, Grandma. Not again!
price: $5.00
dateP: 2017
product: 9c94ad89c58
---
<!-- <div id='product-component-{{ post.product }}'></div> -->
<script type="text/javascript">
/*<![CDATA[*/

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'layla-kewis.myshopify.com',
      apiKey: 'bfc293a4d07f270f2db34e9e9b6b8046',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [8547552657],
        node: document.getElementById('product-component-9c94ad89c58'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "variantId": "all",
    "width": "240px",
    "contents": {
      "img": false,
      "imgWithCarousel": false,
      "title": false,
      "variantTitle": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "text-align": "left",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#fa5d5d",
        ":hover": {
          "background-color": "#e15454"
        },
        ":focus": {
          "background-color": "#e15454"
        }
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#fa5d5d",
        ":hover": {
          "background-color": "#e15454"
        },
        ":focus": {
          "background-color": "#e15454"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#fa5d5d",
        ":hover": {
          "background-color": "#e15454"
        },
        ":focus": {
          "background-color": "#e15454"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#fa5d5d",
        ":hover": {
          "background-color": "#e15454"
        },
        ":focus": {
          "background-color": "#e15454"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
      });
    });
  }
})();
/*]]>*/
</script>
