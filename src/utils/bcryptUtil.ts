import bcrypt from "bcrypt";

export function hashSync(value: string, saltRounds: number) {
	return bcrypt.hashSync(value, saltRounds)
};

export function compareSync(encryptValue: string, cryptValue: string) {
	return bcrypt.compareSync(encryptValue, cryptValue)
};