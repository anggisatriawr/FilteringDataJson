let data = [
	{
	  "id": 1,
	  "name": "Nasi Goreng",
	  "type": "Main Course",
	  "address": "Jakarta",
	  "price": 25000
	},
	{
	  "id": 2,
	  "name": "Sate Ayam",
	  "type": "Main Course",
	  "address": "Bandung",
	  "price": 30000
	},
	{
	  "id": 3,
	  "name": "Mie Ayam",
	  "type": "Main Course",
	  "address": "Surabaya",
	  "price": 20000
	},
	{
	  "id": 4,
	  "name": "Es Teh Manis",
	  "type": "Beverage",
	  "address": "Jakarta",
	  "price": 5000
	},
	{
	  "id": 5,
	  "name": "Bakso",
	  "type": "Main Course",
	  "address": "Semarang",
	  "price": 15000
	},
	{
	  "id": 6,
	  "name": "Soto Ayam",
	  "type": "Main Course",
	  "address": "Yogyakarta",
	  "price": 22000
	},
	{
	  "id": 7,
	  "name": "Jus Alpukat",
	  "type": "Beverage",
	  "address": "Bandung",
	  "price": 12000
	},
	{
	  "id": 8,
	  "name": "Rendang",
	  "type": "Main Course",
	  "address": "Padang",
	  "price": 35000
	},
  ];
  

//TODO 1 : dapatkan semua data
	const filterByAddress = (address, data) => {
		return data.filter((food) => food.address === address);
  };
//TODO 2 : dapatkan data dengan nama tertentu misal Rendang
	const filterByName = (name, data) => {
		return data.filter((food) => food.name === name);
  };
//TODO 3 : dapatkan data dengan alamat Semarang
	const filteredDataByAddress = filterByAddress("Semarang", data);
		console.log("Filtered Data by Address (Semarang):", filteredDataByAddress);
//TODO 4 : dapatkan data makanan yang memiliki harga 15000
	const filteredDataByPrice = filterByPrice(15000, data);
		console.log("Filtered Data by Price (15000):", filteredDataByPrice); 
