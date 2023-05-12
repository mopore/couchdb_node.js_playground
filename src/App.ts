import nano, { ServerScope, Document } from "nano";
import { Person } from "./Person.js";

const dbURL = 'http://admin:secret_password@localhost:5984';
const dbName = 'people';
const couch: ServerScope = nano(dbURL);


async function ensureDatabaseExists(dbName: string): Promise<void> {
	try {
		const existingDbs = await couch.db.list();

		if (!existingDbs.includes(dbName)) {
			await couch.db.create(dbName);
			console.log(`Database '${dbName}' created.`);
		} else {
			console.log(`Database '${dbName}' already exists.`);
		}
	} catch (error) {
		const errMessage = `Error ensuring database '${dbName}' exists:`;
		console.error(errMessage, error);
		console.trace();
		throw new Error(errMessage);
	}
}

async function createPerson(name: string, dob: string): Promise<Person> {
	const person = new Person(name, dob);
	const response = await couch.db.use(dbName).insert(person);
	person.processAPIResponse(response);
	return person;
}


await ensureDatabaseExists("people");
console.log("Database ensured");
await createPerson("John Doe", "1980-01-01");
console.log("Person created");

