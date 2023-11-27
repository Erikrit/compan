import crypto from 'crypto';
const iv = crypto.randomBytes(16);


export function encrypt(text){
		const cipher = crypto.createCipheriv('aes-256-ctr', process.env.SECRET, iv);
		const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

		return {
				iv: iv.toString('hex'),
				content: encrypted.toString('hex')
		};
}


export function decrypt(iv, content){
		const decipher = crypto.createDecipheriv(
			'aes-256-ctr',
			process.env.SECRET,
			Buffer.from(iv, 'hex')
		);

		const decrpyted = Buffer.concat([
			decipher.update(Buffer.from(content, 'hex')),
			decipher.final()]
		);

		return decrpyted.toString();
}
