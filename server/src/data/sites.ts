import { Site } from "../models/site";

export const sites: Site[] = [
  {
    name: "Disco",
    url: `https://www.disco.com.ar/Bebidas/Cervezas?initialMap=c,c&initialQuery=bebidas/cervezas&map=category-1,category-2,brand&query=/bebidas/cervezas/{beer}&searchState`,
    selector: ".vtex-product-summary-2-x-productBrand",
    containerSelector: ".vtex-product-summary-2-x-container",
    priceSelector: ".discoargentina-store-theme-1dCOMij_MzTzZOCohX1K7w",
  },
  {
    name: "ChangoMas",
    url: `https://www.masonline.com.ar/cervezas?initialMap=c&initialQuery=cervezas&map=category-1,brand&query=/cervezas/{beer}&searchState`,
    selector: ".vtex-product-summary-2-x-productBrand",
    containerSelector: ".vtex-product-summary-2-x-container",
    priceSelector: ".valtech-gdn-dynamic-product-0-x-dynamicProductPrice",
  },
  {
    name: "Super Mami",
    url: `https://www.dinoonline.com.ar/super/categoria?_dyncharset=utf-8&Dy=1&Nty=1&minAutoSuggestInputLength=3&autoSuggestServiceUrl=%2Fassembler%3FassemblerContentCollection%3D%2Fcontent%2FShared%2FAuto-Suggest+Panels%26format%3Djson&searchUrl=%2Fsuper&containerClass=search_rubricator&defaultImage=%2Fimages%2Fno_image_auto_suggest.png&rightNowEnabled=false&Ntt={beer}`,
    selector: ".description",
    containerSelector: ".product",
    priceSelector: ".precio-unidad span",
  },
  {
    name: "Carrefour",
    url: `https://www.carrefour.com.ar/Bebidas/Cervezas?initialMap=c,c&initialQuery=bebidas/cervezas&map=category-1,category-2,brand&query=/bebidas/cervezas/{beer}&searchState`,
    selector: ".vtex-product-summary-2-x-productBrand",
    containerSelector: ".vtex-product-summary-2-x-container",
    priceSelector: ".valtech-carrefourar-product-price-0-x-sellingPriceValue",
  },
];
