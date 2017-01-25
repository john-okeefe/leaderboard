class PromiseFetch {
	getData(endpoint){
		var promise = new Promise ((resolve, reject) => {
			fetch(endpoint)
			.then((data) => {
				resolve(data);
			});
		});
		return promise;
	}
}

export default PromiseFetch;
