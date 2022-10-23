const response = [
	{
		"productCode": "MT001",
		"category": "Hombre",
		"detail" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.",
		"title": "Camisa MultiTack",
		"image": "https://technext.github.io/famms/images/p2.png",
		"price": 400,
		"stock": 4
	},
	{
		"productCode": "MT002",
		"detail" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.",
		"category": "Hombre",
		"title": "Camisa Azul",
		"image": "https://technext.github.io/famms/images/p9.png",
		"price": 200,
		"stock": 0
	},
	{
		"productCode": "MD001",
		"detail" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.",
		"category": "Mujer",
		"title": "Vestido Ulala",
		"image": "https://technext.github.io/famms/images/p5.png",
		"price": 1000,
		"stock": 3
	}
    ,
	{
		"productCode": "MD002",
		"category": "Mujer",
		"title": "Vestido Fiesta",
		"image": "https://technext.github.io/famms/images/p12.png",
		"price": 1000,
		"stock": 6
	},
	{
		"productCode": "MC001",
		"category": "Hombre",
		"detail" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.",
		"title": "Campera Cuero",
		"image": "http://cdn.shopify.com/s/files/1/0034/5459/9217/products/179ffa2a29cca39cf81f37b354fef903_1024x1024.jpg?v=1571720320",
		"price": 2000,
		"stock": 1
	},
	{
		"productCode": "MC002",
		"detail" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.",
		"category": "Hombre",
		"title": "Campera Cuero v2",
		"image": "https://ae01.alicdn.com/kf/H99eb69840fca416586d165f878365d71r.jpg",
		"price": 2300,
		"stock": 3
	},
	{
		"productCode": "MD003",
		"detail" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.",
		"category": "Mujer",
		"title": "Vestido Rockabilly Clasico",
		"image": "https://www.estarguapas.com/pics/2021/04/07/grace-karin-mujer-vestido-elegante-anos-50-vestido-de-mujeres-rockabilly-clasico-l-cl010698-5-5923.jpg",
		"price": 800,
		"stock": 2
	}
    ,
	{
		"productCode": "MD002",
		"category": "Mujer",
		"title": "Vestido Fiesta Elegant",
		"image": "https://m.media-amazon.com/images/I/41yFRj1ZlJL._MCnd_AC_UL320_.jpg",
		"price": 1000,
		"stock": 0
	}
];

export const productsApi = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(
            ()=>{
                resolve(response);
            }, 2000
        )
    })
}

export const productDetailApi = (code)=>{
    return new Promise((resolve,reject)=>{
		let result = response.filter((p=>p.productCode.toLowerCase() === code.toLowerCase()));		
        setTimeout(
            ()=>{
                resolve(result);
            }, 2000
        )
    })
}
