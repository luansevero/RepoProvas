import bcrypt from "bcrypt";

export function hashSync(value : string , saltRounds : number){
		return bcrypt.hashSync(value, saltRounds)
};

export function compareSync(cryptValue : string, encryptValue : string ){
		return bcrypt.compareSync(cryptValue, encryptValue)
};