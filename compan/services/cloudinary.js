const cloudinary = require('cloudinary').v2;


class Cloudinary {
	async uploadStream(file, options){
		const { createReadStream } = await file;
		const stream = createReadStream();

		return new Promise(
			(resolve, reject) => {
				stream.pipe(cloudinary.uploader.upload_stream(options, (error, result) => {
					if (error){
						reject(error);
					}

					resolve(result);
				}));
			}
		);
	}

	async upload(path, options){
		return new Promise(
			(resolve, reject) => {
				cloudinary.uploader.upload(path, options, (error, result) => {
					if (error){
						reject(error);
					}

					resolve(result);
				});
			}
		);
	}

	delete(public_id){
		return new Promise((resolve, reject) => {
			cloudinary.uploader.destroy(public_id.split('.')[0], (error, result) => {
				if (error){
					reject(error);
				}

				resolve(result);
			});
		});
	}
};


export default new Cloudinary();
