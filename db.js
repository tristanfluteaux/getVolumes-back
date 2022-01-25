// const { MongoClient } = require('mongodb');

// async function main() {
    

//     const client = new MongoClient(uri);

//     try {
//         await client.connect();

//         /* Find one by name */
//         // await findOneListingByName(client, "NG-3");

//         /* Find by type */
//         // await findListingGuitarsWithType(client);

//         await updateListingByName(client, "63 Strat ALPBo3CS Relic MBDW", { color: "orange"})

//         /* CREATE ONE */
//         // await createListing(client, {
//         //     name : "X",
//         //     type : "electric guitar",
//         //     brend: "Cort",
//         // })
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);

// async function updateListingByName(client, nameOfListing, updatedListing) {
//     const result = await client.db("getVolumes").collection("guitars").updateOne({ name: nameOfListing }, { $set: updatedListing }, { upsert: true });
//     console.log(`${result.matchedCount} document(s) matched the query criteria.`);

//     if (result.upsertedCount > 0) {
//         console.log(`One document was inserted with the id ${result.upsertedId._id}`);
//     } else {
//         console.log(`${result.modifiedCount} document(s) was/were updated.`);
//     }
// }

// /* Get by type */
// async function findListingGuitarsWithType( client, {} = {}) {
//     const cursor = client.db("getVolumes").collection("guitars").find({
//         type : "electric guitar"
//     }
//     )
//     // .sort({ last_review: -1 })
//     const results = await cursor.toArray();
//     console.log(results)
// }

// /* Get by name */
// async function findOneListingByName(client, nameOfListing){
//     const result = await client.db("getVolumes").collection("guitars")
//     .findOne({name : nameOfListing})

//     if (result) {
//         console.log(`Found a linsting in the collection with the name '${nameOfListing}'`)
//         console.log(result)
//     } else {
//         console.log(`No listing found with the name '${nameOfListing}'`)
//     }
// }

// async function createListing(client, newListing) {
//     const result = await client.db("getVolumes").collection("guitars")
//     .insertOne(newListing);

//     console.log(`New listing created with the following id: ${result.insertedId}`)
// }

// /*List of Databases */
// async function listDatabases(client) {
//     const databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => {
//         console.log(`- ${db.name}`);
//     })
// }