import { getFirestore, doc, getDoc, getDocs, collection, query, where, addDoc, updateDoc } from 'firebase/firestore'


export const getProductsApi = async () => {
	return new Promise((resolve, reject) => {
		const db = getFirestore();
		const productsColl = collection(db, "items");
		getDocs(productsColl).then((snapshot) => {
			if (snapshot.size !== 0) {
				const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
				resolve(products);
			}
			reject("Vacio")
		})
	})
}

export const getProductsByCategoryApi = async (category) => {
	return new Promise((resolve, reject) => {
		const db = getFirestore();
		const q = query(collection(db,"items"), where("category", "==", category))		
		getDocs(q).then((snapshot) => {
			if (snapshot.size !== 0) {
				const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
				resolve(products);
			}
			reject("Vacio")
		})
	})
}

export const productBdDetailApi = async (id) => {
	return new Promise((resolve, reject) => {
		const db = getFirestore();
		const product = doc(db, "items", id);		
		getDoc(product).then((snapshot) => {
			if (snapshot.exists()) {								
				const singleProduct = snapshot.data();
				resolve(singleProduct);
			}
			reject("Vacio")
		})
	})
}

export const sendProductsOrder = async (order) =>{
	return new Promise((resolve, reject) => {		
		const db = getFirestore();
		const orderCollection = collection(db,"OrderCollection");

		addDoc(orderCollection, order).then((()=>{alert("La compra se realizo con exito")}))
		
		resolve();
			
	})
};

export const updateProductStock = async(cart)=>{
	return new Promise((resolve, reject) => {	
		
		for (let index = 0; index < cart.length; index++) {
			let newStock = cart[index].stock - cart[index].quantity;
			const db = getFirestore();	
			const product = doc(db,"items", cart[index].code)
			updateDoc(product,{stock:newStock})
		}
		
		resolve();
			
	})
}