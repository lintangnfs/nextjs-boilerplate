import mysql from "serverless-mysql";

const db = mysql({

	config: {

		host: process.env.MYSQL_HOST,
		port: Number(process.env.MYSQL_PORT),
		database: process.env.MYSQL_DATABASE,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD

	}

});

export default async function excuteQuery({query} : {query: string}) {
	
	try {

		const results = await db.query(query);
		
		await db.end();

		return results;

	} catch (error) {

		return { error };

	}

}